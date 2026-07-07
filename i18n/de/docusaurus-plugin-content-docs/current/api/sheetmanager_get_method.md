---
sidebar_label: get()
title: get-Methode
description: Sie können mehr über die get-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# get()

### Beschreibung {#description}

@short: Gibt ein einzelnes Sheet-Objekt anhand seines Bezeichners zurück

### Verwendung {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### Parameter {#parameters}

- `id` - (`string | number`) erforderlich, der eindeutige Bezeichner des abzurufenden Sheets.

### Rückgabewert {#returns}

- `ISheet` - (`object`) das Sheet-Objekt, das zur angegebenen ID passt.

### Beispiel {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
