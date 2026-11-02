---
sidebar_label: json()
title: json Export-Methode
description: Exportieren Sie mit der Methode export.json() die Daten von DHTMLX Spreadsheet in eine JSON-Datei.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Changelog:** In v4.3 hinzugefügt

**Verwandter Artikel:** [Datenladen und -export](loading_data.md)

**Verwandtes Beispiel:** [Spreadsheet. Export/Import JSON](https://snippet.dhtmlx.com/e3xct53l)
