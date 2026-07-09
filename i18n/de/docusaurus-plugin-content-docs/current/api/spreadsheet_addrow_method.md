---
sidebar_label: addRow()
title: addRow-Methode
description: Sie können mehr über die addRow-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# addRow()

### Beschreibung {#description}

@short: Fügt dem Spreadsheet eine neue Zeile hinzu

:::info
Die Methode sucht die angegebene Zelle, wählt sie aus, verschiebt die Zeile, in der sich die Zelle befindet, eine Position nach unten und fügt stattdessen eine leere Zeile ein.
:::

### Verwendung {#usage}

~~~jsx
addRow(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID der Zelle, die die ID der hinzuzufügenden Zeile enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// fügt eine leere zweite Zeile hinzu
spreadsheet.addRow("G2");
~~~

**Verwandter Artikel:** [Mit dem Spreadsheet arbeiten](working_with_ssheet.md#addingremoving-rows-and-columns)
