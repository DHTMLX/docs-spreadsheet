---
sidebar_label: fitColumn()
title: fitColumn-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die fitColumn-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# fitColumn()

### Beschreibung {#description}

@short: Passt die Breite der Spalte an ihren längsten Wert an


### Verwendung {#usage}

~~~jsx
fitColumn(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle, die den Namen der gewünschten Spalte enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// passt die Breite der Spalte "G" an
spreadsheet.fitColumn("G2");
~~~

**Änderungsprotokoll:** In v5.0 hinzugefügt

**Verwandte Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md#autofit-column-width)
