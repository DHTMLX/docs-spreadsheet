---
sidebar_label: clear()
title: clear-Methode
description: Löschen Sie mit der Methode sheets.clear() die Werte, Stile und Formatierungen eines Tabellenblatts in DHTMLX Spreadsheet, ohne das Tabellenblatt selbst zu entfernen.
---

# clear()

### Beschreibung {#description}

@short: Löscht den Inhalt eines bestimmten Sheets (entfernt alle Zellwerte, Styles und Formatierungen), ohne das Sheet selbst zu löschen

Wenn keine ID angegeben wird, wird das aktuell aktive Sheet geleert.

### Verwendung {#usage}

~~~ts
clear: (id?: Id) => void;
~~~

### Parameter {#parameters}

- `id` - (*string | number*) optional, der eindeutige Bezeichner des zu leerenden Sheets. Wird der Parameter weggelassen, wird das aktuell aktive Sheet geleert.

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Ein bestimmtes Sheet anhand der ID leeren
spreadsheet.sheets.clear("sheet_1");

// Das aktuell aktive Sheet leeren
spreadsheet.sheets.clear();
~~~

**Changelog:** Hinzugefügt in v6.0

**Verwandter Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
