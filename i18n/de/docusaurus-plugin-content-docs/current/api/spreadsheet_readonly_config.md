---
sidebar_label: readonly
title: readonly-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die readonly-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# readonly

### Beschreibung {#description}

@short: Optional. Aktiviert oder deaktiviert den Nur-Lesen-Modus

### Verwendung {#usage}

~~~jsx
readonly?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
readonly: false
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // other config parameters
});
~~~

**Verwandte Artikel:**
- [Konfiguration](configuration.md#read-only-mode)
- [Anpassung](customization.md#custom-read-only-mode)

**Verwandtes Beispiel:** [Spreadsheet. Nur-Lesen](https://snippet.dhtmlx.com/2w959gx2)


