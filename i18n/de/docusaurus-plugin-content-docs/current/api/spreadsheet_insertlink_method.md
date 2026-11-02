---
sidebar_label: insertLink()
title: insertLink method
description: Fügen Sie mit der Methode insertLink() einen Hyperlink in eine Zelle von DHTMLX Spreadsheet ein, oder entfernen Sie den Hyperlink und behalten Sie den Text der Zelle bei.
---

# insertLink()

### Beschreibung {#description}

@short: Fügt einen Hyperlink in eine Zelle ein oder entfernt ihn

### Verwendung {#usage}

~~~jsx
insertLink( 
    cell: string,
    link? : {
        text?: string, 
        href: string
    }
): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle
- `link` - (optional) ein Objekt mit der Konfiguration eines Links:
    - `text` - (optional) der Text, der als Hyperlink angezeigt werden soll
    - `href` - (erforderlich) die URL der Seite, auf die der Hyperlink verweist

:::info
Um einen Hyperlink zu entfernen, aber den Text beizubehalten, rufen Sie die Methode ohne den Parameter `link` auf.
:::

### Beispiel {#example}

~~~jsx {5-7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Einen Link in Zelle "A2" einfügen
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});

// Einen Link aus Zelle "A2" entfernen
spreadsheet.insertLink("A2");
~~~

**Changelog:** Hinzugefügt in v5.0

**Verwandter Artikel:** [Mit Spreadsheet arbeiten](working_with_cells.md#inserting-a-hyperlink-into-a-cell)
