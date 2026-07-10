export function getCartTotal(uniqueProductCount: number): number {
  if (uniqueProductCount >= 3) return 349
  if (uniqueProductCount === 2) return 279
  return 199
}

export function getSavings(uniqueProductCount: number): number {
  const singleTotal = uniqueProductCount * 199
  return singleTotal - getCartTotal(uniqueProductCount)
}
