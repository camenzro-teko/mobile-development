import { Platform, StyleSheet, Text, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';

type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  const theme = useTheme();

  return (
    <View style={[styles.block, { backgroundColor: theme.secondarySystemBackground }]}>
      <Text
        selectable
        style={[
          styles.code,
          { color: theme.label, fontFamily: Platform.select({ ios: 'ui-monospace', default: 'monospace' }) },
        ]}>
        {code}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderCurve: 'continuous',
  },
  code: {
    fontSize: 13,
    lineHeight: 20,
  },
});
