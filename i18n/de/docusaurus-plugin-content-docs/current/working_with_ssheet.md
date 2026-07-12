---
sidebar_label: Mit der Tabellenkalkulation arbeiten
title: Mit der Tabellenkalkulation arbeiten
description: Sie können in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren, wie Sie mit der Tabellenkalkulation arbeiten. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Mit der Tabellenkalkulation arbeiten {#work-with-spreadsheet}

Während Benutzer über die Oberfläche mit der Tabellenkalkulation interagieren, können Sie mit der Komponente über ihre [einfache API](api/api_overview.md) arbeiten.

## Aktionen rückgängig machen/wiederholen {#undoredo-actions}

Die API-Methode [](api/spreadsheet_undo_method.md) macht die letzte Aktion rückgängig:

~~~jsx
spreadsheet.undo();
~~~

Um eine rückgängig gemachte Aktion erneut anzuwenden, verwenden Sie die Methode [](api/spreadsheet_redo_method.md):

~~~jsx
spreadsheet.redo();
~~~

## Zeilen und Spalten hinzufügen/entfernen {#addingremoving-rows-and-columns}

### Spalten {#columns}

Um eine Spalte hinzuzufügen oder zu löschen, verwenden Sie die entsprechenden API-Methoden:

- [](api/spreadsheet_addcolumn_method.md)
- [](api/spreadsheet_deletecolumn_method.md)

Übergeben Sie den Methoden die ID der Zelle, die die ID der hinzuzufügenden oder zu löschenden Spalte enthält.

~~~jsx
// fügt eine leere Spalte "C" hinzu
spreadsheet.addColumn("C1");
// entfernt die Spalte "C"
spreadsheet.deleteColumn("C1");
~~~

Wenn eine neue Spalte hinzugefügt wird, werden die benachbarten Spalten nach rechts verschoben.

:::note
Sie können mehrere Spalten löschen, indem Sie einen Bereich von Zellen-IDs als Parameter der Methode `deleteColumn()` angeben, z. B.: "A1:C3".
::: 

### Zeilen {#rows}

Um eine Zeile hinzuzufügen oder zu löschen, verwenden Sie die folgenden API-Methoden:

- [](api/spreadsheet_addrow_method.md)
- [](api/spreadsheet_deleterow_method.md)

Übergeben Sie den Methoden die ID der Zelle, die die ID der hinzuzufügenden oder zu löschenden Zeile enthält.

~~~jsx
// fügt eine leere zweite Zeile hinzu
spreadsheet.addRow("A2");
// entfernt die zweite Zeile
spreadsheet.deleteRow("A2");
~~~

Wenn eine neue Zeile hinzugefügt wird, werden die benachbarten Zeilen um eine Zelle nach unten verschoben.

:::note
Sie können mehrere Zeilen löschen, indem Sie einen Bereich von Zellen-IDs als Parameter der Methode `deleteRow()` angeben, z. B.: "A1:C3".
::: 

## Spaltenbreite automatisch anpassen {#autofit-column-width}

Um die Spaltenbreite so zu ändern, dass sie sich automatisch an den längsten Inhalt der Spalte anpasst, verwenden Sie die Methode [`fitColumn()`](api/spreadsheet_fitcolumn_method.md). Die Methode nimmt einen Parameter entgegen — die ID der Zelle, die den Namen der gewünschten Spalte enthält.

~~~jsx
// passt die Breite der Spalte "G" an
spreadsheet.fitColumn("G2");
~~~

## Zeilen und Spalten fixieren/freigeben {#freezingunfreezing-rows-and-columns}

Möglicherweise müssen Sie einige Spalten oder Zeilen fixieren (oder "einfrieren"), sodass sie beim Scrollen der Seite statisch bleiben, während die übrigen Spalten und Zeilen verschiebbar bleiben.

### Spalten {#columns-1}

Um Spalten zu fixieren oder freizugeben, verwenden Sie die entsprechenden API-Methoden:

- [](api/spreadsheet_freezecols_method.md)
- [](api/spreadsheet_unfreezecols_method.md)

Übergeben Sie den Methoden die ID der Zelle, um die ID einer Spalte zu definieren. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet.

~~~jsx 
// Spalten fixieren
spreadsheet.freezeCols("B2"); // die Spalten bis zur Spalte "B" werden fixiert
spreadsheet.freezeCols("sheet2!B2"); // die Spalten bis zur Spalte "B" in "sheet2" werden fixiert

// Spalten freigeben
spreadsheet.unfreezeCols(); // fixierte Spalten im aktuellen Blatt werden freigegeben
spreadsheet.unfreezeCols("sheet2!A1"); // fixierte Spalten in "sheet2" werden freigegeben
~~~ 

### Zeilen {#rows-1}

Um Zeilen zu fixieren oder freizugeben, verwenden Sie die entsprechenden API-Methoden:

- [](api/spreadsheet_freezerows_method.md)
- [](api/spreadsheet_unfreezerows_method.md)

Übergeben Sie den Methoden die ID der Zelle, um die ID einer Zeile zu definieren. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet.

~~~jsx
// Zeilen fixieren
spreadsheet.freezeRows("B2"); // die Zeilen bis zur Zeile "2" werden fixiert
spreadsheet.freezeRows("sheet2!B2"); // die Zeilen bis zur Zeile "2" in "sheet2" werden fixiert

// Zeilen freigeben
spreadsheet.unfreezeRows(); // fixierte Zeilen im aktuellen Blatt werden freigegeben
spreadsheet.unfreezeRows("sheet2!A1"); // fixierte Zeilen in "sheet2" werden freigegeben
~~~

### Zeilen/Spalten im Datensatz fixieren {#freezing-rowscolumns-in-the-dataset}

Sie können auch Zeilen und Spalten für bestimmte Blätter im Datensatz fixieren, während Sie Daten in die Tabellenkalkulation einlesen.
Verwenden Sie dazu die Eigenschaft `freeze` im `sheets`-Objekt der Methode [`parse()`](api/spreadsheet_parse_method.md):

~~~jsx {10-13}
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // weitere Einstellungen für "sheet_1"
        }, 
        // weitere Konfigurationsobjekte für Blätter
    ]
};

