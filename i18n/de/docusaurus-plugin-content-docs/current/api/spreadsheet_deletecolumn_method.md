---
sidebar_label: deleteColumn()
title: deleteColumn method
description: Entfernen Sie mit der Methode deleteColumn() eine Spalte oder einen Spaltenbereich aus DHTMLX Spreadsheet, einschließlich aller Spalten einer verbundenen Zelle.
---

# deleteColumn()

### Beschreibung {#description}

@short: Entfernt eine Spalte aus der Tabellenkalkulation

:::info
Die Methode entfernt die Spalte, in der sich die angegebene Zelle befindet, und verschiebt die Spalten rechts davon nach links.

Befindet sich die Zelle innerhalb einer verbundenen Zelle, entfernt die Methode jede Spalte, über die sich die verbundene Zelle erstreckt.
:::

### Verwendung {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle, die den Namen der zu löschenden Spalte enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// entfernt die Spalte "G"
spreadsheet.deleteColumn("G2");
~~~

:::note
Sie können mehrere Spalten löschen, indem Sie einen Zellenbereich als Parameter der Methode angeben, zum Beispiel: "A1:C3". Wenn der Bereich eine verbundene Zelle berührt, werden die Spalten der gesamten verbundenen Zelle gelöscht. Ein Bereich, der ganze Spalten abdeckt, zum Beispiel "B1:C100" in einem Tabellenblatt mit 100 Zeilen, wird unverändert gelöscht.
:::

### Details {#details}

Wird eine Spalte innerhalb einer verbundenen Zelle gelöscht, wird die gesamte verbundene Zelle mit allen ihren Spalten gelöscht:

~~~jsx
spreadsheet.mergeCells("B2:D2");

// removes columns B, C and D
spreadsheet.deleteColumn("C2");
~~~

Werden ganze Spalten gelöscht, wird eine verbundene Zelle, die sich über diese erstreckt, kleiner. Verbundene Zellen rechts von den gelöschten Spalten werden zusammen mit ihren Spalten nach links verschoben. Sind die gelöschten Spalten fixiert, verkleinert sich der fixierte Bereich um die Anzahl der gelöschten fixierten Spalten.

Die Events [`beforeAction`](api/spreadsheet_beforeaction_event.md) und [`afterAction`](api/spreadsheet_afteraction_event.md) der Aktion `"deleteColumn"` erhalten die Zelle, die an die Methode übergeben wird, und nicht den Bereich der gelöschten Spalten.

**Changelog:** Das Löschen aller Spalten einer verbundenen Zelle wurde in v6.0.4 hinzugefügt

**Verwandte Artikel:**
- [Arbeiten mit Zeilen und Spalten](work_with_rows_cols.md#removing-columns)
- [Zellen verbinden](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [Arbeiten mit der Tabellenkalkulation](working_with_ssheet.md#addingremoving-rows-and-columns)
