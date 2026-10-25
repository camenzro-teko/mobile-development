import { useState } from 'react';

import { ExampleButton } from '@/components/example-button';
import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

function readNumber(value: string) {
  if (value.trim() === '') {
    return null;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export default function Operatoren() {
  const [aText, setAText] = useState('10');
  const [bText, setBText] = useState('5');
  const [c, setC] = useState(10);
  const a = readNumber(aText);
  const b = readNumber(bText);
  const ready = a != null && b != null;

  return (
    <ExampleScreen
      title="Operatoren"
      intro="Rechnen, vergleichen und Text verbinden. Die Operatoren sind dieselben, das Ergebnis erscheint in der Oberfläche."
      webHint="Im Web siehst du die Resultate in der Konsole. Hier ändern sich die Zeilen, sobald du a oder b tippst.">
      <ExampleField label="a" value={aText} onChangeText={setAText} keyboard="numeric" />
      <ExampleField label="b" value={bText} onChangeText={setBText} keyboard="numeric" />
      {ready ? (
        <>
          <ResultRow label="a + b" value={String(a + b)} />
          <ResultRow label="a - b" value={String(a - b)} />
          <ResultRow label="a * b" value={String(a * b)} />
          <ResultRow label="a / b" value={String(a / b)} />
          <ResultRow label="a % b" value={String(a % b)} />
          <ResultRow label="a == b" value={String(a == b)} />
          <ResultRow label="a != b" value={String(a != b)} />
          <ResultRow label="a > b" value={String(a > b)} />
          <ResultRow label="a <= b" value={String(a <= b)} />
        </>
      ) : (
        <ResultRow label="Ergebnis" value="Bitte zwei Zahlen eingeben." />
      )}
      <ResultRow label="true && false" value={String(true && false)} />
      <ResultRow label="true || false" value={String(true || false)} />
      <ResultRow label="!true" value={String(!true)} />
      <ResultRow label={'"Max" + " " + "Mustermann"'} value={'Max' + ' ' + 'Mustermann'} />
      <ResultRow label="c" value={String(c)} />
      <ExampleButton label="c += 5" onPress={() => setC((value) => value + 5)} variant="outlined" />
      <ExampleButton label="c *= 2" onPress={() => setC((value) => value * 2)} variant="outlined" />
    </ExampleScreen>
  );
}
