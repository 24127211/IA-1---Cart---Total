# IA#1 Brief — cartTotal

## Goal

Implement `cartTotal(items, options)` in `src/cart.js` using plain JavaScript.

The function calculates the cart subtotal, VAT, shipping fee, and final total.

## Files Allowed to Change

- `src/cart.js`: implement the function.
- `test/cart.test.js`: add or improve tests for the specification.
- `BRIEF.md`: document the assignment contract and project constraints.
- `AGENTS.md`: document project-specific rules and workflow.
- `AI-LOG.md`: record AI-assisted work.
- `package.json` and `package-lock.json`: configure scripts and development tools.
- `eslint.config.js`: configure ESLint.
- `.github/workflows/ci.yml`: configure automated checks on push.

Do not modify unrelated files. Ask before adding other files or changing unrelated project configuration.

## Contract

### Inputs

- `items`: an array of items containing `name`, `price`, and `qty`.
- `options`: an object containing `vatRate`, `freeShipFrom`, and `shipFee`.

### Calculation

1. Calculate `subtotal` as the sum of `price * qty` for all items.
2. Calculate VAT as `subtotal * vatRate`.
3. Set shipping to `0` when `subtotal >= freeShipFrom`; otherwise use `shipFee`.
4. Calculate the total as `subtotal + VAT + shipping`.
5. Round the final total to a whole number of Vietnamese đồng.
6. Return a JavaScript number, not a string.

### Special Cases

- An empty cart returns `0`, with no VAT and no shipping fee.
- A negative `price` must throw `RangeError`.
- A `qty` that is not a positive integer must throw `RangeError`.
- A quantity of `0`, a negative quantity, or a fractional quantity is invalid.

## Constraints

- Use plain JavaScript and preserve the existing ES module conventions.
- Keep `cartTotal` free of external runtime dependencies.
- ESLint is permitted as a development dependency for code-quality checks.
- Use the built-in `node:test` and `node:assert/strict` modules for tests.
- Preserve the existing project structure.
- Do not invent additional business rules or change the specification.

## Acceptance Criteria

- The example from the slides returns `467400` as a number.
- The empty-cart case returns `0`.
- The free-shipping threshold is handled correctly.
- Invalid prices and quantities throw `RangeError`.
- Tests cover the normal case and required edge cases.
- `npm test` passes.
- `npm run lint` passes.
- GitHub Actions runs lint and tests on push.
- No unrelated files or runtime dependencies are added.