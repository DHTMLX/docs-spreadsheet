---
sidebar_label: Daten filtern
title: Daten filtern
description: Daten in DHTMLX Spreadsheet nach Bedingung oder nach Werten filtern, einen Filter mit der Tastatur öffnen sowie Filter löschen oder entfernen.
---

# Daten filtern {#filtering-data}

Sie können Daten in der Tabelle filtern, um nur die Datensätze anzuzeigen, die den von Ihnen festgelegten Kriterien entsprechen.

Um das Filtern zu aktivieren, verwenden Sie eine der folgenden Methoden:

- Setzen Sie den Fokus auf eine Zelle oder wählen Sie einen Zellbereich aus und klicken Sie auf die Schaltfläche **Filter** in der Symbolleiste

![DHTMLX Spreadsheet-Symbolleiste mit der Schaltfläche "Filter" zum Aktivieren der Datenfilterung](/img/filter_button.png)

- Setzen Sie den Fokus auf eine Zelle oder wählen Sie einen Zellbereich aus und navigieren Sie zu: *Daten -> Filter* im Menü

![DHTMLX Spreadsheet-Datenmenü mit der Option "Filter" zum Aktivieren von Spaltenfiltern](/img/filter_menu.png)

Danach erscheint rechts neben jeder Spaltenüberschrift im Bereich ein **Filter**-Symbol.

## Filtern nach Bedingung {#filtering-by-condition}

- Klicken Sie auf das **Filter**-Symbol der gewünschten Spalte

- Wählen Sie einen der integrierten Vergleichsoperatoren aus, zum Beispiel **Größer als**

- Geben Sie das Filterkriterium an und klicken Sie auf **Übernehmen**

![DHTMLX Spreadsheet-Spaltenfilter-Dropdown mit Vergleichsoperatoren wie "Größer als"](/img/filter_by_condition.png)

### Filter löschen {#clearing-a-filter}

Um einen Filter zu löschen, klicken Sie auf das **Filter**-Symbol in der Spaltenüberschrift, wählen Sie _Nach Bedingung: **Keine**_ aus und klicken Sie dann auf **Übernehmen**.

![DHTMLX Spreadsheet-Filterdialog mit der Option "Nach Bedingung: Keine" zum Löschen von Filtern](/img/clear_filter_bycondition.png)

## Einen Filter mit der Tastatur öffnen {#opening-a-filter-with-the-keyboard}

So öffnen Sie den Filter einer Spalte ohne Maus:

- Bewegen Sie die aktive Zelle zur Kopfzelle der Spalte mit dem **Filter**-Symbol

- Drücken Sie `Shift + F10` oder die Menütaste, um das Kontextmenü aufzurufen, und wählen Sie *Open filter*

![DHTMLX Spreadsheet context menu of a header cell with the filter icon and the Open filter command focused](/img/open_filter_context_menu.png)

Der Befehl *Open filter* erscheint im Kontextmenü nur für Zellen mit dem **Filter**-Symbol. Sie können ihn auch nach einem Rechtsklick auf eine solche Zelle wählen. Im [schreibgeschützten Modus](api/spreadsheet_readonly_config.md) sind das Kontextmenü und der Befehl *Open filter* nicht verfügbar.

Das Filter-Popup erhält den Fokus, und `Tab` wechselt zwischen seinen Controls. `Esc` schließt das Popup und gibt den Fokus an die Zelle zurück. Ist im Popup eine Dropdown-Liste oder ein Datepicker geöffnet, schließt `Esc` zuerst diese.

## Filtern nach Werten {#filtering-by-values}

- Klicken Sie auf das **Filter**-Symbol der gewünschten Spalte

- Klicken Sie auf die Schaltfläche **Alle abwählen**

![DHTMLX Spreadsheet-Spaltenfilter mit der Schaltfläche "Alle abwählen" und Wert-Kontrollkästchen](/img/unselect_all_button.png)

- Aktivieren Sie die Kontrollkästchen für die Werte, die Sie anzeigen möchten, und klicken Sie auf **Übernehmen**

### Filter löschen {#clearing-a-filter-1}

Um einen Filter zu löschen, klicken Sie auf das **Filter**-Symbol in der Spaltenüberschrift, klicken Sie auf die Schaltfläche **Alle auswählen** und dann auf **Übernehmen**.

![DHTMLX Spreadsheet-Spaltenfilter-Dialog mit der Schaltfläche "Alle auswählen" zum Löschen von Wertfiltern](/img/clear_filter_by_values.png)

## Filter entfernen {#removing-filters}

Um das Filtern zu deaktivieren, führen Sie einen der folgenden Schritte aus:

- Klicken Sie auf die Schaltfläche **Filter** in der Symbolleiste
- oder navigieren Sie zu: *Daten -> Filter* im Menü

Die **Filter**-Symbole verschwinden aus den Spaltenüberschriften, und alle ausgeblendeten Datensätze werden wieder angezeigt.
