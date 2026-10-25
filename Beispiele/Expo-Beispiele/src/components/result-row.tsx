import { StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';

type ResultRowProps = {
  label: string;
  value: string;
};

export function ResultRow({ label, value }: ResultRowProps) {
  const theme = useTheme();

  return (
    <View style={[styles.row, { backgroundColor: theme.secondarySystemBackground }]}>
      <Text style={{ color: theme.secondaryLabel, fontSize: 14 }}>{label}</Text>
      <Text selectable style={[styles.value, { color: theme.label }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderCurve: 'continuous',
    gap: Spacing.one,
  },
  value: {
    fontSize: 16,
    lineHeight: 22,
    fontVariant: ['tabular-nums'],
  },
});
