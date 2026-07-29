---
sidebar_label: Mit Tabellen arbeiten
title: Mit Tabellen arbeiten
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie, wie Sie mit Tabellen arbeiten. Hier finden Sie Entwickleranleitungen und API-Referenzen, Codebeispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# Mit Tabellen arbeiten

Ab v4.1 können Sie mit [mehreren Tabellen](api/spreadsheet_multisheets_config.md) im Spreadsheet arbeiten.

Dieser Artikel beschreibt, wie Sie eine neue Tabelle hinzufügen, eine nicht benötigte Tabelle entfernen, alle Tabellen abrufen und die aktuell aktive Tabelle über API-Methoden ermitteln. Außerdem wird erläutert, wie Sie mehrere Tabellen gleichzeitig in das Spreadsheet laden.

{{note Informationen zur Interaktion mit mehreren Tabellen über die Benutzeroberfläche finden Sie in unserem [Benutzerhandbuch](work_with_sheets.md). }}

Ab v6.0 übernimmt das **Sheet Manager**-Modul die Tabellenverwaltung über die Eigenschaft `spreadsheet.sheets`. Die dedizierte [Sheet Manager API](api/overview/sheetmanager_overview.md) ersetzt die tabellenspezifischen Methoden, die zuvor direkt an der Spreadsheet-Instanz verfügbar waren.

## Mehrere Tabellen laden {#loading-multiple-sheets}

Um mehrere Tabellen in das Spreadsheet zu laden, bereiten Sie die Daten mit der gewünschten Anzahl von Tabellen und deren Konfiguration vor und übergeben Sie diese als Parameter an die Methode [`parse()`](api/spreadsheet_parse_method.md). Die Daten müssen ein `object` sein. [Sehen Sie die Liste der Attribute, die das Objekt enthalten kann](api/spreadsheet_parse_method.md).

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note Wenn die Konfigurationsoption [`multiSheets`](api/spreadsheet_multisheets_config.md) auf `false` gesetzt ist, wird nur eine Tabelle erstellt.}}

## Eine neue Tabelle hinzufügen {#adding-a-new-sheet}

Um eine neue Tabelle in das Spreadsheet einzufügen, verwenden Sie die Methode [`sheets.add()`](api/sheetmanager_add_method.md) und übergeben Sie den Namen der neuen Tabelle als Parameter:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Tabelle mit benutzerdefiniertem Namen hinzufügen
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // z. B. "sheet_2"

// Tabelle mit automatisch generiertem Namen hinzufügen
const anotherId = spreadsheet.sheets.add();
~~~

Die Methode gibt die ID der erstellten Tabelle zurück.

## Eine Tabelle entfernen {#removing-a-sheet}

Sie können eine Tabelle anhand ihrer ID aus dem Spreadsheet entfernen, indem Sie die Methode [`sheets.remove()`](api/sheetmanager_remove_method.md) verwenden:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Tabelle anhand ihrer ID entfernen
spreadsheet.sheets.remove("sheet_2");
~~~

Beachten Sie, dass eine Tabelle nicht entfernt wird, wenn das Spreadsheet weniger als 2 Tabellen enthält.

## Aktive Tabelle festlegen {#setting-active-sheet}

Um die aktive Tabelle nach der Initialisierung des Spreadsheets dynamisch zu wechseln, verwenden Sie die Methode [`sheets.setActive()`](api/sheetmanager_setactive_method.md). Diese nimmt die ID einer Tabelle als Parameter entgegen:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Zur zweiten Tabelle wechseln
spreadsheet.sheets.setActive("sheet_2");

// Wechsel überprüfen
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Verwandtes Beispiel:** [Spreadsheet. Aktive Tabelle festlegen](https://snippet.dhtmlx.com/iowl449t)

## Aktive Tabelle abrufen {#getting-active-sheet}

Sie können die aktuell aktive Tabelle mit der Methode [`sheets.getActive()`](api/sheetmanager_getactive_method.md) abrufen:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

Die Methode gibt ein Objekt mit den Attributen `name` und `id` der aktuell aktiven Tabelle zurück.

## Alle Tabellen abrufen {#getting-all-sheets}

Die Methode [`sheets.getAll()`](api/sheetmanager_getall_method.md) gibt alle Tabellen des Spreadsheets als Array von Tabellenobjekten zurück:

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

## Eine Tabelle anhand der ID abrufen {#getting-a-sheet-by-id}

Um ein einzelnes Tabellenobjekt anhand seiner ID abzurufen, verwenden Sie die Methode [`sheets.get()`](api/sheetmanager_get_method.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

## Tabellen leeren {#clearing-sheets}

Sie können die Daten einer bestimmten Tabelle anhand ihrer ID mit der Methode [`sheets.clear()`](api/sheetmanager_clear_method.md) leeren:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Bestimmte Tabelle anhand der ID leeren
spreadsheet.sheets.clear("sheet_1");

// Aktuell aktive Tabelle leeren
spreadsheet.sheets.clear();
~~~

**Verwandtes Beispiel:** [Spreadsheet. Leeren](https://snippet.dhtmlx.com/szmtjn72)

Wenn Sie das gesamte Spreadsheet auf einmal leeren möchten, verwenden Sie die Methode [`clear()`](api/spreadsheet_clear_method.md).
