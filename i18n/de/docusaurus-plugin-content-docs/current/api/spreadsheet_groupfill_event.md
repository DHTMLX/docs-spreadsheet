---
sidebar_label: groupFill
title: groupFill event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das groupFill-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# groupFill

### Beschreibung {#description}

@short: Wird beim automatischen Ausfüllen von Zellen ausgelöst

### Verwendung {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `focusedCell` - (erforderlich) die ID der fokussierten Zelle
- `selectedCell` - (erforderlich) die IDs der ausgewählten Zellen

### Beispiel {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Das "groupFill"-Event abonnieren
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
