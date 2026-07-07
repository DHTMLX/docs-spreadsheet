---
sidebar_label: setSelectedCell() 
title: setSelectedCell Selection-Methode
description: Sie können die setSelectedCell Selection-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# setSelectedCell()

### Beschreibung {#description}

@short: Wählt die angegebene(n) Zelle(n) aus

### Verwendung {#usage}

~~~jsx
setSelectedCell(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) oder ein Bereich der auszuwählenden Zelle(n)

### Beispiel {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

// Eine einzelne Zelle auswählen
spreadsheet.selection.setSelectedCell("B5");

// Einen Zellenbereich auswählen
spreadsheet.selection.setSelectedCell("B1:B5");

// Verstreute Zellen auswählen
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
