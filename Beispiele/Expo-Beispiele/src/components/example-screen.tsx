import { Stack } from 'expo-router/stack';
import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';

type ExampleScreenProps = {
  title: string;
  intro: string;
  webHint?: string;
  children: ReactNode;
};

export function ExampleScreen({ title, intro, webHint, children }: ExampleScreenProps) {
  const theme = useTheme();

  return (
    <>
      <Stack.Screen options={{ title }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: theme.systemBackground }}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}>
        <Text selectable style={{ color: theme.secondaryLabel, fontSize: 16, lineHeight: 22 }}>
          {intro}
        </Text>
        {webHint ? (
          <View style={[styles.hint, { backgroundColor: theme.secondarySystemBackground }]}>
            <Text selectable style={{ color: theme.secondaryLabel, fontSize: 14, lineHeight: 20 }}>
              {webHint}
            </Text>
          </View>
        ) : null}
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.four,
    gap: Spacing.three,
    paddingBottom: Spacing.five,
  },
  hint: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderCurve: 'continuous',
  },
});
