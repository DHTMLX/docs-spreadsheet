---
sidebar_label: startEdit()
title: startEdit-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die startEdit-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# startEdit()

### Beschreibung {#description}

@short: Startet die Bearbeitung in der ausgewählten Zelle

:::info
Wenn keine Zellen-ID übergeben wird, beginnt die Bearbeitung in der aktuell ausgewählten Zelle.
:::

### Verwendung {#usage}

~~~jsx
startEdit(cell?: string, initialValue?: string): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID einer Zelle
- `initialValue` - (optional) der Zellwert

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// startet die Bearbeitung der aktuell ausgewählten Zelle
spreadsheet.startEdit();
~~~

### Details {#details}

Die Eingabe in der aktiven Zelle startet die Bearbeitung über diese Methode. Text, der mit einem Input Method Editor (IME) verfasst wird, wird nach Abschluss der Komposition als `initialValue` übergeben. Somit erhalten die Events [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md) und [`afterEditStart`](api/spreadsheet_aftereditstart_event.md) den eingegebenen bzw. verfassten Text, und `beforeEditStart` kann die Bearbeitung abbrechen.

**Changelog:** Das Starten der Bearbeitung mit dem per IME verfassten Text wurde in v6.0.4 hinzugefügt

**Verwandter Artikel:** [Mit dem Spreadsheet arbeiten](working_with_cells.md#editing-a-cell)
