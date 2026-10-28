---
sidebar_label: readonly
title: readonly-Konfiguration
description: Aktivieren Sie den Nur-Lesen-Modus in DHTMLX Spreadsheet mit der Eigenschaft readonly. Er blockiert Datenänderungen, behält aber Tastaturnavigation, Auswahl, Kopieren und Suche bei.
---

# readonly

### Beschreibung {#description}

@short: Optional. Aktiviert oder deaktiviert den Nur-Lesen-Modus

### Verwendung {#usage}

~~~jsx
readonly?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
readonly: false
~~~

### Beispiel {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // other config parameters
});
~~~

### Details {#details}

Im Nur-Lesen-Modus sind die Symbolleiste, das Menü und die Formelleiste ausgeblendet, und das Kontextmenü sowie das Symbol des Spaltenmenüs sind nicht verfügbar. Die Tabellenblatt-Tabs bleiben erhalten, jedoch ohne die Schaltfläche zum Hinzufügen eines Tabellenblatts, das Kontextmenü der Tabellenblätter und das Umbenennen per Doppelklick.

Benutzer können die Daten weiterhin lesen und kopieren:

- die Zelle A1 ist nach dem Laden der Daten aktiv
- die Zellen können per Tastatur navigiert und per Maus ausgewählt werden, und die Auswahl-Events werden bei diesen Aktionen ausgelöst
- die Zellen können mit `Ctrl (Cmd) + C` kopiert und mit `Ctrl (Cmd) + F` durchsucht werden
- die Tabellenblätter können in den Tabellenblatt-Tabs und per Tastatur gewechselt werden
- die Links in Zellen können geöffnet werden, aber die Schaltflächen zum Bearbeiten und Entfernen eines Links sind im Link-Popup deaktiviert

Änderungen der Daten werden abgelehnt:

- Eingaben, Bearbeitungstasten, Ausschneiden und Einfügen, Rückgängig und Wiederholen sowie die Tastenkombinationen zum Formatieren von Zellen, Einfügen eines Links, Hinzufügen eines Tabellenblatts oder Einblenden ausgeblendeter Zeilen und Spalten werden ignoriert, und Screenreader kündigen "The sheet is read-only" an
- die Methoden, die Daten bearbeiten, zum Beispiel [`setValue()`](api/spreadsheet_setvalue_method.md), [`setStyle()`](api/spreadsheet_setstyle_method.md) und [`deleteRow()`](api/spreadsheet_deleterow_method.md), sowie die Methode [`startEdit()`](api/spreadsheet_startedit_method.md) werden ignoriert. Die Methoden [`parse()`](api/spreadsheet_parse_method.md) und [`load()`](api/spreadsheet_load_method.md) laden weiterhin Daten
- der Fill-Handle ist ausgeblendet
- die Spalten und Zeilen können nicht durch Ziehen ihrer Ränder in der Größe geändert werden, und ein Doppelklick auf einen Spaltenrand passt die Spaltenbreite nicht an die Daten an

Um auch die Tastaturnavigation und die Auswahl zu deaktivieren, setzen Sie die Option [`selection`](api/spreadsheet_selection_config.md) auf `false`. In diesem Fall hat die Tabellenkalkulation keine aktive Zelle, und die Zellen können weder per Maus, Tastatur noch API ausgewählt werden:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  selection: false,
  // other config parameters
});
~~~

**Changelog:** Die Tastaturnavigation, die Auswahl, das Kopieren und die Suche im Nur-Lesen-Modus wurden in v6.0.4 hinzugefügt

**Verwandte Artikel:**
- [Konfiguration](configuration.md#read-only-mode)
- [Anpassung](customization.md#custom-read-only-mode)
- [Barrierefreiheit: Einrichtung für den Nur-Lesen-Modus](accessibility.md#read-only-setup)

**Verwandtes Beispiel:** [Spreadsheet. Nur-Lesen](https://snippet.dhtmlx.com/2w959gx2)


