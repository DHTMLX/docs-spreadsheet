---
sidebar_label: deleteRow()
title: deleteRow method
description: Entfernen Sie mit der Methode deleteRow() eine Zeile oder einen Zeilenbereich aus DHTMLX Spreadsheet, einschließlich aller Zeilen einer verbundenen Zelle.
---

# deleteRow()

### Beschreibung {#description}

@short: Entfernt eine Zeile aus der Tabellenkalkulation

:::info
Die Methode entfernt die Zeile, in der sich die angegebene Zelle befindet, und verschiebt die darunter liegenden Zeilen nach oben.

Befindet sich die Zelle innerhalb einer verbundenen Zelle, entfernt die Methode jede Zeile, über die sich die verbundene Zelle erstreckt.
:::

### Verwendung {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle, die die ID der zu löschenden Zeile enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// entfernt die zweite Zeile
spreadsheet.deleteRow("G2");
~~~

:::note
Sie können mehrere Zeilen löschen, indem Sie einen Zellenbereich als Parameter der Methode angeben, zum Beispiel: "A1:C3". Wenn der Bereich eine verbundene Zelle berührt, werden die Zeilen der gesamten verbundenen Zelle gelöscht. Ein Bereich, der ganze Zeilen abdeckt, zum Beispiel "A2:Z3" in einem Tabellenblatt mit den Spalten A bis Z, wird unverändert gelöscht.
:::

### Details {#details}

Wird eine Zeile innerhalb einer verbundenen Zelle gelöscht, wird die gesamte verbundene Zelle mit allen ihren Zeilen gelöscht:

~~~jsx
spreadsheet.mergeCells("B2:B4");

// removes rows 2, 3 and 4
spreadsheet.deleteRow("B3");
~~~

Werden ganze Zeilen gelöscht, wird eine verbundene Zelle, die sich über diese erstreckt, kleiner. Verbundene Zellen unterhalb der gelöschten Zeilen werden zusammen mit ihren Zeilen nach oben verschoben. Sind die gelöschten Zeilen fixiert, verkleinert sich der fixierte Bereich um die Anzahl der gelöschten fixierten Zeilen.

Die Events [`beforeAction`](api/spreadsheet_beforeaction_event.md) und [`afterAction`](api/spreadsheet_afteraction_event.md) der Aktion `"deleteRow"` erhalten die Zelle, die an die Methode übergeben wird, und nicht den Bereich der gelöschten Zeilen.

**Changelog:** Das Löschen aller Zeilen einer verbundenen Zelle wurde in v6.0.4 hinzugefügt

**Verwandte Artikel:**
- [Arbeiten mit Zeilen und Spalten](work_with_rows_cols.md#removing-rows)
- [Zellen verbinden](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [Arbeiten mit der Tabellenkalkulation](working_with_ssheet.md#addingremoving-rows-and-columns)
