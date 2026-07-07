---
sidebar_label: clear()
title: clear method
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die clear-Methode erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# clear()

### Beschreibung {#description}

@short: Leert eine Tabellenkalkulation

### Verwendung {#usage}

~~~jsx
clear(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// leert eine Tabellenkalkulation
spreadsheet.clear();
~~~

**Änderungsprotokoll:** Hinzugefügt in v4.2

**Verwandte Artikel:** [Tabellenkalkulation leeren](working_with_ssheet.md#clearing-spreadsheet)

**Verwandtes Beispiel:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
