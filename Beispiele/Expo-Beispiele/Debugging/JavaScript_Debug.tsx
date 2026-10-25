import { ExampleButton } from '@/components/example-button';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

export default function JavaScriptDebug() {
  function write(kind: 'log' | 'warn' | 'error', message: string) {
    if (kind === 'log') {
      console.log(message);
    } else if (kind === 'warn') {
      console.warn(message);
    } else {
      console.error(message);
    }
  }

  return (
    <ExampleScreen
      title="Debugging"
      intro="console.log, console.warn und console.error funktionieren in Expo wie im Browser."
      webHint="Im Web öffnest du die Browser-Konsole. Hier erscheinen dieselben Aufrufe im Metro-Terminal. Am Gerät: schütteln oder in Expo Go das Entwicklermenü öffnen.">
      <ExampleButton label="console.log" onPress={() => write('log', 'Logging!')} variant="outlined" />
      <ExampleButton label="console.warn" onPress={() => write('warn', 'Waring!!')} variant="outlined" />
      <ExampleButton label="console.error" onPress={() => write('error', 'Error!!!')} variant="outlined" />
      <ResultRow label="Wohin?" value="Ausgabe steht im Terminal, nicht auf diesem Screen." />
    </ExampleScreen>
  );
}
