export const WHITELISTED_PHONES = ['0391929360']

export function isWhitelistedPhone(phone: string): boolean {
  const clean = phone.replace(/\s/g, '')
  return WHITELISTED_PHONES.includes(clean)
}

export function isValidMoroccoPhone(phone: string): boolean {
  const clean = phone.replace(/\s/g, '')
  if (WHITELISTED_PHONES.includes(clean)) return true
  return /^0[567]\d{8}$/.test(clean)
}
