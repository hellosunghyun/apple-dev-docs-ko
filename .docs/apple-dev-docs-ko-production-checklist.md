# Apple Dev Docs KO 제작 체크리스트 + IA

> 기준 문서: `.docs/apple-dev-docs-ko-project-plan.md`
> 목적: 이후 에이전트가 체크박스를 갱신하며 실제 구현을 진행할 수 있는 제작용 작업 목록
> 작성일: 2026-05-11
> 기본 결정: private automation repo + public Pages repo, Astro 정적 사이트, Codex CLI OAuth, sentence-level translation memory, human override 우선

---

## 0. 에이전트 진행 규칙

이 문서는 기획서가 아니라 실행 로그 겸 체크리스트다. 구현 에이전트는 작업할 때마다 아래 규칙을 따른다.

- [ ] 작업 시작 전 현재 단계의 `목표`, `산출물`, `완료 기준`을 읽는다.
- [ ] 완료한 항목만 `[x]`로 바꾼다.
- [ ] 체크한 항목 아래에 가능한 경우 `증거:` 줄을 남긴다.
- [ ] 스크립트, workflow, schema, UI를 바꾼 경우 관련 검증 명령을 실행하고 결과를 적는다.
- [ ] 실패한 항목은 체크하지 않고 `막힘:` 줄에 원인과 다음 액션을 적는다.
- [ ] 사람 수정 영역인 `overrides/ko/**`는 자동 번역 결과로 덮어쓰지 않는다.
- [ ] `auth.json`, `CODEX_AUTH_JSON`, runner token, deploy token은 로그, artifact, commit에 남기지 않는다.
- [ ] public Pages 결과물에는 Apple 로고, Apple 공식 favicon, 공식으로 오해될 표현을 넣지 않는다.
- [ ] 원문 문장 노출은 기본 OFF이며, 법적/정책 리스크가 커지면 공식 문서 링크만 제공하는 fallback을 유지한다.

작업 증거 형식:

```md
- [x] manifest 생성 스크립트 구현
  - 증거: `pnpm tsx scripts/upstream/build-manifest.ts` 성공, `state/manifest.json` 생성
```

---

## 1. 전체 IA

### 1.1 시스템 IA

```text
Averyy/apple-dev-docs upstream
  -> upstream sync/cache
  -> manifest
  -> Markdown AST parser
  -> block splitter
  -> sentence segmenter
  -> segment hash store
  -> translation queue
  -> Codex worker pool
  -> validation/retry
  -> file-backed translation memory
  -> human override layer
  -> Korean Markdown renderer
  -> source map builder
  -> Astro content builder
  -> search/status index builder
  -> GitHub Pages deploy
```

핵심 불변 조건:

- [ ] 동일 `sourceHash`는 재번역하지 않는다.
- [ ] `locked: true` 또는 `human_edited` segment는 AI가 덮어쓰지 않는다.
- [ ] `lastProcessedSha`는 번역, 검증, 렌더링, 사이트 빌드가 모두 성공한 뒤에만 갱신한다.
- [ ] source cache와 file-backed translation memory는 private automation repo에 둔다.
- [ ] public Pages repo에는 정적 사이트 결과와 공개 가능한 source map만 둔다.

### 1.2 저장소 IA

권장 구조:

```text
apple-dev-docs-ko-automation/
  .github/
    workflows/
      00-auth-healthcheck.yml
      10-build-manifest.yml
      20-translate-poc.yml
      30-bootstrap-translate.yml
      40-track-upstream-diff.yml
      50-build-pages.yml
      60-deploy-pages-repo.yml
      90-maintenance.yml

  config/
    project.yaml
    source.yaml
    translation.yaml
    glossary.yaml
    style-guide.md
    safety-limits.yaml
    site.yaml

  prompts/
    translate-segments.md
    repair-json.md
    summarize-run.md

  schemas/
    manifest.schema.json
    parsed-document.schema.json
    segment.schema.json
    translation-input.schema.json
    translation-output.schema.json
    translation-memory.schema.json
    override.schema.json
    source-map.schema.json
    report.schema.json

  state/
    upstream.json
    manifest.json
    shard-plan.json
    translation-progress.json
    queue/
    runs/

  source-cache/
    apple-dev-docs/
      documentation/

  translation-memory/
    files/
    segments/
    index/

  overrides/
    ko/
      documentation/

  translations/
    ko/
      documentation/

  site/
    package.json
    astro.config.mjs
    src/
      content/
      components/
      layouts/
      pages/
      styles/
      lib/
    public/

  scripts/
    upstream/
    parser/
    segmenter/
    translate/
    render/
    site/
    ops/
    validate/

  reports/
    latest.md
    runs/

apple-dev-docs-ko-pages/
  index.html
  assets/
  docs/
  search/
  source-maps/
  status/
```

완료 기준:

- [ ] private repo와 public Pages repo의 책임이 문서화되어 있다.
- [ ] 생성물과 사람이 수정해야 하는 파일이 분리되어 있다.
- [ ] public repo에 secret이나 source cache가 들어가지 않는다.

### 1.3 사이트 IA

```text
/
  홈
  - 프로젝트 설명
  - 비공식 고지
  - 검색 진입
  - framework group 바로가기
  - 번역 진행 상태 요약

/docs/
  전체 문서 인덱스
  - framework list
  - 문서 수
  - 번역 진행률
  - 최근 업데이트

/docs/[...slug]/
  문서 상세
  - 상단 고지
  - breadcrumb
  - title
  - framework
  - 번역 상태
  - 공식 원문 링크
  - source view toggle
  - 문장별 원문 보기
  - 이 번역 수정하기 링크
  - 좌측 문서 트리
  - 우측 On this page

/search/
  검색
  - title/path/symbol 전역 검색
  - framework group filter
  - 번역 상태 filter

/status/
  번역 상태
  - 전체 진행률
  - framework별 진행률
  - 실패 segment
  - review needed
  - latest upstream SHA
  - latest processed SHA

/contribute/
  기여 방법
  - override YAML 수정 방법
  - PR 생성 방법
  - 문장 ID 찾는 방법
  - 번역 스타일 가이드

/about/
  프로젝트 소개
  - 학습 목적
  - 자동 유지보수 방식
  - 비공식 관계 설명

/disclaimer/
  고지
  - Apple과 무관함
  - AI 번역 오류 가능성
  - 공식 문서 우선
  - 데이터 수집 없음
```

