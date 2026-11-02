---
sidebar_label: hideSearch()
title: hideSearch method
description: Blenden Sie die Suchleiste von DHTMLX Spreadsheet mit der Methode hideSearch() aus, zum Beispiel nach einer mit der Methode search() geöffneten Suche.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Öffnet eine Suchleiste und hebt die gefundenen Zellen hervor
spreadsheet.search("min", true);

// Blendet die Suchleiste aus
spreadsheet.hideSearch(); 
~~~

**Changelog:** Hinzugefügt in v5.0

**Verwandter Artikel:** [Mit Spreadsheet arbeiten](working_with_ssheet.md#searching-for-data)
