---
sidebar_label: get()
title: get-Methode
description: Ermitteln Sie mit der Methode sheets.get() ein Tabellenblatt-Objekt anhand seiner ID in DHTMLX Spreadsheet.
---

# get()

### Beschreibung {#description}

@short: Gibt ein einzelnes Sheet-Objekt anhand seines Bezeichners zurück

### Verwendung {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### Parameter {#parameters}

- `id` - (*string | number*) erforderlich, der eindeutige Bezeichner des abzurufenden Sheets.

### Rückgabewert {#returns}

- `ISheet` - (*object*) das Sheet-Objekt, das zur angegebenen ID passt.

### Beispiel {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
