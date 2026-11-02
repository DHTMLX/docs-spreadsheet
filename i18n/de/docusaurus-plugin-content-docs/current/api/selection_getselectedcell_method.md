---
sidebar_label: getSelectedCell() 
title: getSelectedCell Selection-Methode
description: Ermitteln Sie mit der Methode selection.getSelectedCell() die IDs oder Bereiche der ausgewählten Zellen in DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// Gibt die ausgewählten Zellen zurück
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
