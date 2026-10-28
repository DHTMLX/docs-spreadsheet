---
sidebar_label: selection
title: selection Konfiguration
description: Schalten Sie die Zellauswahl in DHTMLX Spreadsheet mit der Eigenschaft selection aus, allein oder zusammen mit dem schreibgeschützten Modus, um die Daten ohne aktive Zelle anzuzeigen.
---

# selection

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert die Zellauswahl

### Verwendung {#usage}

~~~jsx
selection?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
selection: true
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
~~~

### Details {#details}

Wenn die Eigenschaft auf `false` gesetzt ist:

- hat das Spreadsheet keine aktive Zelle
- können Zellen weder mit der Maus, der Tastatur noch der API ausgewählt werden: Die Methoden [`setSelectedCell()`](api/selection_setselectedcell_method.md) und [`setFocusedCell()`](api/selection_setfocusedcell_method.md) werden ignoriert, und die Methoden [`getSelectedCell()`](api/selection_getselectedcell_method.md) und [`getFocusedCell()`](api/selection_getfocusedcell_method.md) geben `undefined` zurück
- können Zellen nicht über die Oberfläche bearbeitet werden: Die Formelleiste ist gesperrt, der Ausfüllgriff ist ausgeblendet, und die Methode [`startEdit()`](api/spreadsheet_startedit_method.md) wird ignoriert
- sind das Kontextmenü und das Spaltenmenü-Symbol nicht verfügbar
- hält `Tab` einmal auf dem Grid an und verschiebt den Fokus weiter, und `Ctrl + F6` überspringt das Grid

Die Spalten und Zeilen lassen sich weiterhin durch Ziehen ihrer Ränder in der Größe ändern, und die Daten können weiterhin über die API geändert werden, zum Beispiel mit der Methode [`setValue()`](api/spreadsheet_setvalue_method.md).

In Kombination mit der Eigenschaft [`readonly`](api/spreadsheet_readonly_config.md) schaltet die Option die Tastaturnavigation und die Auswahl aus, die im schreibgeschützten Modus verfügbar sind:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    readonly: true,
    selection: false,
    // other config parameters
});
~~~

Um die Auswahl zur Laufzeit aus- und einzuschalten, verwenden Sie die Methoden [`selection.disable()`](api/selection_disable_method.md) und [`selection.enable()`](api/selection_enable_method.md).

**Changelog:** Hinzugefügt in v6.0.4

**Verwandte Artikel:**
- [Auswahl von Zellen](configuration.md#selection-of-cells)
- [Schreibgeschützter Modus](configuration.md#read-only-mode)
- [Barrierefreiheit: Einrichtung für den schreibgeschützten Modus](accessibility.md#read-only-setup)
