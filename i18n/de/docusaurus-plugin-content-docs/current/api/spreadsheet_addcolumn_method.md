---
sidebar_label: addColumn() 
title: addColumn-Methode
description: Sie können mehr über die addColumn-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# addColumn()

### Beschreibung {#description}

@short: Fügt dem Spreadsheet eine neue Spalte hinzu

:::info
Die Methode sucht die angegebene Zelle, wählt sie aus, verschiebt die Spalte, in der sich die Zelle befindet, eine Position nach links und fügt stattdessen eine leere Spalte ein.
:::

### Verwendung {#usage}

~~~jsx
addColumn(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID der Zelle, die die ID der hinzuzufügenden Spalte enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// fügt eine leere Spalte "G" hinzu
spreadsheet.addColumn("G1");
~~~

**Verwandte Artikel:** [Mit dem Spreadsheet arbeiten](working_with_ssheet.md#addingremoving-rows-and-columns)