spreadsheet.parse(data);
~~~ 

## Zeilen und Spalten aus-/einblenden {#hidingshowing-rows-and-columns}

Sie können bestimmte Zeilen und Spalten über die entsprechenden API-Methoden aus- und einblenden.

### Spalten {#columns-2}

Um eine Spalte aus- oder einzublenden, verwenden Sie die folgenden Methoden:

- [](api/spreadsheet_hidecols_method.md)
- [](api/spreadsheet_showcols_method.md)

Übergeben Sie den Methoden die ID der Zelle, um die ID einer Spalte zu definieren. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet.

~~~jsx
// Spalten ausblenden
spreadsheet.hideCols("B2"); // die Spalte "B" wird ausgeblendet
spreadsheet.hideCols("sheet2!B2"); // die Spalte "B" in "sheet2" wird ausgeblendet
spreadsheet.hideCols("B2:C2"); // die Spalten "B" und "C" werden ausgeblendet

// Spalten einblenden
spreadsheet.showCols("B2"); // die Spalte "B" wird wieder sichtbar
spreadsheet.showCols("sheet2!B2"); // die Spalte "B" in "sheet2" wird wieder sichtbar
spreadsheet.showCols("B2:C2"); // die Spalten "B" und "C" werden wieder sichtbar
~~~

### Zeilen {#rows-2}

Um eine Zeile aus- oder einzublenden, verwenden Sie die folgenden API-Methoden:

- [](api/spreadsheet_hiderows_method.md)
- [](api/spreadsheet_showrows_method.md)

Übergeben Sie den Methoden die ID der Zelle, um die ID einer Zeile zu definieren. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet.

~~~jsx
// Zeilen ausblenden
spreadsheet.hideRows("B2"); // die Zeile "2" wird ausgeblendet  
spreadsheet.hideRows("sheet2!B2"); // die Zeile "2" in "sheet2" wird ausgeblendet
spreadsheet.hideRows("B2:C4"); // die Zeilen von "2" bis "4" werden ausgeblendet 

// Zeilen einblenden
spreadsheet.showRows("B2"); // die Zeile "2" wird wieder sichtbar
spreadsheet.showRows("sheet2!B2"); // die Zeile "2" in "sheet2" wird wieder sichtbar
spreadsheet.showRows("B2:C2"); // die Zeilen von "2" bis "4" werden wieder sichtbar
~~~

## Daten filtern {#filtering-data}

### Filter setzen {#set-filter}

