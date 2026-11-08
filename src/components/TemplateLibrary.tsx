import React from "react";
import { REGEX_TEMPLATES } from "../utils/templates";
import type { RegexTemplate } from "../types/regex";

interface TemplateLibraryProps {
  onSelectTemplate: (template: RegexTemplate) => void;
}

export const TemplateLibrary: React.FC<TemplateLibraryProps> = ({
  onSelectTemplate,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-3">
      <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
        Curated Security & Web Templates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {REGEX_TEMPLATES.map((tmpl) => (
          <button
            key={tmpl.id}
            onClick={() => onSelectTemplate(tmpl)}
            className="text-left bg-slate-950 border border-slate-800 hover:border-purple-500/50 p-3 rounded-xl transition-all group space-y-1.5"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-200 group-hover:text-purple-300 transition-colors">
                {tmpl.title}
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-purple-400 border border-slate-800">
                {tmpl.category}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 line-clamp-2">
              {tmpl.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
