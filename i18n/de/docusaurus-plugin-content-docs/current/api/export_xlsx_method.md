---
sidebar_label: xlsx()
title: xlsx Export-Methode
description: Sie können sich über die xlsx Export-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek informieren. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# xlsx()

### Beschreibung {#description}

@short: Exportiert Daten aus einer Tabelle in eine Excel-Datei (.xlsx)

### Verwendung {#usage}

~~~jsx
xlsx(name:string): void;
~~~

### Parameter {#parameters}

- `name` - (optional) der Name der exportierten .xlsx-Datei

### Beispiel {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into an Excel file
spreadsheet.export.xlsx();

// exports data from a spreadsheet into an Excel file with a custom name
spreadsheet.export.xlsx("MyData");
~~~

:::note 
Beachten Sie, dass die Komponente den Export in Excel-Dateien ausschließlich mit der Erweiterung `.xlsx` unterstützt.
:::

:::info
DHTMLX Spreadsheet verwendet die WebAssembly-basierte Bibliothek [Json2Excel](https://github.com/dhtmlx/json2excel) für den Export von Daten nach Excel. [Weitere Details](loading_data.md#exporting-data).
:::

**Verwandte Artikel:** [Datenladen und -export](loading_data.md)

**Verwandtes Beispiel:** [Spreadsheet. Export Xlsx](https://snippet.dhtmlx.com/btyo3j8s)
