import React, { useState } from 'react';
import type { RegexFlags, RegexTemplate } from './types/regex';
import { evaluateRegex } from './utils/evaluator';
import { REGEX_TEMPLATES } from './utils/templates';
import { Header } from './components/Header';
import { PatternEditor } from './components/PatternEditor';
import { TestWorkspace } from './components/TestWorkspace';
import { MatchInspector } from './components/MatchInspector';
import { TemplateLibrary } from './components/TemplateLibrary';

export const App: React.FC = () => {
  const [pattern, setPattern] = useState<string>(REGEX_TEMPLATES[0].pattern);
  const [flags, setFlags] = useState<RegexFlags>({
    global: true,
    ignoreCase: false,
    multiline: true,
    dotAll: false,
    unicode: false,
  });
  const [testString, setTestString] = useState<string>(REGEX_TEMPLATES[0].sampleText);

  const { matches, error } = evaluateRegex(pattern, flags, testString);

  const handleSelectTemplate = (tmpl: RegexTemplate) => {
    setPattern(tmpl.pattern);
    setTestString(tmpl.sampleText);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex flex-col selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6 flex flex-col">
        <TemplateLibrary onSelectTemplate={handleSelectTemplate} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col space-y-6">
            <PatternEditor
              pattern={pattern}
              setPattern={setPattern}
              flags={flags}
              setFlags={setFlags}
              error={error}
            />
            <TestWorkspace testString={testString} setTestString={setTestString} />
          </div>

          <div className="flex flex-col">
            <MatchInspector matches={matches} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;