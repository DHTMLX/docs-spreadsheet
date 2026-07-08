---
sidebar_label: getActive()
title: getActive-Methode
description: Sie können mehr über die getActive-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# getActive()

### Beschreibung {#description}

@short: Gibt das Sheet-Objekt zurück, das im Spreadsheet aktuell aktiv (sichtbar) ist

### Verwendung {#usage}

~~~ts
getActive: () => ISheet;
~~~

### Rückgabewert {#returns}

- `ISheet` - (*object*) das aktuell aktive Sheet-Objekt mit den Eigenschaften `id` und `name`.

### Beispiel {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
