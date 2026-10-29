---
sidebar_label: afterFocusSet
title: afterFocusSet event
description: Verfolgen Sie die fokussierte Zelle in DHTMLX Spreadsheet mit dem Event afterFocusSet. Es wird ausgelöst, nachdem der Fokus auf eine Zelle gesetzt wurde, und erhält die ID der Zelle.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterFocusSet" event
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
