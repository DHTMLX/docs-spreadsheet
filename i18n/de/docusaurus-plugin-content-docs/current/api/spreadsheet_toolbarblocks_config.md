---
sidebar_label: toolbarBlocks
title: toolbarBlocks-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die toolbarBlocks-Konfiguration. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# toolbarBlocks

### Beschreibung {#description}

@short: Optional. Gibt die Blöcke von Schaltflächen an, die in der Symbolleiste des Spreadsheets angezeigt werden

### Verwendung {#usage}

~~~jsx
toolbarBlocks?: array;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
toolbarBlocks: ["undo", "colors", "font", "decoration", "align", "cell", "format", "actions"]
~~~

### Beispiel {#example}

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // vollständige Symbolleiste
    toolbarBlocks: [
        "undo",
        "colors",
        "font",
        "decoration",
        "align",
        "cell",
        "format",
        "actions", 
        "lock",
        "clear",
        "columns",
        "rows",
        "file",
        "help"
    ]
});
~~~

### Details {#details}

Sie können die Struktur der Symbolleiste individuell gestalten, indem Sie die gewünschten Elemente in der bevorzugten Reihenfolge im Array `toolbarBlocks` aufführen, zum Beispiel:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Erfahren Sie, wie Sie die [Symbolleiste anpassen](customization.md#toolbar) können.

**Changelog:**

- Der Block `"font"` wurde in v6.0 hinzugefügt
- Der Block `"cell"` wurde in v5.2 hinzugefügt
- Der Block `"actions"` wurde in v5.0 hinzugefügt

**Verwandte Artikel:**
- [Konfiguration](configuration.md#toolbar)
- [Anpassung](customization.md)

**Verwandtes Beispiel:** [Spreadsheet. Vollständige Symbolleiste](https://snippet.dhtmlx.com/kpm017nx)
