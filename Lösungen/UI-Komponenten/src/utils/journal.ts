export type JournalEntry = {
  text: string;
  date: number;
  isFavorite: boolean;
};

export type JournalSection = {
  title: string;
  data: JournalEntry[];
};

function formatDay(date: Date): string {
  return new Intl.DateTimeFormat('de-CH', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function addJournalEntry(
  sections: JournalSection[],
  text: string,
  now = new Date(),
): JournalSection[] {
  const today = formatDay(now);
  const entry: JournalEntry = { text, date: now.getTime(), isFavorite: false };
  const [head, ...tail] = sections;

  if (!head || head.title !== today) {
    return [{ title: today, data: [entry] }, ...sections];
  }

  return [{ title: head.title, data: [entry, ...head.data] }, ...tail];
}

export function toggleFavorite(sections: JournalSection[], date: number): JournalSection[] {
  return sections.map((section) => ({
    ...section,
    data: section.data.map((item) =>
      item.date === date ? { ...item, isFavorite: !item.isFavorite } : item,
    ),
  }));
}

export function favoriteSections(sections: JournalSection[]): JournalSection[] {
  return sections
    .map((section) => ({
      ...section,
      data: section.data.filter((item) => item.isFavorite),
    }))
    .filter((section) => section.data.length > 0);
}
