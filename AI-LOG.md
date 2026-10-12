# AI-LOG.md — CSC13008 IA#1: cartTotal

> This log was reconstructed on 2026-10-12 from available prompts, notes, and conversation history after implementation work had already been completed. It is retrospective, not a claim that every task was recorded in real time. Where I cannot reliably identify a specific rejected suggestion, I say so rather than inventing one.

## 2026-10-10 — Reviewing the specification, implementing `cartTotal`, and adding tests
Tool: Claude Web (claude.ai web chat).
Asked for: First review the project instructions and report the required behavior, missing tests, files to change, and lint/CI status without editing; then help implement `cartTotal(items, options)` and add tests based on the assignment specification.
Kept: The specification-based approach for subtotal, VAT, shipping threshold, rounding, empty-cart behavior, and required `RangeError` cases. The resulting test suite preserves the worked-example test and covers the main edge cases.
Changed: I mainly copied and applied the AI-generated implementation and tests to the local repository rather than writing the core code from scratch. I ran the project tests and checked the results.
Rejected: I instructed the assistant not to invent validation rules, alter the specification, add unnecessary dependencies, or modify unrelated files. My available history does not reliably identify a particular generated code suggestion that I separately discarded.
By hand: I copied/applied the suggested code and tests, ran `npm test`, and reviewed the output. I cannot claim that I independently authored the implementation or test cases from scratch.

## 2026-10-11 — Reviewing the rubric and setting up the harness
Tool: Claude Web and ChatGPT.
Asked for: Help compare the project with the IA#1 rubric, plan the smallest reasonable harness changes, configure ESLint and GitHub Actions, update project rules, and prepare the submission documents.
Kept: The ESLint-only choice (without Prettier), the `npm run lint` and `npm test` checks, and a push-triggered workflow that installs dependencies and runs lint and tests.
Changed: I mainly copied/applied AI-generated configuration and documentation to the local repository. ChatGPT also helped edit Markdown documents and explain Git errors. The exact authorship of every individual configuration line cannot be reliably separated from the available history.
Rejected: I chose not to add Prettier. I also required the assistants not to claim tests or CI passed without evidence, not to invent instructor templates, and not to make unsupported claims in the self-assessment. I do not have a reliable item-by-item list of other suggestions I rejected.
By hand: I applied the suggested files, ran `npm ci`, `npm run lint`, and `npm test`, checked that the test suite passed all 15 tests, and pushed the project to GitHub. Most implementation and documentation content was AI-assisted.

## 2026-10-12 — Final review and submission documents
Tool: ChatGPT.
Asked for: Combine the existing AI log with the actual usage history and prepare a self-assessment that follows the rubric without inventing evidence.
Kept: The retrospective disclosure, the distinction between AI-generated work and my own verification steps, and evidence tied to the files, test results, and submitted commit.
Changed: I revised the previous draft to reflect that I mainly copied/applied AI output and ran checks, rather than claiming independent authorship of the core code.
Rejected: I did not retain claims that I wrote the core implementation and tests from scratch, and I did not list any specific rejected code suggestion that the available history could not substantiate.
By hand: I reviewed the final documents, checked the local commands' results, and confirmed that the submitted commit had a green GitHub Actions check. The log itself was reconstructed after the work, which is a limitation of this record.
