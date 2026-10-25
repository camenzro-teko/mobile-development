import { Button, Host } from '@expo/ui';
import { View } from 'react-native';

type ExampleButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text';
};

export function ExampleButton({ label, onPress, variant = 'filled' }: ExampleButtonProps) {
  return (
    <View style={{ width: '100%', minHeight: 48 }}>
      <Host matchContents style={{ width: '100%', minHeight: 48 }}>
        <Button label={label} onPress={onPress} variant={variant} style={{ width: '100%' }} />
      </Host>
    </View>
  );
}
