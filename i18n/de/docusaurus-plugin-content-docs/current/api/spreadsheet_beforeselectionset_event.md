---
sidebar_label: beforeSelectionSet
title: beforeSelectionSet event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über das beforeSelectionSet-Event erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# beforeSelectionSet

### Beschreibung {#description}

@short: Wird ausgelöst, bevor Zellen ausgewählt werden

### Verwendung {#usage}

~~~jsx
beforeSelectionSet: (cell: string) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID(s) einer Zelle bzw. mehrerer Zellen

### Rückgabewert {#returns}

Geben Sie `true` zurück, um Zellen auszuwählen, oder `false`, um die Auswahl von Zellen zu verhindern

### Beispiel {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Event "beforeSelectionSet" abonnieren
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
