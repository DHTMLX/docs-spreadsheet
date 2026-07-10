---
sidebar_label: afterEditStart
title: afterEditStart event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das afterEditStart-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# afterEditStart

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Bearbeitung einer Zelle beginnt

### Verwendung {#usage}

~~~jsx
afterEditStart: (cell: string, value: string) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle
- `value` - (erforderlich) der Wert einer Zelle

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterEditStart" event
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
