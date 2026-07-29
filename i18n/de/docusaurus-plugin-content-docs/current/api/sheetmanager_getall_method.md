---
sidebar_label: getAll()
title: getAll-Methode
description: Sie können mehr über die getAll-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
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
