# Apple Dev Docs KO 프로젝트 상세 기획서

> **문서 버전:** v0.2  
> **작성일:** 2026-05-11  
> **프로젝트 성격:** Apple Developer Academy @ POSTECH 내 학습 목적의 비공식 한국어 번역·검색·유지보수 프로젝트  
> **핵심 원칙:** 비공식, 학습 목적, AI 자동 유지보수, 사람의 PR 수정 가능, GitHub Pages 배포, Apple 로고 미사용

---

## 1. 한 줄 정의

**Apple Developer Documentation의 비공식 Markdown 미러인 `Averyy/apple-dev-docs`를 기반으로 전체 문서를 한국어로 자동 번역하고, 이후 upstream diff를 추적해 변경 문장만 AI로 재번역하며, 사람이 PR로 번역을 수정할 수 있는 GitHub Pages 기반 학습용 문서 사이트를 구축한다.**

---

## 2. 프로젝트 소개 문구

### 2.1 사이트 상단 고정 문구

```text
이 사이트는 Apple Developer Academy @ POSTECH 내 학습 목적으로 제작된 Apple Developer Documentation 비공식 한국어 번역 프로젝트입니다.
AI를 통해 문서 변경 사항을 자동 추적·번역·유지보수하며, 번역 오류는 Pull Request를 통해 사람이 수정할 수 있습니다.
Apple Inc.와 제휴, 후원, 승인 또는 공식 관계가 없습니다.
```

### 2.2 영문 병기 문구

```text
This is an unofficial Korean translation project of Apple Developer Documentation, created for learning purposes within Apple Developer Academy @ POSTECH.
The site is automatically maintained with AI, and human corrections can be submitted through Pull Requests.
This project is not affiliated with, endorsed by, sponsored by, or officially connected to Apple Inc.
```

### 2.3 문서별 고지

모든 문서 상단에 다음 고지를 표시한다.

```text
비공식 번역입니다. 정확한 최신 내용은 원문을 기준으로 확인하세요.
문장 단위 원문 보기는 학습과 검토를 돕기 위한 기능입니다.
```

---

## 3. 핵심 목표

### 3.1 제품 목표

1. `Averyy/apple-dev-docs`의 전체 Markdown 문서를 한국어로 초벌 번역한다.
2. 번역 결과를 GitHub Pages로 배포한다.
3. Apple Developer Documentation과 유사한 문서 탐색 경험을 제공하되, Apple 로고와 공식 사이트처럼 오해될 수 있는 요소를 사용하지 않는다.
4. 각 문장 또는 의미 단위별로 원문을 볼 수 있게 한다.
5. upstream 문서 변경을 자동 감지하고, 변경된 문장만 AI로 재번역한다.
6. 사람이 PR로 번역을 수정할 수 있게 하고, 사람의 수정은 AI 자동 재번역보다 우선한다.
7. Codex CLI의 ChatGPT OAuth 인증을 활용해 비용을 낮춘다.
8. 모든 AI 번역 작업은 샤드와 워커 풀을 통해 병렬 처리한다.

### 3.2 학습 목표

1. 대규모 문서 미러링과 번역 파이프라인 설계 경험을 얻는다.
2. Markdown 파싱, 문장 분할, diff, 번역 메모리, 정적 사이트 빌드를 학습한다.
3. GitHub Actions, self-hosted runner, Codex CLI OAuth, GitHub Pages 배포를 실습한다.
4. AI 자동화 결과를 사람이 PR로 검수하는 협업 흐름을 만든다.

### 3.3 비목표

1. Apple 공식 번역으로 보이게 하지 않는다.
2. Apple 로고, Apple 공식 favicon, Apple Developer 공식 브랜드 요소를 사용하지 않는다.
3. 사용자의 개인정보를 수집하지 않는다.
4. 상업적 SaaS 또는 유료 문서 서비스로 운영하지 않는다.
5. 원문 전체를 공식 문서 대체재처럼 제공하는 것을 목표로 하지 않는다.

---

## 4. 주요 의사결정 요약

| 항목 | 결정 |
|---|---|
| 원천 문서 | `Averyy/apple-dev-docs` Markdown 미러 |
| 초기 범위 | 전체 문서 번역 |
| 변경 감지 | upstream Git commit diff |
| 번역 단위 | 문장 segment 우선, 필요 시 block fallback |
| 번역 엔진 | Codex CLI + ChatGPT OAuth |
| CI 실행 | self-hosted GitHub Actions runner 권장 |
| 인증 저장 | `CODEX_AUTH_JSON` Secret으로 최초 seed 후 persistent `CODEX_HOME` 유지 |
| 병렬화 | shard matrix + runner pool + worker pool |
| 사람 수정 | PR 기반 override 파일 수정 |
| 배포 | GitHub Pages 고정 |
| 사이트 스택 | Astro + Markdown/MDX + Pagefind 또는 자체 검색 인덱스 |
| 디자인 | 공식 Docs와 유사한 정보 구조, 독립적인 visual identity |
| Apple 로고 | 사용 금지 |
| 고지 | 홈, 문서 상단, 푸터, About에 반복 표시 |

---

## 5. 근거와 제약

### 5.1 Codex OAuth CI/CD

OpenAI Codex 문서에는 ChatGPT-managed Codex auth를 trusted CI/CD runner에서 유지하는 고급 패턴이 있다. 핵심은 다음과 같다.

1. 신뢰할 수 있는 머신에서 `codex login`으로 `auth.json`을 만든다.
2. 해당 파일을 runner에 배치한다.
3. Codex를 평소처럼 실행한다.
4. Codex가 stale session을 자동 refresh하게 둔다.
5. refresh된 `auth.json`을 다음 실행까지 보존한다.

단, 공식 문서는 이 방식을 일반적인 CI/CD 기본값으로 권장하지 않는다. 일반 자동화에는 API key가 권장되며, OAuth `auth.json` 방식은 trusted private automation에서만 사용해야 한다. 또한 `auth.json`에는 access token이 들어 있으므로 비밀번호처럼 다뤄야 하며, public/open-source repository에서 쓰면 안 된다.

따라서 이 프로젝트는 다음 구조를 채택한다.

```text
Private automation repository
  - Codex OAuth Secret 보관
  - self-hosted runner 실행
  - 파일 기반 번역 메모리와 빌드 파이프라인 관리

Public GitHub Pages repository 또는 Pages branch
  - 정적 사이트 결과만 배포
  - Codex Secret 없음
```

### 5.2 GitHub Pages 용량 제약

GitHub Pages는 학습 목적의 기존 사이트 copy를 금지하지 않지만, 코드 직접 작성, 사용자 데이터 미수집, 원본과 관련 없다는 명확한 고지가 필요하다. 또한 GitHub Pages는 게시 사이트 크기, source repository 권장 크기, 배포 시간 등에 제한이 있다.

이 프로젝트는 전체 문서 번역을 목표로 하므로, 단일 Pages 사이트가 1GB 제한을 초과할 수 있다. 따라서 다음 전략을 둔다.

