import { useHeaderHeight } from 'expo-router/react-navigation';
import { useState } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { JournalItems } from '@/components/journal-items';
import { addJournalEntry, favoriteSections, toggleFavorite, type JournalSection } from '@/utils/journal';

export default function MyJournalScreen() {
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const [entry, setEntry] = useState('');
  const [grouped, setGrouped] = useState(true);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [items, setItems] = useState<JournalSection[]>([]);
  const entries = items.flatMap((section) => section.data);
  const favoriteCount = entries.filter((item) => item.isFavorite).length;
  const visibleItems = favoritesOnly ? favoriteSections(items) : items;
  const emptyText =
    entries.length === 0 ? 'Noch keine Tagebucheinträge' : 'Noch keine Favoriten markiert';

  function submit() {
    const text = entry.trim();
    if (!text) {
      return;
    }
    setItems((current) => addJournalEntry(current, text));
    setEntry('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={process.env.EXPO_OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={headerHeight}>
      <View style={styles.filters}>
        <Button
          title={grouped ? 'Flache Liste' : 'Nach Tag'}
          onPress={() => setGrouped((current) => !current)}
        />
        <Text style={styles.activeFilter}>{favoritesOnly ? 'Nur Favoriten' : 'Alle Einträge'}</Text>
        <Button
          title={favoritesOnly ? 'Alle Einträge' : 'Nur Favoriten'}
          onPress={() => setFavoritesOnly((current) => !current)}
        />
        {entries.length > 0 ? (
          <Text>
            {favoriteCount} von {entries.length} Einträgen markiert
          </Text>
        ) : null}
      </View>
      <JournalItems
        items={visibleItems}
        grouped={grouped}
        emptyText={emptyText}
        onPressItem={(item) => setSelected(item.text)}
        onToggleFavorite={(item) => setItems((current) => toggleFavorite(current, item.date))}
      />
      {selected ? <Text style={styles.selected}>Ausgewählt: {selected}</Text> : null}
      <View style={[styles.composer, { marginBottom: Math.max(insets.bottom, 12) }]}>
        <Text>{entry || 'Noch kein Text'}</Text>
        <TextInput
          value={entry}
          onChangeText={setEntry}
          onSubmitEditing={submit}
          placeholder="Tagebucheintrag erstellen"
          returnKeyType="done"
          style={styles.input}
        />
        <Button title="Hinzufügen" onPress={submit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  filters: {
    paddingHorizontal: 12,
    paddingTop: 8,
    gap: 8,
  },
  activeFilter: {
    fontWeight: '700',
  },
  composer: {
    margin: 12,
    gap: 8,
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
  },
  selected: {
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
});
