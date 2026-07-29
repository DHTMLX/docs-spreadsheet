---
sidebar_label: mergeCells()
title: mergeCells-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die mergeCells-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# mergeCells()

### Beschreibung {#description}

@short: Führt einen Zellbereich zu einer Zelle zusammen oder teilt zusammengeführte Zellen auf

### Verwendung {#usage}

~~~jsx
mergeCells( 
    cell: string,
    remove?: boolean
);
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) ein Zellbereich (z. B. "A1:A5")
- `remove` - (optional) legt die Aktion fest, die auf die Zellen angewendet wird:
    - `false` - Zellen zusammenführen (Standardwert)
    - `true` - Zellen aufteilen

### Beispiel {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Zellen A3, A4 und A5 zusammenführen
spreadsheet.mergeCells("A2:A5");

// Zellen A3, A4 und A5 aufteilen
spreadsheet.mergeCells("A2:A5", true);
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Mit Zellen arbeiten](working_with_cells.md#merging-cells)
