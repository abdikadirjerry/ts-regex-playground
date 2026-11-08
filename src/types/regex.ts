export interface RegexFlags {
  global: boolean;
  ignoreCase: boolean;
  multiline: boolean;
  dotAll: boolean;
  unicode: boolean;
}

export interface MatchResult {
  index: number;
  match: string;
  groups: (string | undefined)[];
  namedGroups: Record<string, string> | undefined;
}

export interface RegexTemplate {
  id: string;
  title: string;
  category: "Security" | "Web" | "Data";
  pattern: string;
  description: string;
  sampleText: string;
}
