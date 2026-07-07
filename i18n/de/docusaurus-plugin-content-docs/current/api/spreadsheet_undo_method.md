---
sidebar_label: undo()
title: undo-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die undo-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# undo()

### Beschreibung {#description}

@short: Macht die letzte Aktion rückgängig

### Verwendung {#usage}

~~~jsx
undo(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// führt einen Schritt zurück aus
spreadsheet.undo();
~~~
