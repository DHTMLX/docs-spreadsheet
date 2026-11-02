---
sidebar_label: importModulePath
title: importModulePath config
description: Legen Sie mit der Eigenschaft importModulePath den Pfad zur Datei worker.js der Bibliothek Excel2json fest, mit der DHTMLX Spreadsheet Excel-Dateien importiert.
---

# importModulePath

### Beschreibung {#description}

@short: Optional. Legt den Pfad zum Import-Modul fest

### Verwendung {#usage}

~~~jsx
importModulePath?: string;
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    importModulePath: "../libs/excel2json/1.0/worker.js",
    // weitere Konfigurationsparameter
});
~~~

### Details {#details}

:::note 
DHTMLX Spreadsheet verwendet die WebAssembly-basierte Bibliothek [Excel2json](https://github.com/DHTMLX/excel2json), um Daten aus Excel zu importieren.
:::

Um Dateien zu importieren, müssen Sie:

- die **Excel2json**-Bibliothek installieren
- den Pfad zur Datei *worker.js* mit der Option `importModulePath` auf eine der folgenden Weisen festlegen:
  - durch Angabe eines lokalen Pfads zur Datei auf Ihrem Computer, z. B.: `"../libs/excel2json/1.0/worker.js"`
  - durch Angabe eines Links zur Datei aus dem CDN: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

Standardmäßig wird der CDN-Link verwendet.

**Verwandter Artikel:** [Datenladen und -export](loading_data.md#loading-excel-file-xlsx)

**Verwandtes Beispiel:** [Spreadsheet. Benutzerdefinierter Import-/Exportpfad](https://snippet.dhtmlx.com/wykwzfhm)
