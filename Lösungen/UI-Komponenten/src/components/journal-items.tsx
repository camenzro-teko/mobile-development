import { FlatList, SectionList, StyleSheet, Text } from 'react-native';

import { JournalItemRow } from '@/components/journal-item-row';
import { type JournalEntry, type JournalSection } from '@/utils/journal';

type JournalItemsProps = {
  items: JournalSection[];
  grouped: boolean;
  emptyText: string;
  onPressItem: (item: JournalEntry) => void;
  onToggleFavorite: (item: JournalEntry) => void;
};

export function JournalItems({
  items,
  grouped,
  emptyText,
  onPressItem,
  onToggleFavorite,
}: JournalItemsProps) {
  function renderItem({ item }: { item: JournalEntry }) {
    return (
      <JournalItemRow item={item} onPress={onPressItem} onToggleFavorite={onToggleFavorite} />
    );
  }

  if (!grouped) {
    return (
      <FlatList
        style={styles.list}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        data={items.flatMap((section) => section.data)}
        keyExtractor={(item) => String(item.date)}
        ListEmptyComponent={<Text style={styles.empty}>{emptyText}</Text>}
        renderItem={renderItem}
      />
    );
  }

  return (
    <SectionList
      style={styles.list}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      sections={items}
      keyExtractor={(item) => String(item.date)}
      ListEmptyComponent={<Text style={styles.empty}>{emptyText}</Text>}
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  empty: {
    padding: 16,
  },
  sectionHeader: {
    backgroundColor: 'darkgray',
    padding: 8,
  },
});
