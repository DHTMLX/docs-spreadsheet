---
sidebar_label: remove()
title: remove-Methode
description: Sie können mehr über die remove-Methode des Sheet Managers in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# remove()

### Beschreibung {#description}

@short: Entfernt ein Sheet anhand seines Bezeichners aus dem Spreadsheet

Wenn das entfernte Sheet aktiv war, wechselt das Spreadsheet automatisch zu einem anderen verfügbaren Sheet.

:::info
Um diese Methode anzuwenden, müssen Sie die Konfigurationsoption [`multiSheets`](api/spreadsheet_multisheets_config.md) aktivieren.

Beachten Sie außerdem, dass ein Sheet nicht gelöscht wird, wenn das Spreadsheet weniger als 2 Sheets enthält.
:::

### Verwendung {#usage}

~~~ts
remove: (id: Id) => void;
~~~

### Parameter {#parameters}

- `id` - (*string | number*) erforderlich, der eindeutige Bezeichner des zu entfernenden Sheets.

### Beispiel {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Ein Sheet anhand seiner ID entfernen
spreadsheet.sheets.remove("sheet_2");
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandte Artikel:** [Mit Sheets arbeiten](working_with_sheets.md)
