---
sidebar_label: setSelectedCell() 
title: setSelectedCell Selection-Methode
description: Wählen Sie mit der Methode selection.setSelectedCell() eine Zelle, mehrere Zellen oder einen Zellbereich in DHTMLX Spreadsheet aus und scrollen Sie optional dorthin.
---

# setSelectedCell()

### Beschreibung {#description}

@short: Wählt die angegebene(n) Zelle(n) aus

### Verwendung {#usage}

~~~jsx
setSelectedCell(cell: string, scroll?: boolean): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) oder ein Bereich der auszuwählenden Zelle(n)
- `scroll` - (optional) legt fest, ob die Tabellenkalkulation zur Zelle gescrollt wird, standardmäßig `true`

### Beispiel {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
