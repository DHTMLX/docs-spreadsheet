---
sidebar_label: freezeRows() 
title: freezeRows-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die freezeRows-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# freezeRows()

### Beschreibung {#description}

@short: Fixiert ("friert ein") Zeilen

### Verwendung {#usage}

~~~jsx
freezeRows(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die verwendet wird, um die ID einer Zeile zu bestimmen. Wenn die Zellen-ID nicht übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.freezeRows("B2"); // the rows up to the "2" row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the "2" row in "sheet2" will be fixed
~~~

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Verwandte API:** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API einfrieren](https://snippet.dhtmlx.com/a12xd1mn)

**Änderungsprotokoll:** 
In v5.2 hinzugefügt
