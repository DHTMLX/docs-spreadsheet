---
sidebar_label: multiSheets
title: multiSheets-Konfiguration
description: Aktivieren oder deaktivieren Sie mit der Eigenschaft multiSheets die Arbeit mit mehreren Tabellenblättern in DHTMLX Spreadsheet. Sie blendet die untere Leiste mit den Tabellenblatt-Tabs ein oder aus.
---

# multiSheets

### Beschreibung {#description}

@short: Optional. Aktiviert oder deaktiviert die Möglichkeit, mit mehreren Tabellenblättern zu arbeiten

### Verwendung {#usage}

~~~jsx
multiSheets?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
multiSheets: true
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: false,
    // other config parameters
});
~~~

:::info
Wenn die Eigenschaft auf `false` gesetzt wird, wird die untere Tableitenleiste mit den Tabellenblatt-Tabs ausgeblendet.
:::

**Changelog:** In v4.1 hinzugefügt
