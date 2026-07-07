---
sidebar_label: deleteRow()
title: deleteRow method
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die deleteRow-Methode erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# deleteRow()

### Beschreibung {#description}

@short: Entfernt eine Zeile aus der Tabellenkalkulation

:::info
Die Methode sucht die angegebene Zelle, markiert sie, entfernt die Zeile, in der sich die Zelle befindet, und verschiebt die darunter liegende Zeile an deren Position.
:::

### Verwendung {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle, die die ID der zu löschenden Zeile enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// entfernt die zweite Zeile
spreadsheet.deleteRow("G2");
~~~

:::note
Sie können mehrere Zeilen löschen, indem Sie einen Zellenbereich als Parameter der Methode angeben, zum Beispiel: "A1:C3".
:::

**Verwandte Artikel:** [Arbeiten mit der Tabellenkalkulation](working_with_ssheet.md#addingremoving-rows-and-columns)
