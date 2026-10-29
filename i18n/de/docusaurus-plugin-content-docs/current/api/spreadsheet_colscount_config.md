---
sidebar_label: colsCount
title: colsCount config
description: Legen Sie mit der Eigenschaft colsCount die Anzahl der Spalten fest, die DHTMLX Spreadsheet bei der Initialisierung anzeigt.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    colsCount: 10,
    // andere Konfigurationsparameter
});
~~~

**Verwandter Artikel:** [Konfiguration](configuration.md#number-of-rows-and-columns)

**Verwandtes Beispiel:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
