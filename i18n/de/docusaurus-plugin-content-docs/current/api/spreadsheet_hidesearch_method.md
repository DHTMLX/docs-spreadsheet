---
sidebar_label: hideSearch()
title: hideSearch method
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die hideSearch-Methode. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# hideSearch()

### Beschreibung {#description}

@short: Blendet die Suchleiste aus

### Verwendung {#usage}

~~~jsx
hideSearch(): void;
~~~

### Beispiel {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Öffnet eine Suchleiste und hebt die gefundenen Zellen hervor
spreadsheet.search("min", true);

// Blendet die Suchleiste aus
spreadsheet.hideSearch(); 
~~~

**Changelog:** Hinzugefügt in v5.0

**Verwandter Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#searching-for-data)
