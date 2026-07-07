---
sidebar_label: colsCount
title: colsCount config
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die colsCount-Konfiguration erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# colsCount

### Beschreibung {#description}

@short: Optional. Legt die Anzahl der Spalten in einer Tabellenkalkulation bei der Initialisierung fest

### Verwendung {#usage}

~~~jsx
colsCount?: number;
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    colsCount: 10,
    // andere Konfigurationsparameter
});
~~~

**Verwandte Artikel:** [Konfiguration](configuration.md#number-of-rows-and-columns)

**Verwandtes Beispiel:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
