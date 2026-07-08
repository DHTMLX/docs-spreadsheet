---
sidebar_label: setActive()
title: setActive-Methode
description: Sie können mehr über die setActive-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# setActive()

### Beschreibung {#description}

@short: Wechselt das aktive (sichtbare) Sheet zu dem Sheet, das durch seinen Bezeichner angegeben wird

Die Benutzeroberfläche des Spreadsheets wird neu gerendert, um den Inhalt des Ziel-Sheets anzuzeigen.

### Verwendung {#usage}

~~~ts
setActive: (id: Id) => void;
~~~

### Parameter {#parameters}

- `id` - (*string | number*) erforderlich, der eindeutige Bezeichner des zu aktivierenden Sheets.

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Zum zweiten Sheet wechseln
spreadsheet.sheets.setActive("sheet_2");

// Den Wechsel überprüfen
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
