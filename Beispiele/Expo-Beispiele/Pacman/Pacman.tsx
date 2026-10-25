import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router/stack';

import { ExampleButton } from '@/components/example-button';
import { ResultRow } from '@/components/result-row';
import { Spacing, useTheme } from '@/constants/theme';

const WIDTH = 28;
const PACMAN_START = 490;
const WIN_SCORE = 274;

const LAYOUT = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const GHOST_STARTS = [
  { name: 'blinky', start: 348, speed: 250, color: '#ff0000' },
  { name: 'pinky', start: 376, speed: 400, color: '#ffc0cb' },
  { name: 'inky', start: 351, speed: 300, color: '#00ffff' },
  { name: 'clyde', start: 379, speed: 500, color: '#ffa500' },
] as const;

type Ghost = {
  name: string;
  start: number;
  index: number;
  color: string;
};

function isWall(index: number) {
  return LAYOUT[index] === 1;
}

function isLair(index: number) {
  return LAYOUT[index] === 2;
}

function canPacmanEnter(index: number) {
  return index >= 0 && index < LAYOUT.length && !isWall(index) && !isLair(index);
}

function canGhostEnter(index: number, ghosts: Ghost[]) {
  return index >= 0 && index < LAYOUT.length && !isWall(index) && !ghosts.some((ghost) => ghost.index === index);
}

function moveIndex(index: number, direction: 'left' | 'up' | 'right' | 'down') {
  if (direction === 'left' && index % WIDTH !== 0) {
    return index - 1;
  }
  if (direction === 'right' && index % WIDTH < WIDTH - 1) {
    return index + 1;
  }
  if (direction === 'up' && index - WIDTH >= 0) {
    return index - WIDTH;
  }
  if (direction === 'down' && index + WIDTH < WIDTH * WIDTH) {
    return index + WIDTH;
  }
  return index;
}

function createDots() {
  return new Set(LAYOUT.map((cell, index) => (cell === 0 ? index : -1)).filter((index) => index >= 0));
}

function createPellets() {
  return new Set(LAYOUT.map((cell, index) => (cell === 3 ? index : -1)).filter((index) => index >= 0));
}

function createGhosts(): Ghost[] {
  return GHOST_STARTS.map((ghost) => ({
    name: ghost.name,
    start: ghost.start,
    index: ghost.start,
    color: ghost.color,
  }));
}

