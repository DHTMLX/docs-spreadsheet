---
sidebar_label: mergeCells()
title: mergeCells-Methode
description: Verbinden Sie mit der Methode mergeCells() einen Zellbereich zu einer Zelle oder teilen Sie verbundene Zellen in DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Zellen A3, A4 und A5 zusammenführen
spreadsheet.mergeCells("A2:A5");

// Zellen A3, A4 und A5 aufteilen
spreadsheet.mergeCells("A2:A5", true);
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Mit Zellen arbeiten](working_with_cells.md#merging-cells)
