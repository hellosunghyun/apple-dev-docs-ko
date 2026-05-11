import { readYaml, resolveRoot } from "./fs.js";
import type { ProjectConfig, SiteConfig, SourceConfig, TranslationConfig } from "./types.js";

export async function loadProjectConfig(): Promise<ProjectConfig> {
  return readYaml<ProjectConfig>(resolveRoot("config/project.yaml"));
}

export async function loadSourceConfig(): Promise<SourceConfig> {
  return readYaml<SourceConfig>(resolveRoot("config/source.yaml"));
}

export async function loadTranslationConfig(): Promise<TranslationConfig> {
  return readYaml<TranslationConfig>(resolveRoot("config/translation.yaml"));
}

export async function loadSiteConfig(): Promise<SiteConfig> {
  return readYaml<SiteConfig>(resolveRoot("config/site.yaml"));
}

export async function loadGlossary(): Promise<Record<string, unknown>> {
  return readYaml<Record<string, unknown>>(resolveRoot("config/glossary.yaml"));
}

