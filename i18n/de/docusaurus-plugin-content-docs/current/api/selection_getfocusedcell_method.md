---
sidebar_label: getFocusedCell() 
title: getFocusedCell Selection-Methode
description: Ermitteln Sie mit der Methode selection.getFocusedCell() die ID der fokussierten (aktiven) Zelle in DHTMLX Spreadsheet.
---

# getFocusedCell()

### Beschreibung {#description}

@short: Gibt die ID der fokussierten Zelle zurück

### Verwendung {#usage}

~~~jsx
getFocusedCell(): string;
~~~

### Rückgabewert {#returns}

Die Methode gibt die ID der fokussierten Zelle zurück

### Beispiel {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

// Fokus auf eine Zelle setzen
spreadsheet.selection.setFocusedCell("D4");

// Die fokussierte Zelle abrufen
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
