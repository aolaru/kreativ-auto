# Contributing To Kreativ Auto

Thank you for improving Kreativ Auto. Small, verifiable contributions are preferred
over broad content expansion.

## Before opening a pull request

1. Open an issue for a substantial feature, data-model change, or new vehicle
   cluster so the scope can be discussed first.
2. Create a focused branch and avoid unrelated formatting or generated-file churn.
3. Run `npm install`, `npm run build`, `npm run repo:health`, and
   `npm run audit:commercial`.
4. Describe the user problem, the change, the evidence used, and the verification
   performed in the pull request.

## Automotive content standard

- Give every page a distinct user task. Do not create keyword variations of an
  existing guide.
- Cite manufacturer, regulator, or other primary sources for maintenance, recall,
  specification, fitment, and safety claims.
- State the model year, generation, powertrain, drivetrain, and market boundaries
  when they affect the answer.
- Separate source facts from editorial interpretation.
- Do not claim personal testing, ownership, inspection, or professional credentials
  without verifiable evidence.
- Do not add unsupported ratings, reliability scores, prices, repair costs, or
  product rankings.
- Keep new or incomplete material out of search until its review-readiness record is
  accepted.
- Disclose material use of automated or generative tools in the pull request. Such
  tools do not replace source verification or human review.

## Images

New imagery must have documented redistribution rights. Add the source, author,
license, license URL, local path, and modifications to `src/data/image-credits.ts`.
See `ASSET_LICENSES.md` before changing existing assets.

## Privacy and security

Never commit analytics exports containing visitor data, search phrases, vehicle
records, credentials, private keys, access tokens, or local `.env` files. Use public
placeholders in `.env.example`.

Report vulnerabilities according to `SECURITY.md`.

## Contribution licensing

By submitting a contribution, you agree that software contributions are licensed
under MIT and original editorial contributions are licensed under CC BY-SA 4.0. You
must have the right to submit every asset and third-party excerpt included in the
contribution.
