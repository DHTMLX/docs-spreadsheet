---
sidebar_label: search()
title: search-Methode
description: Suchen Sie mit der Methode search() nach Zellen mit einem Wert in DHTMLX Spreadsheet. Die Methode gibt die IDs der gefundenen Zellen zurück und kann die Suchleiste mit hervorgehobenen Treffern öffnen.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// gibt IDs der Zellen mit übereinstimmendem Ergebnis zurück, öffnet die Suchleiste und hebt die gefundenen Zellen hervor
spreadsheet.search("feb", true, "Income"); // -> ['C1']
~~~

**Changelog:** In v5.0 hinzugefügt

**Verwandter Artikel:** [Mit der Tabelle arbeiten](working_with_ssheet.md#searching-for-data)