완료 기준:

- [ ] 모든 주요 페이지에 상단 또는 본문 고지가 있다.
- [ ] 문서 상세 페이지에서 공식 원문 링크와 번역 수정 링크가 보인다.
- [ ] 모바일에서 좌측 탐색과 우측 목차가 충돌하지 않는다.
- [ ] 공식 Apple 사이트처럼 오해될 수 있는 로고, favicon, 문구가 없다.

### 1.4 데이터 IA

```text
upstream file
  sourcePath
  upstreamSha
  sourceFileHash
  officialUrl
  rawMarkdown

parsed document
  frontmatter
  headings
  blocks
  links
  codeBlocks

block
  blockId
  type
  headingAnchor
  rawMarkdown
  segments[]

segment
  id
  blockId
  type
  source
  normalizedSource
  sourceHash
  contextBefore
  contextAfter
  translatable
  preserveReason

translation memory
  segment id
  sourceHash
  ko
  status
  reviewed
  locked
  translatedAt
  translator

override
  segment id
  ko
  reason
  locked
  updatedBy
  updatedAt

rendered content
  Korean Markdown
  Astro content entry
  source map JSON
  search index entry
```

완료 기준:

- [ ] segment ID는 같은 문서 내에서 안정적으로 재생성된다.
- [ ] hash는 Markdown 장식보다 원문 의미 변화에 민감하게 반응한다.
- [ ] source map은 문서 상세 UI에서 segment ID로 즉시 조회 가능하다.
- [ ] override 적용 전/후 상태가 보고서에 남는다.

---

## 2. Phase 0: 프로젝트 기반 구축

목표: 구현을 시작할 수 있는 저장소, 규칙, 보안, 배포 기반을 만든다.

산출물:

- private automation repo
- public Pages repo
- 기본 `AGENTS.md`
- package manager와 TypeScript scaffold
- GitHub Actions skeleton
- Codex OAuth healthcheck

체크리스트:

- [ ] private automation repo를 생성한다.
  - 완료 기준: GitHub에서 private 상태 확인
- [ ] public Pages repo를 생성한다.
  - 완료 기준: Pages가 배포 가능한 repository로 존재
- [ ] repo 루트에 `AGENTS.md`를 만든다.
  - 포함: secret 취급, override 보존, Apple 로고 금지, 검증 명령, commit 규칙
- [ ] `.gitignore`를 만든다.
  - 포함: `.env`, `auth.json`, `.codex/`, `node_modules/`, `dist/`, `tmp/`, generated logs
- [ ] `package.json`, `pnpm-lock.yaml`, `tsconfig.json`을 만든다.
  - 기본 런타임: Node.js 22, TypeScript, tsx, pnpm
- [ ] 기본 디렉터리 구조를 생성한다.
  - 대상: `config`, `prompts`, `schemas`, `scripts`, `state`, `translation-memory`, `overrides`, `translations`, `site`, `reports`
- [ ] `config/project.yaml`을 작성한다.
  - 포함: 프로젝트명, 학습 목적, 비공식 상태, Apple 로고 금지, 데이터 수집 없음
- [ ] `config/source.yaml`을 작성한다.
  - 포함: upstream repo, branch, source root, include/exclude
- [ ] `config/translation.yaml`을 작성한다.
  - 포함: provider, language, batch, retry, concurrency, override 보존
- [ ] `config/glossary.yaml`을 작성한다.
  - 포함: 보존할 framework/API 용어, 번역할 일반 용어, 피해야 할 표현
- [ ] `config/site.yaml`을 작성한다.
  - 포함: Pages, source view mode, 고지 표시 위치, Apple 로고 false
- [ ] `config/safety-limits.yaml`을 작성한다.
  - 포함: mass change hard stop, validation fail threshold, Codex failure threshold
- [ ] GitHub Secrets를 등록한다.
  - `CODEX_AUTH_JSON`: private automation repo 전용
  - `PAGES_DEPLOY_TOKEN`: public Pages repo push 전용
- [ ] self-hosted runner를 연결한다.
  - label: `codex-oauth`
  - persistent `CODEX_HOME`
- [ ] `00-auth-healthcheck.yml`을 만든다.
  - 완료 기준: `codex exec --ephemeral "Return exactly OK."` 성공
- [ ] Pages hello world를 배포한다.
  - 완료 기준: public Pages URL 접속 가능

검증:

```bash
pnpm install --frozen-lockfile
pnpm typecheck
codex exec --ephemeral "Return exactly OK."
```

---

## 3. Phase 1: Upstream Sync와 Manifest

목표: `Averyy/apple-dev-docs`의 Markdown 파일을 안정적으로 가져오고 전체 처리 대상을 manifest로 만든다.

산출물:

- `source-cache/apple-dev-docs`
- `state/upstream.json`
- `state/manifest.json`
- `state/shard-plan.json`
- upstream sync report

체크리스트:

- [ ] `scripts/upstream/sync-upstream.ts`를 구현한다.
  - 입력: `config/source.yaml`
  - 출력: source cache, latest SHA
  - 완료 기준: sparse 또는 partial clone/fetch 성공
- [ ] `state/upstream.json` 형식을 정의한다.
  - 필드: `repo`, `branch`, `latestSha`, `lastSeenSha`, `lastProcessedSha`, `updatedAt`
- [ ] `scripts/upstream/build-manifest.ts`를 구현한다.
  - 대상: `documentation/**/*.md`
  - 제외: `.DS_Store`, non-markdown, generated artifacts
- [ ] manifest schema를 작성한다.
  - 파일: `schemas/manifest.schema.json`
- [ ] manifest에 파일별 metadata를 넣는다.
  - `sourcePath`, `sourceFileHash`, `bytes`, `chars`, `lineCount`, `framework`, `title`, `officialUrlCandidate`
- [ ] framework group 추론 규칙을 구현한다.
  - 예: `documentation/coremotion/**` -> `Core Motion`
