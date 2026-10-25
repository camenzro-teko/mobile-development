import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Spacing, useTheme } from '@/constants/theme';

type ExampleFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboard?: 'default' | 'numeric';
};

export function ExampleField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboard = 'default',
}: ExampleFieldProps) {
  const theme = useTheme();

  return (
    <View style={styles.field}>
      <Text style={{ color: theme.label, fontSize: 14 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.secondaryLabel}
        keyboardType={keyboard === 'numeric' ? 'numeric' : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.input,
          { color: theme.label, backgroundColor: theme.secondarySystemBackground },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: Spacing.one,
  },
  input: {
    borderRadius: Spacing.two,
    borderCurve: 'continuous',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 16,
  },
});