1. **1차:** 전체 파일 기반 번역 메모리는 private automation repo에 보관한다.
2. **2차:** Pages 배포는 framework group 단위로 분할 가능하게 설계한다.
3. **3차:** 전역 홈은 central index site로 두고, 각 framework group은 별도 project Pages로 배포할 수 있게 한다.
4. **4차:** 전역 검색은 title/path/symbol 중심의 lightweight index로 시작하고, 본문 검색은 framework group별 index로 나눈다.

---

## 6. 전체 아키텍처

```text
Averyy/apple-dev-docs
        │
        ▼
Upstream Sync
        │
        ▼
Source Markdown Cache
        │
        ▼
Markdown Parser
        │
        ▼
Block Splitter
        │
        ▼
Sentence Segmenter
        │
        ▼
Segment Hash Store
        │
        ├── 초기 실행: 전체 segment translation queue
        └── diff 실행: 변경 segment translation queue
        │
        ▼
Parallel Translation Workers
        │
        ▼
Codex CLI OAuth
        │
        ▼
Validation
        │
        ▼
Translation Memory Store
        │
        ▼
Human Override Layer
        │
        ▼
Korean Markdown Renderer
        │
        ▼
Source Sentence Map Builder
        │
        ▼
Static Site Builder
        │
        ▼
GitHub Pages Deploy
```

---

## 7. 저장소 구조

### 7.1 권장: automation repo와 Pages repo 분리

```text
apple-dev-docs-ko-automation/       # private
  .github/
    workflows/
      00-auth-healthcheck.yml
      10-build-manifest.yml
      20-bootstrap-translate.yml
      30-track-upstream-diff.yml
      40-build-pages.yml
      50-deploy-pages-repo.yml
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
    translation-input.schema.json
    translation-output.schema.json
    source-map.schema.json

  state/
    upstream.json
    manifest.json
    translation-progress.json
    shard-plan.json
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
    public/

  scripts/
    upstream/
    parser/
    segmenter/
    translate/
    render/
    site/
    ops/

  reports/
    latest.md
    runs/

apple-dev-docs-ko-pages/            # public
  index.html
  assets/
  docs/
  search/
  source-maps/
```

### 7.2 단일 repo로 운영할 경우

단일 repo도 가능하지만 OAuth Secret 보호를 위해 repo는 private이어야 한다. 이 경우 GitHub Pages 공개 범위와 repository 공개 범위가 충돌할 수 있으므로 조직/계정 플랜과 Pages visibility를 먼저 확인해야 한다.

권장 순서는 다음이다.

```text
1순위: private automation repo + public Pages repo
2순위: private repo + GitHub Pages private visibility
3순위: public repo + OAuth 없음, API key 또는 외부 runner만 사용
```

---

## 8. 데이터 원천

### 8.1 upstream

```yaml
upstream:
  repo: "https://github.com/Averyy/apple-dev-docs.git"
  branch: "main"
  sourceRoot: "documentation"
```

`Averyy/apple-dev-docs`는 Apple Developer Documentation을 AI 친화적인 Markdown 형태로 미러링하는 비공식 프로젝트다. Apple 문서 사이트의 lazy loading 문제 때문에 AI가 읽기 어렵다는 문제를 해결하기 위해 만들어졌고, README 기준으로 다수의 framework와 문서를 제공한다.

### 8.2 source of truth

이 프로젝트에서 source of truth는 다음 순서다.

```text
1. upstream Markdown file at specific commit SHA
2. parsed source segments
3. segment hash
4. machine translation
5. human override
6. rendered Korean Markdown / site content
```

렌더링된 Markdown과 사이트 파일은 생성물이다. 사람이 직접 수정해야 하는 대상은 `overrides/ko/**.yaml`이다.

---

## 9. 인증 설계: Codex OAuth

### 9.1 목표

OpenAI API key 과금 대신 Codex CLI의 ChatGPT OAuth 인증을 사용한다.

### 9.2 인증 생성

신뢰할 수 있는 로컬 머신에서 실행한다.

```bash
mkdir -p ~/.codex
cat >> ~/.codex/config.toml <<'EOF_CONFIG'
cli_auth_credentials_store = "file"
EOF_CONFIG

codex login
```

확인:

```bash
AUTH_FILE="${CODEX_HOME:-$HOME/.codex}/auth.json"

jq '{
  auth_mode,
  has_tokens: (.tokens != null),
  has_refresh_token: ((.tokens.refresh_token // "") != ""),
  last_refresh
}' "$AUTH_FILE"
```

조건:

```text
auth_mode == "chatgpt"
has_refresh_token == true
```

### 9.3 GitHub Secret

Private automation repo에 다음 Secret을 저장한다.

```text
CODEX_AUTH_JSON = ~/.codex/auth.json 전체 내용
```

### 9.4 runner seed 규칙

가장 중요한 규칙은 **없을 때만 seed**하는 것이다.

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
mkdir -p "$CODEX_HOME"
chmod 700 "$CODEX_HOME"

if [ ! -f "$CODEX_HOME/auth.json" ]; then
  echo "$CODEX_AUTH_JSON" > "$CODEX_HOME/auth.json"
  chmod 600 "$CODEX_HOME/auth.json"
fi
```

매번 Secret 값으로 덮어쓰면 Codex가 refresh한 최신 token을 버리게 된다.

### 9.5 healthcheck

```yaml
name: Codex OAuth Healthcheck

on:
  workflow_dispatch:
  schedule:
    - cron: "0 9 * * 1"

jobs:
  healthcheck:
    runs-on: [self-hosted, codex-oauth]
    timeout-minutes: 20

    steps:
      - name: Seed auth.json if missing
        env:
          CODEX_AUTH_JSON: ${{ secrets.CODEX_AUTH_JSON }}
        run: |
          export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
          mkdir -p "$CODEX_HOME"
          chmod 700 "$CODEX_HOME"
          if [ ! -f "$CODEX_HOME/auth.json" ]; then
            echo "$CODEX_AUTH_JSON" > "$CODEX_HOME/auth.json"
            chmod 600 "$CODEX_HOME/auth.json"
          fi

      - name: Verify Codex
        run: |
          codex exec --ephemeral "Return exactly OK."
