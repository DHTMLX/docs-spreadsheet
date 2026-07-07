---
sidebar_label: unfreezeRows() 
title: unfreezeRows-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die unfreezeRows-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# unfreezeRows()

### Beschreibung {#description}

@short: Hebt die Fixierung der fixierten ("eingefrorenen") Zeilen auf

### Verwendung {#usage}

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die zur Bestimmung der Zeilen-ID verwendet wird. Wenn keine Zellen-ID übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.unfreezeRows(); // Fixierte Zeilen im aktuellen Tabellenblatt werden aufgetaut
spreadsheet.unfreezeRows("sheet2!A1"); // Fixierte Zeilen in "sheet2" werden aufgetaut
~~~

**Verwandte Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Verwandte API:** [`freezeRows()`](api/spreadsheet_freezerows_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API einfrieren](https://snippet.dhtmlx.com/a12xd1mn)

**Änderungsprotokoll:** 
Hinzugefügt in v5.2
