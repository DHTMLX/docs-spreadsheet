---
sidebar_label: beforeEditEnd
title: beforeEditEnd event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das beforeEditEnd-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# beforeEditEnd

### Beschreibung {#description}

@short: Wird ausgelöst, bevor die Bearbeitung einer Zelle abgeschlossen wird

### Verwendung {#usage}

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle
- `value` - (erforderlich) der Wert einer Zelle

### Rückgabewert {#returns}

Geben Sie `true` zurück, um die Bearbeitung einer Zelle abzuschließen, `false`, um das Schließen des Editors zu verhindern

### Beispiel {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeEditEnd" event
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