```

---

## 10. 병렬 처리 설계

### 10.1 원칙

성능 목표는 다음이다.

```text
모든 LLM 번역 작업은 큐 기반 병렬 worker로 처리한다.
단, OAuth auth.json refresh 충돌을 방지하기 위해 runner와 CODEX_HOME 설계를 분리한다.
```

### 10.2 병렬화 레벨

| 단계 | 병렬화 방식 |
|---|---|
| upstream clone | 단일 |
| manifest 생성 | 파일 단위 병렬 |
| Markdown parse | worker thread 병렬 |
| sentence segmentation | worker thread 병렬 |
| queue shard 생성 | 병렬 |
| Codex 번역 | runner pool + worker pool |
| 결과 검증 | 병렬 |
| site content 생성 | framework group 병렬 |
| Pages deploy | 단일 또는 group별 병렬 |

### 10.3 OAuth 안정성 고려

공식적인 고급 CI/CD 패턴은 특정 `auth.json` copy를 trusted private runner에서 유지하는 방식이다. 같은 `auth.json` copy를 여러 머신이나 독립 job에서 동시에 쓰면 refresh 충돌 위험이 있다.

따라서 병렬 전략은 다음 단계로 확장한다.

#### 단계 A: 단일 runner 내부 worker pool

```yaml
LLM_CONCURRENCY: 3
```

- 하나의 self-hosted runner에서 worker 3개를 돌린다.
- 첫 안정화 단계다.
- 401, refresh, validation failure를 모니터링한다.

#### 단계 B: runner pool

```text
runner-a: CODEX_HOME=/opt/codex/runner-a
runner-b: CODEX_HOME=/opt/codex/runner-b
runner-c: CODEX_HOME=/opt/codex/runner-c
```

- 각 runner는 자기 persistent `CODEX_HOME`을 가진다.
- 각 runner는 최초 1회 로그인 또는 seed를 가진다.
- matrix job으로 shard를 나눠 실행한다.

#### 단계 C: framework group별 병렬 workflow

```text
SwiftUI group
UIKit group
CoreMotion group
AVFoundation group
HumanInterfaceGuidelines group
...
```

- 전체 문서 번역은 framework group별로 분산한다.
- 결과는 artifact로 모은 뒤 merge job에서 file-backed translation memory에 반영한다.
- 병렬 job이 main에 동시에 push하지 않게 한다.

### 10.4 권장 초기 concurrency

```yaml
translation:
  llmConcurrencyPerRunner: 3
  maxParallelRunnerJobs: 4
  batchSegments: 20
  batchChars: 12000
  retries: 2
```

안정화 후:

```yaml
translation:
  llmConcurrencyPerRunner: 5
  maxParallelRunnerJobs: 8
  batchSegments: 20
  batchChars: 15000
```

---

## 11. 초기 전체 번역 설계

### 11.1 목표

처음부터 전체 문서를 번역한다. 다만 실행은 전체를 한 번에 처리하지 않고, 중단·재시작 가능한 shard 단위로 처리한다.

```text
전체 대상: Averyy/apple-dev-docs의 documentation 하위 Markdown 전체
처리 단위: source segment
저장 단위: file-backed translation memory
출력 단위: framework group별 site content
```

### 11.2 단계

```text
1. upstream 최신 SHA 확인
2. sparse clone 또는 partial clone
3. 전체 Markdown manifest 생성
4. 파일별 block/segment count 계산
5. 전체 번역 shard plan 생성
6. shard별 translation queue 생성
7. Codex worker pool 병렬 번역
8. JSON schema validation
9. translation-memory 저장
10. overrides 적용
11. Korean Markdown 생성
12. sentence source map 생성
13. GitHub Pages site content 생성
14. GitHub Pages 배포
```

### 11.3 shard 기준

파일 수 기준보다 segment/char 기준이 안전하다.

```yaml
sharding:
  targetCharsPerShard: 800000
  targetSegmentsPerShard: 1500
  maxFilesPerShard: 300
```

### 11.4 전체 번역 workflow

```yaml
name: Bootstrap Translate All Docs

on:
  workflow_dispatch:
    inputs:
      shard_total:
        required: true
        default: "200"
      shard_index:
        required: true
        default: "0"
      llm_concurrency:
        required: true
        default: "3"

permissions:
  contents: write
  actions: read

concurrency:
  group: bootstrap-translate-${{ github.event.inputs.shard_index }}
  cancel-in-progress: false

jobs:
  translate:
    runs-on: [self-hosted, codex-oauth]
    timeout-minutes: 360

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: corepack enable
      - run: pnpm install --frozen-lockfile

      - name: Seed Codex auth if missing
        env:
          CODEX_AUTH_JSON: ${{ secrets.CODEX_AUTH_JSON }}
        run: |
          export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
          mkdir -p "$CODEX_HOME"
          chmod 700 "$CODEX_HOME"
          if [ ! -f "$CODEX_HOME/auth.json" ]; then
            echo "$CODEX_AUTH_JSON" > "$CODEX_HOME/auth.json"
            chmod 600 "$CODEX_HOME/auth.json"
          fi

      - name: Translate shard
        env:
          LLM_CONCURRENCY: ${{ github.event.inputs.llm_concurrency }}
        run: |
          pnpm tsx scripts/translate/bootstrap-shard.ts \
            --shard-total "${{ github.event.inputs.shard_total }}" \
            --shard-index "${{ github.event.inputs.shard_index }}" \
            --concurrency "$LLM_CONCURRENCY"

      - name: Commit shard result
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add state translation-memory overrides translations reports
          git commit -m "Bootstrap Korean translation shard ${{ github.event.inputs.shard_index }}" || echo "No changes"
          git push
```

### 11.5 matrix 병렬 workflow

여러 self-hosted runner가 있을 때 사용한다.

```yaml
name: Bootstrap Translate Matrix

on:
  workflow_dispatch:
    inputs:
      shard_total:
        required: true
        default: "200"
      max_parallel:
        required: true
        default: "4"

