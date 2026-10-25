import { useState } from 'react';

import { ExampleButton } from '@/components/example-button';
import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

function sum(a: number, b: number) {
  return a + b;
}

function readNumber(value: string) {
  if (value.trim() === '') {
    return null;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export default function Funktionen() {
  const [left, setLeft] = useState('5');
  const [right, setRight] = useState('7');
  const [error, setError] = useState('Noch kein Fehler.');
  const a = readNumber(left);
  const b = readNumber(right);

  function throwError() {
    try {
      throw new Error('Etwas ist schiefgelaufen');
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught);
      console.error(message);
      setError(message);
    }
  }

  return (
    <ExampleScreen
      title="Funktionen"
      intro="sum(a, b) bleibt eine ganz normale Funktion. try/catch fängt einen Fehler ab und zeigt ihn an."
      webHint="Im Web steht das Ergebnis in der Konsole. Hier rufst du dieselbe Funktion aus der Oberfläche auf.">
      <ExampleField label="a" value={left} onChangeText={setLeft} keyboard="numeric" />
      <ExampleField label="b" value={right} onChangeText={setRight} keyboard="numeric" />
      <ResultRow
        label="sum(a, b)"
        value={a != null && b != null ? String(sum(a, b)) : 'Bitte zwei Zahlen eingeben.'}
      />
      <ExampleButton label="Fehler auslösen" onPress={throwError} />
      <ResultRow label="catch" value={error} />
    </ExampleScreen>
  );
}
