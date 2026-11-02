---
sidebar_label: hideRows()
title: hideRows method
description: Blenden Sie mit der Methode hideRows() eine oder mehrere Zeilen in DHTMLX Spreadsheet aus, anhand der ID einer Zelle, eines Zellbereichs oder der ausgewählten Zelle.
---

# hideRows()

### Beschreibung {#description}

@short: Blendet Zeilen aus

### Verwendung {#usage}

~~~jsx
hideRows(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, anhand derer die Zeilen-ID bestimmt wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.hideRows("B2"); // the "2" row will be hidden 
spreadsheet.hideRows("sheet2!B2"); // the "2" row in "sheet2" will be hidden 
spreadsheet.hideRows("B2:C4"); // the rows from "2" to "4" will be hidden 
~~~

**Verwandter Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Verwandte API:** [`showRows()`](api/spreadsheet_showrows_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API ausblenden](https://snippet.dhtmlx.com/zere1ote)

**Changelog:** Hinzugefügt in v5.2
