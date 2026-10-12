// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  for (const { price, qty } of items) {
    if (price < 0) {
      throw new RangeError(`price must not be negative, got ${price}`)
    }
    if (!Number.isInteger(qty) || qty <= 0) {
      throw new RangeError(`qty must be a positive integer, got ${qty}`)
    }
  }

  if (items.length === 0) {
    return 0
  }

  const { vatRate, freeShipFrom, shipFee } = options
  const subtotal = items.reduce((sum, { price, qty }) => sum + price * qty, 0)
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