- [ ] `scripts/upstream/build-shard-plan.ts`를 구현한다.
  - 기준: segment 추정 전에는 char 기반, segment 생성 후에는 segment/char 기반
- [ ] `state/shard-plan.json`을 생성한다.
  - 필드: `shardIndex`, `targetChars`, `files`, `estimatedSegments`
- [ ] manifest report를 만든다.
  - 파일: `reports/runs/<timestamp>-manifest.md`
- [ ] `10-build-manifest.yml` workflow를 만든다.
  - 완료 기준: 수동 실행으로 manifest 생성, commit 또는 artifact 저장

검증:

```bash
pnpm tsx scripts/upstream/sync-upstream.ts
pnpm tsx scripts/upstream/build-manifest.ts
pnpm tsx scripts/upstream/build-shard-plan.ts
pnpm tsx scripts/validate/validate-json.ts state/manifest.json schemas/manifest.schema.json
```

완료 기준:

- [ ] 전체 Markdown 파일 수가 report에 표시된다.
- [ ] framework별 파일 수가 report에 표시된다.
- [ ] 같은 upstream SHA에서 manifest를 다시 만들면 source hash가 동일하다.

---

## 4. Phase 2: Markdown Parser와 Segmenter

목표: Markdown을 구조 단위로 파싱하고, 번역 가능한 문장 segment와 보존 segment를 안정적으로 만든다.

산출물:

- parsed document JSON
- segment JSON
- segment hash
- parser fixtures
- parser unit tests

체크리스트:

- [ ] Markdown parser 라이브러리를 선택한다.
  - 권장: `unified`, `remark-parse`, `mdast-util-to-markdown`
- [ ] `scripts/parser/parse-markdown.ts`를 구현한다.
  - 입력: source Markdown path
  - 출력: frontmatter, heading tree, block list
- [ ] frontmatter 보존 규칙을 구현한다.
- [ ] heading anchor 생성 규칙을 구현한다.
  - 완료 기준: 같은 heading에서 같은 anchor 생성
- [ ] block ID 생성 규칙을 구현한다.
  - 형식: `<block-type>:<heading-anchor>:<local-sequence>`
- [ ] block type을 분류한다.
  - 대상: heading, paragraph, list, blockquote, table, code, html, horizontal_rule
- [ ] `scripts/segmenter/split-segments.ts`를 구현한다.
  - paragraph/list/blockquote: 문장 segment
  - heading: heading segment
  - table: cell 또는 sentence segment
  - code: preserve segment
- [ ] sentence split 규칙을 구현한다.
  - 영어 약어, API symbol, inline code, URL에서 잘못 쪼개지 않게 처리
- [ ] 번역 제외 규칙을 구현한다.
  - API symbol only, method signature, URL only, path only, code only, command only
- [ ] `scripts/segmenter/hash-segments.ts`를 구현한다.
  - normalized source 생성 후 SHA-256 hash
- [ ] context window를 만든다.
  - `contextBefore`, `contextAfter`, `documentTitle`, `framework`
- [ ] parser fixture를 만든다.
  - heading, paragraph, list, table, code block, inline code, link, image, blockquote
- [ ] parser/segmenter unit test를 작성한다.
- [ ] `schemas/parsed-document.schema.json`을 작성한다.
- [ ] `schemas/segment.schema.json`을 작성한다.

검증:

```bash
pnpm test parser
pnpm test segmenter
pnpm tsx scripts/parser/parse-markdown.ts --file source-cache/apple-dev-docs/documentation/coremotion/cmdevicemotion.md
pnpm tsx scripts/segmenter/split-segments.ts --file source-cache/apple-dev-docs/documentation/coremotion/cmdevicemotion.md
```

완료 기준:

- [ ] code block과 inline code가 번역 대상에서 제외되거나 보존 표시된다.
- [ ] API symbol이 단독 문장일 때 `preserved`로 분류된다.
- [ ] segment ID가 재실행해도 동일하다.
- [ ] sourceHash가 동일하면 번역 queue에 들어가지 않는다.

---

## 5. Phase 3: Translation Memory Store와 Queue

목표: 초기 번역과 diff 번역이 같은 파일 모델을 사용하도록 만든다.

산출물:

- `translation-memory/files/**.json`
- `translation-memory/segments/**.json`
- `translation-memory/index/**.json`
- `state/queue/**.json`
- queue builder

체크리스트:

- [ ] `translation-memory` 파일 naming 규칙을 정한다.
  - 예: `documentation_coremotion_cmdevicemotion.json`
- [ ] file state schema를 작성한다.
  - 필드: `sourcePath`, `targetPath`, `sourceUrl`, `upstreamSha`, `sourceFileHash`, `status`, `segments`
- [ ] segment state schema를 작성한다.
  - 필드: `id`, `blockId`, `type`, `sourceHash`, `source`, `ko`, `status`, `reviewed`, `locked`, `translatedAt`, `translator`
- [ ] segment status enum을 구현한다.
  - `preserved`, `machine_translated`, `human_reviewed`, `human_edited`, `locked`, `needs_review`, `failed`
- [ ] `scripts/translate/build-queue.ts`를 구현한다.
  - 입력: parsed segments, file-backed translation memory, overrides
  - 출력: translation queue
- [ ] queue skip 규칙을 구현한다.
  - `preserved` skip
  - same `sourceHash` skip
  - `locked` skip
  - human override skip 또는 `needs_review`
- [ ] batch builder를 구현한다.
  - 기준: `batchSegments`, `batchChars`
- [ ] shard queue builder를 구현한다.
  - 입력: `shard-plan.json`
  - 출력: `state/queue/shard-0001.json`
- [ ] progress tracker를 구현한다.
  - 파일: `state/translation-progress.json`
- [ ] queue report를 만든다.
  - 포함: total, skipped, preserved, locked, toTranslate, failed

검증:

```bash
pnpm tsx scripts/translate/build-queue.ts --shard 0
pnpm tsx scripts/validate/validate-json.ts state/queue/shard-0000.json schemas/translation-input.schema.json
```

완료 기준:

- [ ] 같은 입력을 다시 실행하면 queue가 비거나 동일하게 나온다.
- [ ] override가 있는 segment는 AI 번역 대상에서 제외된다.
- [ ] 변경 segment만 queue에 들어가는 테스트가 있다.

