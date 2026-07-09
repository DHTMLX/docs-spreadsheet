---
sidebar_label: serialize()
title: serialize-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die serialize-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# serialize()

### Beschreibung {#description}

@short: Serialisiert die Tabellendaten in ein JSON-Objekt

### Verwendung {#usage}

~~~jsx
serialize(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein serialisiertes JSON-Objekt zurück

Die serialisierten Daten sind ein Objekt mit den folgenden Attributen:

- `formats` - ein Array von Objekten mit Zahlenformaten
- `styles` - ein Objekt mit den angewendeten CSS-Klassen
- `sheets` - ein Array von Tabellenblatt-Objekten. Jedes Objekt enthält die folgenden Attribute:
  - `name` - der Name des Tabellenblatts
  - `data` - ein Array von Datenobjekten
  - `rows` - ein Array von Höhenobjekten
  - `cols` - ein Array von Breitobjekten

### Beispiel {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const data = spreadsheet.serialize();
~~~

**Verwandter Artikel:** [Datenladen und -export](loading_data.md#saving-and-restoring-state)
