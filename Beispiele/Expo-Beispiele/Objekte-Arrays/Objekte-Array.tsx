import { ExampleScreen } from '@/components/example-screen';
import { ResultRow } from '@/components/result-row';

const person = {
  name: 'Max',
  age: 30,
  greet() {
    return `Hallo Objekt: ${this.name} ${this.age}`;
  },
};

const colors = ['rot', 'grün', 'blau', 'rosa'];

export default function ObjekteArray() {
  return (
    <ExampleScreen
      title="Objekte und Arrays"
      intro="Ein Objekt bündelt Eigenschaften. Ein Array speichert Werte ab Index 0. colors.map() zeichnet die Liste."
      webHint="Im Web ruft greet() console.log auf und colors[3] erscheint nur in der Konsole. Hier wird das Array Zeile für Zeile gerendert.">
      <ResultRow label="person.name" value={person.name} />
      <ResultRow label="person.age" value={String(person.age)} />
      <ResultRow label="person.greet()" value={person.greet()} />
      {colors.map((color, index) => (
        <ResultRow key={color} label={`colors[${index}]`} value={color} />
      ))}
    </ExampleScreen>
  );
}
