# Self-assessment — IA#1

Submitted by: 24127211 — Ho Phan Nhu Nguyet  
Repository: https://github.com/24127211/IA-1---Cart---Total  
Commit reviewed: `e5ea09e` — `Complete IA1 cartTotal assignment`

I claim: **86 / 100**

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 29 | `src/cart.js` implements subtotal, VAT, free shipping at `subtotal >= freeShipFrom`, whole-đồng rounding, empty-cart return, and `RangeError` for negative prices or quantities that are not positive integers. `test/cart.test.js`: `the example from the slides`, `an empty cart returns 0, with no VAT and no shipping`, `shipping is free when the subtotal equals freeShipFrom exactly`, and the invalid-price/quantity tests. The worked example expects `467400`. |
| Tests | 20 | 19 | `test/cart.test.js` contains 15 tests, including the original example, empty cart, below/equal/above shipping threshold, numeric return type, VAT, rounding up/down, multiple items, negative price, zero/negative/fractional quantity, and invalid items in a mixed list. Local result reported and checked: `npm test` — 15 passed, 0 failed. |
| The harness | 20 | 18 | `AGENTS.md` documents the stack, commands, workflow, and explicit “Never” rules. `package.json`, `package-lock.json`, `eslint.config.js`, and `.github/workflows/ci.yml` configure ESLint and a push-triggered CI workflow. Local checks reported: `npm ci`, `npm run lint`, and `npm test` succeeded. The submitted GitHub Actions check for commit `e5ea09e` was green. |
| The brief | 15 | 14 | `BRIEF.md` names the allowed files, defines the input contract/calculation, lists the required error cases, preserves the no-runtime-dependency constraint, and states acceptance criteria. |
| AI-LOG.md | 15 | 6 | `AI-LOG.md` identifies Claude Web and ChatGPT, describes what was retained and applied, states that the core code was mainly copied from AI output, and avoids inventing specific rejected suggestions. It explicitly discloses that it was reconstructed after implementation, which limits the score under the rubric. |
| **Total** | **100** | **86** | |

## What I did not manage

I did not keep `AI-LOG.md` up to date while working; I reconstructed it afterwards from the available prompts and conversation history. I mainly applied AI-generated implementation, tests, configuration, and documentation rather than writing the core implementation from scratch. I also cannot reliably list every individual AI suggestion I rejected.

## What I would do differently

I would update `AI-LOG.md` after each AI-assisted task, record specific changes and rejected suggestions as they happen, and practise explaining every part of the generated implementation and test suite before the oral review.
