import { useState } from 'react';
import { Text } from 'react-native';

import { ExampleButton } from '@/components/example-button';
import { ExampleScreen } from '@/components/example-screen';
import { useTheme } from '@/constants/theme';

export default function Giessen() {
  const theme = useTheme();
  const [watered, setWatered] = useState(false);

  return (
    <ExampleScreen
      title="useState"
      intro="useState merkt sich einen Wert. Der Button setzt watered auf true, der Text wechselt sofort."
      webHint="Ohne useState bleibt der Text stehen. setWatered zeichnet die View neu.">
      <Text selectable style={{ color: theme.label, fontSize: 22, fontWeight: '600' }}>
        {watered ? 'Gegossen' : 'Noch nicht gegossen'}
      </Text>
      <ExampleButton label="Giessen bestätigen" onPress={() => setWatered(true)} />
      {watered ? (
        <ExampleButton label="Zurücksetzen" onPress={() => setWatered(false)} variant="outlined" />
      ) : null}
    </ExampleScreen>
  );
}
