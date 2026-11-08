import React from "react";
import type { RegexFlags } from "../types/regex";

interface PatternEditorProps {
  pattern: string;
  setPattern: (p: string) => void;
  flags: RegexFlags;
  setFlags: React.Dispatch<React.SetStateAction<RegexFlags>>;
  error: string | null;
}

export const PatternEditor: React.FC<PatternEditorProps> = ({
  pattern,
  setPattern,
  flags,
  setFlags,
  error,
}) => {
  const toggleFlag = (key: keyof RegexFlags) => {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
          Regular Expression Pattern
        </h2>
        <div className="flex gap-2 text-[11px]">
          {(Object.keys(flags) as (keyof RegexFlags)[]).map((flagKey) => {
            const flagLetter =
              flagKey === "global"
                ? "g"
                : flagKey === "ignoreCase"
                  ? "i"
                  : flagKey === "multiline"
                    ? "m"
                    : flagKey === "dotAll"
                      ? "s"
                      : "u";
            return (
              <button
                key={flagKey}
                onClick={() => toggleFlag(flagKey)}
                className={`px-2.5 py-1 rounded-lg border font-bold transition-all ${
                  flags[flagKey]
                    ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                    : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"
                }`}
                title={`Toggle ${flagKey}`}
              >
                {flagLetter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <span className="absolute left-3 top-3 text-slate-500 font-bold">
          /
        </span>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Enter regex pattern (e.g., ^[a-z]+$)"
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-12 py-2.5 text-xs text-slate-100 font-mono focus:outline-none focus:border-purple-500"
        />
        <span className="absolute right-3 top-3 text-slate-500 font-bold">
          /
        </span>
      </div>

      {error && (
        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 font-mono">
          ⚠️ Syntax Error: {error}
        </div>
      )}
    </div>
  );
};
