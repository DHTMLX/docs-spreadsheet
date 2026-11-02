---
sidebar_label: getActive()
title: getActive-Methode
description: Ermitteln Sie mit der Methode sheets.getActive() das aktive (sichtbare) Tabellenblatt von DHTMLX Spreadsheet. Die Methode gibt die ID und den Namen des Tabellenblatts zurück.
---

# getActive()

### Beschreibung {#description}

@short: Gibt das Sheet-Objekt zurück, das im Spreadsheet aktuell aktiv (sichtbar) ist

### Verwendung {#usage}

~~~ts
getActive: () => ISheet;
~~~

### Rückgabewert {#returns}

- `ISheet` - (*object*) das aktuell aktive Sheet-Objekt mit den Eigenschaften `id` und `name`.

### Beispiel {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
