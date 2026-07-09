---
sidebar_label: showCols()
title: showCols-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die showCols-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# showCols()

### Beschreibung {#description}

@short: Zeigt ausgeblendete Spalten an

### Verwendung {#usage}

~~~jsx
showCols(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die zur Bestimmung der Spalten-ID verwendet wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx
spreadsheet.showCols("B2"); // die Spalte "B" wird wieder eingeblendet
spreadsheet.showCols("sheet2!B2"); // die Spalte "B" in "sheet2" wird wieder eingeblendet
spreadsheet.showCols("B2:C2"); // die Spalten "B" und "C" werden wieder eingeblendet
~~~

**Verwandter Artikel:** [Mit dem Spreadsheet arbeiten](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Verwandte API:** [`hideCols()`](api/spreadsheet_hidecols_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen über API ausblenden](https://snippet.dhtmlx.com/zere1ote)

**Changelog:** Hinzugefügt in v5.2
