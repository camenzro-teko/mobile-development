import { useState } from 'react';
import { Text } from 'react-native';

import { ExampleButton } from '@/components/example-button';
import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';

function validateName(name: string) {
  if (name.trim() === '') {
    return 'Bitte geben Sie einen Namen ein.';
  }
  return '';
}

export default function FormularValidierung() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function changeName(value: string) {
    setName(value);
    if (error !== '') {
      setError(validateName(value));
    }
    if (success !== '') {
      setSuccess('');
    }
  }

  function submit() {
    const message = validateName(name);
    setError(message);
    setSuccess(message === '' ? 'Formular erfolgreich abgeschickt!' : '');
  }

  return (
    <ExampleScreen
      title="Formular"
      intro="Der Name liegt in useState. Vor dem Absenden prüft validateName, ob das Feld leer ist."
      webHint="Im Web holst du den Wert mit getElementById und schreibst den Fehler in ein span. Hier gibt es kein DOM: TextInput ändert den State, der Fehler ist ein Text darunter.">
      <ExampleField label="Name" value={name} onChangeText={changeName} placeholder="Name" />
      {error !== '' ? (
        <Text selectable style={{ color: '#ff3b30' }}>
          {error}
        </Text>
      ) : null}
      <ExampleButton label="Absenden" onPress={submit} />
      {success !== '' ? <Text selectable>{success}</Text> : null}
    </ExampleScreen>
  );
}