---

## 6. Phase 4: Codex Translation Worker

목표: Codex CLI OAuth를 사용해 segment batch를 한국어로 번역하고, JSON schema로 검증 가능한 결과만 파일 저장소에 반영한다.

산출물:

- translation prompt
- Codex worker
- retry/split logic
- validation report
- translated memory entries

체크리스트:

- [ ] `prompts/translate-segments.md`를 작성한다.
  - 규칙: JSON only, segment id 보존, Markdown 보존, API symbol 보존, 설명 추가 금지
- [ ] `schemas/translation-input.schema.json`을 작성한다.
- [ ] `schemas/translation-output.schema.json`을 작성한다.
- [ ] `scripts/translate/codex-worker.ts`를 구현한다.
  - 입력: batch JSON
  - 출력: raw Codex output, parsed JSON
- [ ] `codex exec --ephemeral` 호출 래퍼를 만든다.
  - secret 출력 방지
  - timeout 처리
  - stdout/stderr 분리 저장
- [ ] output schema validation을 구현한다.
- [ ] 보존 규칙 validation을 구현한다.
  - segment count 동일
  - segment id 동일
  - inline code 동일
  - URL 동일
  - Markdown link target 동일
  - API symbol 훼손 없음
- [ ] retry 정책을 구현한다.
  - 1차: 같은 batch retry
  - 2차: batch half split
  - 3차: segment 단독 retry
  - 4차: failed 저장 후 report
- [ ] `scripts/translate/run-workers.ts`를 구현한다.
  - `LLM_CONCURRENCY` 지원
  - worker pool queue
  - progress update
- [ ] `scripts/translate/apply-results.ts`를 구현한다.
  - file-backed translation memory 반영
  - `translatedAt`, `translator`, `status` 기록
- [ ] `scripts/translate/repair-json.ts`는 별도 fallback으로 구현한다.
  - 주의: 원문 재번역이 아니라 JSON 구조 복구만 수행
- [ ] 10개 문서 POC workflow를 만든다.
  - 파일: `.github/workflows/20-translate-poc.yml`

검증:

```bash
pnpm tsx scripts/translate/build-queue.ts --limit-files 10
LLM_CONCURRENCY=1 pnpm tsx scripts/translate/run-workers.ts --queue state/queue/poc.json
pnpm tsx scripts/translate/apply-results.ts --results tmp/results/poc
pnpm tsx scripts/ops/report-run.ts
```

완료 기준:

- [ ] 10개 문서 번역 성공률 97% 이상
- [ ] retry 후 실패율 1% 이하
- [ ] inline code 훼손 0건
- [ ] URL 훼손 0건
- [ ] API symbol 훼손 0건

---

## 7. Phase 5: Human Override와 PR 수정 흐름

목표: 사람이 PR로 번역을 수정할 수 있고, 자동 번역이 사람 수정본을 덮어쓰지 않게 한다.

산출물:

- override YAML schema
- override validator
- override applier
- PR template
- edit link builder

체크리스트:

- [ ] override 파일 경로 규칙을 구현한다.
  - 예: `overrides/ko/documentation/coremotion/cmdevicemotion.yaml`
- [ ] `schemas/override.schema.json` 또는 YAML schema를 작성한다.
- [ ] override 예시 파일을 만든다.
  - 파일: `overrides/ko/_examples/example.yaml`
- [ ] `scripts/translate/apply-overrides.ts`를 구현한다.
  - 입력: file-backed translation memory, overrides
  - 출력: final segment state
- [ ] override 충돌 규칙을 구현한다.
  - sourceHash 동일 + override 존재: override 적용
  - sourceHash 변경 + override 존재: `needs_review`, AI suggestion 별도 저장
  - `locked: true`: AI 덮어쓰기 금지
- [ ] override validator를 구현한다.
  - 존재하지 않는 segment ID 감지
  - 빈 번역 감지
  - API symbol 훼손 감지
- [ ] GitHub PR template을 추가한다.
  - 파일: `.github/pull_request_template.md`
- [ ] site edit URL builder를 구현한다.
  - 문서 경로와 segment ID를 GitHub edit URL에 반영
- [ ] PR 검증 workflow를 만든다.
  - Secret 없이 GitHub-hosted runner에서 schema/site build만 실행
- [ ] contributor guide를 작성한다.
  - 사이트 route: `/contribute/`

검증:

```bash
pnpm tsx scripts/validate/validate-overrides.ts
pnpm tsx scripts/translate/apply-overrides.ts
pnpm test overrides
```

완료 기준:

- [ ] 사람이 수정한 segment가 사이트에 반영된다.
- [ ] 다음 diff 번역에서도 해당 segment가 덮어써지지 않는다.
- [ ] sourceHash 변경 시 `needs_review`로 표시된다.
- [ ] PR에서 schema 오류가 명확히 표시된다.

---

## 8. Phase 6: Korean Markdown Renderer와 Source Map

목표: file-backed translation memory와 override layer를 조합해 한국어 Markdown, Astro content, source map을 만든다.

산출물:

- `translations/ko/documentation/**.md`
- `site/src/content/docs/**.md`
- `site/public/source-maps/**.json`
- render report

체크리스트:

- [ ] `scripts/render/render-markdown.ts`를 구현한다.
  - 입력: source Markdown AST, file-backed translation memory, overrides
  - 출력: Korean Markdown
- [ ] frontmatter 생성 규칙을 구현한다.
  - `source_path`, `upstream_sha`, `translation_status`, `translated_at`, `official: false`
- [ ] 문서 상단 고지를 자동 삽입한다.
- [ ] code block, table, list, link를 원래 구조대로 복원한다.
- [ ] segment wrapper용 metadata를 Astro content에 보존한다.
- [ ] `scripts/render/build-source-maps.ts`를 구현한다.
  - segment ID, source, ko, sourceHash, status, official URL
- [ ] public source map 노출 수준을 config로 제어한다.
  - `ko_only_public`: 원문 미포함
  - `sentence_source_public`: 문장 원문 포함
  - 기본값은 정책 검토 전 `ko_only_public` 또는 제한 공개
