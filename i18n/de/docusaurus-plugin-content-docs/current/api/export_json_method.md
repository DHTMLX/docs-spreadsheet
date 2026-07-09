---
sidebar_label: json()
title: json Export-Methode
description: Sie können sich über die json Export-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek informieren. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# json()

### Beschreibung {#description}

@short: Exportiert Daten aus einer Tabelle in eine JSON-Datei

### Verwendung {#usage}

~~~jsx
json(): void;
~~~

### Beispiel {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Changelog:** In v4.3 hinzugefügt

**Verwandter Artikel:** [Datenladen und -export](loading_data.md)

**Verwandtes Beispiel:** [Spreadsheet. Export/Import JSON](https://snippet.dhtmlx.com/e3xct53l)
