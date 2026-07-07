---
sidebar_label: beforeFocusSet
title: beforeFocusSet event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über das beforeFocusSet-Event erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# beforeFocusSet

### Beschreibung {#description}

@short: Wird ausgelöst, bevor der Fokus auf eine Zelle gesetzt wird

### Verwendung {#usage}

~~~jsx
beforeFocusSet: (cell: string) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle

### Rückgabewert {#returns}

Geben Sie `true` zurück, um den Fokus auf eine Zelle zu setzen, oder `false`, um das Setzen des Fokus zu verhindern

### Beispiel {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Event "beforeFocusSet" abonnieren
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**Verwandte Artikel:** [Event-Handling](handling_events.md)
