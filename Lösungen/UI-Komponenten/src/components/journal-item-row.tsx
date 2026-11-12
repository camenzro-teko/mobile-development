import { Pressable, StyleSheet, Text, View } from 'react-native';

import { type JournalEntry } from '@/utils/journal';

type JournalItemRowProps = {
  item: JournalEntry;
  onToggleFavorite: (item: JournalEntry) => void;
  onPress: (item: JournalEntry) => void;
};

export function JournalItemRow({ item, onToggleFavorite, onPress }: JournalItemRowProps) {
  return (
    <View style={styles.row}>
      <Pressable
        android_ripple={{ color: 'rgba(0, 0, 0, 0.12)' }}
        onPress={() => onPress(item)}
        style={({ pressed }) => [styles.text, pressed && styles.pressed]}>
        <Text>{item.text}</Text>
      </Pressable>
      <Pressable
        accessibilityLabel={item.isFavorite ? 'Favorit entfernen' : 'Als Favorit markieren'}
        onPress={() => onToggleFavorite(item)}
        style={styles.star}>
        <Text style={styles.starLabel}>{item.isFavorite ? '★' : '☆'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    padding: 12,
  },
  pressed: {
    opacity: 0.6,
  },
  star: {
    padding: 12,
  },
  starLabel: {
    fontSize: 22,
  },
});
