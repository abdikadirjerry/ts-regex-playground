import React from "react";
import type { MatchResult } from "../types/regex";

interface MatchInspectorProps {
  matches: MatchResult[];
}

export const MatchInspector: React.FC<MatchInspectorProps> = ({ matches }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          Match Inspector
        </h2>
        <span className="text-[10px] text-purple-400 font-bold">
          {matches.length} Matches Found
        </span>
      </div>

      <div className="p-4 overflow-y-auto space-y-3 max-h-[380px]">
        {matches.length > 0 ? (
          matches.map((m, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl space-y-2"
            >
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-purple-400 font-bold">
                  Match #{idx + 1}
                </span>
                <span className="text-slate-500">Index: {m.index}</span>
              </div>
              <div className="bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 border border-slate-800">
                {m.match}
              </div>
              {m.groups.length > 0 && m.groups.some((g) => g !== undefined) && (
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Capture Groups:
                  </span>
                  <div className="grid grid-cols-2 gap-1">
                    {m.groups.map((group, gIdx) => (
                      <div
                        key={gIdx}
                        className="bg-slate-900/60 px-2 py-1 rounded text-[11px] text-slate-300 font-mono"
                      >
                        <strong className="text-purple-400">
                          ${gIdx + 1}:
                        </strong>{" "}
                        {group ?? "undefined"}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-slate-500 text-xs">
            No matches detected for the current pattern.
          </div>
        )}
      </div>
    </div>
  );
};
