import { CodeBlock } from '@/components/code-block';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

import { halloWelt } from './main';

export default function JavaScriptExtern() {
  return (
    <ExampleScreen
      title="JavaScript extern"
      intro="Ausgelagerter Code kommt per import, nicht über ein script-src."
      webHint="Im Browser lädt <script src='main.js'>. Hier importiert die Datei ./main.ts. Der Ordner ist derselbe wie beim Web-Beispiel.">
      <CodeBlock code={`import { halloWelt } from "./main";`} />
      <ResultRow label="halloWelt() aus main.ts" value={halloWelt()} />
    </ExampleScreen>
  );
}
