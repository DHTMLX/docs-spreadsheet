---
sidebar_label: redo()
title: redo-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die redo-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# redo()

### Beschreibung {#description}

@short: Wendet die rückgängig gemachte Aktion erneut an

### Verwendung {#usage}

~~~jsx
redo(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// wendet die rückgängig gemachte Aktion erneut an
spreadsheet.redo();
~~~
