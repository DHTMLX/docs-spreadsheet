---
sidebar_label: disable() 
title: disable Selection-Methode
description: Schalten Sie die Zellauswahl in DHTMLX Spreadsheet zur Laufzeit mit der Methode selection.disable() aus. Die Methode entfernt die aktive Zelle und ignoriert die Auswahl per Maus, Tastatur und API.
---

# disable()

### Beschreibung {#description}

@short: Schaltet die Zellauswahl aus

### Verwendung {#usage}

~~~jsx
disable(): void;
~~~

### Beispiel {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.disable();
~~~

### Details {#details}

Die Methode:

- beendet die Bearbeitung einer Zelle und speichert den eingegebenen Wert
- entfernt die ausgewählten und die aktiven Zellen auf jedem Blatt
- ignoriert die Auswahl per Maus, Tastatur und API, bis die Methode [`enable()`](api/selection_enable_method.md) aufgerufen wird

Solange die Auswahl ausgeschaltet ist, geben die Methoden [`getSelectedCell()`](api/selection_getselectedcell_method.md) und [`getFocusedCell()`](api/selection_getfocusedcell_method.md) `undefined` zurück. Die übrigen Auswirkungen entsprechen denen der Konfigurationsoption [`selection: false`](api/spreadsheet_selection_config.md#details).

Ist die Auswahl bereits ausgeschaltet, tut die Methode nichts.

**Changelog:** Hinzugefügt in v6.0.4

**Verwandte Artikel:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [Barrierefreiheit: Einrichtung für den schreibgeschützten Modus](accessibility.md#read-only-setup)
