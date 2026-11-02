---
sidebar_label: fitColumn()
title: fitColumn-Methode
description: Passen Sie mit der Methode fitColumn() die Breite einer Spalte in DHTMLX Spreadsheet an ihren längsten Wert an.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// passt die Breite der Spalte "G" an
spreadsheet.fitColumn("G2");
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md#autofit-column-width)