export default function Pacman() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const cellSize = Math.max(8, Math.floor((width - Spacing.four * 2) / WIDTH));
  const [pacman, setPacman] = useState(PACMAN_START);
  const [score, setScore] = useState(0);
  const [dots, setDots] = useState(createDots);
  const [pellets, setPellets] = useState(createPellets);
  const [ghosts, setGhosts] = useState(createGhosts);
  const [scared, setScared] = useState(false);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const playing = useRef(true);
  const scaredRef = useRef(false);
  const pacmanRef = useRef(PACMAN_START);
  const ghostsRef = useRef(createGhosts());

  useEffect(() => {
    playing.current = status === 'playing';
  }, [status]);

  useEffect(() => {
    scaredRef.current = scared;
  }, [scared]);

  useEffect(() => {
    pacmanRef.current = pacman;
  }, [pacman]);

  useEffect(() => {
    ghostsRef.current = ghosts;
  }, [ghosts]);

  useEffect(() => {
    const timers = GHOST_STARTS.map((ghostStart) =>
      setInterval(() => {
        if (!playing.current) {
          return;
        }
        setGhosts((current) => {
          const ghost = current.find((item) => item.name === ghostStart.name);
          if (!ghost) {
            return current;
          }
          const directions: Array<'left' | 'up' | 'right' | 'down'> = ['left', 'right', 'up', 'down'];
          const nextDirection = directions[Math.floor(Math.random() * directions.length)];
          const nextIndex = moveIndex(ghost.index, nextDirection);
          if (nextIndex === ghost.index || !canGhostEnter(nextIndex, current.filter((item) => item.name !== ghost.name))) {
            return current;
          }
          const nextGhosts = current.map((item) => (item.name === ghost.name ? { ...item, index: nextIndex } : item));
          const hit = nextGhosts.find((item) => item.index === pacmanRef.current);
          if (hit) {
            if (scaredRef.current) {
              setScore((value) => value + 100);
              return nextGhosts.map((item) => (item.name === hit.name ? { ...item, index: item.start } : item));
            }
            playing.current = false;
            setStatus('lost');
          }
          return nextGhosts;
        });
      }, ghostStart.speed),
    );
    return () => timers.forEach(clearInterval);
  }, []);

  function resetGame() {
    playing.current = true;
    scaredRef.current = false;
    pacmanRef.current = PACMAN_START;
    ghostsRef.current = createGhosts();
    setPacman(PACMAN_START);
    setScore(0);
    setDots(createDots());
    setPellets(createPellets());
    setGhosts(createGhosts());
    setScared(false);
    setStatus('playing');
  }

  function move(direction: 'left' | 'up' | 'right' | 'down') {
    if (status !== 'playing') {
      return;
    }
    const next = moveIndex(pacman, direction);
    if (next === pacman || !canPacmanEnter(next)) {
      return;
    }
    let nextScore = score;
    const nextDots = new Set(dots);
    const nextPellets = new Set(pellets);
    if (nextDots.has(next)) {
      nextDots.delete(next);
      nextScore += 1;
    }
    if (nextPellets.has(next)) {
      nextPellets.delete(next);
      nextScore += 10;
      setScared(true);
      setTimeout(() => setScared(false), 10000);
    }
    const hit = ghosts.find((ghost) => ghost.index === next);
    if (hit) {
      if (scared) {
        nextScore += 100;
        setGhosts((current) => current.map((ghost) => (ghost.name === hit.name ? { ...ghost, index: ghost.start } : ghost)));
      } else {
        setStatus('lost');
        Alert.alert('Game Over');
        setPacman(next);
        setScore(nextScore);
        setDots(nextDots);
        setPellets(nextPellets);
        return;
      }
    }
    if (nextScore >= WIN_SCORE) {
      setStatus('won');
      Alert.alert('You have WON!');
    }
    setPacman(next);
    setScore(nextScore);
    setDots(nextDots);
    setPellets(nextPellets);
  }

  const cells = useMemo(() => LAYOUT.map((_, index) => index), []);

  return (
    <>
      <Stack.Screen options={{ title: 'Pacman' }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: theme.systemBackground }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}>
        <Text selectable style={{ color: theme.secondaryLabel, fontSize: 16, lineHeight: 22 }}>
          Dasselbe Labyrinth und dieselbe Logik wie im Web-Pacman. Steuere Pacman mit den Tasten.
        </Text>
        <Text selectable style={{ color: theme.secondaryLabel, fontSize: 14, lineHeight: 20 }}>
          Im Browser sind Felder divs mit CSS-Klassen. Hier ist jedes Feld ein View, Position und
          Punkte liegen in React State statt im DOM.
        </Text>
        <ResultRow label="Score" value={String(score)} />
        <View style={[styles.grid, { width: cellSize * WIDTH, height: cellSize * WIDTH }]}>
          {cells.map((index) => {
            const ghost = ghosts.find((item) => item.index === index);
            const isPacman = pacman === index;
            const backgroundColor = isPacman
              ? '#ffe600'
              : ghost
                ? scared
                  ? '#7fffd4'
                  : ghost.color
                : isWall(index)
                  ? '#008000'
                  : pellets.has(index)
                    ? '#0000ff'
                    : '#000000';
            return (
              <View key={index} style={{ width: cellSize, height: cellSize, backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
                {!isPacman && !ghost && dots.has(index) ? (
                  <View style={{ width: cellSize / 4, height: cellSize / 4, backgroundColor: '#00aa00', borderRadius: cellSize }} />
                ) : null}
              </View>
            );
          })}
        </View>
        <View style={styles.controls}>
          <ExampleButton label="Hoch" onPress={() => move('up')} variant="outlined" />
          <View style={styles.row}>
            <View style={styles.half}>
              <ExampleButton label="Links" onPress={() => move('left')} variant="outlined" />
            </View>
            <View style={styles.half}>
              <ExampleButton label="Rechts" onPress={() => move('right')} variant="outlined" />
            </View>
          </View>
          <ExampleButton label="Runter" onPress={() => move('down')} variant="outlined" />
        </View>
        {status !== 'playing' ? <ExampleButton label="Neu starten" onPress={resetGame} /> : null}
        <Pressable onPress={resetGame} style={({ pressed }) => pressed && styles.pressed}>
          <Text style={{ color: theme.secondaryLabel, textAlign: 'center' }}>Spiel zurücksetzen</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: Spacing.four,
    gap: Spacing.three,
    paddingBottom: Spacing.five,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000000',
  },
  controls: {
    width: '100%',
    gap: Spacing.two,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  half: {
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
});
