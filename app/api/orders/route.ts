import { NextRequest, NextResponse } from 'next/server'
import { isWhitelistedPhone } from '@/lib/utils/phone-validation'

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.lumarahealth.shop'
const MAXMIND_ACCOUNT_ID = process.env.MAXMIND_ACCOUNT_ID
const MAXMIND_LICENSE_KEY = process.env.MAXMIND_LICENSE_KEY
const MAXMIND_ENABLED = process.env.MAXMIND_ENABLED !== 'false'
const RISK_SCORE_THRESHOLD = Number(process.env.MAXMIND_RISK_THRESHOLD ?? '75')

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp.trim()
  return ''
}

function isPrivateIp(ip: string): boolean {
  if (!ip) return true
  if (ip === '::1' || ip === '127.0.0.1') return true
  if (ip.startsWith('10.') || ip.startsWith('192.168.')) return true
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(ip)) return true
  if (ip.startsWith('fc') || ip.startsWith('fd') || ip.startsWith('fe80')) return true
  return false
}

interface MaxMindInsights {
  country?: { iso_code?: string }
  traits?: {
    is_anonymous?: boolean
    is_anonymous_proxy?: boolean
    is_anonymous_vpn?: boolean
    is_hosting_provider?: boolean
    is_public_proxy?: boolean
    is_residential_proxy?: boolean
    is_tor_exit_node?: boolean
    user_type?: string
  }
}

async function checkIpWithMaxMind(ip: string): Promise<{
  allowed: boolean
  reason?: string
  country?: string
}> {
  if (!MAXMIND_ACCOUNT_ID || !MAXMIND_LICENSE_KEY) {
    return { allowed: false, reason: 'MaxMind credentials not configured' }
  }

  const auth = Buffer.from(`${MAXMIND_ACCOUNT_ID}:${MAXMIND_LICENSE_KEY}`).toString('base64')

  try {
    const res = await fetch(`https://geoip.maxmind.com/geoip/v2.1/insights/${ip}`, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      return { allowed: false, reason: `MaxMind API error ${res.status}` }
    }

    const data: MaxMindInsights = await res.json()
    const country = data.country?.iso_code
    const traits = data.traits ?? {}

    if (country !== 'MA') {
      return { allowed: false, reason: 'not_morocco', country }
    }

    if (
      traits.is_anonymous ||
      traits.is_anonymous_proxy ||
      traits.is_anonymous_vpn ||
      traits.is_public_proxy ||
      traits.is_residential_proxy ||
      traits.is_tor_exit_node ||
      traits.is_hosting_provider
    ) {
      return { allowed: false, reason: 'suspicious_ip', country }
    }

    return { allowed: true, country }
  } catch (err) {
    console.error('MaxMind check failed:', err)
    return { allowed: false, reason: 'maxmind_error' }
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const phone = typeof body.phone === 'string' ? body.phone.replace(/\s/g, '') : ''
  const clientIp = getClientIp(req)

  const whitelisted = isWhitelistedPhone(phone)

  if (!whitelisted && MAXMIND_ENABLED) {
    if (isPrivateIp(clientIp)) {
      return NextResponse.json(
        { error: 'unable_to_verify_location', message: 'ماقدرناش نتحققو من موقعك. جربي من شبكة أخرى.' },
        { status: 403 }
      )
    }

    const check = await checkIpWithMaxMind(clientIp)
    if (!check.allowed) {
      const message =
        check.reason === 'not_morocco'
          ? 'هذا المتجر متاح فقط للزبونات في المغرب.'
          : check.reason === 'suspicious_ip'
          ? 'كشفنا استخدام VPN أو proxy. الرجاء تعطيلها لإتمام الطلب.'
          : 'ماقدرناش نأكدو موقعك الجغرافي.'
      return NextResponse.json(
        { error: check.reason ?? 'blocked', message, country: check.country },
        { status: 403 }
      )
    }
  }

  const payload = { ...body, ip_address: clientIp }

  try {
    const upstream = await fetch(`${BACKEND_API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': clientIp,
      },
      body: JSON.stringify(payload),
    })

    const data = await upstream.json().catch(() => ({}))
    return NextResponse.json(data, { status: upstream.status })
  } catch (err) {
    console.error('Upstream order submission failed:', err)
    return NextResponse.json(
      { error: 'upstream_error', message: 'وقع مشكل تقني. عاودي المحاولة بعد شوية.' },
      { status: 502 }
    )
  }
}
