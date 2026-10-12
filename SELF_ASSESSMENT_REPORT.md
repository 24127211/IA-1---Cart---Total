# Self-assessment — IA#1

Submitted by: 24127211 — Ho Phan Nhu Nguyet

I claim: 82 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js` — implements the worked example (`467400`), empty-cart return, shipping threshold, VAT, rounding, and required `RangeError` cases. `test/cart.test.js`: `the example from the slides`, `an empty cart returns 0, with no VAT and no shipping fee`, `shipping is free when the subtotal equals freeShipFrom exactly`, `a negative price throws RangeError`, and quantity-validation tests. |
| Tests | 20 | 19 | `test/cart.test.js` — 15 tests cover the worked example, empty cart, shipping threshold, number return type, VAT, rounding, negative price, and invalid quantities. The uploaded test file was run during review: 15 passed, 0 failed. |
| The harness | 20 | 14 | `AGENTS.md` — project-specific stack, commands, workflow, and “Never” rules. `package.json`, `eslint.config.js`, `package-lock.json`, `.github/workflows/ci.yml` — lint/test gate and push workflow are configured. Local test execution was confirmed during review. A fresh lint run and a successful GitHub Actions run have not been verified in the submitted repository during this final review. |
| The brief | 15 | 14 | `BRIEF.md` — names the files allowed to change, input contract, calculation, error cases, no runtime dependencies, and acceptance criteria. |
| AI-LOG.md | 15 | 5 | `AI-LOG.md` — records the tools, tasks, retained work, limits of what can be identified as rejected, and work done manually. It explicitly states that the log was reconstructed after implementation, which limits the claim under the rubric. |

## What I did not manage

I did not keep the AI log up to date while working, so I reconstructed it afterwards from the notes and conversation history. I have not yet confirmed a successful GitHub Actions run on the submission repository. During the final review, the uploaded test file passed all 15 tests, but I could not complete a fresh lint verification in the review environment; the earlier local lint result should not be confused with a new verification.

## What I would do differently

I would record each AI-assisted task as it happens, including specific suggestions I changed or rejected and the parts I wrote myself. I would also push the finished work earlier and verify the actual GitHub Actions run before assigning the final self-assessment score.
