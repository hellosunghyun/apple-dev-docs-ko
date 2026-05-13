# AGENTS.md

## Project Objective

Build the full Apple Dev Docs KO project described in `.docs/apple-dev-docs-ko-project-plan.md` and tracked in `.docs/apple-dev-docs-ko-production-checklist.md`.

This is not an MVP task. Agents must implement the complete automation and site surface: upstream sync, manifesting, Markdown parsing, sentence segmentation, translation queueing, Gemini translation execution, second-pass translation review, validation, human override preservation, rendering, source maps, search, status pages, GitHub Actions, Pages deployment, and browser-tested documentation UI.

## Hard Product Decisions

- Do not stop at a proposal when a concrete implementation step is available.
- Make unresolved product/engineering decisions directly when local context is enough.
- Preserve the project's unofficial learning-purpose positioning.
- Do not use Apple logos, official Apple favicons, or wording that implies Apple affiliation, sponsorship, endorsement, or official status.
- Do not collect user data.

## Database Ban

Do not use a database.

For this repository, that means:

- Do not add SQLite, Postgres, MySQL, Supabase, Prisma, Drizzle, Turso, Redis, DuckDB, IndexedDB persistence, or any other database engine/service.
- Do not add migrations.
- Do not require a running DB process for development, tests, translation, rendering, search, or deployment.
- Store all durable project state as deterministic files in the repository or generated workspace artifacts.
- Implement translation memory as file-backed JSON/YAML only. Prefer directory names such as `translation-memory/` and `state/` instead of `translation-db/`.
- If older planning docs say `translation DB`, interpret that as "file-backed translation memory", not as permission to introduce a database.

## Commit Rules

Every implementation stage must be committed.

Commit message format is mandatory:

```text
type: 한국어 설명
```

Examples:

```text
feat: 저장소 에이전트 규칙 추가
fix: 번역 큐 중복 생성 오류 수정
docs: 에이전트 커밋 규칙 정리
test: 문장 분리 회귀 테스트 추가
ci: 페이지 배포 워크플로 추가
```

Rules:

- Choose the commit type that matches the primary change.
- Use `feat:` only for a new project capability or user-facing site/automation surface.
- Use `fix:` for bug fixes, validation corrections, and broken workflow repairs.
- Use `docs:` for documentation, planning, README, checklist, and AGENTS-only changes.
- Use `test:` for test code, fixtures, and verification-only changes.
- Use `refactor:` for behavior-preserving code restructuring.
- Use `perf:` for performance improvements.
- Use `ci:` for GitHub Actions, Pages deployment automation, and runner configuration.
- Use `build:` for dependency, package, and build-system configuration changes.
- Use `chore:` for repository maintenance that does not change product behavior.
- The summary after the type must be Korean.
- Stage only intended files.
- Never stage `.DS_Store`, secrets, runner tokens, `auth.json`, Gemini keys, temporary logs, browser screenshots, local build output, or dependency folders.
- Do not rewrite or revert user changes unless the user explicitly asks.

## Browser Testing Rule

Before the web UI exists, use command-line validation.

Once a local browser-rendered site is available or a change touches rendered UI, every subsequent UI stage must be tested in a browser.

Required browser checks:

- Page loads at the expected local URL.
- The page is not blank.
- No framework error overlay is visible.
- Relevant console errors are reviewed.
- Desktop viewport is checked.
- One mobile-sized viewport is checked when the surface is responsive.
- The target interaction is exercised, such as source-view mode switching, search, sidebar navigation, or edit-link generation.

Prefer the Codex Browser plugin when available. If it is unavailable or blocked, use Playwright and record the fallback reason.

## Security Rules

- `GEMINI_API_KEY` is private automation only.
- `GEMINI_API_KEY` must never be committed, printed, uploaded as an artifact, or cached.
- Gemini API jobs must use GitHub-hosted runners with `GEMINI_API_KEY`; pull request validation must not receive secrets.
- Pull request validation must run without secrets.
- Public Pages output must not contain secrets or source cache internals.

## Implementation Priorities

1. Repository rules and file-backed architecture.
2. Deterministic config, schemas, and scripts.
3. Parser, segmenter, hashing, and queue correctness.
4. Gemini translation execution, second-pass review, validation, and human override preservation.
5. Rendered Korean Markdown, source maps, search, and status data.
6. Complete Astro documentation UI.
7. GitHub Actions automation and deployment.
8. Browser verification for all rendered UI stages.

## Verification Expectations

Use the strongest verification available for the changed surface:

- TypeScript typecheck for scripts and site code.
- Unit tests for parser, segmenter, queue, overrides, render, and search.
- Build checks for Astro.
- Browser checks for rendered UI.
- Source-map/search/status consistency checks for generated content.

Do not mark checklist items complete without a matching implementation and verification result.
