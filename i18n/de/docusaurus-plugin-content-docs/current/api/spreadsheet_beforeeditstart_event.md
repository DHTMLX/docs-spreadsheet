---
sidebar_label: beforeEditStart
title: beforeEditStart event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über das beforeEditStart-Event erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# beforeEditStart

### Beschreibung {#description}

@short: Wird ausgelöst, bevor die Bearbeitung einer Zelle beginnt

### Verwendung {#usage}

~~~jsx
beforeEditStart: (cell: string, value: string) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle
- `value` - (erforderlich) der Wert einer Zelle

### Rückgabewert {#returns}

Geben Sie `true` zurück, um eine Zelle zu bearbeiten, oder `false`, um die Bearbeitung zu verhindern

### Beispiel {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Event "beforeEditStart" abonnieren
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Verwandte Artikel:** [Event-Handling](handling_events.md)
