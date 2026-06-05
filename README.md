# Gruppenprojekt React: Team Task Board

## Projektidee

Ihr entwickelt gemeinsam ein kleines **Task Board** in React.

Die App soll Aufgaben anzeigen, neue Aufgaben hinzufügen, Aufgaben als erledigt markieren, nach Status filtern und zusätzlich beim Start Demo-Daten über einen einfachen API-Aufruf laden.

Das Projekt ist bewusst klein gehalten und soll in **maximal 4 Stunden** umsetzbar sein.

---

## Ziel des Projekts

Am Ende sollt ihr zeigen, dass ihr folgende React-Grundlagen praktisch anwenden könnt:

- React-Projekt mit Vite aufsetzen
- Komponenten sinnvoll strukturieren
- JSX korrekt verwenden
- Props zwischen Komponenten weitergeben
- Events mit `onClick` und `onChange` verarbeiten
- State mit `useState` verwalten
- Bedingte Darstellung nutzen
- Listen mit `map()` rendern
- `key` bei Listen korrekt einsetzen
- CSS-Dateien oder CSS Modules verwenden
- Einen einfachen API-Aufruf mit `useEffect` durchführen
- Typische Fehler mit Console, Browser-DevTools und React Developer Tools debuggen

---

## Teamgröße

3 Personen

---

## Zeitlimit

Maximal 4 Stunden

Empfohlene Aufteilung:

| Phase                                 |       Zeit |
| ------------------------------------- | ---------: |
| Setup & Planung                       | 20 Minuten |
| Grundstruktur & Komponenten           | 40 Minuten |
| State, Props & Events                 | 70 Minuten |
| Listen, Filter & bedingte Darstellung | 45 Minuten |
| useEffect & API-Daten                 | 35 Minuten |
| Styling & Debugging                   | 40 Minuten |
| Kurze Präsentation/Vorbereitung       | 10 Minuten |

---

# Projektbeschreibung

## Team Task Board

Die App verwaltet eine einfache Aufgabenliste für ein kleines Team.

Jede Aufgabe besitzt:

- eine ID
- einen Titel
- eine Beschreibung
- eine verantwortliche Person
- einen Status: `open`, `in-progress` oder `done`

---

# Mindestanforderungen

## 1. Projekt-Setup

Erstellt ein neues React-Projekt mit Vite.

Beispiel:

```bash
npm create vite@latest team-task-board -- --template react
cd team-task-board
npm install
npm run dev
```

Bereinigt danach den Boilerplate-Code.

Die App soll über `main.jsx` in `App.jsx` starten.

---

## 2. Komponentenstruktur

Erstellt mindestens folgende Komponenten:

```txt
src/
  components/
    Header/
      Header.jsx
      Header.module.css
    TaskForm/
      TaskForm.jsx
      TaskForm.module.css
    TaskList/
      TaskList.jsx
      TaskList.module.css
    TaskItem/
      TaskItem.jsx
      TaskItem.module.css
    FilterBar/
      FilterBar.jsx
      FilterBar.module.css
```

Alternativ dürft ihr normale CSS-Dateien verwenden, wenn ihr CSS Modules noch nicht sicher beherrscht.

---

## 3. Header-Komponente

Die `Header`-Komponente zeigt:

- Titel der App
- kurze Beschreibung
- Anzahl aller Aufgaben
- Anzahl erledigter Aufgaben

Beispiel:

```txt
Team Task Board
Verwalte Aufgaben für dein Team.

Aufgaben: 6 | Erledigt: 2
```

Die Zahlen sollen aus dem State in `App.jsx` kommen und per Props an `Header` übergeben werden.

---

## 4. TaskForm-Komponente

Die `TaskForm`-Komponente soll ein Formular enthalten.

Felder:

- Titel
- Beschreibung
- Verantwortliche Person
- Status

Beim Absenden wird eine neue Aufgabe zur Aufgabenliste hinzugefügt.

Pflicht:

- `onChange` verwenden
- Formularwerte mit State verwalten
- `onSubmit` verwenden
- Leere Titel sollen nicht gespeichert werden
- Nach dem Absenden soll das Formular geleert werden

---

## 5. TaskList-Komponente

Die `TaskList`-Komponente rendert alle Aufgaben mit `map()`.

Pflicht:

- Jede Aufgabe wird als `TaskItem` dargestellt
- Jede Aufgabe erhält eine sinnvolle `key`-Prop
- Wenn keine Aufgaben vorhanden sind, wird eine Nachricht angezeigt

Beispiel:

```txt
Keine Aufgaben vorhanden.
```

---

## 6. TaskItem-Komponente

Die `TaskItem`-Komponente zeigt:

- Titel
- Beschreibung
- Verantwortliche Person
- Status
- Button: Status ändern
- Button: Aufgabe löschen

Der Status-Button soll den Status in dieser Reihenfolge ändern:

```txt
open → in-progress → done → open
```

Die Logik darf in `App.jsx` liegen und als Funktion per Props an `TaskItem` weitergegeben werden.

---

## 7. FilterBar-Komponente

Die `FilterBar`-Komponente soll Buttons oder ein Select-Feld enthalten:

- Alle
- Offen
- In Bearbeitung
- Erledigt

Je nach Auswahl werden nur passende Aufgaben angezeigt.

Der aktive Filter soll optisch erkennbar sein.

---

## 8. State in App.jsx

In `App.jsx` sollen mindestens diese States existieren:

```js
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
```

Optional könnt ihr für das Formular lokalen State direkt in `TaskForm.jsx` verwenden.

