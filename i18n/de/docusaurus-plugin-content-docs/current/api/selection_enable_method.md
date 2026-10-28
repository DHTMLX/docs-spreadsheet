---
sidebar_label: enable() 
title: enable Selection-Methode
description: Schalten Sie die Zellauswahl in DHTMLX Spreadsheet mit der Methode selection.enable() wieder ein. Die Methode macht die Zelle A1 aktiv und löst die Auswahl-Events aus.
---

# enable()

### Beschreibung {#description}

@short: Schaltet die Zellauswahl ein

### Verwendung {#usage}

~~~jsx
enable(): void;
~~~

### Beispiel {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.enable();
~~~

### Details {#details}

Die Methode macht die Zelle A1 des aktiven Blatts aktiv. Für die Zelle A1 werden die Events [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md), [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md), [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md) und [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md) ausgelöst.

Ist die Auswahl bereits eingeschaltet, tut die Methode nichts.

**Changelog:** Hinzugefügt in v6.0.4

**Verwandte Artikel:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`disable()`](api/selection_disable_method.md)
- [Barrierefreiheit: Einrichtung für den schreibgeschützten Modus](accessibility.md#read-only-setup)
