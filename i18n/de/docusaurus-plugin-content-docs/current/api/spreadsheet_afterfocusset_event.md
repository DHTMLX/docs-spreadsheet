---
sidebar_label: afterFocusSet
title: afterFocusSet event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das afterFocusSet-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# afterFocusSet

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Fokus auf eine Zelle gesetzt wurde

### Verwendung {#usage}

~~~jsx
afterFocusSet: (cell: string) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterFocusSet" event
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Verwandte Artikel:** [Event-Handling](handling_events.md)
