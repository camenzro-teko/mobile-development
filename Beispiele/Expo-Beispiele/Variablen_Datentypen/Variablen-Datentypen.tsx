import { Host, Switch } from '@expo/ui';
import { useState } from 'react';

import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

function describe(value: unknown) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  return `${String(value)}  (${typeof value})`;
}

export default function VariablenDatentypen() {
  const [ageText, setAgeText] = useState('30');
  const [name, setName] = useState('Max Mustermann');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userText, setUserText] = useState('');
  const [myVarText, setMyVarText] = useState('');

  const age = Number(ageText);
  const user = userText.trim() === '' ? null : userText;
  const myVar = myVarText.trim() === '' ? undefined : myVarText;

  return (
    <ExampleScreen
      title="Variablen"
      intro="Zahl, String, Boolean, null und undefined. Ändere die Werte, der Typ steht daneben."
      webHint="Im Web setzt du let und schaust in die Konsole. Hier ändert useState den Wert, die Zeile darunter zeigt sofort den neuen Stand.">
      <ExampleField label="age (Zahl)" value={ageText} onChangeText={setAgeText} keyboard="numeric" />
      <ResultRow
        label="age"
        value={Number.isFinite(age) && ageText.trim() !== '' ? describe(age) : 'keine Zahl'}
      />
      <ExampleField label="name (String)" value={name} onChangeText={setName} />
      <ResultRow label="name" value={describe(name)} />
      <Host matchContents>
        <Switch label="isLoggedIn (Boolean)" value={isLoggedIn} onValueChange={setIsLoggedIn} />
      </Host>
      <ResultRow label="isLoggedIn" value={describe(isLoggedIn)} />
      <ExampleField
        label="user (leer = null)"
        value={userText}
        onChangeText={setUserText}
        placeholder="nichts eingegeben → null"
      />
      <ResultRow label="user" value={describe(user)} />
      <ExampleField
        label="myVar (leer = undefined)"
        value={myVarText}
        onChangeText={setMyVarText}
        placeholder="nichts eingegeben → undefined"
      />
      <ResultRow label="myVar" value={describe(myVar)} />
    </ExampleScreen>
  );
}
