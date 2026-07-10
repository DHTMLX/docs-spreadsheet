---
sidebar_label: getFilter()
title: getFilter-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die getFilter-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# getFilter()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den für die Datenfilterung festgelegten Kriterien zurück

### Verwendung {#usage}

~~~jsx   
getFilter(id?: string): {cell, rules};
~~~

### Parameter {#parameters}

- `id` - (optional) die ID eines Tabellenblatts. Wenn nicht angegeben, wird die Methode für das aktuelle Tabellenblatt aufgerufen

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit Filterkriterien zurück. Das Objekt enthält zwei Attribute:

- `cell` - ein Zellenbereich, auf den die Filterung angewendet wird
- `rules` - ein Array von Objekten mit Regeln für die Filterung

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// gibt die Filterkriterien für das aktuelle Tabellenblatt zurück
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Daten filtern](working_with_ssheet.md#filtering-data)
