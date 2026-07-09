---
sidebar_label: editLine
title: editLine config
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die editLine-Konfiguration erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    editLine: true,
    // andere Konfigurationsparameter
});
~~~

**Verwandter Artikel:** [Konfiguration](configuration.md#editing-bar)

**Verwandtes Beispiel:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
