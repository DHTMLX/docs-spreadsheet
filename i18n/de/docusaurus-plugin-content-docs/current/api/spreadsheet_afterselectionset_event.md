---
sidebar_label: afterSelectionSet
title: afterSelectionSet event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das afterSelectionSet-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# afterSelectionSet

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem Zellen ausgewählt wurden

### Verwendung {#usage}

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID(s) einer Zelle/von Zellen

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterSelectionSet" event
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**Verwandte Artikel:** [Event-Handling](handling_events.md)
