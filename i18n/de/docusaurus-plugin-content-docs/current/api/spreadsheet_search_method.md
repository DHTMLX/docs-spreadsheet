---
sidebar_label: search()
title: search-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die search-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# search()

### Beschreibung {#description}

@short: Sucht nach Zellen anhand der angegebenen Parameter

Die Methode kann außerdem ein Suchfeld in der oberen rechten Ecke der Tabelle öffnen und die gefundenen Ergebnisse hervorheben

### Verwendung {#usage}

~~~jsx
search( 
    text?: string,
    openSearch?: boolean, 
    sheetId?: string | number
): string[];
~~~

### Parameter {#parameters}

- `text` - (optional) der zu suchende Wert
- `openSearch` - (optional) wenn `true`, wird ein Suchfeld geöffnet und Zellen mit übereinstimmenden Ergebnissen werden hervorgehoben; standardmäßig `false`
- `sheetId` - (optional) die ID des Tabellenblatts. Standardmäßig sucht die Methode auf dem aktuell aktiven Tabellenblatt

### Rückgabewert {#returns}

Die Methode gibt ein Array mit den IDs der gefundenen Zellen zurück

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// gibt IDs der Zellen mit übereinstimmendem Ergebnis zurück, öffnet die Suchleiste und hebt die gefundenen Zellen hervor
spreadsheet.search("feb", true, "Income"); // -> ['C1']
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Mit der Tabelle arbeiten](working_with_ssheet.md#searching-for-data)
