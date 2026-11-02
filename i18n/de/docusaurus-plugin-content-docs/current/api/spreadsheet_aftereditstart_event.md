---
sidebar_label: afterEditStart
title: afterEditStart event
description: Reagieren Sie mit dem Event afterEditStart auf den Beginn der Zellbearbeitung in DHTMLX Spreadsheet. Das Event erhält die ID der Zelle und ihren Wert.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterEditStart" event
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
