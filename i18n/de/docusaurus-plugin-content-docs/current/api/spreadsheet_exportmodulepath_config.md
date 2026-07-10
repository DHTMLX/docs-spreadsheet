---
sidebar_label: exportModulePath
title: exportModulePath-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die exportModulePath-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# exportModulePath

### Beschreibung {#description}

@short: Optional. Legt den Pfad zum Export-Modul fest

### Verwendung {#usage}

~~~jsx
exportModulePath?: string;
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx", // ein lokaler Pfad zur `worker.js`-Datei des Export-Moduls
    // weitere Konfigurationsparameter
});
~~~

### Details {#details}

:::note 
DHTMLX Spreadsheet verwendet die WebAssembly-basierte Bibliothek [JSON2Excel](https://github.com/dhtmlx/json2excel), um Daten nach Excel zu exportieren.
:::

Um Dateien zu exportieren, müssen Sie den Pfad zur *worker.js*-Datei der [Json2Excel](https://github.com/dhtmlx/json2excel)-Bibliothek (wo der Export verarbeitet wird) mit der Option `exportModulePath` angeben. Standardmäßig wird `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx` verwendet.
- Wenn Sie den öffentlichen Export-Server verwenden, müssen Sie den Link dazu nicht angeben, da er standardmäßig verwendet wird
- Wenn Sie Ihren eigenen Export-Server verwenden, müssen Sie:
  - die [**Json2Excel**](https://github.com/dhtmlx/json2excel)-Bibliothek installieren
  - `"../libs/json2excel/x.x/worker.js?vx"` für eine bestimmte Version verwenden (ersetzen Sie `x.x` durch die auf Ihrem Server bereitgestellte Version)


**Verwandter Artikel:** [Daten laden und exportieren](loading_data.md#exporting-data)

**Verwandtes Beispiel:** [Spreadsheet. Benutzerdefinierter Import-/Export-Pfad](https://snippet.dhtmlx.com/wykwzfhm)
