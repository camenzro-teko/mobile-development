import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';
import { Spacing, useTheme } from '@/constants/theme';

const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

function describeDay(day: number) {
  switch (day) {
    case 0:
      return 'Heute ist Sonntag';
    case 1:
      return 'Heute ist Montag';
    case 2:
      return 'Heute ist Dienstag';
    case 3:
      return 'Heute ist Mittwoch';
    case 4:
      return 'Heute ist Donnerstag';
    case 5:
      return 'Heute ist Freitag';
    case 6:
      return 'Heute ist Samstag';
    default:
      return 'Ungültiger Tag';
  }
}

export default function SwitchBeispiel() {
  const theme = useTheme();
  const [day, setDay] = useState(new Date().getDay());

  return (
    <ExampleScreen
      title="switch"
      intro="switch vergleicht einen Wert mit mehreren Fällen. 0 ist Sonntag, wie Date.getDay() im Web."
      webHint="Im Web kommt der Wochentag aus new Date().getDay() und landet in der Konsole. Hier wählst du den Tag und siehst den Text sofort.">
      <View style={styles.days}>
        {days.map((name, index) => (
          <Pressable key={name} onPress={() => setDay(index)} style={({ pressed }) => pressed && styles.pressed}>
            <View
              style={[
                styles.day,
                {
                  backgroundColor:
                    day === index ? theme.tertiarySystemBackground : theme.secondarySystemBackground,
                },
              ]}>
              <Text style={{ color: theme.label }}>{name}</Text>
            </View>
          </Pressable>
        ))}
        <Pressable onPress={() => setDay(-1)} style={({ pressed }) => pressed && styles.pressed}>
          <View
            style={[
              styles.day,
              {
                backgroundColor:
                  day === -1 ? theme.tertiarySystemBackground : theme.secondarySystemBackground,
              },
            ]}>
            <Text style={{ color: theme.label }}>Ungültig</Text>
          </View>
        </Pressable>
      </View>
      <ResultRow label={`day = ${day}`} value={describeDay(day)} />
    </ExampleScreen>
  );
}

const styles = StyleSheet.create({
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  day: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    borderCurve: 'continuous',
  },
  pressed: {
    opacity: 0.7,
  },
});