- [ ] `scripts/site/build-site-content.ts`를 구현한다.
  - translations -> Astro content collection
- [ ] render diff report를 만든다.
  - changed files, rendered files, failed files
- [ ] 렌더링 snapshot test를 작성한다.

검증:

```bash
pnpm tsx scripts/render/render-markdown.ts --limit-files 10
pnpm tsx scripts/render/build-source-maps.ts --limit-files 10
pnpm tsx scripts/site/build-site-content.ts --limit-files 10
pnpm test render
```

완료 기준:

- [ ] rendered Markdown이 Markdown parser로 다시 파싱된다.
- [ ] source map segment 수가 rendered segment 수와 일치한다.
- [ ] 문서 상단 고지가 모든 문서에 들어간다.
- [ ] 원문 공개 설정을 끄면 public output에 source text가 포함되지 않는다.

---

## 9. Phase 7: Astro 사이트 구현

목표: GitHub Pages에서 동작하는 문서 탐색 사이트를 만든다.

산출물:

- Astro site
- docs layout
- navigation
- source view UI
- status/search/contribute/about/disclaimer pages

체크리스트:

- [ ] `site`에 Astro 프로젝트를 구성한다.
  - `astro.config.mjs`
  - content collections
  - GitHub Pages `base` 설정
- [ ] 전역 스타일을 만든다.
  - Apple 공식 visual identity를 과도하게 복제하지 않는 독립적 스타일
  - 높은 가독성, 얇은 border, 절제된 blue/indigo 강조
- [ ] `TopNoticeBar` 컴포넌트를 만든다.
  - 모든 페이지에서 비공식 학습용 고지 표시
- [ ] `SiteHeader` 컴포넌트를 만든다.
  - 사이트명, 검색, GitHub, 기여 링크
- [ ] `DocsSidebar` 컴포넌트를 만든다.
  - framework list, document tree, 현재 문서 highlight
- [ ] `OnThisPage` 컴포넌트를 만든다.
  - heading anchors 기반
- [ ] `DocsLayout`을 만든다.
  - 좌측 sidebar, main, 우측 목차
- [ ] `TranslationStatusBadge`를 만든다.
  - machine translated, human edited, needs review, failed
- [ ] `SourceViewToggle`을 만든다.
  - `한국어만`, `문장 원문`, `좌우 병렬`
- [ ] `SegmentText` 컴포넌트를 만든다.
  - segment ID metadata
  - popover/inline original 지원
  - 모바일 tap 지원
- [ ] `EditTranslationLink`를 만든다.
  - GitHub override edit URL로 이동
- [ ] `/` 홈을 구현한다.
  - 고지, 검색, framework 바로가기, 진행률 요약
- [ ] `/docs/` 인덱스를 구현한다.
  - framework별 문서 수와 진행률
- [ ] `/docs/[...slug]/` 문서 상세를 구현한다.
- [ ] `/search/` 검색 페이지를 구현한다.
- [ ] `/status/` 상태 페이지를 구현한다.
- [ ] `/contribute/` 기여 페이지를 구현한다.
- [ ] `/about/` 소개 페이지를 구현한다.
- [ ] `/disclaimer/` 고지 페이지를 구현한다.
- [ ] 404 페이지를 구현한다.
- [ ] 모바일 navigation을 구현한다.
  - sidebar drawer
  - source toggle이 본문을 가리지 않게 처리
- [ ] 접근성 기본 검사를 한다.
  - keyboard navigation
  - focus visible
  - contrast
  - aria label

검증:

```bash
cd site
pnpm build
pnpm preview
```

완료 기준:

- [ ] 홈, 문서 상세, 검색, 상태, 기여, 고지 페이지가 빌드된다.
- [ ] 문서 상세에서 원문 보기 mode가 동작한다.
- [ ] 모바일 viewport에서 sidebar와 content가 겹치지 않는다.
- [ ] Apple 로고와 공식 favicon이 없다.
- [ ] 모든 페이지에 공식이 아님을 알 수 있는 고지가 있다.

---

## 10. Phase 8: 검색과 상태 대시보드

목표: 대규모 Pages 제약을 고려해 검색과 진행률을 단계적으로 제공한다.

산출물:

- global lightweight index
- framework group index
- status JSON
- status page

체크리스트:

- [ ] `scripts/site/build-search-index.ts`를 구현한다.
  - 1단계 대상: title, source path, framework, API symbol, heading
- [ ] 검색 index schema를 작성한다.
- [ ] framework group별 본문 검색 index 옵션을 만든다.
- [ ] 검색 결과 item 모델을 만든다.
  - title, framework, path, heading, ko snippet, source symbol, status
- [ ] `/search/`에서 client-side 검색을 구현한다.
- [ ] 검색 index 크기 report를 만든다.
- [ ] index size hard limit을 설정한다.
  - 초과 시 framework group split report
- [ ] `scripts/site/build-status-data.ts`를 구현한다.
  - 전체 진행률
  - framework별 진행률
  - failed
  - needs review
  - latest SHA
- [ ] `/status/` page에서 상태 JSON을 렌더링한다.
- [ ] failed/needs review 목록에서 문서 상세로 이동 가능하게 한다.

검증:

```bash
pnpm tsx scripts/site/build-search-index.ts
pnpm tsx scripts/site/build-status-data.ts
cd site && pnpm build
```

완료 기준:

- [ ] 검색 index가 GitHub Pages 용량 전략 안에 있다.
- [ ] 검색 결과에서 공식 원문 링크와 번역 상태를 확인할 수 있다.
- [ ] 상태 페이지에서 전체 진행률과 실패 목록이 보인다.

---

## 11. Phase 9: GitHub Actions Pipeline

목표: 수동 실행, 초기 전체 번역, diff 유지보수, Pages 배포가 재현 가능하게 동작한다.

산출물:

- auth healthcheck workflow
- manifest workflow
- POC translation workflow
- bootstrap shard workflow
- diff translation workflow
- Pages build/deploy workflow
- maintenance workflow

체크리스트:

- [ ] `00-auth-healthcheck.yml`을 완성한다.
  - self-hosted runner only
  - `CODEX_AUTH_JSON` seed는 없을 때만
