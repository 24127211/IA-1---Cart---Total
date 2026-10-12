import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
const item = (price, qty = 1) => ({ name: 'item', price, qty })

test('an empty cart returns 0, with no VAT and no shipping', () => {
  assert.equal(cartTotal([], options), 0)
})

test('the total is a number, not a string', () => {
  assert.equal(typeof cartTotal([item(100000)], options), 'number')
})

test('shipping is free when the subtotal equals freeShipFrom exactly', () => {
  const noVat = { ...options, vatRate: 0 }
  assert.equal(cartTotal([item(500000)], noVat), 500000)
})

test('shipping is charged when the subtotal is just below freeShipFrom', () => {
  const noVat = { ...options, vatRate: 0 }
  assert.equal(cartTotal([item(499999)], noVat), 529999)
})

test('shipping is free when the subtotal is above freeShipFrom', () => {
  const noVat = { ...options, vatRate: 0 }
  assert.equal(cartTotal([item(500001)], noVat), 500001)
})

test('free shipping still applies VAT to the subtotal', () => {
  assert.equal(cartTotal([item(300000, 2)], { ...options, vatRate: 0.1 }), 660000)
})

test('the total is rounded down to a whole dong', () => {
  // subtotal 1001 + VAT 100.1 + shipping 0 = 1101.1
  const o = { vatRate: 0.1, freeShipFrom: 0, shipFee: 30000 }
  assert.equal(cartTotal([item(1001)], o), 1101)
})

test('the total is rounded up to a whole dong', () => {
  // subtotal 1006 + VAT 100.6 + shipping 0 = 1106.6
  const o = { vatRate: 0.1, freeShipFrom: 0, shipFee: 30000 }
  assert.equal(cartTotal([item(1006)], o), 1107)
})

test('several items with a different vatRate', () => {
  // subtotal 3 * 100000 + 2 * 50000 = 400000, VAT 40000, shipping 30000
  const items = [item(100000, 3), item(50000, 2)]
  assert.equal(cartTotal(items, { ...options, vatRate: 0.1 }), 470000)
})

test('a negative price throws RangeError', () => {
  assert.throws(() => cartTotal([item(-1)], options), RangeError)
})

test('a qty of 0 throws RangeError', () => {
  assert.throws(() => cartTotal([item(100000, 0)], options), RangeError)
})

test('a negative qty throws RangeError', () => {
  assert.throws(() => cartTotal([item(100000, -1)], options), RangeError)
})

test('a fractional qty throws RangeError', () => {
  assert.throws(() => cartTotal([item(100000, 1.5)], options), RangeError)
})

test('an invalid item throws even when the other items are valid', () => {
  const items = [item(100000, 1), item(100000, 0)]
  assert.throws(() => cartTotal(items, options), RangeError)
})
