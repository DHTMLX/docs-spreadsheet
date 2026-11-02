---
sidebar_label: afterSelectionSet
title: afterSelectionSet event
description: Reagieren Sie mit dem Event afterSelectionSet auf die Auswahl von Zellen in DHTMLX Spreadsheet. Es wird ausgelöst, nachdem Zellen ausgewählt wurden, und erhält deren IDs.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterSelectionSet" event
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
