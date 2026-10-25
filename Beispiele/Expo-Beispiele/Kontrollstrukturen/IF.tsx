import { useState } from 'react';
import { Text, View } from 'react-native';

import { ExampleField } from '@/components/example-field';
import { ExampleScreen } from '@/components/example-screen';
import { Spacing, useTheme } from '@/constants/theme';

function readAge(value: string) {
  if (value.trim() === '' || !Number.isFinite(Number(value))) {
    return null;
  }
  return Number(value);
}

export default function IfBeispiel() {
  const theme = useTheme();
  const [ageText, setAgeText] = useState('20');
  const age = readAge(ageText);

  return (
    <ExampleScreen
      title="if"
      intro="if entscheidet, welcher Bildschirmteil erscheint. Ab 18 gilt die Person als erwachsen."
      webHint="Im Web schreibt if in die Konsole. In der App wählt if aus, welche View gerendert wird.">
      <ExampleField label="Alter" value={ageText} onChangeText={setAgeText} keyboard="numeric" />
      {age == null ? (
        <Text selectable style={{ color: theme.secondaryLabel }}>
          Bitte ein Alter eingeben.
        </Text>
      ) : age >= 18 ? (
        <View
          style={{
            backgroundColor: theme.secondarySystemBackground,
            padding: Spacing.three,
            borderRadius: Spacing.three,
            borderCurve: 'continuous',
            gap: Spacing.one,
          }}>
          <Text selectable style={{ color: theme.label, fontSize: 16, fontWeight: '600' }}>
            Erwachsen
          </Text>
          <Text selectable style={{ color: theme.secondaryLabel }}>
            Zugang frei.
          </Text>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: theme.secondarySystemBackground,
            padding: Spacing.three,
            borderRadius: Spacing.three,
            borderCurve: 'continuous',
            gap: Spacing.one,
          }}>
          <Text selectable style={{ color: theme.label, fontSize: 16, fontWeight: '600' }}>
            Minderjährig
          </Text>
          <Text selectable style={{ color: theme.secondaryLabel }}>
            Zugang gesperrt.
          </Text>
        </View>
      )}
    </ExampleScreen>
  );
}
