---
sidebar_label: add()
title: add Methode
description: Sie können die add Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# add()

### Beschreibung {#description}

@short: Fügt der Tabellenkalkulation ein neues leeres Tabellenblatt hinzu und gibt den eindeutigen Bezeichner des neu erstellten Tabellenblatts zurück

Wenn kein Name angegeben wird, wird automatisch ein Standardname generiert (z. B. "Sheet 2" oder "Sheet 3").

:::info
Um diese Methode anzuwenden, müssen Sie die Konfigurationsoption [`multiSheets`](api/spreadsheet_multisheets_config.md) aktivieren.
:::

### Verwendung {#usage}

~~~ts
add: (name?: string) => Id;
~~~

### Parameter {#parameters}

- `name` - (`string`) optional, der angezeigte Name für den neuen Tabellenblatt-Tab. Wird er weggelassen, wird ein Standardname vergeben.

### Rückgabewert {#returns}

- `Id` - (`string | number`) der eindeutige Bezeichner des neu erstellten Tabellenblatts.

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Ein Tabellenblatt mit einem benutzerdefinierten Namen hinzufügen
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // z. B. "sheet_2"

// Ein Tabellenblatt mit einem automatisch generierten Namen hinzufügen
const anotherSheetId = spreadsheet.sheets.add();
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Tabellenblättern arbeiten](working_with_sheets.md)
