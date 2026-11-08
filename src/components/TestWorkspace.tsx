import React from "react";

interface TestWorkspaceProps {
  testString: string;
  setTestString: (s: string) => void;
}

export const TestWorkspace: React.FC<TestWorkspaceProps> = ({
  testString,
  setTestString,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3 flex-1 flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          Test String Corpus
        </h2>
        <span className="text-[10px] text-slate-500">
          {testString.length} characters
        </span>
      </div>
      <textarea
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
        rows={6}
        placeholder="Paste log entries, code snippets, or text corpus here..."
        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-purple-500 flex-1 resize-none"
      />
    </div>
  );
};