- [ ] `10-build-manifest.yml`을 완성한다.
  - upstream sync
  - manifest
  - shard plan
  - report
- [ ] `20-translate-poc.yml`을 완성한다.
  - 10개 또는 100개 문서 제한
  - validation report
- [ ] `30-bootstrap-translate.yml`을 완성한다.
  - 수동 입력: `shard_total`, `shard_index`, `llm_concurrency`
  - timeout
  - artifact 또는 commit strategy
- [ ] `31-bootstrap-matrix.yml`을 만든다.
  - runner pool이 준비된 뒤 활성화
  - `max-parallel` 설정
  - merge job에서 결과 통합
- [ ] `40-track-upstream-diff.yml`을 완성한다.
  - schedule + workflow_dispatch
  - 대량 변경 hard stop
  - `lastProcessedSha` 갱신 규칙 준수
- [ ] `50-build-pages.yml`을 완성한다.
  - site content 생성
  - Astro build
  - upload Pages artifact 또는 dist artifact
- [ ] `60-deploy-pages-repo.yml`을 완성한다.
  - public Pages repo로 dist push
  - deploy token 최소 권한
- [ ] `90-maintenance.yml`을 만든다.
  - stale failed segment retry
  - reports cleanup
  - health report
- [ ] PR validation workflow를 만든다.
  - Secret 사용 금지
  - fork PR에서 self-hosted runner 사용 금지

검증:

```bash
gh workflow run 00-auth-healthcheck.yml
gh workflow run 10-build-manifest.yml
gh workflow run 20-translate-poc.yml
```

완료 기준:

- [ ] OAuth healthcheck 성공
- [ ] POC 번역 workflow 성공
- [ ] Pages build workflow 성공
- [ ] pull_request event에서 Codex OAuth가 실행되지 않는다.

---

## 12. Phase 10: 초기 전체 번역 Bootstrap

목표: 전체 문서를 shard 단위로 번역하고, 중단되어도 이어서 실행할 수 있게 한다.

산출물:

- shard별 translation result
- merged file-backed translation memory
- progress report
- full site build
- Pages deploy

체크리스트:

- [ ] 전체 manifest를 최신 upstream SHA로 고정한다.
- [ ] shard 기준을 확정한다.
  - 기본: `targetCharsPerShard: 800000`, `targetSegmentsPerShard: 1500`, `maxFilesPerShard: 300`
- [ ] `state/shard-plan.json`을 생성한다.
- [ ] 1개 shard dry run을 실행한다.
- [ ] 1개 shard 실제 번역을 실행한다.
- [ ] 5개 shard 병렬 실행을 테스트한다.
- [ ] 실패율과 401/refresh 오류를 확인한다.
- [ ] 안정화 전 concurrency를 올리지 않는다.
  - 시작값: runner당 3
- [ ] shard 결과 merge를 실행한다.
- [ ] translation progress를 갱신한다.
- [ ] 전체 render를 실행한다.
- [ ] 전체 site build를 실행한다.
- [ ] Pages 용량을 확인한다.
- [ ] 용량 초과 시 framework group split로 전환한다.
- [ ] 전체 배포를 실행한다.

검증:

```bash
pnpm tsx scripts/ops/check-progress.ts
pnpm tsx scripts/render/render-markdown.ts
pnpm tsx scripts/site/build-site-content.ts
cd site && pnpm build
du -sh site/dist
```

완료 기준:

- [ ] translation-progress가 100% 또는 failed/review-needed를 제외한 완료 상태다.
- [ ] 전체 사이트가 빌드된다.
- [ ] Pages 배포가 성공한다.
- [ ] 실패 segment 목록이 report에 있다.
- [ ] 사람 override가 100% 보존된다.

---

## 13. Phase 11: Upstream Diff 자동 유지보수

목표: 초기 전체 번역 이후 upstream 변경분만 처리하고 사이트를 자동 갱신한다.

산출물:

- diff detector
- changed segment queue
- diff translation report
- updated site
- updated `lastProcessedSha`

체크리스트:

- [ ] `scripts/upstream/diff-files.ts`를 구현한다.
  - 입력: `lastProcessedSha`, latest upstream SHA
  - 출력: added, modified, deleted, renamed
- [ ] renamed file 처리 규칙을 구현한다.
  - sourceHash 동일 시 file-backed translation memory path remap
- [ ] deleted file 처리 규칙을 구현한다.
  - 기본: 자동 삭제하지 않고 report only
- [ ] changed segment detector를 구현한다.
  - 같은 ID + 다른 sourceHash: 재번역 후보
  - 새 ID: 신규 번역
  - 사라진 ID: 삭제 후보 report
- [ ] changed queue builder를 구현한다.
- [ ] changed-only render를 구현한다.
- [ ] changed-only site content build를 구현한다.
- [ ] `lastSeenSha`와 `lastProcessedSha` 갱신 순서를 보장한다.
- [ ] 대량 변경 hard stop을 구현한다.
  - changed files, changed segments, deleted files, failure rate 기준
- [ ] diff report를 만든다.
  - 파일: `reports/latest.md`
- [ ] 변경 없음일 때 LLM 호출이 0회인지 검증한다.

검증:

```bash
pnpm tsx scripts/upstream/diff-files.ts
pnpm tsx scripts/translate/build-queue.ts --changed-only
pnpm tsx scripts/translate/run-workers.ts --changed-only
pnpm tsx scripts/render/render-changed.ts
pnpm tsx scripts/ops/report-run.ts
```

완료 기준:

- [ ] upstream 변경 없음이면 queue가 비어 있다.
- [ ] 변경 segment만 번역된다.
- [ ] human override는 보존된다.
- [ ] 모든 성공 후에만 `lastProcessedSha`가 갱신된다.
- [ ] hard stop 상황에서 자동 배포하지 않고 report만 생성한다.

---

## 14. Phase 12: 보안, 정책, 운영 안정화

목표: 공개 배포와 자동화 운영에서 위험한 구성을 제거한다.

산출물:

- security checklist
- secret scan
- Pages policy review
- legal/disclaimer review
- maintenance runbook

체크리스트:

