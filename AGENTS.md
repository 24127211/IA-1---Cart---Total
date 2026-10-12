# Project Rules — IA#1 cartTotal

## Stack

- Plain JavaScript with Node.js.
- Use the existing ES module conventions.
- Use the built-in `node:test` test runner.
- Keep the application code free of external runtime dependencies.
- ESLint is a development dependency. Do not add other dependencies without explicit approval.

## Commands

- `npm test`: run the test suite.
- `npm run lint`: run ESLint using `eslint.config.js`.
- `npm run`: inspect the available npm scripts before using other commands.
- `npm ci`: install dependencies from `package-lock.json`.

Only use linting or formatting commands that are actually configured in the project.

## Workflow

1. Read `BRIEF.md` before making changes.
2. Inspect the existing implementation and tests.
3. Implement only the requested behavior.
4. Review the diff before validating changes.
5. Run `npm run lint` and `npm test`, and report the actual results.
6. Explain any remaining failures honestly.

## Never

- Never add dependencies without explicit approval.
- Never change the specification to make a test pass.
- Never return a string when the contract requires a number.
- Never remove or weaken a test merely to make the suite pass.
- Never modify unrelated files or project configuration without approval.
- Never disable or weaken ESLint rules merely to make lint pass.
- Never claim a test, lint check, or CI run passed unless it actually ran successfully.

## Code Quality

- Keep the implementation simple and readable.
- Validate the required error cases.
- Write tests against observable behavior, not implementation details.
- Preserve existing project conventions.