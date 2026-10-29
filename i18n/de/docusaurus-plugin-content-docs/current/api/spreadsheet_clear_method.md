---
sidebar_label: clear()
title: clear method
description: Entfernen Sie mit der Methode clear() alle Daten aus DHTMLX Spreadsheet.
---

# clear()

### Beschreibung {#description}

@short: Leert eine Tabellenkalkulation

### Verwendung {#usage}

~~~jsx
clear(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// leert eine Tabellenkalkulation
spreadsheet.clear();
~~~

**Changelog:** Hinzugefügt in v4.2

**Verwandter Artikel:** [Tabellenkalkulation leeren](working_with_ssheet.md#clearing-spreadsheet)

**Verwandtes Beispiel:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