Sie können Daten in der Tabellenkalkulation filtern und nur die Datensätze anzeigen, die den angegebenen Kriterien entsprechen. Verwenden Sie dazu die Methode [`setFilter()`](api/spreadsheet_setfilter_method.md) und geben Sie die Filterregeln für die gewünschte(n) Spalte(n) an.

Sie können beispielsweise Filterkriterien für eine einzelne Spalte angeben:

~~~jsx
// Daten nach Kriterien für Spalte A filtern
spreadsheet.setFilter("A2", [{condition: { factor: "tc", value: "e" }, exclude: ["Peru"]}]);

// Daten nach Kriterien für Spalte C filtern
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);
~~~

In diesem Fall erscheint für jede Spalte im Datenbereich ein Filter-Symbol.

Sie können auch Filterkriterien für einen Zellbereich angeben, wie zum Beispiel:

~~~jsx
// Daten nach Kriterien für Spalte C filtern
spreadsheet.setFilter("C1:C9", [{condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);

// Daten nach Kriterien für Spalte A und C filtern
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);
~~~

und ein Filter-Symbol erscheint nur für Spalten innerhalb des angegebenen Bereichs.

**Verwandtes Beispiel:** [Tabellenkalkulation. Filtern über API](https://snippet.dhtmlx.com/effrcsg6)

### Filter zurücksetzen {#reset-filter}

Wenn Sie den Filter zurücksetzen möchten, verwenden Sie die Methode [`setFilter()`](api/spreadsheet_setfilter_method.md) ohne Parameter oder übergeben Sie der Methode nur den ersten Parameter:

~~~jsx
spreadsheet.setFilter("A2");
~~~

### Filter abrufen {#get-filter}

Um die Kriterien abzurufen, nach denen Daten aktuell in einem Blatt gefiltert werden, verwenden Sie die Methode [`getFilter()`](api/spreadsheet_getfilter_method.md). Übergeben Sie die ID des gewünschten Blatts als Parameter.

~~~jsx
const filter = spreadsheet.getFilter("Income");
~~~

Sie müssen die ID des Blatts nicht übergeben, wenn Sie die Filterkriterien des aktuell aktiven Blatts abrufen möchten:

~~~jsx
const filter = spreadsheet.getFilter();
~~~

## Nach Daten suchen {#searching-for-data}

Sie können Zellen, die bestimmte Einträge enthalten, abrufen, indem Sie den gesuchten Wert an die Methode [`search()`](api/spreadsheet_search_method.md) übergeben.

~~~jsx
spreadsheet.search("min"); // -> ['D1']
~~~

Sie können auch `true` als zweiten Parameter übergeben, um die Suchleiste zu öffnen und die gefundenen Zellen in der Tabellenkalkulation hervorzuheben:

~~~jsx
spreadsheet.search("min", true); 
~~~

Standardmäßig durchsucht die Tabellenkalkulation die Zellen des aktuell aktiven Blatts. Um in einem anderen Blatt zu suchen, übergeben Sie dessen ID als dritten Parameter der Methode:

~~~jsx
spreadsheet.search("min", false, "Income");
~~~

### Suchleiste schliessen {#close-search-bar}

Um die Suchleiste auszublenden, verwenden Sie die Methode [`hideSearch()`](api/spreadsheet_hidesearch_method.md):

~~~jsx
spreadsheet.hideSearch();
~~~

## Daten sortieren {#sorting-data}

Ab v4.3 können Sie Daten in der Tabellenkalkulation mit der Methode [`sortCells()`](api/spreadsheet_sortcells_method.md) sortieren. Übergeben Sie der Methode zwei Parameter:
- `cell` - die ID(s) einer Zelle oder eines Zellbereichs, nach dem die Daten in der Tabellenkalkulation sortiert werden sollen
- `dir` - die Sortierrichtung: 1 - aufsteigende Sortierreihenfolge, -1 - absteigende Sortierreihenfolge

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});

spreadsheet.sortCells("B2:B11", -1);
~~~

## Tabellenkalkulation leeren {#clearing-spreadsheet}

Sie können die gesamte Tabellenkalkulation auf einmal mit der Methode [`clear()`](api/spreadsheet_clear_method.md) leeren:

~~~jsx
spreadsheet.clear();
~~~

**Verwandtes Beispiel:** [Tabellenkalkulation. Leeren](https://snippet.dhtmlx.com/szmtjn72)

Wenn Sie ein bestimmtes Blatt leeren möchten, verwenden Sie die Methode [`sheets.clear()`](api/sheetmanager_clear_method.md).
