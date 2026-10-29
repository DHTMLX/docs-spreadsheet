---
sidebar_label: addColumn() 
title: addColumn-Methode
description: Fügen Sie mit der Methode addColumn() eine leere Spalte in DHTMLX Spreadsheet ein. Sie wird an der Spalte der angegebenen Zelle eingefügt, und die vorhandenen Spalten werden nach rechts verschoben.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// fügt eine leere Spalte "G" hinzu
spreadsheet.addColumn("G1");
~~~

**Verwandter Artikel:** [Mit dem Spreadsheet arbeiten](working_with_ssheet.md#addingremoving-rows-and-columns)
