---
sidebar_label: rowsCount
title: rowsCount-Konfiguration
description: Legen Sie mit der Eigenschaft rowsCount die Anzahl der Zeilen fest, die DHTMLX Spreadsheet bei der Initialisierung anzeigt.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Verwandter Artikel:** [Konfiguration](configuration.md#number-of-rows-and-columns)

**Verwandtes Beispiel:** [Spreadsheet. Vollständige Symbolleiste](https://snippet.dhtmlx.com/kpm017nx)
