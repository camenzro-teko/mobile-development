import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

function halloInline() {
  return 'Hallo Welt';
}

export default function JavaScriptInline() {
  return (
    <ExampleScreen
      title="JavaScript inline"
      intro="Die Funktion steht in derselben Datei wie die Oberfläche und wird direkt aufgerufen."
      webHint="Im Browser liegt der Code im script-Tag der HTML-Datei. In Expo gehört er in die .tsx-Datei, die den Screen zeichnet.">
      <ResultRow label="halloInline()" value={halloInline()} />
    </ExampleScreen>
  );
}
