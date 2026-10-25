import { useState } from 'react';

import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

function readCount(value: string) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1 || number > 8) {
    return null;
  }
  return number;
}

export default function Schleifen() {
  const [countText, setCountText] = useState('5');
  const count = readCount(countText);

  const forLines: string[] = [];
  if (count != null) {
    for (let i = 0; i < count; i++) {
      forLines.push(`for: ${i}`);
    }
  }

  const whileLines: string[] = [];
  if (count != null) {
    let x = count;
    while (x > 0) {
      whileLines.push(`while: ${x}`);
      x--;
    }
  }

  const doWhileLines: string[] = [];
  if (count != null) {
    let x = count;
    do {
      doWhileLines.push(`do-while: ${x}`);
      x--;
    } while (x > 0);
  }

  return (
    <ExampleScreen
      title="Schleifen"
      intro="for, while und do-while bauen eine Liste. Danach zeichnet .map() jede Zeile."
      webHint="Im Web schreibt die Schleife nach console.log. In React Native sammelst du die Werte und renderst sie mit map().">
      <ExampleField
        label="Wiederholungen (1–8)"
        value={countText}
        onChangeText={setCountText}
        keyboard="numeric"
      />
      {count == null ? (
        <ResultRow label="Schleifen" value="Bitte eine ganze Zahl von 1 bis 8 eingeben." />
      ) : (
        <>
          {forLines.map((line) => (
            <ResultRow key={line} label="for" value={line} />
          ))}
          {whileLines.map((line) => (
            <ResultRow key={line} label="while" value={line} />
          ))}
          {doWhileLines.map((line) => (
            <ResultRow key={line} label="do-while" value={line} />
          ))}
        </>
      )}
    </ExampleScreen>
  );
}
