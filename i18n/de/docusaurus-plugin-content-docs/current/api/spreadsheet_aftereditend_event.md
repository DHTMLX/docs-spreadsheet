---
sidebar_label: afterEditEnd
title: afterEditEnd event
description: Reagieren Sie mit dem Event afterEditEnd auf das Ende der Zellbearbeitung in DHTMLX Spreadsheet. Das Event erhält die ID der Zelle und ihren neuen Wert.
---

# afterEditEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Bearbeitung einer Zelle abgeschlossen ist

### Verwendung {#usage}

~~~jsx
afterEditEnd: (cell: string, value: string) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `cell` - (erforderlich) die ID einer Zelle
- `value` - (erforderlich) der Wert einer Zelle

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterEditEnd" event
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
