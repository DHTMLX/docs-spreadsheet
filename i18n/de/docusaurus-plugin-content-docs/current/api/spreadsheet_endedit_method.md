---
sidebar_label: endEdit()
title: endEdit-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die endEdit-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# endEdit()

### Beschreibung {#description}

@short: Beendet die Bearbeitung in der ausgewählten Zelle, schließt den Editor und speichert den eingegebenen Wert

### Verwendung {#usage}

~~~jsx
endEdit(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// beendet die Bearbeitung in der ausgewählten Zelle
spreadsheet.endEdit();
~~~

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_cells.md#editing-a-cell)
