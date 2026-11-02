---
sidebar_label: freezeRows() 
title: freezeRows-Methode
description: Fixieren Sie Zeilen in DHTMLX Spreadsheet mit der Methode freezeRows(). Sie fixiert die Zeilen bis zur angegebenen oder ausgewählten Zelle, im aktuellen oder einem anderen Tabellenblatt.
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

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Verwandte API:** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API einfrieren](https://snippet.dhtmlx.com/a12xd1mn)

**Changelog:** 
In v5.2 hinzugefügt
