---
sidebar_label: unfreezeCols() 
title: unfreezeCols-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die unfreezeCols-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# unfreezeCols()

### Beschreibung {#description}

@short: Hebt die Fixierung der fixierten ("eingefrorenen") Spalten auf

### Verwendung {#usage}

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die zur Bestimmung der Spalten-ID verwendet wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.unfreezeCols(); // Fixierte Spalten im aktuellen Tabellenblatt werden aufgetaut
spreadsheet.unfreezeCols("sheet2!A1"); // Fixierte Spalten in "sheet2" werden aufgetaut
~~~

**Verwandte Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Verwandte API:** [`freezeCols()`](api/spreadsheet_freezecols_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API einfrieren](https://snippet.dhtmlx.com/a12xd1mn)

**Änderungsprotokoll:** 
Hinzugefügt in v5.2
