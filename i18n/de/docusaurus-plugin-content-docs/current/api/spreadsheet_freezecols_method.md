---
sidebar_label: freezeCols() 
title: freezeCols-Methode
description: Fixieren Sie Spalten in DHTMLX Spreadsheet mit der Methode freezeCols(). Sie fixiert die Spalten bis zur angegebenen oder ausgewählten Zelle, im aktuellen oder einem anderen Tabellenblatt.
---

# freezeCols()

### Beschreibung {#description}

@short: Fixiert ("friert ein") Spalten

### Verwendung {#usage}

~~~jsx
freezeCols(cell?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID der Zelle, die verwendet wird, um die ID einer Spalte zu bestimmen. Wenn die Zellen-ID nicht übergeben wird, wird die aktuell ausgewählte Zelle verwendet

### Beispiel {#example}

~~~jsx 
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
~~~

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Verwandte API:** [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)

**Verwandtes Beispiel:** [Spreadsheet. Spalten und Zeilen per API einfrieren](https://snippet.dhtmlx.com/a12xd1mn)

**Changelog:** 
In v5.2 hinzugefügt
