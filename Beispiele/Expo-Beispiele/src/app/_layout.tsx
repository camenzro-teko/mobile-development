import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="index" options={{ title: 'Expo-Beispiele', headerLargeTitleEnabled: true }} />
      </Stack>
    </>
  );
}
