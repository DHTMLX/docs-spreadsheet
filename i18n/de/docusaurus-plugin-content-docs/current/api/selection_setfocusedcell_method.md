---
sidebar_label: setFocusedCell() 
title: setFocusedCell Selection-Methode
description: Machen Sie eine Zelle aktiv und verschieben Sie den Tastaturfokus mit der Methode selection.setFocusedCell() in DHTMLX Spreadsheet auf diese Zelle.
---

# setFocusedCell()

### Beschreibung {#description}

@short: Setzt den Fokus auf die angegebene Zelle

### Verwendung {#usage}

~~~jsx
setFocusedCell(cell: string, scroll?: boolean): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID der Zelle, auf die der Fokus gesetzt werden soll
- `scroll` - (optional) legt fest, ob die Tabellenkalkulation zur Zelle gescrollt wird, standardmäßig `true`

### Beispiel {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

### Details {#details}

Die Methode macht die angegebene Zelle aktiv und verschiebt nach dem Neuzeichnen den Tastaturfokus auf diese Zelle. Der Tastaturfokus wird nicht verschoben, wenn er sich befindet:

- in einem Element außerhalb der Tabellenkalkulation
- in der Symbolleiste, im Menü oder in den Tabellenblatt-Tabs, die per Tastatur erreicht wurden
- in einem geöffneten Zelleneditor

Befindet sich der Tastaturfokus auf dem Seitenkörper (body), zum Beispiel direkt nach dem Laden der Seite, verschiebt die Methode ihn auf die Zelle.

Dieselben Regeln gelten für jede andere Änderung der aktiven Zelle, zum Beispiel durch eine andere API-Methode.

Wenn der Handler des Events [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md) `false` zurückgibt, wird die aktive Zelle nicht geändert und der Tastaturfokus nicht verschoben.

Die Methode tut nichts, solange die Auswahl mit der Konfigurationsoption [`selection: false`](api/spreadsheet_selection_config.md) oder mit der Methode [`selection.disable()`](api/selection_disable_method.md) deaktiviert ist.

**Changelog:** Das Verschieben des Tastaturfokus auf die Zelle wurde in v6.0.4 hinzugefügt

**Verwandte Artikel:**
- [Mit der Tabellenkalkulation arbeiten](working_with_ssheet.md)
- [Barrierefreiheit: Tastaturnavigation](accessibility.md#keyboard-navigation)
