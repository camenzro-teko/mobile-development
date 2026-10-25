import { Host, Switch } from '@expo/ui';
import { useState } from 'react';

import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

export default function VariablenDatentypen() {
  const age = 30;
  const name = 'Max Mustermann';
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = null;
  const myVar = undefined;

  return (
    <ExampleScreen
      title="Variablen"
      intro="Zahl, String, Boolean, null und undefined funktionieren in der App genau so wie im Browser."
      webHint="Im Web landet der Wert in console.log. Hier steht er in einem Text auf dem Bildschirm. Ein Boolean kannst du mit einem Schalter ändern.">
      <ResultRow label="age (Zahl)" value={String(age)} />
      <ResultRow label="name (String)" value={name} />
      <Host matchContents>
        <Switch label="isLoggedIn (Boolean)" value={isLoggedIn} onValueChange={setIsLoggedIn} />
      </Host>
      <ResultRow label="isLoggedIn" value={String(isLoggedIn)} />
      <ResultRow label="user (null)" value={String(user)} />
      <ResultRow label="myVar (undefined)" value={String(myVar)} />
    </ExampleScreen>
  );
}
