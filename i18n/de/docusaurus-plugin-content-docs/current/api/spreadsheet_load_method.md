---
sidebar_label: load()
title: load method
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die load-Methode. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# load()

### Beschreibung {#description}

@short: Lädt Daten aus einer externen Datei

### Verwendung {#usage}

~~~jsx
load(url: string, type?: string): promise;
~~~

### Parameter {#parameters}

- `url` - (erforderlich) die URL einer externen Datei
- `type` - (optional) der Typ der zu ladenden Daten: "json" (Standard), "csv", "xlsx"

### Rückgabewert {#returns}

Die Methode gibt ein Promise des Datenladevorgangs zurück

### Beispiel {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Daten im JSON-Format laden (Standard)
spreadsheet.load("../common/data.json");

// Daten im CSV-Format laden
spreadsheet.load("../common/data.csv", "csv");

// Daten im Excel-Format laden (nur .xlsx)
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

**Verwandte Beispiele:**
- [Spreadsheet. Daten laden](https://snippet.dhtmlx.com/ih9zmc3e)

- [Spreadsheet. CSV laden](https://snippet.dhtmlx.com/1f87y71v)

- [Spreadsheet. Xlsx importieren](https://snippet.dhtmlx.com/cqlpy828)

:::info
Die Komponente führt einen AJAX-Aufruf durch und erwartet, dass die Remote-URL gültige Daten liefert.

Das Laden von Daten ist asynchron. Daher müssen Sie jeden Code, der nach dem Laden ausgeführt werden soll, in ein Promise einbetten:

~~~jsx
spreadsheet.load("../some/data.json").then(function(){
    spreadsheet.selection.add(123);
});
~~~
:::

### Excel-Daten laden {#loading-excel-data}

:::note
Die Komponente unterstützt nur den Import aus Excel-Dateien mit der Erweiterung `.xlsx`.
:::

DHTMLX Spreadsheet verwendet die WebAssembly-basierte Bibliothek [Excel2Json](https://github.com/dhtmlx/excel2json), um Daten aus Excel zu importieren. [Details ansehen](loading_data.md#loading-excel-file-xlsx).

### JSON-Dateien laden {#loading-json-files}

Sie können Benutzern ermöglichen, eine JSON-Datei über den Datei-Explorer in das Spreadsheet zu laden. Gehen Sie dazu wie folgt vor:

- Geben Sie eine Schaltfläche an, um den Datei-Explorer zu öffnen, in dem ".json"-Dateien ausgewählt werden können:

~~~html
<section class="dhx_sample-controls">
    <button class="dhx_sample-btn dhx_sample-btn--flat" onclick="json()">Import json</button>
</section>
~~~


- Rufen Sie die Methode `load()` mit zwei Parametern auf: einem leeren String als URL und dem Typ der zu ladenden Daten ("json"):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
});

spreadsheet.parse(dataset);

function json() {
    spreadsheet.load("", "json"); // lädt Daten aus einer .json-Datei
}
~~~

Sehen Sie das [Beispiel](https://snippet.dhtmlx.com/e3xct53l).

**Änderungsprotokoll:** Die Möglichkeit, eine JSON-Datei über den Datei-Explorer zu laden, wurde in v4.3 hinzugefügt

**Verwandte Artikel:** [Datenladen und -export](loading_data.md)
