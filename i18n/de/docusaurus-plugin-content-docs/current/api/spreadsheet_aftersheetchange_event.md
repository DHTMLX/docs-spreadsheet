---
sidebar_label: afterSheetChange
title: afterSheetChange event
description: Verfolgen Sie den Wechsel von Tabellenblättern in DHTMLX Spreadsheet mit dem Event afterSheetChange. Es erhält den Namen und die ID des neu aktiven Tabellenblatts.
---

# afterSheetChange

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem das aktuell aktive Tabellenblatt gewechselt wurde

### Verwendung {#usage}

~~~jsx
afterSheetChange: (sheet: object) => void;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `sheet` - (erforderlich) ein Objekt mit dem Namen und der ID des neu aktiven Tabellenblatts

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterSheetChange" event
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**Changelog:** Hinzugefügt in v4.1

**Verwandter Artikel:** [Event-Handling](handling_events.md)
