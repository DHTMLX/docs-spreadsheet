---
sidebar_label: Erste Schritte
title: Erste Schritte mit DHTMLX Spreadsheet
description: Sie können in der Dokumentation erfahren, wie Sie mit der DHTMLX JavaScript Spreadsheet-Bibliothek beginnen. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Erste Schritte {#how-to-start}

Dieses Tutorial führt Sie durch die Schritte, um ein vollständig funktionsfähiges DHTMLX Spreadsheet auf einer Seite einzurichten. Die Komponente eignet sich besonders für die Verwaltung großer Datenmengen, wenn Sie die Ergebnisse von Berechnungen speichern und reproduzieren möchten.

![DHTMLX Spreadsheet initialized with a sample data table in a browser window](/img/how_to_start.png)

## Schritt 1. Quelldateien einbinden {#step-1-including-source-files}

Erstellen Sie zunächst eine HTML-Datei mit dem Namen *index.html*. Binden Sie anschließend die Spreadsheet-Quelldateien darin ein. [Die detaillierte Beschreibung des DHTMLX Spreadsheet-Pakets finden Sie hier](initialization.md#including-source-files).

Es sind zwei notwendige Dateien erforderlich:

- die *JS*-Datei von DHTMLX Spreadsheet
- die *CSS*-Datei von DHTMLX Spreadsheet

und

- der Link zur Google Fonts-Quelldatei für die korrekte Darstellung von Schriftarten.

~~~html {5-8} title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   

    <link href="codebase/spreadsheet.css" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <script>
    // Ihr Code kommt hier hin
    </script>
</body>
</html>
~~~

### Spreadsheet über npm oder yarn installieren {#installing-spreadsheet-via-npm-or-yarn}

Sie können JavaScript Spreadsheet mit dem Paketmanager `yarn` oder `npm` in Ihr Projekt importieren.

#### Testversion von Spreadsheet über npm oder yarn installieren {#installing-trial-spreadsheet-via-npm-or-yarn}

:::info
Wenn Sie die Testversion von Spreadsheet verwenden möchten, laden Sie das [**Spreadsheet-Testpaket**](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Beachten Sie, dass die Testversion von Spreadsheet nur 30 Tage lang verfügbar ist.
:::

#### PRO-Version von Spreadsheet über npm oder yarn installieren {#installing-pro-spreadsheet-via-npm-or-yarn}

:::info
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private DHTMLX **npm** zugreifen, indem Sie Ihren Login und Ihr Passwort für **npm** generieren. Eine detaillierte Installationsanleitung ist dort ebenfalls verfügbar. Beachten Sie, dass der Zugriff auf das private **npm** nur verfügbar ist, solange Ihre proprietäre Spreadsheet-Lizenz aktiv ist.
:::

## Schritt 2. Spreadsheet erstellen {#step-2-creating-spreadsheet}

Jetzt können Sie Spreadsheet zur Seite hinzufügen. Erstellen Sie zunächst einen DIV-Container und platzieren Sie DHTMLX Spreadsheet darin. Ihre Schritte sind:

- einen DIV-Container in der *index.html*-Datei angeben
- DHTMLX Spreadsheet mit dem `dhx.Spreadsheet`-Konstruktor initialisieren

Als Parameter nimmt die Konstruktorfunktion den HTML-Container, in den Spreadsheet eingefügt werden soll, sowie das Spreadsheet-Konfigurationsobjekt entgegen.

~~~html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   
   
    <link href="codebase/spreadsheet.css" rel="stylesheet">  
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <div id="spreadsheet_container"></div>
    <script>
        const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
            //config options
        });
    </script>
</body>
</html>
~~~

## Schritt 3. Spreadsheet konfigurieren {#step-3-setting-spreadsheet-configuration}

Als Nächstes können Sie zusätzliche Konfigurationsoptionen festlegen, die die Spreadsheet-Komponente bei der Initialisierung neben den Standardoptionen haben soll.

Sie können das Erscheinungsbild von Spreadsheet mit mehreren Optionen anpassen, zum Beispiel: `toolbarBlocks`, `rowsCount` und `colsCount`. [Weitere Details finden Sie hier](configuration.md).

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    toolbarBlocks: ["columns", "rows", "clear"],
    rowsCount: 10,
    colsCount: 10
});
~~~

Die Konfiguration von DHTMLX Spreadsheet ist sehr flexibel, sodass Sie sie jederzeit ändern können. [Lesen Sie die zugehörige Anleitung](configuration.md), um die Grundlagen der Spreadsheet-Konfiguration kennenzulernen.

## Schritt 4. Daten in Spreadsheet laden {#step-4-loading-data-into-spreadsheet}

Der letzte Schritt besteht darin, Spreadsheet mit Daten zu befüllen. DHTMLX Spreadsheet akzeptiert Daten im JSON-Format. Neben den Daten können Sie in einem Datensatz auch notwendige Styles übergeben. Beim Laden von Inline-Daten müssen Sie die Methode `parse()` verwenden und ihr ein Objekt mit den Daten übergeben, wie im folgenden Beispiel:

~~~jsx title="data.json"
const data = [
    { "cell": "a1", "value": "Country" },
    { "cell": "b1", "value": "Product" },
    { "cell": "c1", "value": "Price" },
    { "cell": "d1", "value": "Amount" },
    { "cell": "e1", "value": "Total Price" },

    { "cell": "a2", "value": "Ecuador" },
    { "cell": "b2", "value": "Banana" },
    { "cell": "c2", "value": 6.68 },
    { "cell": "d2", "value": 430 },
    { "cell": "e2", "value": 2872.4 },

    { "cell": "a3", "value": "Belarus" },
    { "cell": "b3", "value": "Apple" },
    { "cell": "c3", "value": 3.75 },
    { "cell": "d3", "value": 600 },
    { "cell": "e3", "value": 2250 }
]

// Spreadsheet initialisieren
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    //config
});
// Daten in Spreadsheet laden
spreadsheet.parse(data);
~~~

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierte Zellenanzahl](https://snippet.dhtmlx.com/vc3mstsw)

## Wie geht es weiter {#whats-next}

Das war alles. In vier Schritten erhalten Sie ein praktisches Werkzeug für die Arbeit mit tabellarischen Daten. Jetzt können Sie mit Ihren Daten arbeiten oder DHTMLX Spreadsheet weiter erkunden.

- [Spreadsheet-Übersicht](/)
- [](guides.md)
- [](api/api_overview.md)
