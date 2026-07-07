---
sidebar_label: multiSheets
title: multiSheets-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die multiSheets-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    multiSheets: false,
    // other config parameters
});
~~~

:::info
Wenn die Eigenschaft auf `false` gesetzt wird, wird die untere Tableitenleiste mit den Tabellenblatt-Tabs ausgeblendet.
:::

**Change log:** In v4.1 hinzugefügt
