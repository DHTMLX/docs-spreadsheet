---
sidebar_label: editLine
title: editLine config
description: Blenden Sie die Bearbeitungsleiste von DHTMLX Spreadsheet mit der Eigenschaft editLine ein oder aus. Standardmäßig ist sie eingeblendet.
---

# editLine

### Beschreibung {#description}

@short: Optional. Zeigt die Bearbeitungsleiste an oder blendet sie aus

### Verwendung {#usage}

~~~jsx
editLine?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
editLine: true
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    editLine: true,
    // andere Konfigurationsparameter
});
~~~

**Verwandter Artikel:** [Konfiguration](configuration.md#editing-bar)

**Verwandtes Beispiel:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
