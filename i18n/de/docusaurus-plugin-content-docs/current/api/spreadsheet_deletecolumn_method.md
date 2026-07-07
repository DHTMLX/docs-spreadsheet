---
sidebar_label: deleteColumn()
title: deleteColumn method
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die deleteColumn-Methode erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# deleteColumn()

### Beschreibung {#description}

@short: Entfernt eine Spalte aus der Tabellenkalkulation

:::info
Die Methode sucht die angegebene Zelle, markiert sie, entfernt die Spalte, in der sich die Zelle befindet, und verschiebt die Spalte links davon an deren Position.
:::

### Verwendung {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle, die den Namen der zu löschenden Spalte enthält

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// entfernt die Spalte "G"
spreadsheet.deleteColumn("G2");
~~~

:::note
Sie können mehrere Spalten löschen, indem Sie einen Zellenbereich als Parameter der Methode angeben, zum Beispiel: "A1:C3".
:::

**Verwandte Artikel:** [Arbeiten mit der Tabellenkalkulation](working_with_ssheet.md#addingremoving-rows-and-columns)
