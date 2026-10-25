import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { ExampleButton } from '@/components/example-button';
import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';
import { Spacing, useTheme } from '@/constants/theme';

type DialogKind = 'hint' | 'question' | 'name' | null;

export default function JavaScriptDialog() {
  const theme = useTheme();
  const [dialog, setDialog] = useState<DialogKind>(null);
  const [name, setName] = useState('');
  const [result, setResult] = useState('Noch kein Dialog bestätigt.');

  function close() {
    setDialog(null);
    setName('');
  }

  function confirmHint() {
    setResult('Hinweis: OK');
    close();
  }

  function confirmQuestion(answer: 'OK' | 'Abbrechen') {
    setResult(`Nachfrage: ${answer}`);
    close();
  }

  function confirmName() {
    setResult(name.trim() === '' ? 'Eingabe: abgebrochen' : `Eingabe: ${name.trim()}`);
    close();
  }

  return (
    <>
      <ExampleScreen
        title="Dialoge"
        intro="Ein Dialog liegt über der Seite. Alert.alert gibt es nur auf dem Handy und fehlt im Browser – darum ist das hier ein Modal.">
        <ExampleButton label="Hinweis zeigen" onPress={() => setDialog('hint')} />
        <ExampleButton label="Nachfrage zeigen" onPress={() => setDialog('question')} variant="outlined" />
        <ExampleButton label="Name abfragen" onPress={() => setDialog('name')} variant="outlined" />
        <ResultRow label="Letzte Antwort" value={result} />
      </ExampleScreen>

      <Modal visible={dialog != null} transparent animationType="fade" onRequestClose={close}>
        <View style={styles.backdrop}>
          <View style={[styles.card, { backgroundColor: theme.systemBackground }]}>
            {dialog === 'hint' ? (
              <>
                <Text style={[styles.title, { color: theme.label }]}>Hinweis</Text>
                <Text style={[styles.message, { color: theme.secondaryLabel }]}>Hallo Welt</Text>
                <Pressable
                  onPress={confirmHint}
                  style={({ pressed }) => [
                    styles.action,
                    { backgroundColor: theme.secondarySystemBackground, opacity: pressed ? 0.7 : 1 },
                  ]}>
                  <Text style={[styles.actionLabel, { color: theme.label }]}>OK</Text>
                </Pressable>
              </>
            ) : null}

            {dialog === 'question' ? (
              <>
                <Text style={[styles.title, { color: theme.label }]}>Nachfrage</Text>
                <Text style={[styles.message, { color: theme.secondaryLabel }]}>
                  Möchten Sie weiter machen?
                </Text>
                <View style={styles.actions}>
                  <Pressable
                    onPress={() => confirmQuestion('Abbrechen')}
                    style={({ pressed }) => [
                      styles.action,
                      styles.actionGrow,
                      { backgroundColor: theme.secondarySystemBackground, opacity: pressed ? 0.7 : 1 },
                    ]}>
                    <Text style={[styles.actionLabel, { color: theme.label }]}>Abbrechen</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => confirmQuestion('OK')}
                    style={({ pressed }) => [
                      styles.action,
                      styles.actionGrow,
                      { backgroundColor: theme.secondarySystemBackground, opacity: pressed ? 0.7 : 1 },
                    ]}>
                    <Text style={[styles.actionLabel, { color: theme.label }]}>OK</Text>
                  </Pressable>
                </View>
              </>
            ) : null}

            {dialog === 'name' ? (
              <>
                <Text style={[styles.title, { color: theme.label }]}>Name</Text>
                <Text style={[styles.message, { color: theme.secondaryLabel }]}>
                  Bitte geben Sie Ihren Namen ein.
                </Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Name"
                  placeholderTextColor={theme.secondaryLabel}
                  autoFocus
                  style={[
                    styles.input,
                    { color: theme.label, backgroundColor: theme.secondarySystemBackground },
                  ]}
                />
                <View style={styles.actions}>
                  <Pressable
                    onPress={close}
                    style={({ pressed }) => [
                      styles.action,
                      styles.actionGrow,
                      { backgroundColor: theme.secondarySystemBackground, opacity: pressed ? 0.7 : 1 },
                    ]}>
                    <Text style={[styles.actionLabel, { color: theme.label }]}>Abbrechen</Text>
                  </Pressable>
                  <Pressable
                    onPress={confirmName}
                    style={({ pressed }) => [
                      styles.action,
                      styles.actionGrow,
                      { backgroundColor: theme.secondarySystemBackground, opacity: pressed ? 0.7 : 1 },
                    ]}>
                    <Text style={[styles.actionLabel, { color: theme.label }]}>OK</Text>
                  </Pressable>
                </View>
              </>
            ) : null}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    padding: Spacing.four,
  },
  card: {
    borderRadius: Spacing.three,
    borderCurve: 'continuous',
    padding: Spacing.four,
    gap: Spacing.three,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  message: {
    fontSize: 16,
    lineHeight: 22,
  },
  input: {
    borderRadius: Spacing.two,
    borderCurve: 'continuous',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  action: {
    minHeight: 48,
    borderRadius: Spacing.two,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
  },
  actionGrow: {
    flex: 1,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