- [ ] secret scan을 CI에 추가한다.
  - `auth.json`, refresh token, deploy token 패턴 감지
- [ ] workflow에서 `set -x`를 사용하지 않게 한다.
- [ ] `CODEX_AUTH_JSON`이 로그에 찍히지 않는지 확인한다.
- [ ] `auth.json`이 artifact/cache로 업로드되지 않는지 확인한다.
- [ ] fork PR에서 self-hosted runner가 실행되지 않게 한다.
- [ ] public Pages repo에 source cache가 들어가지 않는지 확인한다.
- [ ] public source map에 원문이 들어가는 정책을 최종 확정한다.
- [ ] 모든 페이지의 고지를 점검한다.
- [ ] Apple 로고, favicon, 공식 badge가 없는지 확인한다.
- [ ] 사이트에 개인정보 수집, analytics, cookie가 없는지 확인한다.
- [ ] maintenance runbook을 작성한다.
  - OAuth 만료 대응
  - runner 장애 대응
  - upstream 대량 변경 대응
  - Pages 용량 초과 대응
  - 오역/정정 PR 대응

검증:

```bash
pnpm run secret-scan
pnpm run lint:workflows
pnpm run build
```

완료 기준:

- [ ] public repository에 secret이 없다.
- [ ] PR workflow는 Secret 없이 통과한다.
- [ ] self-hosted runner는 trusted event에서만 실행된다.
- [ ] 공식 오인 리스크를 줄이는 고지가 반복 노출된다.

---

## 15. 상세 페이지/컴포넌트 목록

### 15.1 페이지별 상세 목록

| Route | 목적 | 핵심 내용 | 데이터 소스 | 완료 기준 |
|---|---|---|---|---|
| `/` | 첫 진입 | 고지, 검색, framework 바로가기, 진행률 | status JSON, navigation index | 비공식 프로젝트임이 첫 화면에서 명확함 |
| `/docs/` | 전체 문서 탐색 | framework list, 문서 수, 진행률 | manifest, status JSON | framework별 진입 가능 |
| `/docs/[...slug]/` | 문서 읽기 | 번역 문서, 원문 보기, 수정 링크 | Astro content, source map | segment 원문 보기와 edit link 동작 |
| `/search/` | 검색 | title/path/symbol 검색, filter | search index | 검색 결과에서 문서 이동 가능 |
| `/status/` | 운영 상태 | 진행률, 실패, review needed, SHA | progress, reports | 최신 상태 확인 가능 |
| `/contribute/` | 기여 안내 | override 수정법, PR 방법, 스타일 | static content | 초보자가 수정 PR 흐름 이해 가능 |
| `/about/` | 프로젝트 설명 | 학습 목적, 자동화 구조, 비공식 관계 | static content | 공식 아님이 명확함 |
| `/disclaimer/` | 정책 고지 | Apple 무관, AI 오류 가능성, 공식 우선 | static content | 모든 고지 문구 포함 |
| `/404/` | 오류 | 검색/홈/문서로 복귀 | static content | Pages에서 정상 동작 |

### 15.2 컴포넌트 목록

- [ ] `TopNoticeBar`
  - 역할: 전체 사이트 상단 비공식 고지
  - props: `message`, `learnMoreHref`
- [ ] `SiteHeader`
  - 역할: site nav, search entry, GitHub/contribute link
  - props: `currentSection`
- [ ] `DocsSidebar`
  - 역할: framework/document tree
  - props: `tree`, `currentPath`
- [ ] `MobileDocsDrawer`
  - 역할: 모바일 문서 탐색
  - props: `tree`, `currentPath`
- [ ] `Breadcrumb`
  - 역할: framework와 문서 위치 표시
  - props: `items`
- [ ] `TranslationStatusBadge`
  - 역할: 번역 상태 표시
  - props: `status`, `reviewStatus`
- [ ] `SourceViewToggle`
  - 역할: 한국어만/문장 원문/좌우 병렬 전환
  - props: `defaultMode`, `availableModes`
- [ ] `SegmentText`
  - 역할: segment ID 기반 번역 문장 렌더링
  - props: `segmentId`, `children`
- [ ] `OriginalPopover`
  - 역할: 문장 원문 팝오버
  - props: `segmentId`, `source`
- [ ] `SideBySideSegment`
  - 역할: 한국어와 원문 병렬 표시
  - props: `ko`, `source`, `status`
- [ ] `EditTranslationLink`
  - 역할: override YAML edit URL 연결
  - props: `sourcePath`, `segmentId`
- [ ] `OfficialSourceLink`
  - 역할: Apple 공식 문서 링크
  - props: `officialUrl`
- [ ] `OnThisPage`
  - 역할: heading 목차
  - props: `headings`
- [ ] `SearchBox`
  - 역할: local search input
  - props: `indexUrl`
- [ ] `SearchResultItem`
  - 역할: 검색 결과 표시
  - props: `title`, `framework`, `path`, `snippet`, `status`
- [ ] `ProgressSummary`
  - 역할: 전체 진행률 요약
  - props: `progress`
- [ ] `FrameworkProgressTable`
  - 역할: framework별 상태
  - props: `frameworks`
- [ ] `RunReportCard`
  - 역할: 최신 자동화 실행 결과
  - props: `report`

---

## 16. 상세 스크립트 목록

