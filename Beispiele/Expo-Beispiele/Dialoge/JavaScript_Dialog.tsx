import { useState } from 'react';
import { Alert } from 'react-native';

import { ExampleButton } from '@/components/example-button';
import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

export default function JavaScriptDialog() {
  const [result, setResult] = useState('Noch keine Antwort.');
  const [name, setName] = useState('');
  const canUsePrompt = process.env.EXPO_OS === 'ios';

  function showAlert() {
    Alert.alert('Hallo Welt');
    setResult('Hallo Welt');
  }

  function showConfirm() {
    Alert.alert('Weiter?', 'Moechten Sie die Seite neu laden?', [
      { text: 'Abbrechen', style: 'cancel', onPress: () => setResult('Abbrechen') },
      { text: 'OK', onPress: () => setResult('OK') },
    ]);
  }

  function showPrompt() {
    if (canUsePrompt) {
      Alert.prompt('Bitte geben Sie Ihren Namen ein:', undefined, (value) => {
        setResult(value == null || value === '' ? 'Abgebrochen' : `Name: ${value}`);
      });
      return;
    }
    setResult(name.trim() === '' ? 'Bitte zuerst einen Namen eingeben.' : `Name: ${name.trim()}`);
  }

  return (
    <ExampleScreen
      title="Dialoge"
      intro="Alert.alert ersetzt window.alert und confirm. Eine Texteingabe ersetzt prompt, ausser auf iOS."
      webHint="Im Browser gibt es alert, confirm und prompt. In der App kommt der Systemdialog von React Native. Android und Web haben kein Alert.prompt, deshalb steht dort ein Textfeld.">
      <ExampleButton label="Hinweis (alert)" onPress={showAlert} />
      <ExampleButton label="Nachfrage (confirm)" onPress={showConfirm} variant="outlined" />
      {canUsePrompt ? null : (
        <ExampleField label="Name (statt prompt)" value={name} onChangeText={setName} placeholder="Name" />
      )}
      <ExampleButton
        label={canUsePrompt ? 'Eingabe (prompt)' : 'Name übernehmen'}
        onPress={showPrompt}
        variant="outlined"
      />
      <ResultRow label="Antwort" value={result} />
    </ExampleScreen>
  );
}
