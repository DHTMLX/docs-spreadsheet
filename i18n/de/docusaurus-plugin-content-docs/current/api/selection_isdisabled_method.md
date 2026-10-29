---
sidebar_label: isDisabled() 
title: isDisabled Selection-Methode
description: Prüfen Sie mit der Methode selection.isDisabled(), ob die Zellauswahl in DHTMLX Spreadsheet ausgeschaltet ist.
---

# isDisabled()

### Beschreibung {#description}

@short: Prüft, ob die Zellauswahl ausgeschaltet ist

### Verwendung {#usage}

~~~jsx
isDisabled(): boolean;
~~~

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Auswahl ausgeschaltet ist, andernfalls `false`

### Beispiel {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

const disabled = spreadsheet.selection.isDisabled(); // -> true
~~~

**Changelog:** Hinzugefügt in v6.0.4

**Verwandte Artikel:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [`disable()`](api/selection_disable_method.md)
- [Barrierefreiheit: Einrichtung für den schreibgeschützten Modus](accessibility.md#read-only-setup)
