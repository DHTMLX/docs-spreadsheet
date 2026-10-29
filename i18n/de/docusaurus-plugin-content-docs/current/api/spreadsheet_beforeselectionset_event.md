---
sidebar_label: beforeSelectionSet
title: beforeSelectionSet event
description: Steuern Sie die Auswahl von Zellen in DHTMLX Spreadsheet mit dem Event beforeSelectionSet. Es wird ausgelöst, bevor Zellen ausgewählt werden, und verhindert dies, wenn der Handler false zurückgibt.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Event "beforeSelectionSet" abonnieren
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
