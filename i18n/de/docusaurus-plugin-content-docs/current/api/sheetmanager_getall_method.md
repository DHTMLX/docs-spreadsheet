---
sidebar_label: getAll()
title: getAll-Methode
description: Ermitteln Sie mit der Methode sheets.getAll() alle Tabellenblätter von DHTMLX Spreadsheet. Die Methode gibt ein Array von Objekten mit den IDs und Namen der Tabellenblätter zurück.
---

# getAll()

### Beschreibung {#description}

@short: Gibt ein Array aller Sheet-Objekte zurück, die aktuell im Spreadsheet vorhanden sind

:::info
Jedes Sheet-Objekt enthält die ID und den Namen des Sheets.
:::

### Verwendung {#usage}

~~~ts
getAll: () => ISheet[];
~~~

### Rückgabewert {#returns}

- `ISheet[]` - (*array*) ein Array von Sheet-Objekten.

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
