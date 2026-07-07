---
sidebar_label: formats
title: formats-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die formats-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# formats

### Beschreibung {#description}

@short: Optional. Definiert die Liste der Zahlenformate  

### Verwendung {#usage}

~~~jsx
formats?: array;
~~~

### Parameter {#parameters}

Die Eigenschaft `formats` ist ein Array von Zahlenformat-Objekten, von denen jedes einen Satz von Eigenschaften enthält:

- `id` - die ID eines Formats, das verwendet wird, um ein Format für eine Zelle mit der Methode [](api/spreadsheet_setformat_method.md) festzulegen
- `mask` - eine Maske für ein Zahlenformat
- `name` - der Name eines Formats, der in den Dropdown-Listen der Symbolleiste und des Menüs angezeigt wird
- `example` - ein Beispiel, das zeigt, wie eine formatierte Zahl aussieht. Die Zahl 2702.31 wird als Standardwert für Formatbeispiele verwendet

### Standardkonfiguration {#default-config}

Die standardmäßigen Zahlenformate sind folgende:

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // depending on the timeFormat config
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" }
];
~~~


### Beispiel {#example}

~~~jsx {2-19}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    formats: [
        {
            name: "U.S. Dollar",
            id: "currency",
            mask: "$#,##0.00"
        },
        {
            name: "Euro",
            id: "euro",
            mask: "[$€]#.##0,00",
            example: "1000.50"
        },
        {
            name: "Swiss franc",
            id: "franc",
            mask: "[$CHF ]#.##0,00"
        }
    ],
    // weitere Konfigurationsparameter
});
~~~

**Änderungsprotokoll:**
- Das Format "Time" wurde in v4.3 hinzugefügt
- Das Format "Date" wurde in v4.2 hinzugefügt
- Das Format "Text" wurde in v4.0 hinzugefügt

**Verwandte Artikel:** 
- [Zahlenformatierung](number_formatting.md)
- [Formatanpassung](number_formatting.md#formats-customization)