| Script | 역할 | 주요 입력 | 주요 출력 | 완료 기준 |
|---|---|---|---|---|
| `scripts/upstream/sync-upstream.ts` | upstream clone/fetch | `config/source.yaml` | source cache, latest SHA | 재실행 가능 |
| `scripts/upstream/build-manifest.ts` | 문서 목록 생성 | source cache | `state/manifest.json` | schema 통과 |
| `scripts/upstream/build-shard-plan.ts` | shard 계획 | manifest, segment estimate | `state/shard-plan.json` | shard 크기 균등 |
| `scripts/upstream/diff-files.ts` | upstream diff | last/new SHA | changed file list | added/modified/deleted/renamed 구분 |
| `scripts/parser/parse-markdown.ts` | Markdown AST 파싱 | source file | parsed document | fixtures 통과 |
| `scripts/segmenter/split-segments.ts` | sentence segment 생성 | parsed document | segment list | ID 안정성 |
| `scripts/segmenter/hash-segments.ts` | hash 생성 | segments | hashed segments | 재실행 동일 |
| `scripts/translate/build-queue.ts` | 번역 queue 생성 | segments, memory, overrides | queue JSON | skip 규칙 준수 |
| `scripts/translate/run-workers.ts` | worker pool 실행 | queue | raw/parsed results | concurrency 지원 |
| `scripts/translate/codex-worker.ts` | Codex 호출 | batch prompt | output JSON | timeout/retry 처리 |
| `scripts/translate/validate-output.ts` | 출력 검증 | input/output | validation result | 보존 규칙 검사 |
| `scripts/translate/apply-results.ts` | 파일 저장소 반영 | results | file-backed translation memory | status 기록 |
| `scripts/translate/apply-overrides.ts` | human override 적용 | memory, overrides | final state | locked 보존 |
| `scripts/render/render-markdown.ts` | 한국어 Markdown 생성 | final state | `translations/ko/**` | Markdown 재파싱 가능 |
| `scripts/render/build-source-maps.ts` | source map 생성 | segments/final state | `source-maps/**` | segment 수 일치 |
| `scripts/render/render-changed.ts` | 변경분 렌더링 | changed list | changed output | diff workflow용 |
| `scripts/site/build-site-content.ts` | Astro content 생성 | translations | `site/src/content/docs/**` | Astro build 가능 |
| `scripts/site/build-search-index.ts` | 검색 index | content/status | `site/public/search/**` | size limit 확인 |
| `scripts/site/build-status-data.ts` | 상태 데이터 | memory/reports | `site/public/status/**` | status page 표시 |
| `scripts/validate/validate-json.ts` | schema 검증 | file/schema | pass/fail | CI 사용 |
| `scripts/validate/validate-overrides.ts` | override 검증 | overrides | report | PR validation |
| `scripts/ops/report-run.ts` | 실행 리포트 | run state | `reports/latest.md` | 사람이 읽기 쉬움 |
| `scripts/ops/check-progress.ts` | 진행률 확인 | memory | progress summary | bootstrap 운영 |

---

## 17. 최종 통합 Acceptance Checklist

제품:

- [ ] 전체 문서 또는 선택한 bootstrap 범위가 한국어로 렌더링된다.
- [ ] 문서별 비공식 고지가 표시된다.
- [ ] 공식 원문 링크가 제공된다.
- [ ] 문장 단위 원문 보기 기능이 동작한다.
- [ ] public 원문 노출 수준이 config로 제어된다.
- [ ] 번역 수정 PR 링크가 동작한다.
- [ ] 검색이 동작한다.
- [ ] 상태 페이지가 최신 진행률을 보여준다.

자동화:

- [ ] upstream sync가 재실행 가능하다.
- [ ] manifest와 shard plan이 재현 가능하다.
- [ ] parser/segmenter가 테스트를 통과한다.
- [ ] Codex worker가 schema-valid JSON만 파일 저장소에 반영한다.
- [ ] retry/split/fail report가 동작한다.
- [ ] diff workflow가 변경 segment만 번역한다.
- [ ] `lastProcessedSha` 갱신 규칙이 지켜진다.
- [ ] Pages build/deploy가 성공한다.

품질:

- [ ] JSON parse 성공률 99% 이상
- [ ] retry 후 실패율 1% 이하
- [ ] code block 훼손 0건
- [ ] inline code 훼손 0건
- [ ] API symbol 훼손 0건
- [ ] human override 보존율 100%
- [ ] sourceHash 동일 재실행 LLM 호출 0회
- [ ] 문장 원문 매핑 오류 1% 이하

보안/정책:

- [ ] automation repo는 private이다.
- [ ] public Pages repo에 secret이 없다.
- [ ] `CODEX_AUTH_JSON`은 trusted self-hosted runner에서만 사용된다.
- [ ] pull request event에서 Codex OAuth가 실행되지 않는다.
- [ ] fork PR에서 self-hosted runner가 실행되지 않는다.
- [ ] Apple 로고, 공식 favicon, 공식 인증 표현이 없다.
- [ ] 모든 주요 화면에서 Apple과 무관한 비공식 학습용 프로젝트임을 표시한다.

---

## 18. 구현 전 확인하면 좋은 질문

아래는 구현을 막는 질문은 아니며, 답이 없으면 기본값으로 진행한다.

- [ ] GitHub org/repo 이름을 어떻게 확정할지
  - 기본값: `apple-dev-docs-ko-automation`, `apple-dev-docs-ko-pages`
- [ ] public Pages에서 원문 문장을 실제로 노출할지
  - 기본값: 초기 공개 배포는 `ko_only_public`, 내부 preview에서만 원문 문장 표시
- [ ] self-hosted runner를 몇 대까지 운영할지
  - 기본값: 1대, runner당 `LLM_CONCURRENCY=3`
- [ ] 초기 전체 번역 전에 POC 범위를 어디까지 할지
  - 기본값: 100개 문서, Core Motion/SensorKit/Create ML/SwiftUI 일부
- [ ] repository 공개 범위와 Academy 내부 공유 범위를 어떻게 둘지
  - 기본값: automation private, Pages public
- [ ] 번역 스타일에서 반말/명령형을 어느 정도 배제할지
  - 기본값: 간결한 한국어 기술 문서체, `합니다` 종결

---

## 19. 추천 첫 구현 순서

- [ ] `AGENTS.md`, `.gitignore`, `package.json`, `tsconfig.json` 생성
- [ ] `config/*.yaml`과 `schemas/*.schema.json` 초안 작성
- [ ] upstream sync와 manifest 생성 구현
- [ ] parser/segmenter fixture와 unit test 작성
- [ ] 10개 문서 queue 생성
- [ ] Codex worker POC 실행
- [ ] render/source map/site content 생성
- [ ] Astro 문서 상세 페이지 POC 구현
- [ ] source view toggle 구현
- [ ] override YAML과 edit link 구현
- [ ] Pages hello world에서 POC 사이트로 교체
- [ ] 100개 문서 번역 POC
- [ ] diff workflow 구현
- [ ] shard bootstrap 시작
