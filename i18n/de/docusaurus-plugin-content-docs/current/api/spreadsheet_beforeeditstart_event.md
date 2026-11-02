---
sidebar_label: beforeEditStart
title: beforeEditStart event
description: Steuern Sie mit dem Event beforeEditStart, welche Zellen in DHTMLX Spreadsheet bearbeitet werden können, und geben Sie false zurück, um das Öffnen des Editors zu verhindern.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Event "beforeEditStart" abonnieren
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