jobs:
  plan:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.matrix.outputs.matrix }}
    steps:
      - uses: actions/checkout@v4
      - id: matrix
        run: |
          node scripts/ops/create-matrix.js "${{ github.event.inputs.shard_total }}" > matrix.json
          echo "matrix=$(cat matrix.json)" >> $GITHUB_OUTPUT

  translate:
    needs: plan
    runs-on: [self-hosted, codex-oauth]
    strategy:
      fail-fast: false
      max-parallel: ${{ fromJson(github.event.inputs.max_parallel) }}
      matrix: ${{ fromJson(needs.plan.outputs.matrix) }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - run: pnpm tsx scripts/translate/bootstrap-shard.ts --shard-index ${{ matrix.shard }} --shard-total ${{ github.event.inputs.shard_total }}
      - uses: actions/upload-artifact@v4
        with:
          name: translation-result-${{ matrix.shard }}
          path: |
            tmp/results/${{ matrix.shard }}/
            reports/runs/${{ matrix.shard }}.md

  merge:
    needs: translate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v4
        with:
          path: tmp/all-results
      - run: pnpm tsx scripts/translate/merge-results.ts tmp/all-results
      - run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add state translation-memory translations reports
          git commit -m "Merge bootstrap translation shards" || echo "No changes"
          git push
```

---

## 12. Diff 번역 설계

### 12.1 목표

초기 전체 번역 이후에는 upstream 변경분만 자동 처리한다.

```text
upstream 최신 SHA != lastProcessedSha
→ changed files 추출
→ changed segments 계산
→ changed segments만 Codex 번역
→ file-backed translation memory 업데이트
→ 사이트 재빌드
→ GitHub Pages 배포
```

### 12.2 diff 유형별 처리

| Git status | 처리 방식 |
|---|---|
| Added | 전체 segment 신규 번역 |
| Modified | sourceHash가 바뀐 segment만 재번역 |
| Deleted | 자동 삭제하지 않고 report only, 필요 시 PR에서 제거 |
| Renamed | 기존 file-backed translation memory path remap, segment hash 동일하면 재번역 없음 |

### 12.3 diff workflow

```yaml
name: Track Upstream Diff Translation

on:
  workflow_dispatch:
  schedule:
    - cron: "0 */6 * * *"

permissions:
  contents: write

concurrency:
  group: track-upstream-diff
  cancel-in-progress: true

jobs:
  diff-translate:
    runs-on: [self-hosted, codex-oauth]
    timeout-minutes: 180

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: corepack enable
      - run: pnpm install --frozen-lockfile

      - name: Seed Codex auth if missing
        env:
          CODEX_AUTH_JSON: ${{ secrets.CODEX_AUTH_JSON }}
        run: |
          export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
          mkdir -p "$CODEX_HOME"
          chmod 700 "$CODEX_HOME"
          if [ ! -f "$CODEX_HOME/auth.json" ]; then
            echo "$CODEX_AUTH_JSON" > "$CODEX_HOME/auth.json"
            chmod 600 "$CODEX_HOME/auth.json"
          fi

      - name: Translate changed segments
        env:
          LLM_CONCURRENCY: "3"
        run: |
          pnpm tsx scripts/upstream/track-diff.ts
          pnpm tsx scripts/translate/run-diff-workers.ts --concurrency "$LLM_CONCURRENCY"
          pnpm tsx scripts/render/render-changed.ts
          pnpm tsx scripts/site/build-site-content.ts --changed-only

      - name: Commit diff translation
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add state translation-memory overrides translations site/src/content reports
          git commit -m "Update Korean translations from upstream diff" || echo "No changes"
          git push
```

### 12.4 lastProcessedSha 갱신 규칙

`lastProcessedSha`는 모든 번역과 검증이 성공한 뒤에만 갱신한다.

```json
{
  "lastSeenSha": "new-upstream-sha",
  "lastProcessedSha": "new-upstream-sha",
  "lastSuccessfulRunId": "2026-05-11T10-00-00Z",
  "updatedAt": "2026-05-11T10:00:00Z"
}
```

대량 변경 또는 실패 시:

```json
{
  "lastSeenSha": "new-upstream-sha",
  "lastProcessedSha": "old-sha",
  "status": "paused_for_review"
}
```

---

## 13. 문장 단위 원문 보기 기능

### 13.1 제품 요구사항

사용자는 한국어 번역을 읽다가 각 문장 단위로 원문을 확인할 수 있어야 한다.

제공 모드:

1. **한국어만 보기**
2. **문장 클릭 시 원문 팝오버**
3. **문장 아래 원문 펼치기**
4. **좌우 병렬 보기**
5. **원문 항상 표시 토글**

### 13.2 기본 UX

문서 상단에 토글을 둔다.

```text
[한국어만] [문장 원문] [좌우 병렬]
```

문장에 마우스를 올리거나 클릭하면 원문을 볼 수 있다.

```text
한국어 문장: 이 객체를 사용해 모션 업데이트를 수신합니다.
원문: Use this object to receive motion updates.
```

모바일에서는 hover가 없으므로 tap으로 펼친다.

### 13.3 렌더링 예시

```html
<span
  class="ko-segment"
  data-segment-id="seg:p:h2-overview:0001"
  data-source-id="src:p:h2-overview:0001"
>
  이 객체를 사용해 모션 업데이트를 수신합니다.
</span>
```

원문은 별도 JSON으로 제공한다.

```json
{
  "docId": "documentation/CoreMotion/CMDeviceMotion.md",
  "upstreamSha": "abc123",
  "segments": {
    "src:p:h2-overview:0001": {
      "source": "Use this object to receive motion updates.",
      "sourceHash": "sha256...",
      "officialUrl": "https://developer.apple.com/documentation/..."
    }
  }
}
```

### 13.4 문장 segment 모델

block은 문단, 리스트, 표, heading 같은 구조 단위다. segment는 그 안의 문장 또는 의미 단위다.

```text
Block
  ├── Segment 1
  ├── Segment 2
  └── Segment 3
```

예:

```json
{
  "blockId": "p:h2-overview:8fd91ac2",
  "segments": [
    {
      "id": "seg:p:h2-overview:0001",
      "source": "Use this object to receive motion updates.",
      "sourceHash": "sha256...",
      "ko": "이 객체를 사용해 모션 업데이트를 수신합니다."
    },
    {
      "id": "seg:p:h2-overview:0002",
      "source": "Start updates only when your app needs them.",
      "sourceHash": "sha256...",
      "ko": "앱에서 필요할 때만 업데이트를 시작합니다."
    }
  ]
}
```

### 13.5 문장 단위 번역의 장점

1. 원문 보기 매핑이 정확하다.
2. diff 번역 범위가 더 작아진다.
3. 사람 수정이 한 문장 단위로 가능하다.
4. AI 재번역이 기존 문서 전체 톤을 흔드는 일을 줄인다.
5. 검색 결과에서 원문 symbol과 한국어 문장을 함께 보여주기 쉽다.

### 13.6 문장 단위 번역의 단점

1. 문맥이 부족하면 번역이 어색해질 수 있다.
2. 한국어 문장이 영어 문장 구조를 과하게 따라갈 수 있다.
3. 길고 복잡한 paragraph는 문장별 번역만으로 자연스럽지 않을 수 있다.

### 13.7 보완책

각 segment 번역 시 주변 context를 함께 제공한다.

```json
{
  "segmentId": "seg:p:h2-overview:0002",
  "source": "Start updates only when your app needs them.",
  "contextBefore": "Use this object to receive motion updates.",
  "contextAfter": "Stop updates as soon as possible to save power.",
  "documentTitle": "CMDeviceMotion",
  "framework": "Core Motion"
}
```

단, Codex 출력은 현재 segment의 번역만 반환해야 한다.

### 13.8 원문 공개 리스크

문장 단위 원문 보기 기능은 학습과 검수에 유용하지만, 공개 GitHub Pages에서 원문 segment를 제공하면 원문 재배포 성격이 강해질 수 있다.

운영 방침:

1. 원문 보기는 기본 OFF로 둔다.
2. 원문은 문장 단위로만 노출한다.
3. 각 문서에 공식 원문 링크를 제공한다.
4. 전체 원문 병기 모드는 내부/학습용 preview에서 먼저 테스트한다.
5. 사이트 전체에 비공식·학습 목적 고지를 명확히 표시한다.
6. 법적/정책 리스크가 커지면 공개 Pages에서는 원문 hover 대신 공식 문서 deep link만 제공하는 fallback을 둔다.

---

## 14. 파일 기반 번역 메모리 설계

### 14.1 파일 상태

`translation-memory/files/documentation_CoreMotion_CMDeviceMotion.json`

```json
{
  "sourcePath": "documentation/CoreMotion/CMDeviceMotion.md",
  "targetPath": "translations/ko/documentation/CoreMotion/CMDeviceMotion.md",
  "sourceUrl": "https://developer.apple.com/documentation/...",
  "upstreamSha": "abc123",
  "sourceFileHash": "sha256...",
  "status": "translated",
  "translatedAt": "2026-05-11T10:00:00Z",
  "reviewStatus": "machine_translated",
  "segments": [
    {
      "id": "seg:h1:0001",
      "blockId": "h1:cmdevicemotion",
      "type": "heading",
      "sourceHash": "sha256...",
      "source": "CMDeviceMotion",
      "ko": "CMDeviceMotion",
      "status": "preserved",
      "locked": true
    },
    {
      "id": "seg:p:h2-overview:0001",
      "blockId": "p:h2-overview:8fd91ac2",
      "type": "sentence",
      "sourceHash": "sha256...",
      "source": "Use this object to receive motion updates.",
      "ko": "이 객체를 사용해 모션 업데이트를 수신합니다.",
      "status": "machine_translated",
      "reviewed": false,
      "locked": false,
      "translatedAt": "2026-05-11T10:00:00Z",
      "translator": "codex-cli-oauth"
    }
  ]
}
```

### 14.2 segment 상태

| 상태 | 의미 |
|---|---|
| `preserved` | API symbol, code, 고유명사 등 번역 제외 |
| `machine_translated` | AI 초벌 번역 |
| `human_reviewed` | 사람이 확인함 |
| `human_edited` | 사람이 수정함 |
| `locked` | AI가 덮어쓰면 안 됨 |
| `needs_review` | 원문 변경으로 사람 확인 필요 |
| `failed` | 번역 실패 |

---

## 15. 사람 PR 수정 설계

### 15.1 핵심 원칙

사람의 수정은 AI 결과보다 우선한다.

AI 자동화가 사람이 고친 문장을 다시 덮어쓰지 않도록 `overrides` layer를 둔다.

```text
source segment
→ machine translation
→ human override
→ final rendered translation
```

### 15.2 override 파일

`overrides/ko/documentation/CoreMotion/CMDeviceMotion.yaml`

```yaml
sourcePath: documentation/CoreMotion/CMDeviceMotion.md
updatedBy: "github-username"
updatedAt: "2026-05-11T10:00:00Z"
segments:
  seg:p:h2-overview:0001:
    ko: "이 객체를 사용하여 모션 업데이트를 수신합니다."
    reason: "문서체를 더 자연스럽게 수정"
    locked: true
```

### 15.3 PR 흐름

```text
1. 사용자가 사이트에서 문장 ID 확인
2. GitHub에서 override YAML 수정
3. PR 생성
4. CI가 override schema 검증
5. 렌더링 preview 생성
6. maintainer가 merge
7. 다음 Pages build에 반영
```

### 15.4 사이트에서 PR 연결

각 문장 또는 문서에 다음 링크를 제공한다.

```text
이 번역 수정하기
```

링크는 GitHub edit URL로 이동한다.

```text
https://github.com/<org>/apple-dev-docs-ko-automation/edit/main/overrides/ko/documentation/CoreMotion/CMDeviceMotion.yaml
```

### 15.5 AI diff 번역과 human override 충돌

상황별 처리:

| 상황 | 처리 |
|---|---|
| sourceHash 동일, override 존재 | override 유지 |
| sourceHash 변경, override 존재 | `needs_review`로 표시하고 AI 제안 번역을 별도 저장 |
| sourceHash 변경, override 없음 | AI 재번역 적용 |
| 사람이 locked=true 설정 | AI 자동 덮어쓰기 금지 |

예:

```json
{
  "id": "seg:p:h2-overview:0001",
  "sourceHash": "new-hash",
  "previousSourceHash": "old-hash",
  "ko": "사람이 수정한 기존 번역",
  "aiSuggestion": "AI가 새 원문을 바탕으로 제안한 번역",
  "status": "needs_review",
  "locked": true
}
```

---

## 16. 번역 프롬프트 설계

### 16.1 입력 JSON

```json
{
  "task": "translate_apple_developer_docs_segments_to_korean",
  "projectContext": {
    "purpose": "learning project within Apple Developer Academy @ POSTECH",
    "audience": "Korean learners and developers",
    "style": "concise Korean technical documentation style"
  },
  "rules": {
    "output": "json_only",
    "preserveSegmentIds": true,
    "preserveMarkdown": true,
    "preserveCode": true,
    "preserveApiSymbols": true,
    "doNotAddExplanations": true,
    "doNotTranslateFrameworkNames": true
  },
  "glossary": {
    "SwiftUI": "SwiftUI",
    "Core Motion": "Core Motion",
    "SensorKit": "SensorKit",
    "Create ML": "Create ML",
    "View": "View",
    "App Store": "App Store"
  },
  "segments": [
    {
      "id": "seg:p:h2-overview:0001",
      "source": "Use this object to receive motion updates.",
      "contextBefore": "",
      "contextAfter": "Start updates only when your app needs them.",
      "documentTitle": "CMDeviceMotion",
      "framework": "Core Motion"
    }
  ]
}
```

### 16.2 출력 JSON

```json
{
  "segments": [
    {
      "id": "seg:p:h2-overview:0001",
      "ko": "이 객체를 사용해 모션 업데이트를 수신합니다."
    }
  ]
}
```

### 16.3 프롬프트 본문

```text
You are translating Apple Developer Documentation segments into Korean.

Return JSON only.

Rules:
- Preserve each segment id exactly.
- Translate only natural language.
- Do not translate API names, symbols, method names, type names, framework names, code, URLs, paths, or Markdown syntax.
- Use concise Korean technical documentation style.
- Do not add explanations that are not present in the source.
- Keep inline code unchanged.
- Keep Markdown links unchanged except surrounding Korean grammar.
- Keep sentence-level alignment as much as possible because the UI shows the original sentence for each Korean segment.
- Output must match this schema:
  {"segments":[{"id":"...","ko":"..."}]}

Input JSON:
<INPUT_JSON>
```

---

## 17. Codex 실행 방식

### 17.1 `codex exec`

Codex CLI의 non-interactive mode는 CI, scheduled job, pipeline에서 `codex exec`로 사용할 수 있다.

```bash
codex exec --ephemeral "Translate the given JSON segments."
```

stdin을 활용한다.

```bash
cat tmp/batches/batch-001.json | codex exec --ephemeral "Translate the input JSON according to the project rules." > tmp/results/batch-001.raw
```

### 17.2 JSON schema output

가능하면 output schema를 사용한다.

```bash
codex exec \
  --output-schema ./schemas/translation-output.schema.json \
  -o "./tmp/results/$BATCH_ID.json" \
  "$(cat ./tmp/prompts/$BATCH_ID.txt)"
```

### 17.3 worker pool 의사코드

```ts
import PQueue from "p-queue";

const concurrency = Number(process.env.LLM_CONCURRENCY ?? 3);
const queue = new PQueue({ concurrency });

for (const batch of batches) {
  queue.add(async () => {
    await writePrompt(batch);
    await runCodex(batch);
    await validateResult(batch);
    await applyResult(batch);
  });
}

await queue.onIdle();
```

---

## 18. 검증 설계

### 18.1 JSON 검증

Codex 출력은 반드시 검증한다.

```text
JSON parse 가능
schema 통과
입력 segment 수 == 출력 segment 수
모든 segment id 동일
ko 비어있지 않음
inline code 보존
URL 보존
API symbol 보존
Markdown link 보존
금지된 설명 추가 없음
```

### 18.2 실패 처리

```text
1차 실패: 같은 batch retry
2차 실패: batch를 절반으로 split 후 retry
3차 실패: segment 단독 retry
4차 실패: failed 상태 저장 후 report
```

### 18.3 품질 지표

| 지표 | 목표 |
|---|---:|
| JSON parse 성공률 | 99% 이상 |
| retry 후 실패율 | 1% 이하 |
| code block 훼손 | 0건 |
| inline code 훼손 | 0건 |
| sourceHash 동일 재실행 시 LLM 호출 | 0회 |
| human override 덮어쓰기 | 0건 |

---

## 19. Markdown 파싱과 segment 분할

### 19.1 block 분할

Markdown을 다음 block으로 나눈다.

```text
frontmatter
heading
paragraph
list
blockquote
table
code
horizontal_rule
html
```

### 19.2 segment 분할

문장 단위 source view를 위해 번역 대상 block을 sentence segment로 나눈다.

```text
paragraph → sentence segments
list item → sentence segments
table cell → cell segment 또는 sentence segment
heading → heading segment
blockquote → sentence segments
code → preserve segment
```

### 19.3 번역 제외

번역하지 않는 segment:

```text
Swift code
Objective-C code
JSON/YAML/XML code
terminal command
API symbol only
type name only
method signature only
URL only
file path only
```

예:

```text
CMDeviceMotion
startDeviceMotionUpdates()
@Environment
some View
```

### 19.4 segment ID 생성

```text
seg:<block-type>:<heading-anchor>:<sequence>
```

예:

```text
seg:p:overview:0001
seg:p:overview:0002
seg:list:configure-motion-updates:0001
seg:table:availability:0001
```

ID 안정성을 위해 heading anchor와 local sequence를 사용한다.

### 19.5 segment 변경 판단

```text
같은 segment id + 같은 sourceHash → 기존 번역 유지
같은 segment id + 다른 sourceHash → 재번역 후보
새 segment id → 신규 번역
사라진 segment id → 삭제 후보, report
```

---

## 20. 렌더링 설계

### 20.1 한국어 Markdown 출력

`translations/ko/documentation/CoreMotion/CMDeviceMotion.md`

```md
---
source_path: documentation/CoreMotion/CMDeviceMotion.md
upstream_sha: abc123
translation_status: machine_translated
translated_at: 2026-05-11T10:00:00Z
official: false
---

# CMDeviceMotion

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

## 개요

이 객체를 사용해 모션 업데이트를 수신합니다.
```

### 20.2 사이트 content 출력

Astro content collection용으로 별도 생성한다.

```text
site/src/content/docs/documentation/CoreMotion/CMDeviceMotion.md
site/public/source-maps/documentation/CoreMotion/CMDeviceMotion.json
```

### 20.3 source map

```json
{
  "docId": "documentation/CoreMotion/CMDeviceMotion.md",
  "title": "CMDeviceMotion",
  "upstreamSha": "abc123",
  "segments": [
    {
      "id": "seg:p:overview:0001",
      "source": "Use this object to receive motion updates.",
      "ko": "이 객체를 사용해 모션 업데이트를 수신합니다.",
      "sourceHash": "sha256...",
      "status": "machine_translated"
    }
  ]
}
```

---

## 21. GitHub Pages 사이트 설계

### 21.1 스택

```text
Astro
Markdown/MDX content collection
Pagefind 또는 custom static search index
Shiki syntax highlighting
GitHub Pages
```

### 21.2 사이트 구조

```text
/
  홈

/docs/
  전체 문서 index

/docs/documentation/swiftui/
  SwiftUI 문서

/docs/documentation/coremotion/
  Core Motion 문서

/search/
  검색

/status/
  번역 진행률

/about/
  프로젝트 소개

/disclaimer/
  비공식 고지

/contribute/
  번역 수정 방법
```

### 21.3 레이아웃

```text
Top Notice Bar
  비공식 학습용 번역 고지

Header
  Apple Dev Docs KO
  Search
  GitHub
  Contribute

Left Sidebar
  Framework list
  Document tree

Main Content
  Breadcrumb
  Title
  Translation status
  Source view toggle
  Korean content

Right Sidebar
  On this page
  Original link
  Edit translation

Footer
  비공식 고지
  Apple 로고 없음
```

### 21.4 공식 Docs와 유사하게 할 부분

```text
문서 중심 레이아웃
좌측 navigation
우측 On this page
상단 검색
간결한 typography
code block readability
breadcrumb
```

### 21.5 공식 Docs와 다르게 할 부분

```text
Apple 로고 미사용
Apple 공식 favicon 미사용
Apple Developer 공식 브랜드 색상 과도한 복제 금지
공식 인증처럼 보이는 표현 금지
사이트명에 Unofficial 또는 KO Mirror 맥락 표시
상단 고지 항상 노출
```

### 21.6 디자인 톤

```text
배경: 흰색 또는 약한 회색
텍스트: 높은 가독성
라인: 얇은 border
강조색: 독립적인 blue/indigo 계열
애니메이션: 최소
둥근 모서리: 적게
```

---

## 22. 검색 설계

### 22.1 GitHub Pages 제약 대응

전체 문서가 매우 많으므로 검색 인덱스가 커질 수 있다. 단일 Pagefind full-text index가 1GB Pages 제한을 압박할 수 있으므로 단계적으로 설계한다.

### 22.2 검색 단계

#### 1단계: title/path/symbol 전역 검색

```text
검색 대상:
- 문서 제목
- source path
- framework
- API symbol
- heading
```

#### 2단계: framework group별 본문 검색

```text
SwiftUI group search index
UIKit group search index
CoreMotion group search index
...
```

#### 3단계: 통합 검색

전역 검색에서 framework group을 찾고, 해당 group의 본문 검색으로 이동한다.

### 22.3 검색 결과 표시

```text
CMDeviceMotion
Core Motion / Device Motion
한국어 snippet
원문 symbol
번역 상태
```

---

## 23. GitHub Pages 배포 전략

### 23.1 단일 Pages 사이트 전략

가능하면 다음으로 시작한다.

```text
apple-dev-docs-ko-pages
  /docs/...
  /source-maps/...
  /search/...
```

단일 사이트가 1GB를 넘으면 framework group 분할로 전환한다.

### 23.2 multi Pages 분할 전략

```text
apple-dev-docs-ko.github.io                  # central index
apple-dev-docs-ko-swiftui                    # /apple-dev-docs-ko-swiftui/
apple-dev-docs-ko-uikit                      # /apple-dev-docs-ko-uikit/
apple-dev-docs-ko-coremotion                 # /apple-dev-docs-ko-coremotion/
apple-dev-docs-ko-avfoundation               # /apple-dev-docs-ko-avfoundation/
```

중앙 사이트는 전체 navigation과 검색 entry를 제공한다.

### 23.3 same repo GitHub Pages workflow

```yaml
name: Build and Deploy GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - "site/**"
      - "translations/**"
      - "translation-memory/**"
      - ".github/workflows/40-build-pages.yml"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - name: Build site
        run: |
          pnpm tsx scripts/site/build-site-content.ts
          cd site
          pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 23.4 separate public Pages repo 배포

Private automation repo에서 public Pages repo로 정적 결과만 push한다.

```yaml
name: Deploy to Public Pages Repo

on:
  workflow_dispatch:
  push:
    branches:
      - main
    paths:
      - "site/**"
      - "translations/**"
      - "translation-memory/**"

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: corepack enable
      - run: pnpm install --frozen-lockfile
      - run: |
          pnpm tsx scripts/site/build-site-content.ts
          cd site
          pnpm build
      - name: Push dist to public Pages repo
        env:
          PAGES_DEPLOY_TOKEN: ${{ secrets.PAGES_DEPLOY_TOKEN }}
        run: |
          git clone https://x-access-token:${PAGES_DEPLOY_TOKEN}@github.com/<org>/apple-dev-docs-ko-pages.git /tmp/pages
          rsync -a --delete site/dist/ /tmp/pages/
          cd /tmp/pages
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add .
          git commit -m "Deploy Apple Dev Docs KO site" || echo "No changes"
          git push origin main
```

---

## 24. AI 자동 유지보수

### 24.1 자동 유지보수 범위

```text
upstream 변경 감지
변경 파일 추출
변경 segment 추출
AI 재번역
human override 보존
사이트 재렌더링
GitHub Pages 재배포
변경 리포트 생성
```

### 24.2 자동 리포트

`reports/latest.md`

```md
# Apple Dev Docs KO Update Report

## Upstream

- From: abc123
- To: def456

## Summary

- Changed files: 128
- Added files: 12
- Modified files: 116
- Deleted files: 0
- Changed segments: 842
- Translated segments: 810
- Preserved segments: 22
- Failed segments: 10
- Human overrides preserved: 34

## Site

- Pages build: success
- Search index: updated
- Source maps: updated

## Review Needed

- documentation/SensorKit/...
- documentation/SwiftUI/...
```

### 24.3 대량 변경 방어

```yaml
hardStop:
  changedFiles: 5000
  changedSegments: 50000
  deletedFiles: 500
  validationFailRate: 0.05
  codexFailureRate: 0.10

actions:
  onMassChange: "pause_and_report"
  onDeletedFiles: "report_only"
  onValidationSpike: "reduce_concurrency"
```

---

## 25. 설정 파일

### 25.1 `config/project.yaml`

```yaml
project:
  name: "Apple Dev Docs KO"
  context: "Apple Developer Academy @ POSTECH learning project"
  official: false
  affiliation: "none"
  logoPolicy: "no_apple_logo"
  dataCollection: false
```

### 25.2 `config/source.yaml`

```yaml
upstream:
  repo: "https://github.com/Averyy/apple-dev-docs.git"
  branch: "main"
  sourceRoot: "documentation"

scope:
  mode: "all"
  include:
    - "documentation/**/*.md"
  exclude:
    - "**/.DS_Store"
    - "**/*.json"
```

### 25.3 `config/translation.yaml`

```yaml
translation:
  provider: "codex-cli-oauth"
  language: "ko"
  unit: "sentence_segment"
  batchSegments: 20
  batchChars: 12000
  retries: 2
  llmConcurrencyPerRunner: 3
  maxParallelRunnerJobs: 4
  preserveHumanOverrides: true
  renderSourceSentenceMap: true
```

### 25.4 `config/glossary.yaml`

```yaml
preserve:
  - SwiftUI
  - UIKit
  - AppKit
  - Core Motion
  - SensorKit
  - Create ML
  - RealityKit
  - AVFoundation
  - App Store
  - WidgetKit
  - Live Activities
  - API
  - SDK
  - framework
  - protocol
  - struct
  - class
  - enum
  - property
  - method
  - initializer
  - modifier

translations:
  authorization: "권한 부여"
  privacy: "개인정보 보호"
  capability: "기능"
  entitlement: "엔타이틀먼트"
  sample code: "샘플 코드"

style:
  tone: "간결한 한국어 기술 문서체"
  sentenceEnding: "합니다"
  avoid:
    - "당신"
    - "하십시오"
    - "합니다만"
```

### 25.5 `config/site.yaml`

```yaml
site:
  name: "Apple Dev Docs KO"
  deploy: "github-pages"
  framework: "astro"
  sourceView:
    enabled: true
    defaultMode: "ko_only"
    modes:
      - "ko_only"
      - "sentence_popover"
      - "inline_original"
      - "side_by_side"
  disclaimer:
    showTopBar: true
    showDocNotice: true
    showFooter: true
  appleLogo: false
  dataCollection: false
```

---

## 26. 핵심 스크립트 목록

```text
scripts/upstream/sync-upstream.ts
  - upstream clone/fetch
  - latest SHA 확인

scripts/upstream/build-manifest.ts
  - 전체 Markdown 파일 목록 생성
  - 파일별 char/block/segment count 계산

scripts/upstream/diff-files.ts
  - lastProcessedSha와 latestSha diff

scripts/parser/parse-markdown.ts
  - Markdown AST 파싱

scripts/segmenter/split-segments.ts
  - block을 sentence segment로 분해

scripts/segmenter/hash-segments.ts
  - normalized source hash 생성

scripts/translate/build-queue.ts
  - 번역 대상 segment queue 생성

scripts/translate/run-workers.ts
  - Codex worker pool 실행

scripts/translate/codex-worker.ts
  - codex exec 호출

scripts/translate/validate-output.ts
  - JSON schema 및 보존 규칙 검증

scripts/translate/apply-results.ts
  - file-backed translation memory에 결과 반영

scripts/render/render-markdown.ts
  - Korean Markdown 생성

scripts/render/build-source-maps.ts
  - sentence source map 생성

scripts/site/build-site-content.ts
  - Astro content 생성

scripts/site/build-search-index.ts
  - 검색 인덱스 생성

scripts/ops/report-run.ts
  - 실행 리포트 생성
```

---

## 27. 품질 관리

### 27.1 자동 검증

```text
schema validation
source segment count validation
inline code preservation
Markdown link preservation
URL preservation
API symbol preservation
human override preservation
site build validation
source map validation
```

### 27.2 수동 검수

PR에서 확인할 것:

```text
번역 문체가 자연스러운가
API symbol이 번역되지 않았는가
공식 문서처럼 오해될 표현이 없는가
원문 보기 기능이 올바르게 매핑되는가
사람 override가 유지되는가
```

### 27.3 PR 템플릿

```md
## 수정 유형

- [ ] 번역 오탈자 수정
- [ ] 용어 통일
- [ ] 문장 자연화
- [ ] 원문 매핑 오류 수정
- [ ] 사이트 UI 수정

## 수정 범위

문서 경로:

## 확인 사항

- [ ] API symbol을 번역하지 않았습니다.
- [ ] 원문 의미를 추가/삭제하지 않았습니다.
- [ ] 비공식 고지를 훼손하지 않았습니다.
- [ ] Apple 로고 또는 공식 브랜드 요소를 추가하지 않았습니다.
```

---

## 28. 보안 정책

### 28.1 필수

```text
automation repo는 private
Codex OAuth는 self-hosted trusted runner에서만 실행
CODEX_AUTH_JSON 로그 출력 금지
pull_request 이벤트에서 Codex 실행 금지
fork PR 코드 checkout 후 self-hosted runner 실행 금지
auth.json artifact/cache 업로드 금지
CODEX_HOME 권한 700
auth.json 권한 600
```

### 28.2 금지

```text
public repo에서 CODEX_AUTH_JSON 사용
auth.json commit
auth.json PR 첨부
auth.json artifact 업로드
set -x 상태에서 Secret 사용
외부 PR에서 self-hosted runner 실행
```

### 28.3 허용 이벤트

```yaml
on:
  workflow_dispatch:
  schedule:
    - cron: "0 */6 * * *"
```

### 28.4 금지 이벤트

```yaml
on:
  pull_request:
```

단, PR 검증은 GitHub-hosted runner에서 Secret 없이 schema/site build만 수행한다.

---

## 29. 법적·정책 리스크와 대응

### 29.1 리스크

| 리스크 | 설명 | 대응 |
|---|---|---|
| 공식 오인 | Apple 공식 번역처럼 보일 수 있음 | 상단/문서/푸터 고지, Apple 로고 금지 |
| 원문 재배포 | 원문 문장 보기 기능으로 원문 노출 증가 | 기본 OFF, 문장 단위, 공식 링크 제공 |
| Pages 용량 초과 | 전체 문서 배포 시 1GB 초과 가능 | framework group 분할 |
| AI 오역 | 학습자가 잘못된 정보 습득 가능 | 원문 확인 고지, PR 수정 |
| upstream 중단 | Averyy mirror 업데이트 중단 | last snapshot 보존, fallback 계획 |
| OAuth secret 유출 | auth.json 탈취 가능 | private repo, self-hosted runner, strict secret handling |

### 29.2 고지 정책

홈, 모든 문서, 푸터, About, Disclaimer에 고지를 반복한다.

```text
이 사이트는 학습 목적으로 제작된 비공식 번역 프로젝트입니다.
Apple Inc.와 제휴, 후원, 승인 또는 공식 관계가 없습니다.
번역은 AI로 생성·유지보수될 수 있으며 오류가 있을 수 있습니다.
정확한 최신 정보는 공식 Apple Developer Documentation을 확인하세요.
```

---

## 30. 구현 마일스톤

### Phase 0. 기반 구축

목표:

```text
private automation repo 생성
public Pages repo 생성
self-hosted runner 연결
Codex OAuth healthcheck 성공
```

완료 기준:

```text
codex exec OK
CODEX_HOME persistent 확인
GitHub Pages hello world 배포
```

### Phase 1. manifest와 parser

목표:

```text
upstream 전체 Markdown manifest 생성
block/segment parser 구현
segment hash 생성
```

완료 기준:

```text
전체 파일 수 집계
전체 segment 수 집계
shard plan 생성
```

### Phase 2. 번역 POC

목표:

```text
100개 문서 번역
문장 원문 보기 UI 구현
PR override 동작 확인
```

완료 기준:

```text
번역 성공률 97% 이상
source map 정상
site preview 정상
```

### Phase 3. 병렬 번역 안정화

목표:

```text
LLM_CONCURRENCY 3 안정화
runner pool 2대 이상 테스트
matrix shard 처리
```

완료 기준:

```text
401/refresh 오류 없음
validation 실패율 5% 이하
retry 후 실패율 1% 이하
```

### Phase 4. 전체 초기 번역

목표:

```text
전체 문서 file-backed translation memory 생성
전체 framework group 사이트 생성
GitHub Pages 배포
```

완료 기준:

```text
translation-progress 100%
Pages 배포 성공
용량 제한 내 배포 또는 group split 완료
```

### Phase 5. diff 자동 유지보수

목표:

```text
6시간마다 upstream diff 확인
변경 segment만 재번역
Pages 자동 갱신
```

완료 기준:

```text
변경 없을 때 LLM 호출 0회
변경 segment만 번역
human override 보존
```

### Phase 6. 운영 개선

목표:

```text
검색 품질 개선
번역 품질 리포트
문장별 피드백 링크
대시보드 추가
```

---

## 31. 운영 지표

| 지표 | 목표 |
|---|---:|
| 전체 번역 진행률 | 100% |
| 번역 segment 성공률 | 97% 이상 |
| retry 후 실패율 | 1% 이하 |
| sourceHash 동일 재실행 LLM 호출 | 0회 |
| human override 보존율 | 100% |
| Pages 배포 성공률 | 95% 이상 |
| 검색 index build 성공률 | 95% 이상 |
| 문장 원문 매핑 오류 | 1% 이하 |
| code/API symbol 훼손 | 0건 |

---

## 32. 초기 실행 체크리스트

### 32.1 repo

```text
[ ] private automation repo 생성
[ ] public Pages repo 생성
[ ] branch protection 설정
[ ] PR template 추가
[ ] CODEX_AUTH_JSON Secret 추가
[ ] PAGES_DEPLOY_TOKEN Secret 추가
```

### 32.2 runner

```text
[ ] self-hosted runner 설치
[ ] runner label: codex-oauth
[ ] Node.js 22 설치
[ ] pnpm/corepack 활성화
[ ] Codex CLI 설치
[ ] codex login 완료
[ ] CODEX_HOME persistent 확인
```

### 32.3 pipeline

```text
[ ] auth healthcheck 성공
[ ] upstream sync 성공
[ ] manifest 생성 성공
[ ] 10개 문서 번역 성공
[ ] source map 생성 성공
[ ] Pages 배포 성공
```

### 32.4 site

```text
[ ] 홈 고지 표시
[ ] 문서 상단 고지 표시
[ ] Apple 로고 없음
[ ] 문장 원문 보기 작동
[ ] 번역 수정 PR 링크 작동
[ ] 검색 작동
[ ] 모바일 sidebar 작동
```

---

## 33. 최종 권장 실행 순서

```text
1. Private automation repo 생성
2. Public Pages repo 생성
3. self-hosted runner 구성
4. CODEX_AUTH_JSON Secret 등록
5. Codex OAuth healthcheck 통과
6. Averyy/apple-dev-docs manifest 생성
7. parser/segmenter 구현
8. 100개 문서 번역 POC
9. 문장 단위 원문 보기 UI 구현
10. PR override flow 구현
11. 병렬 worker pool 안정화
12. 전체 문서 shard 번역 시작
13. framework group별 Pages 배포
14. upstream diff 자동 유지보수 전환
```

---

## 34. 참고 자료

1. OpenAI Codex CI/CD OAuth auth 유지 가이드  
   https://developers.openai.com/codex/auth/ci-cd-auth

2. OpenAI Codex non-interactive mode  
   https://developers.openai.com/codex/noninteractive

3. OpenAI Codex authentication  
   https://developers.openai.com/codex/auth

4. GitHub Pages publishing source configuration  
   https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

5. GitHub Pages limits and educational exercises  
   https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

6. Averyy/apple-dev-docs  
   https://github.com/Averyy/apple-dev-docs

---

## 35. 최종 결론

이 프로젝트는 다음 구조로 가는 것이 가장 안정적이다.

```text
Averyy/apple-dev-docs upstream diff
+ 전체 초기 번역 shard pipeline
+ Codex CLI OAuth on trusted self-hosted runners
+ sentence-level translation memory
+ sentence-level original source viewer
+ human override PR workflow
+ Astro static documentation site
+ GitHub Pages deployment
+ 명확한 비공식·학습 목적 고지
+ Apple 로고 미사용
```

초기 목표는 전체 번역이지만, 구현은 반드시 shard, queue, worker, checkpoint 기반으로 나눈다. 핵심 성공 조건은 빠른 번역보다 **재시작 가능성, human override 보존, 문장 원문 매핑 정확도, GitHub Pages 용량 관리**다.
