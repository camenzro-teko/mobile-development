# Mobile Development – React Native & Expo

Ein Codespace für das ganze Repository. Startup-App und Expo-Beispiele
liegen nebeneinander. Es läuft immer nur eine Expo-App.

Die Befehle unten gelten im **Repo-Root** (dort öffnet der Codespace).

Studierende arbeiten mit **QR-Code und Expo Go** auf dem Handy.

## Vorbereitung

- Bei GitHub anmelden.
- Kostenloses Konto auf https://expo.dev anlegen.
- Expo Go installieren und **dort mit demselben Konto anmelden**.
- Für dieses Repository muss GitHub Codespaces verfügbar sein.

## Entwicklungsumgebung öffnen

[![In GitHub Codespaces öffnen](https://github.com/codespaces/badge.svg)](https://codespaces.new/camenzro-teko/mobile-development)

1. Auf den Button klicken und den Codespace erstellen.
2. Warten, bis die automatische Einrichtung abgeschlossen ist.
3. Expo starten: `F1` → **Tasks: Run Task** → **Startup-App starten**
   oder `npm start`.
   Wenn niemand eingeloggt ist, startet `npx expo login` von selbst.
4. Den QR-Code im Terminal scannen:
   - Android: mit Expo Go.
   - iPhone: mit der Kamera-App, danach in Expo Go öffnen.

Beim nächsten Unterricht denselben Codespace unter
https://github.com/codespaces öffnen. Keinen zweiten Space anlegen.

## Ordner

- `Beispiele/Startup-App` – erste App
- `Beispiele/Expo-Beispiele` – JavaScript-Themen als React Native
- `Javascript/Beispiele` – dieselben Themen im Browser

## Erste Änderung

Öffne `Beispiele/Startup-App/src/app/index.tsx`, ändere einen sichtbaren
Text und speichere.

Die App aktualisiert sich automatisch auf dem Handy.

## App wechseln

Immer nur eine Expo-App gleichzeitig. Die laufende im Terminal mit
`Ctrl+C` beenden, danach die andere starten.

- `F1` → **Tasks: Run Task** → **Expo-Beispiele starten**
- Oder im Repo-Root:

```bash
npm run start:beispiele
```

Zurück zur Startup-App:

```bash
npm start
```

Den neuen QR-Code in Expo Go scannen.

## Falls der QR-Code nicht öffnet

1. `npx expo whoami` – eingeloggt? Sonst `npx expo login`.
2. In Expo Go derselbe Account wie im Terminal.
3. `npm start` neu starten und den QR-Code erneut scannen.

## Nach dem Unterricht

Änderungen speichern und den Codespace stoppen.
