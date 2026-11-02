---
sidebar_label: add()
title: add Methode
description: Fügen Sie mit der Methode sheets.add() ein neues leeres Tabellenblatt zu DHTMLX Spreadsheet hinzu. Die Methode gibt die ID des neuen Tabellenblatts zurück (erfordert die Option multiSheets).
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

- `name` - (*string*) optional, der angezeigte Name für den neuen Tabellenblatt-Tab. Wird er weggelassen, wird ein Standardname vergeben.

### Rückgabewert {#returns}

- `Id` - (*string | number*) der eindeutige Bezeichner des neu erstellten Tabellenblatts.

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

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Tabellenblättern arbeiten](working_with_sheets.md)
