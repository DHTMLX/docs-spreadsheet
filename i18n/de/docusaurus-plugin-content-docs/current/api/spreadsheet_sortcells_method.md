---
sidebar_label: sortCells()
title: sortCells-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die sortCells-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# sortCells()

### Beschreibung {#description}

@short: Sortiert Daten im Spreadsheet

### Verwendung {#usage}

~~~jsx
sortCells(cell: string, dir: number): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle oder eines Zellbereichs, nach dem die Daten im Spreadsheet sortiert werden sollen
- `dir` - (erforderlich) die Sortierrichtung:
    - 1 - aufsteigende Reihenfolge
    - -1 - absteigende Reihenfolge

### Beispiel {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

// Daten auf dem ersten Tabellenblatt sortieren
spreadsheet.sortCells("B2:B11", -1);

// Daten auf mehreren Tabellenblättern sortieren
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~


**Verwandtes Beispiel:** [Spreadsheet. Initialisierung mit mehreren Tabellenblättern](https://snippet.dhtmlx.com/ihtkdcoc)

**Verwandter Artikel:** [Daten sortieren](working_with_ssheet.md#sorting-data)
