---
sidebar_label: removeSelectedCell() 
title: removeSelectedCell Selection-Methode
description: Sie können die removeSelectedCell Selection-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# removeSelectedCell()

### Beschreibung {#description}

@short: Hebt die Auswahl der angegebenen Zelle(n) auf

### Verwendung {#usage}

~~~jsx
removeSelectedCell(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) oder ein Bereich der ausgewählten Zelle(n)

### Beispiel {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

// Verstreute Zellen auswählen
spreadsheet.selection.setSelectedCell("A1:A9,C2,B4,D6");

// Hebt die Auswahl der angegebenen Zellen auf
spreadsheet.selection.removeSelectedCell("A3:A6,C2");
~~~

**Änderungsprotokoll:** Hinzugefügt in v4.2

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)

**Verwandtes Beispiel:** [Spreadsheet. Auswahl aufheben](https://snippet.dhtmlx.com/u4j76cuh)
