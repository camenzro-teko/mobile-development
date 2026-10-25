import { Button, Host } from '@expo/ui';
import { View } from 'react-native';

type ExampleButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text';
};

export function ExampleButton({ label, onPress, variant = 'filled' }: ExampleButtonProps) {
  return (
    <View style={{ width: '100%' }}>
      <Host style={{ width: '100%' }}>
        <Button label={label} onPress={onPress} variant={variant} style={{ width: '100%' }} />
      </Host>
    </View>
  );
}
