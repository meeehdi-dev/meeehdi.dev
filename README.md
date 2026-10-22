# meeehdi.dev

Personal site built with Nuxt and Nuxt UI. Use Node 24 LTS and the pnpm version in `package.json` (Corepack reads `packageManager`).

## Development and quality checks

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev

pnpm format:check
pnpm lint
pnpm check:duplicates
pnpm check:unused
pnpm typecheck
pnpm build
```

`pnpm fmt` formats files locally; CI uses the non-writing `format:check`. The required GitHub contexts remain `lint`, `fmt`, and `build`; build waits for typecheck. Duplicate and unused checks run inside `lint`.

### Duplicate and unused-code policy

jscpd scans only `app`, `server`, and `shared` at 50 tokens / 5 lines, excluding generated output and dependencies. The initial reviewed scan found **zero clones**; `.jscpd-baseline.json` is intentionally empty. Any new clone fails, even against an empty baseline. Do not regenerate it to make CI pass. For an intentional exception, inspect the full clone report, explain it in code review, then explicitly run:

```sh
pnpm exec jscpd --reporters console-full
pnpm exec jscpd --baseline .jscpd-baseline.json --update-baseline
```

Review the fingerprint diff with the source change. Normal checks never update the baseline.

Knip's built-in Nuxt plugin discovers pages, components, modules, shared imports, and server utilities from Nuxt config and generated type declarations. Run installation/`pnpm exec nuxt prepare` before Knip. No application directories or finding categories are ignored. The only dependency exceptions in `knip.json` are:

- `@iconify-json/fa6-brands`, `@iconify-json/fa6-solid`, `@iconify-json/lucide`: loaded by Nuxt Icon from `fa6-brands:*`, `fa6-solid:*`, and `lucide:*` names in Vue templates and app configuration. Nuxt's build confirms all three collections and bundles 43 client icons.
- `vue-tsc`: invoked by `nuxt typecheck`, not directly imported by application code.
- `pnpm`: exact tracking dependency for Dependabot, matching `packageManager`. Its reviewed lifecycle script links the native CLI inside its own package; only that package was added to the existing build-script allowlist. No blanket script approval is enabled. Package-provided agent skills are not needed and have not been approved.

## Coolify source builds

GitHub Actions performs quality checks only: no container publishing, release-please, registry-tag updates, or Coolify API calls. Coolify checks out and builds the selected commit. Existing releases, tags, package version, and changelog history remain available; deployment no longer waits for a release tag.

Configure the application in Coolify:

| Setting             | Value                                                    |
| ------------------- | -------------------------------------------------------- |
| Source              | GitHub App with access to `meeehdi-dev/meeehdi.dev`      |
| Branch              | `main`                                                   |
| Build pack          | Dockerfile                                               |
| Base directory      | `/`                                                      |
| Dockerfile location | `/Dockerfile`                                            |
| Application port    | `3000`                                                   |
| Domain / TLS        | Preserve the existing production domain and TLS settings |

The existing multi-stage Dockerfile uses the maintained `node:24-alpine` image, frozen pnpm install, and standalone Nuxt `.output` server. Corepack bootstraps pnpm from the manifest; the tracked local CLI uses the same version. No separate version pin or production dependency installation is needed.

Set these **runtime** environment variables, as listed in `.env.example`:

- `NUXT_DISCORD_WEBHOOK_URL`: Discord webhook URL (secret).
- `NUXT_TURNSTILE_SECRET_KEY`: Turnstile verification secret (secret).
- `NUXT_PUBLIC_TURNSTILE_SITE_KEY`: public site key for the deployed hostname.

Do not put secrets in build arguments or the image. `.env*`, dependencies, and generated output are excluded from the Docker context. The server listens on port 3000; route traffic through Coolify's proxy/TLS.

### Rollout and rollback (operator actions)

1. Record the current app configuration, known-good image tag, domain/TLS, and environment settings. Keep the old production app/image available.
2. Connect source through the GitHub App. Configure a replacement/source-build application as supported by your Coolify version, initially with **manual deployment** to avoid overlapping triggers. Check disk and memory capacity for on-host builds.
3. After review, merge and wait for CI to pass. Manually build the merged commit in Coolify. Check `/`, `/resume`, `/projects`, `/contact`, icons/styles, form required/email validation, and runtime Turnstile configuration. Test a real challenge and delivery only with approved test credentials and a disposable destination.
4. Switch traffic only after verification. Optionally enable deploy-on-push to protected `main`. A Coolify push webhook does **not** wait for GitHub CI completion: PR checks guard normal merges, but bypass pushes or failing post-merge checks may still deploy. Keep manual deployments if this is insufficient.
5. After successful cutover, remove obsolete GitHub `COOLIFY_API_TOKEN`, `COOLIFY_API_URL`, `COOLIFY_APP_UUID`, unused Production-environment settings, and registry credentials only after checking other consumers. Keep old images until rollback is unnecessary. Superseded PRs (#64 image workflow, #50 TypeScript 7, #52 Node 25) require human disposition.
6. Roll back by restoring the known-good app/image, routing, and recorded configuration. No data migrations are introduced.
7. Request a new Dependabot update check after merge and inspect the npm run as described below.

## Dependency maintenance

Dependabot remains daily for npm, Docker, and GitHub Actions, with one-day cooldowns and minor/patch grouping; majors remain separate. The exact `pnpm` devDependency makes the CLI discoverable: keep it and `packageManager` synchronized, regenerate the lockfile with that version, then run the quality checks and Docker smoke test. Stay on Node 24 LTS, not the newer non-LTS major.

### Refresh inventory (registry checked 2026-10-22)

Previous entries are manifest versions/range floors, not the stale local node_modules versions. Targets are the current published stable releases unless noted.

| Package                     | Previous                            | Selected / disposition                                                                       |
| --------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| @nuxt/a11y                  | 1.0.0-alpha.1                       | 1.0.0-alpha.1; no stable release published, retain existing alpha feature                    |
| @nuxt/scripts               | 1.3.9                               | 1.3.12                                                                                       |
| @nuxt/ui                    | 4.11.1                              | 4.12.0                                                                                       |
| @nuxtjs/sitemap             | 8.5.0                               | 9.1.0; compatible with Nuxt 4.6 and Zod 4.6.7                                                |
| @nuxtjs/turnstile           | 1.1.3                               | 1.1.3 (latest)                                                                               |
| discord.js                  | 14.27.0                             | 14.27.0 (latest)                                                                             |
| nuxt                        | 4.5.2                               | 4.6.2                                                                                        |
| oxfmt                       | 0.67.0                              | 0.74.0                                                                                       |
| oxlint                      | 1.82.0                              | 1.89.0                                                                                       |
| prettier-plugin-tailwindcss | 0.8.1                               | Removed after approval: unused; oxfmt handles Tailwind sorting directly                      |
| tailwindcss                 | 4.3.3                               | 4.3.3 (latest)                                                                               |
| zod                         | 4.6.1                               | 4.6.7                                                                                        |
| @iconify-json/fa6-brands    | 1.2.6                               | 1.2.6 (latest)                                                                               |
| @iconify-json/fa6-solid     | 1.2.4                               | 1.2.4 (latest)                                                                               |
| @iconify-json/lucide        | 1.2.131                             | 1.2.147                                                                                      |
| typescript                  | 6.0.3                               | Retain 6.0.3; latest 7.0.2 fails with vue-tsc 3.3.13                                         |
| vue-tsc                     | 3.3.11                              | 3.3.13                                                                                       |
| pnpm                        | 11.7.0 (packageManager only)        | 12.15.0, also tracked as exact devDependency                                                 |
| jscpd                       | —                                   | 5.4.2                                                                                        |
| knip                        | —                                   | 6.42.1                                                                                       |
| h3                          | Previously undeclared direct import | 1.15.11 on Nitro's compatible 1.x line (latest is 2.0.8), explicitly declared after approval |

h3 stays on the latest 1.x release matching Nitro 2.13.5's `^1.15.11` dependency and its event types; adopting h3 2 separately would mix incompatible event APIs.

TypeScript 7.0.2 was installed and tested with vue-tsc 3.3.13. `pnpm typecheck` failed with `ERR_PACKAGE_PATH_NOT_EXPORTED` for TypeScript's `./lib/tsc`. TypeScript 6.0.3 is the newest working 6.x release; no errors or checks were suppressed. Re-test the pair before accepting a future TypeScript major update. Transitive packages were refreshed within their normal ranges, without overrides; peer checks pass.

### Local verification

The source-build image was tested on Linux ARM64 with Node 24.22.1, using no production secrets. All four routes returned HTTP 200, and the public Turnstile key supplied only at container startup appeared in runtime configuration. Headless Chromium verified route headings, icons/styles, client navigation, and empty/invalid-email form submission blocking with no contact POST or page errors. Third-party challenge requests were blocked: real Turnstile verification and Discord delivery remain operator checks. Existing explicit form error labels were not changed.

Negative fixtures confirmed that formatting violations fail without rewriting the file, Knip reports an unreferenced exported file, and jscpd rejects two new clones against the empty baseline without rewriting it. Fixtures were removed afterward. The source-build Dockerfile and `.dockerignore` needed no changes.

### Dependabot failure and recovery verification

The npm updater [run 39760242246](https://github.com/meeehdi-dev/meeehdi.dev/actions/runs/39760242246) failed all eight updates with `ERR_PNPM_CACHE_MISSING_AFTER_304` for `impound` metadata while resolving Nuxt. It then logged “No updated dependencies, closing existing Pull Request” / `update_no_longer_possible` and auto-closed [PR #70](https://github.com/meeehdi-dev/meeehdi.dev/pull/70). This was a hosted metadata-cache error, not evidence that dependencies were current or Dependabot was disabled.

Local pnpm installation and checks do **not** prove hosted recovery, and upgrading pnpm is not a demonstrated cure. After merge, request a fresh Dependabot check and inspect its next npm run. A successful run or a genuine update PR demonstrates recovery. If the same cache error recurs, retain the new run link and report the hosted/upstream blocker; do not disable updates or add speculative cache workarounds.
