---
sidebar_label: clear()
title: clear-Methode
description: Sie können mehr über die clear-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
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

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
