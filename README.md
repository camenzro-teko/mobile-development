# Mobile Development – React Native & Expo

Ein Codespace für das ganze Repository. Die Übungs-Apps liegen unter
`Beispiele`, die Lösungen im eigenen Ordner `Lösungen`. Es läuft immer nur
eine Expo-App.

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

`Beispiele` enthält die Apps für den Unterricht. `Lösungen` liegt daneben
und enthält die gelösten Aufgaben. `Javascript` sind dieselben Themen im
Browser.

```
Beispiele/
  Startup-App/                 erste App
  JavaScript/                  JavaScript-Themen als React Native
  UI-Komponenten/
    MyJournal/                 Tagebuch aus Kapitel 4, ohne Gestaltung
  Styling/
    MyJournal/                 gelöstes Tagebuch mit dem Styling aus Kapitel 5
    Layout/                    Beispiele 5-1 bis 5-5
  Fotos/
    MyJournal/                 Styling-Lösung plus Foto und Kamera aus Kapitel 6
Lösungen/
  JavaScript/                  Lösungen zu Javascript/Lösungen
  UI-Komponenten/              gelöste Aufgaben zum Tagebuch
  Styling/                     dasselbe Tagebuch mit klarerer Gestaltung
Javascript/
  Beispiele/                   dieselben Themen im Browser
  Lösungen/                    Web-Lösungen zu den Übungen
```

`UI-Komponenten/MyJournal` ist der Durchgang aus Kapitel 4, ohne die
gelösten Aufgaben und ohne Gestaltung. `Styling/MyJournal` ist die gelöste
App aus `Lösungen/UI-Komponenten` mit den Styles aus Kapitel 5, Beispiele
5-6 bis 5-14. `Styling/Layout` sind die Beispiele 5-1 bis 5-5 mit Rechtecken
und Flexbox. `Fotos/MyJournal` nimmt `Lösungen/Styling` als Vorlage und ergänzt
sie um die Beispiele aus Kapitel 6: Uhrzeit, mehrzeiliger Text und Foto per Kamera.
`Lösungen/Styling` ist dieselbe App mit klarerer Hierarchie,
gruppierter Eingabe, Abständen, lesbarem Eintragstext und umbrechenden Zeilen.

## Erste Änderung

Öffne `Beispiele/Startup-App/src/app/index.tsx`, ändere einen sichtbaren
Text und speichere.

Die App aktualisiert sich automatisch auf dem Handy.

## App wechseln

Immer nur eine Expo-App gleichzeitig. Die laufende im Terminal mit
`Ctrl+C` beenden, danach die andere starten.

- `F1` → **Tasks: Run Task**, oder im Repo-Root:

```bash
npm run start:javascript          # Beispiele/JavaScript
npm run start:ui                  # UI-Komponenten/MyJournal
npm run start:myjournal           # Styling/MyJournal
npm run start:layout              # Styling/Layout, Beispiele 5-1 bis 5-5
npm run start:fotos               # Fotos/MyJournal, Kapitel 6
npm run start:javascript-loesung  # Lösungen/JavaScript
npm run start:ui-loesung          # Lösungen/UI-Komponenten
npm run start:styling-loesung     # Lösungen/Styling
```

Die Tasks heissen **JavaScript starten**, **UI-Komponenten starten**,
**Styling MyJournal starten**, **Layout starten**, **Fotos starten**,
**JavaScript-Lösung starten**, **UI-Komponenten-Lösung starten** und
**Styling-Lösung starten**.

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
