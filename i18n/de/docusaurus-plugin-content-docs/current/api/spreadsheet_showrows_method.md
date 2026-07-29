---
sidebar_label: showRows()
title: showRows-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die showRows-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# showRows()

### Beschreibung {#description}

@short: Zeigt ausgeblendete Zeilen an

### Verwendung {#usage}

~~~jsx
showRows(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die zur Bestimmung der Zeilen-ID verwendet wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.showRows("B2"); // die Zeile "2" wird wieder eingeblendet
spreadsheet.showRows("sheet2!B2"); // die Zeile "2" in "sheet2" wird wieder eingeblendet
spreadsheet.showRows("B2:C2"); // die Zeilen von "2" bis "4" werden wieder eingeblendet
~~~

**Verwandter Artikel:** [Mit dem Spreadsheet arbeiten](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Verwandte API:** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen über API ausblenden](https://snippet.dhtmlx.com/zere1ote)

**Changelog:** Hinzugefügt in v5.2
