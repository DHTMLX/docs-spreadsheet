---
sidebar_label: beforeSheetChange
title: beforeSheetChange event
description: Steuern Sie den Wechsel von Tabellenblättern in DHTMLX Spreadsheet mit dem Event beforeSheetChange und geben Sie false zurück, um das aktuelle Tabellenblatt aktiv zu lassen.
---

# beforeSheetChange

### Beschreibung {#description}

@short: Wird ausgelöst, bevor das aktuell aktive Tabellenblatt gewechselt wird

### Verwendung {#usage}

~~~jsx
beforeSheetChange: (sheet: object) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `sheet` - (erforderlich) ein Objekt mit dem Namen und der ID des aktuell aktiven Tabellenblatts

### Rückgabewert {#returns}

Geben Sie `true` zurück, um das aktive Tabellenblatt zu wechseln, oder `false`, um den Wechsel des aktiven Tabellenblatts zu verhindern

### Beispiel {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Event "beforeSheetChange" abonnieren
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed");
    console.log(sheet);
    return true;
});
~~~

**Changelog:** Hinzugefügt in v4.1

**Verwandter Artikel:** [Event-Handling](handling_events.md)