---

## 9. useEffect mit API-Aufruf

Beim Start der App sollen Demo-Daten geladen werden.

Nutzt dafür z. B. diese API:

```txt
https://jsonplaceholder.typicode.com/todos?_limit=5
```

Die geladenen Daten müssen in eure eigene Task-Struktur umgewandelt werden.

Beispiel:

```js
{
  id: todo.id,
  title: todo.title,
  description: "Imported demo task",
  assignee: "Demo User",
  status: todo.completed ? "done" : "open"
}
```

Pflicht:

- `useEffect` verwenden
- Loading-State anzeigen
- Fehler-State anzeigen, falls der API-Aufruf fehlschlägt
- Dependency Array korrekt verwenden

---

## 10. Bedingte Darstellung

Die App soll abhängig vom State unterschiedliche Inhalte anzeigen:

- Loading-Meldung während API-Daten geladen werden
- Fehlermeldung bei Fehler
- Nachricht, wenn keine Aufgaben vorhanden sind
- Unterschiedliche Darstellung je nach Status

Beispiel:

```txt
Lade Aufgaben...
```

```txt
Fehler beim Laden der Aufgaben.
```

---

## 11. Styling

Die App soll sauber und lesbar gestaltet sein.

Mindestanforderungen:

- Kartenlayout für Aufgaben
- erkennbare Status-Darstellung
- Abstand zwischen Komponenten
- aktive Filter sichtbar machen
- keine reine Inline-Style-Lösung

Empfohlen:

- CSS Modules
- sprechende Klassennamen
- einfache responsive Breite

---

# Rollenverteilung im Team

## Person 1: Setup, Struktur & Layout

Verantwortlich für:

- Vite-Projekt erstellen
- Ordnerstruktur anlegen
- Boilerplate bereinigen
- `Header`
- Grundlayout der App
- Basistyles

## Person 2: Formular, State & Events

Verantwortlich für:

- `TaskForm`
- Formular-State
- neue Aufgaben hinzufügen
- Validierung leerer Titel
- Events mit `onChange` und `onSubmit`

## Person 3: Liste, Filter & useEffect

Verantwortlich für:

- `TaskList`
- `TaskItem`
- Status ändern
- Aufgabe löschen
- `FilterBar`
- API-Aufruf mit `useEffect`

Wichtig: Trotz Rollenverteilung sollen alle Teammitglieder den gesamten Code verstehen.

---

# Empfohlene Datenstruktur

```js
const exampleTask = {
  id: crypto.randomUUID(),
  title: "React-Komponenten planen",
  description: "Komponentenstruktur für das Projekt erstellen",
  assignee: "Mina",
  status: "open",
};
```

Falls `crypto.randomUUID()` Probleme macht, könnt ihr auch `Date.now()` verwenden.

---

# Beispiel-Startdaten als Fallback

Falls der API-Aufruf nicht funktioniert, könnt ihr mit diesen lokalen Startdaten arbeiten:

```js
const initialTasks = [
  {
    id: 1,
    title: "Projektstruktur erstellen",
    description: "Ordner und Komponenten anlegen",
    assignee: "Team",
    status: "done",
  },
  {
    id: 2,
    title: "TaskForm bauen",
    description: "Formular für neue Aufgaben erstellen",
    assignee: "Team",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Filter einbauen",
    description: "Aufgaben nach Status filtern",
    assignee: "Team",
    status: "open",
  },
];
```

---

# Funktionsanforderungen im Überblick

## Muss-Anforderungen

- Neues React-Projekt mit Vite
- Mindestens 5 Komponenten
- Props verwenden
- State mit `useState`
- Events verwenden
- Aufgaben hinzufügen
- Aufgaben löschen
- Status ändern
- Aufgabenliste mit `map()` rendern
- `key` korrekt verwenden
- Filter nach Status
- `useEffect` mit API-Aufruf
- Loading- und Error-State
- CSS oder CSS Modules

## Kann-Anforderungen

Nur umsetzen, wenn noch Zeit bleibt:

- Aufgaben zählen nach Status
- Button zum Zurücksetzen auf Demo-Daten
- Suche nach Titel
- Sortierung nach Status
- Dark/Light Toggle
- Kleine Animation beim Hinzufügen oder Löschen
- Aufgaben im `localStorage` speichern

---

# Präsentation am Ende

Jedes Team stellt die App kurz vor.

Dauer: 3 bis 5 Minuten

Beantwortet dabei:

1. Welche Komponenten habt ihr erstellt?
2. Wo nutzt ihr Props?
3. Wo nutzt ihr State?
4. Welche Events verarbeitet eure App?
5. Wo wird `useEffect` genutzt?
6. Welche Fehler hattet ihr und wie habt ihr sie gelöst?
7. Was würdet ihr verbessern, wenn ihr mehr Zeit hättet?

---

# Bewertungskriterien

| Kriterium                               | Gewichtung |
| --------------------------------------- | ---------: |
| Funktionalität                          |       35 % |
| Komponentenstruktur                     |       20 % |
| Props, State und Events korrekt genutzt |       20 % |
| useEffect und API-Aufruf                |       10 % |
| Styling und Benutzerführung             |       10 % |
| Teamarbeit und Präsentation             |        5 % |

---

# Erwartetes Ergebnis

Am Ende sollte eine kleine, funktionierende React-App existieren, mit der man Aufgaben verwalten kann.

Die App muss nicht perfekt sein. Wichtiger ist, dass die React-Grundlagen korrekt angewendet und erklärt werden können.
