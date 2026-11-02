---
sidebar_label: hideCols()
title: hideCols method
description: Blenden Sie mit der Methode hideCols() eine oder mehrere Spalten in DHTMLX Spreadsheet aus, anhand der ID einer Zelle, eines Zellbereichs oder der ausgewählten Zelle.
---

# hideCols()

### Beschreibung {#description}

@short: Blendet Spalten aus

### Verwendung {#usage}

~~~jsx
hideCols(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, anhand derer die Spalten-ID bestimmt wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.hideCols("B2"); // the "B" column will be hidden
spreadsheet.hideCols("sheet2!B2"); // the "B" column in "sheet2" will be hidden
spreadsheet.hideCols("B2:C2"); // the "B" and "C" columns will be hidden
~~~


**Verwandter Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Verwandte API:** [`showCols()`](api/spreadsheet_showcols_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API ausblenden](https://snippet.dhtmlx.com/zere1ote)

**Changelog:** Hinzugefügt in v5.2
