# AI-LOG.md — CSC13008 IA#1: cartTotal

> This log was reconstructed after some implementation work had already been completed. It is a retrospective account based on my available notes and conversation history, not a claim that I recorded every task in real time.

## 2026-10-12 — Implementing `cartTotal` and tests
Tool: Claude Web.
Asked for: Help implementing `cartTotal(items, options)` and creating tests based on the assignment specification in the starter repository.
Kept: The implementation structure for validating negative prices and invalid quantities, returning `0` for an empty cart, calculating subtotal/VAT/shipping, and rounding the final total; I also kept tests for the worked example and edge cases.
Changed: I copied the suggested implementation and tests into the local project files. I then ran the project's test command and continued reviewing the files against the assignment requirements.
Rejected: My available notes do not reliably identify a specific Claude-generated suggestion that I rejected, so I am not inventing one.
By hand: I transferred the code into the local project, ran the local commands, and checked the results. I cannot claim that I independently wrote the core implementation or the test cases from scratch.

## 2026-10-12 — Project brief, rules, lint and CI setup
Tool: ChatGPT.
Asked for: Help drafting the project brief and agent rules, configuring ESLint and npm scripts, adding a GitHub Actions workflow, and reviewing the submission documents.
Kept: The project-specific rules, the `npm test` and `npm run lint` gate, and a workflow intended to run installation, lint and tests on push.
Changed: I transferred the suggested text/configuration into the project and reviewed the resulting files. I am treating the GitHub Actions result as unverified until I check an actual run in the submitted repository.
Rejected: I have not recorded a reliable item-by-item list of rejected suggestions from the earlier work; I will not invent one retrospectively.
By hand: I copied and organized the files in the local project, ran commands, and used the observed results to decide what still needed checking. The implementation and most of the project-document drafts were AI-assisted.

## 2026-10-12 — Final review before submission
Tool: ChatGPT.
Asked for: Review the uploaded code, tests, rubric, and project documents for inconsistencies before submission.
Kept: The review identified that this file was still the course template and that the self-assessment incorrectly described it as a completed usage log.
Changed: Replaced the template-only content with this retrospective account and marked the retrospective nature of the log explicitly.
Rejected: Claims that CI had passed without evidence from a real GitHub Actions run.
By hand: I reviewed the updated documents and must still verify the final repository state, push the files, and check the actual CI result.