---
sidebar_label: setActive()
title: setActive-Methode
description: Wechseln Sie mit der Methode sheets.setActive() das aktive (sichtbare) Tabellenblatt von DHTMLX Spreadsheet zum Tabellenblatt mit der angegebenen ID.
---

# setActive()

### Beschreibung {#description}

@short: Wechselt das aktive (sichtbare) Sheet zu dem Sheet, das durch seinen Bezeichner angegeben wird

Die Benutzeroberfläche des Spreadsheets wird neu gerendert, um den Inhalt des Ziel-Sheets anzuzeigen.

### Verwendung {#usage}

~~~ts
setActive: (id: Id) => void;
~~~

### Parameter {#parameters}

- `id` - (*string | number*) erforderlich, der eindeutige Bezeichner des zu aktivierenden Sheets.

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Zum zweiten Sheet wechseln
spreadsheet.sheets.setActive("sheet_2");

// Den Wechsel überprüfen
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
