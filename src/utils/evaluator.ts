import type { RegexFlags, MatchResult } from "../types/regex";

export function evaluateRegex(
  pattern: string,
  flags: RegexFlags,
  testString: string,
): { matches: MatchResult[]; error: string | null } {
  if (!pattern) {
    return { matches: [], error: null };
  }

  let flagString = "";
  if (flags.global) flagString += "g";
  if (flags.ignoreCase) flagString += "i";
  if (flags.multiline) flagString += "m";
  if (flags.dotAll) flagString += "s";
  if (flags.unicode) flagString += "u";

  try {
    const regex = new RegExp(pattern, flagString);
    const matches: MatchResult[] = [];

    if (flags.global) {
      let match: RegExpExecArray | null;
      let safetyCounter = 0; // prevent infinite loops on zero-width matches
      while (
        (match = regex.exec(testString)) !== null &&
        safetyCounter < 1000
      ) {
        matches.push({
          index: match.index,
          match: match[0],
          groups: match.slice(1),
          namedGroups: match.groups ? { ...match.groups } : undefined,
        });
        if (match.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        safetyCounter++;
      }
    } else {
      const match = regex.exec(testString);
      if (match) {
        matches.push({
          index: match.index,
          match: match[0],
          groups: match.slice(1),
          namedGroups: match.groups ? { ...match.groups } : undefined,
        });
      }
    }

    return { matches, error: null };
  } catch (err: unknown) {
    return {
      matches: [],
      error: err instanceof Error ? err.message : "Invalid Regular Expression",
    };
  }
}
