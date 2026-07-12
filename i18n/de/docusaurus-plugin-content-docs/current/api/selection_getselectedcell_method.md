---
sidebar_label: getSelectedCell() 
title: getSelectedCell Selection-Methode
description: Sie können die getSelectedCell Selection-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# getSelectedCell()

### Beschreibung {#description}

@short: Gibt die ID(s) der ausgewählten Zelle(n) zurück

### Verwendung {#usage}

~~~jsx
getSelectedCell(): string;
~~~

### Rückgabewert {#returns}

Die Methode gibt die ID(s) oder einen Bereich der ausgewählten Zelle(n) zurück

### Beispiel {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// Gibt die ausgewählten Zellen zurück
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
