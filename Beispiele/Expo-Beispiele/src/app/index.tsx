import { Link, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';

const examples: { href: Href; title: string; folder: string }[] = [
  { href: '/variablen-datentypen', title: 'Variablen und Datentypen', folder: 'Variablen_Datentypen' },
  { href: '/giessen', title: 'useState', folder: 'useState' },
  { href: '/operatoren', title: 'Operatoren', folder: 'Operatoren' },
  { href: '/if', title: 'if', folder: 'Kontrollstrukturen' },
  { href: '/switch', title: 'switch', folder: 'Kontrollstrukturen' },
  { href: '/schleifen', title: 'Schleifen', folder: 'Kontrollstrukturen' },
  { href: '/funktionen', title: 'Funktionen', folder: 'Funktionen' },
  { href: '/objekte-array', title: 'Objekte und Arrays', folder: 'Objekte-Arrays' },
  { href: '/javascript-dialog', title: 'Dialoge', folder: 'Dialoge' },
  { href: '/formular-validierung-span', title: 'Formular-Validierung', folder: 'Formular-Validierung-Span' },
  { href: '/javascript-debug', title: 'Debugging', folder: 'Debugging' },
  { href: '/javascript-inline', title: 'JavaScript inline', folder: 'Javascript_Einbinden' },
  { href: '/javascript-extern', title: 'JavaScript extern', folder: 'Javascript_Einbinden' },
  { href: '/pacman', title: 'Pacman', folder: 'Pacman' },
];

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.systemBackground }}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}>
      <Text style={{ color: theme.secondaryLabel, fontSize: 16, lineHeight: 22 }}>
        Dieselben JavaScript-Themen wie im Web-Ordner, hier mit React Native: Werte auf dem
        Bildschirm und Eingaben statt console.log und Browser-DOM.
      </Text>
      {examples.map((example) => (
        <Link key={example.href.toString()} href={example.href} asChild>
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <View style={[styles.card, { backgroundColor: theme.secondarySystemBackground }]}>
              <Text style={{ color: theme.label, fontSize: 16, fontWeight: '600' }}>{example.title}</Text>
              <Text style={{ color: theme.secondaryLabel, fontSize: 14 }}>{example.folder}</Text>
            </View>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.four,
    gap: Spacing.three,
    paddingBottom: Spacing.five,
  },
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderCurve: 'continuous',
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.7,
  },
});
