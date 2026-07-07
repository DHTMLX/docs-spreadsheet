---
sidebar_label: rowsCount
title: rowsCount-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die rowsCount-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# rowsCount

### Beschreibung {#description}

@short: Optional. Legt die Anzahl der Zeilen beim Initialisieren einer Tabelle fest

### Verwendung {#usage}

~~~jsx
rowsCount?: number;
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Verwandte Artikel:** [Konfiguration](configuration.md#number-of-rows-and-columns)

**Verwandtes Beispiel:** [Spreadsheet. Vollständige Symbolleiste](https://snippet.dhtmlx.com/kpm017nx)
