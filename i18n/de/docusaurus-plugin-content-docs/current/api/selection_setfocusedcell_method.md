---
sidebar_label: setFocusedCell() 
title: setFocusedCell Selection-Methode
description: Sie können die setFocusedCell Selection-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# setFocusedCell()

### Beschreibung {#description}

@short: Setzt den Fokus auf die angegebene Zelle

### Verwendung {#usage}

~~~jsx
setFocusedCell(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID der Zelle, auf die der Fokus gesetzt werden soll

### Beispiel {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
