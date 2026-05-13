export type BlockType =
  | "frontmatter"
  | "heading"
  | "paragraph"
  | "list"
  | "blockquote"
  | "table"
  | "code"
  | "html"
  | "horizontal_rule";

export type SegmentStatus =
  | "preserved"
  | "machine_translated"
  | "human_reviewed"
  | "human_edited"
  | "locked"
  | "needs_review"
  | "failed";

export interface ProjectConfig {
  project: {
    name: string;
    context: string;
    official: boolean;
    affiliation: string;
    logoPolicy: string;
    dataCollection: boolean;
    storage: string;
  };
}

export interface SourceConfig {
  upstream: {
    repo: string;
    branch: string;
    sourceRoot: string;
    cacheDir: string;
  };
  scope: {
    mode: string;
    include: string[];
    exclude: string[];
  };
}

export interface TranslationConfig {
  translation: {
    provider: string;
    language: string;
    unit: string;
    memoryDir: string;
    batchSegments: number;
    batchChars: number;
    retries: number;
    llmConcurrencyPerRunner: number;
    maxParallelRunnerJobs: number;
    preserveHumanOverrides: boolean;
    renderSourceSentenceMap: boolean;
    allowMockTranslator: boolean;
    gemini?: {
      model: string;
      reviewerModel: string;
      reviewEnabled: boolean;
      reviewSampleRate: number;
      inputPricePerMillionTokens: number;
      outputPricePerMillionTokens: number;
    };
  };
}

export interface SiteConfig {
  site: {
    name: string;
    deploy: string;
    framework: string;
    base: string;
    sourceView: {
      enabled: boolean;
      defaultMode: string;
      publicSourcePolicy: "ko_only_public" | "sentence_source_public";
      modes: string[];
    };
    disclaimer: {
      showTopBar: boolean;
      showDocNotice: boolean;
      showFooter: boolean;
    };
    appleLogo: boolean;
    dataCollection: boolean;
  };
}

export interface UpstreamState {
  repo: string;
  branch: string;
  latestSha: string;
  lastSeenSha?: string;
  lastProcessedSha?: string;
  status?: string;
  updatedAt: string;
}

export interface ManifestFile {
  sourcePath: string;
  sourceFileHash: string;
  bytes: number;
  chars: number;
  lineCount: number;
  framework: string;
  title: string;
  officialUrl: string;
  estimatedSegments?: number;
}

export interface Manifest {
  generatedAt: string;
  upstream: UpstreamState;
  files: ManifestFile[];
}

export interface SegmentMeta {
  level?: number;
  marker?: string;
  tableRow?: number;
  tableCell?: number;
  isTableDivider?: boolean;
}

export interface Segment {
  id: string;
  blockId: string;
  type: string;
  source: string;
  normalizedSource: string;
  sourceHash: string;
  translatable: boolean;
  preserveReason?: string;
  contextBefore: string;
  contextAfter: string;
  documentTitle: string;
  framework: string;
  meta?: SegmentMeta;
}

export interface ParsedBlock {
  id: string;
  type: BlockType;
  headingAnchor: string;
  sequence: number;
  rawMarkdown: string;
  segments: Segment[];
  meta?: {
    level?: number;
    tableRows?: string[][];
    tableDividerIndex?: number;
  };
}

export interface ParsedDocument {
  sourcePath: string;
  title: string;
  framework: string;
  officialUrl: string;
  upstreamSha: string;
  frontmatter: Record<string, unknown>;
  blocks: ParsedBlock[];
}

export interface TranslationMemorySegment extends Segment {
  ko: string;
  status: SegmentStatus;
  reviewed: boolean;
  locked: boolean;
  translatedAt?: string;
  translator?: string;
  previousSourceHash?: string;
  aiSuggestion?: string;
  validationErrors?: string[];
}

export interface TranslationMemoryFile {
  sourcePath: string;
  targetPath: string;
  sourceUrl: string;
  upstreamSha: string;
  sourceFileHash: string;
  status: "pending" | "translated" | "partial" | "failed";
  translatedAt?: string;
  reviewStatus: "machine_translated" | "human_edited" | "needs_review";
  segments: TranslationMemorySegment[];
}

export interface OverrideFile {
  sourcePath: string;
  updatedBy?: string;
  updatedAt?: string;
  segments: Record<string, { ko: string; reason?: string; locked?: boolean }>;
}

export interface TranslationBatchInput {
  task: "translate_apple_developer_docs_segments_to_korean";
  projectContext: {
    purpose: string;
    audience: string;
    style: string;
  };
  rules: Record<string, boolean | string>;
  glossary: Record<string, string[] | Record<string, string>>;
  segments: Array<{
    sourcePath: string;
    id: string;
    source: string;
    contextBefore: string;
    contextAfter: string;
    documentTitle: string;
    framework: string;
  }>;
}

export interface TranslationBatchOutput {
  segments: Array<{ sourcePath?: string; id: string; ko: string }>;
}

export interface QueueBatchFileRef {
  path: string;
  index: number;
  segments: number;
}

export type QueueBatch = TranslationBatchInput | QueueBatchFileRef;

export interface QueueFile {
  generatedAt: string;
  shard?: {
    index: number;
    total: number;
  };
  sourcePaths: string[];
  batches: QueueBatch[];
  summary: {
    totalSegments: number;
    toTranslate: number;
    skipped: number;
    preserved: number;
    locked: number;
  };
}

export interface SourceMapFile {
  docId: string;
  title: string;
  upstreamSha: string;
  officialUrl: string;
  segments: Array<{
    id: string;
    source?: string;
    ko: string;
    sourceHash: string;
    status: SegmentStatus;
  }>;
}
