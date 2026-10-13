# patchverdict-off-by-one

A small intentionally buggy JavaScript repository used to test PatchVerdict's real repository verification flow.

## Run

```bash
npm install
npm test
```

## Bug description

Copy this into PatchVerdict:

```text
The range utility returns one extra value at the end of the generated sequence. It should include values from the start up to, but not including, the end boundary while preserving normal range behavior.
```
