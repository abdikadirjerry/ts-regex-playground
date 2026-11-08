import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold shadow-lg shadow-purple-950/50">
          REX
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 tracking-wider uppercase">
            TS-REGEX // Pattern Debugger
          </h1>
          <p className="text-[10px] text-slate-400">
            ADVANCED REGEX WORKSPACE & EVALUATION ENGINE
          </p>
        </div>
      </div>
      <div className="text-xs text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
        Status:{" "}
        <span className="text-purple-400 font-bold">● Engine Active</span>
      </div>
    </header>
  );
};
