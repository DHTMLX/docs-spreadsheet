---
sidebar_label: getFocusedCell() 
title: getFocusedCell Selection-Methode
description: Sie können die getFocusedCell Selection-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

// Fokus auf eine Zelle setzen
spreadsheet.selection.setFocusedCell("D4");

// Die fokussierte Zelle abrufen
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
