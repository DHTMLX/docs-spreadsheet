---
sidebar_label: Was ist neu
title: Was ist neu in DHTMLX Spreadsheet
description: Sie erfahren in der Dokumentation, was neu in der DHTMLX JavaScript Spreadsheet-Bibliothek ist. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Was ist neu {#whats-new}

Wenn Sie Spreadsheet von einer älteren Version aktualisieren, lesen Sie die [Migration auf eine neuere Version](migration.md) für Details.

## Version 6.0.2 {#version-602}

Veröffentlicht am 1. Juli 2026

### Fehlerbehebungen {#fixes}

- Zellrahmen gingen nach einem "Kopieren aus Excel → Einfügen in Spreadsheet → Exportieren/Importieren"-Zyklus verloren
- Unterhalb der letzten Zeile eingefügte Daten wurden nicht angezeigt, weil das Raster keine neuen Zeilen hinzufügte, um sie aufzunehmen

## Version 6.0 {#version-60}

Veröffentlicht am 20. Mai 2026

[Versionsüberblick im Blog](https://dhtmlx.com/blog/meet-dhtmlx-spreadsheet-6-0/)

### Breaking Changes {#breaking-changes}

Die neue Version führt wesentliche Änderungen in der Spreadsheet-API ein: Es gibt eine Reihe veralteter Methoden, Eigenschaften und Events. Lesen Sie den [Migrationsleitfaden](migration.md#52---60), um mit der neuesten Version Schritt zu halten.

### Neue Funktionalität {#new-functionality}

- Der [React Spreadsheet-Wrapper](react.md) wird eingeführt. Zugehörige Beispiele finden Sie im [GitHub-Demo-Repository](https://github.com/DHTMLX/react-spreadsheet-examples)
- Das [`SheetManager`](api/overview/sheetmanager_overview.md)-Modul wird eingeführt. Es ist eine zentrale API zur Verwaltung von Tabellenblättern in Spreadsheet. Es ist über die `spreadsheet.sheets`-Eigenschaft zugänglich und ersetzt alle [veralteten tabellenblattbezogenen Methoden](migration.md#deprecated-methods) auf der Root-Spreadsheet-Instanz.
    - neue Methoden: [`sheets.add()`](api/sheetmanager_add_method.md), [`sheets.remove()`](api/sheetmanager_remove_method.md), [`sheets.getAll()`](api/sheetmanager_getall_method.md), [`sheets.getActive()`](api/sheetmanager_getactive_method.md), [`sheets.setActive()`](api/sheetmanager_setactive_method.md), [`sheets.clear()`](api/sheetmanager_clear_method.md), [`sheets.get()`](api/sheetmanager_get_method.md)
- Die Möglichkeit, eine [benutzerdefinierte (anwenderdefinierte) Formel](functions.md#custom-formulas) über die neue [`addFormula()`](api/spreadsheet_addformula_method.md)-Methode anzugeben
- Die Möglichkeit, Zahlen in der [wissenschaftlichen (Exponential-)Schreibweise](number_formatting.md#scientific-number-format) anzuzeigen

### Aktualisierungen {#updates}

- Die Möglichkeit, den Schriftgrad des Zellinhalts anzupassen:
    - Festlegen einer Standard-Schriftgradoption über ein [integriertes Toolbar-Steuerelement](customization.md#default-controls)
    - Festlegen eines [benutzerdefinierten Schriftgrads](customization.md#custom-font-size) für das Toolbar-Steuerelement
- Neue bedingte Aggregationsfunktionen wurden in die [Formel-Engine](functions.md#math-functions) aufgenommen: `COUNTIF`, `COUNTIFS`, `SUMIF`, `SUMIFS`, `AVERAGEIF`, `AVERAGEIFS`, `MAXIFS`, `MINIFS`
- Neue dynamische Array-Funktionen wurden in die [Formel-Engine](functions.md#array-functions) aufgenommen: `CHOOSECOLS`, `CHOOSEROWS`, `DROP`, `EXPAND`, `RANDARRAY`, `SEQUENCE`, `SORT`, `SORTBY`, `TAKE`, `TEXTSPLIT`, `TOCOL`, `TOROW`, `UNIQUE`, `WRAPCOLS`, `WRAPROWS`
- Der [`awaitRedraw()`](awaitredraw.md)-Helfer wurde für Spreadsheet hinzugefügt, um den Rendering-Prozess zu erkennen und gewünschten Code auszuführen, nachdem die Komponente das Rendern abgeschlossen hat
- [JSDoc-Annotationen](using_typescript.md#jsdoc-hints) wurden den Typdefinitionen hinzugefügt, die inline API-Beschreibungen, Parametertypen und Code-Beispiele direkt in der IDE bereitstellen

### Fehlerbehebungen {#fixes-60}

- Fokusverlust beim Wechseln des aktiven Tabellenblatts über die API
- Rückgabe eines Arrays geänderter Zellen im Transponierungsmodus
- Neuberechnung abhängiger Formeln nach dem Einfügen
- Überschreiben gesperrter Zellen mit Formeln bei Einfügevorgängen
- Das Problem mit der Ausführung mathematischer Formeln in einer gesperrten Zelle
- Escapierung von Tabellenblattnamen für Namen, die Zellbezügen ähneln, mit einer Zahl beginnen oder Sonderzeichen enthalten
- Das Problem mit dynamischen Arrays, wenn die Zell-ID null ist (die erste Zelle des ersten Tabellenblatts)

## Version 5.2.9 {#version-529}

Veröffentlicht am 8. Januar 2026

### Fehlerbehebungen {#fixes-529}

- Die Editor-Dropdown-Filterung verwendet jetzt `startsWith` statt `includes` bei der Eingabe in einem geöffneten Editor
- Excel-Zellrahmen werden jetzt nach Export und Import beibehalten
- Schriftgrad-Überschreiben beim Einfügen aus externen Tabellen wird verhindert

## Version 5.2.8 {#version-528}

Veröffentlicht am 15. Dezember 2025

### Fehlerbehebungen {#fixes-528}

- Das Problem mit dem Fokusverlust beim Auswählen einer anderen Zelle während der Formelbearbeitung
- Die Probleme mit der Tastaturnavigation

## Version 5.2.7 {#version-527}

Veröffentlicht am 9. Dezember 2025

### Fehlerbehebungen {#fixes-527}

- Export nach Excel schlägt fehl, wenn ein Tabellenblatt eine Zelle mit einer Datenvalidierungsliste enthält
- Das Problem, bei dem ein Dropdown mit einer Datenvalidierungsliste nicht mehr funktioniert, wenn der anfängliche Zellwert `%` ist
- Das Problem mit der `INDEX/MATCH`-Formel, die nach dem Setzen des Fokus in der Formelleiste beschädigt wird

## Version 5.2.6 {#version-526}

Veröffentlicht am 19. November 2025

### Fehlerbehebungen {#fixes-526}

- Ein zusätzliches DOM-Element erscheint beim Import einer .xlsx-Datei, die eine Zelle mit umgebrochenem Text enthält
- Falsche Anzeige von Spalten-/Zeilenbeschriftungen im Spalten-Kontextmenü beim Verwalten von Spalten
- Die Tabellenblattstruktur bricht ab, wenn ein Bereich mit verbundenen Zellen eingefroren wird
- Verbesserte Tastaturnavigation in Tabellenblättern mit verbundenen Zellen

## Version 5.2.5 {#version-525}

Veröffentlicht am 23. Oktober 2025

### Fehlerbehebungen {#fixes-525}

- Das Problem mit der Verringerung der Zeilenhöhe beim Anwenden der "Umbrechen"-Option auf Inhalt, der in die Spaltenbreite passt

## Version 5.2.4 {#version-524}

Veröffentlicht am 24. September 2025

### Fehlerbehebungen {#fixes-524}

- Export-/Import-Unterstützung für mehrzeilige Zellen hinzugefügt

## Version 5.2.3 {#version-523}

Veröffentlicht am 10. September 2025

### Fehlerbehebungen {#fixes-523}

- Falsche Ausrichtung von Zahlen in Zellen beim Einfügen von Arrays
- Verbesserte Eingabe in asiatischen Sprachen

## Version 5.2.2 {#version-522}

Veröffentlicht am 18. August 2025

### Aktualisierungen {#updates-522}

- `setValidation()` für die Vorausfilterung im integrierten Dropdown-Editor erweitert
- Export-/Import-Unterstützung für ausgeblendete/eingefrorene Spalten/Zeilen, das Datenvalidierungs-Auswahlfeld und Excel-Links in .xlsx-Dateien hinzugefügt

### Fehlerbehebungen {#fixes-522}

- Das Problem mit dem Aufheben der Verbindung von verbundenen Zellen in eingefrorenen Spalten/Zeilen
- Das Problem mit der Anwendung integrierter Themes
- Das Problem mit chinesischer Eingabe
- Das Problem mit japanischer Eingabe unter MacOS: Die Autokorrektur-Bestätigung schließt den Editor
- Das Problem beim Kompilieren der `spreadsheet.d.ts`-Datei

## Version 5.2.1 {#version-521}

Veröffentlicht am 30. Juni 2025

### Aktualisierungen {#updates-521}

- Die Möglichkeit, mehrere Spalten/Zeilen in einem Vorgang über das Kontextmenü zu entfernen

### Fehlerbehebungen {#fixes-521}

- Der Skriptfehler beim Kopieren/Einfügen
- Der Fehler, der beim Löschen einer Zeile auftrat, wenn die beiden oder mehr letzten Zeilen im Tabellenblatt ausgewählt waren
- Das Problem mit der Warnung bei der Toolbar-Anpassung
- Das Problem mit fehlender Lokalisierung für den Datepicker
- Das Problem mit der unnötigen Anzeige des vertikalen Scrollbalkens in der Toolbar
- Mathematische Korrekturen für korrekte Berechnungen in Formeln

## Version 5.2 {#version-52}

Veröffentlicht am 20. Mai 2025

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-2/)

### Breaking Changes {#breaking-changes-52}

Die neue Version führt einige Änderungen an der Einfrieren-/Auftauen-Funktionalität für Spalten und Zeilen ein. Lesen Sie den [Migrationsleitfaden](migration.md#51---52), um mit der neuesten Version Schritt zu halten.

### Veraltet {#deprecated}

- Die Konfigurationseigenschaften `leftSplit` und `topSplit` wurden entfernt

### Neue Funktionalität {#new-functionality-52}

- Zellen bearbeiten:
    - die Möglichkeit, [einen formatierten Rahmen für eine Gruppe von Zellen über die Benutzeroberfläche zu erstellen](data_formatting.md#styled-borders-for-cells)
- Spalten/Zeilen einfrieren/auftauen:
    - die Möglichkeit, Spalten und Zeilen über die [Benutzeroberfläche](work_with_rows_cols.md#freezingunfreezing-rows-and-columns) einzufrieren/aufzutauen
    - die Möglichkeit, Spalten und Zeilen über die [API](working_with_ssheet.md#freezingunfreezing-rows-and-columns) einzufrieren/aufzutauen
        - neue Methoden: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)
        - neue Aktion: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions)
        - neue `freeze`-Eigenschaft für das *sheets*-Objekt der [`parse()`](api/spreadsheet_parse_method.md)-Methode
- Spalten/Zeilen ausblenden/einblenden:
    - die Möglichkeit, Spalten und Zeilen über die [Benutzeroberfläche](work_with_rows_cols.md#hidingshowing-rows-and-columns) auszublenden/einzublenden
    - die Möglichkeit, Spalten und Zeilen über die [API](working_with_ssheet.md#hidingshowing-rows-and-columns) auszublenden/einzublenden
        - neue Methoden: [`hideCols()`](api/spreadsheet_hidecols_method.md), [`showCols()`](api/spreadsheet_showcols_method.md), [`hideRows()`](api/spreadsheet_hiderows_method.md), [`showRows()`](api/spreadsheet_showrows_method.md)
        - neue Aktion: [`toggleVisibility`](api/overview/actions_overview.md#list-of-actions)
        - neue `hidden`-Eigenschaft für die *cols*- und *rows*-Konfigurationen des *sheets*-Objekts der [`parse()`](api/spreadsheet_parse_method.md)-Methode
- Mit Formeln arbeiten:
    - [Popup mit Beschreibungen für Formeln](functions.md#popup-with-formula-description) hinzugefügt
    - neue Lokalisierung: [`formulas`](localization.md#default-locale-for-formulas) hinzugefügt
- Datei-Import:
    - neues [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md)-Event hinzugefügt, um anzuzeigen, dass das Laden von Daten in Spreadsheet abgeschlossen wurde

### Fehlerbehebungen {#fixes-52}

- Das Problem mit der Sortierung
- Das Problem mit dem Verschieben des Filters in eine neue Spalte
- Der Fehler, der beim Blockieren des Hinzufügens eines Tabellenblatts mit der "addSheet"-Aktion auftrat
- Das Problem mit dem Filtern leerer Zellen
- Das Problem beim Bearbeiten einer großen verbundenen Tabelle
- Der Fehler, der beim Rückgängigmachen einer Aktion in einer Zelle auftrat
- Der Fehler, der beim Eingeben/Bearbeiten einer Zelle mit der IF-Formel auftrat
- Der Skriptfehler, der nach dem Ausschneiden und Einfügen eines Links auftrat
- Das Problem mit der Änderung der Textausrichtung beim Export/Import einer .xlsx-Datei
- Das Problem mit dem Fokusverlust von Spreadsheet nach einigen Aktionen
- Leistungsverbesserungen

## Version 5.1.8 {#version-518}

Veröffentlicht am 10. Dezember 2024

### Fehlerbehebungen {#fixes-518}

- Das Problem mit dem lokalen Trial-Paket beim Import in Frameworks

## Version 5.1.7 {#version-517}

Veröffentlicht am 27. November 2024

### Fehlerbehebungen {#fixes-517}

- Die Warnung "Element nicht gefunden" wurde entfernt
- Parsing-Optimierung
- Ein geöffneter Zell-Editor schließt sich nicht, wenn mit der (Shift)+Tab-Taste zu einer benachbarten Zelle gewechselt wird

## Version 5.1.6 {#version-516}

Veröffentlicht am 25. Juli 2024

### Fehlerbehebungen {#fixes-516}

- Eingefügte Zeilen/Spalten fehlen in den serialisierten Daten beim Laden
- Eine leere Datumszelle zeigt das zuletzt ausgewählte Datum im Datepicker und Timepicker an
- Ein Problem mit der Zahlenlokalisierung und einem leeren Zeichenkettenwert in einer Zelle
- Die Suche erhält keinen Fokus während der Bearbeitung einer Zelle
- Die Verwendung von `ngIf/ngFor` für den Spreadsheet-Container verursacht einen Komponentenfehler


## Version 5.1.5 {#version-515}

Veröffentlicht am 13. Februar 2024

### Fehlerbehebungen {#fixes-515}

- Das Einfügen einer Zelle mit Nullen erstellt eine leere Zelle
- Das Kopieren und anschließende Einfügen einer leeren Zelle wirft einen Fehler
- Die `setValue()`-Funktionalität für das allgemeine Format korrigiert
- Speichern der ID eines Tabellenblatts während der Serialisierung und Rückgabe durch das `afterAction`-Event
- Tabellenblattübergreifende Formelverwendung über die Benutzeroberfläche korrigiert
- Strg+F-Suche korrigiert

## Version 5.1.4 {#version-514}

Veröffentlicht am 31. Januar 2024

### Fehlerbehebungen {#fixes-514}

- Falsches Einfügen von verbundenen Zellen

## Version 5.1.3 {#version-513}

Veröffentlicht am 29. Januar 2024

### Fehlerbehebungen {#fixes-513}

- Falsches Parsen von numerischen Werten im "common"-Format
- Lokalisierungs-i18n-Probleme, wenn Spreadsheet zusammen mit Suite verwendet wird
- Leistungsprobleme beim Laden einer Tabelle mit einer großen Anzahl von verbundenen Zellen
- Falsches Einfügen von verbundenen Zellen

## Version 5.1.2 {#version-512}

Veröffentlicht am 16. Januar 2024

### Fehlerbehebungen {#fixes-512}

- Das Problem beim Kopieren und Einfügen von Zellen behoben. Kopierte und eingefügte Zellen mit Datum von Excel nach Spreadsheet werden als Zeichenketten angezeigt
- Das Problem mit dem numerischen Wert im "common"-Format, der als Zahl formatiert ist, behoben
- Das Problem beim Parsen von Daten, das den ursprünglichen Datensatz verändert, behoben
- Das Problem beim Einfügen von verbundenen Zellen behoben

## Version 5.1.1 {#version-511}

Veröffentlicht am 14. Dezember 2023

### Fehlerbehebungen {#fixes-511}

- Das Problem behoben, bei dem die `fixColumn()`-Methode das Pfeilsymbol des Select-Editors ignoriert
- Das Problem behoben, bei dem Zellstile Vorrang vor Bereichsstilen haben
- Das Problem beim Kopieren/Einfügen des Inhalts von Zellen mit angewendeten Stilen und der Rückgängig-Funktion behoben
- Das Problem mit einem sich ändernden Link beim Einfügen in eine andere Zelle behoben
- Probleme beim Kopieren/Einfügen von verbundenen Zellen behoben
- Das Problem mit der Serialisierung von Stilen behoben
- Das Scrollen zur Zelle beim Aufruf der `setSelectedCell()`- oder `setFocusedCell()`-Methoden behoben

## Version 5.1 {#version-51}

Veröffentlicht am 7. Dezember 2023

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-1/)

### Neue Funktionalität {#new-functionality-51}

- [Unterstützung für neue Themes](/themes/): Dunkel, Helles Hochkontrast und Dunkles Hochkontrast
- Erweiterte [Unterstützung für Lokalisierung von Zahlen-, Datums-, Zeit- und Währungsformaten](number_formatting.md#number-date-time-currency-localization)
- [Integration mit dem Svelte-Framework](svelte_integration.md)
- Möglichkeit, [einen benutzerdefinierten Namen für eine exportierte .xlsx-Datei anzugeben](loading_data.md#how-to-set-a-custom-name-for-an-exported-file)
- Möglichkeit, [den "gesperrten" Zellstatus zu speichern](loading_data.md#setting-the-locked-state-for-a-cell) und [einen Link für eine Zelle anzugeben](loading_data.md#adding-a-link-into-a-cell) in einem Datensatz

### Aktualisierungen {#updates-51}

- Erneuerte [Integrationen mit React, Angular und Vue.js](/integrations/)
- Automatische [Umwandlung von Kleinbuchstaben in Großbuchstaben](functions.md) in Formeln
- Automatisches Schließen von Formeln

### Fehlerbehebungen {#fixes-51}

- Das Problem mit der Anwendung von Rückgängig auf den in einer Zelle gesetzten Wert behoben
- Die Beschränkung der Anzahl der eingefügten Zeilen behoben
- Das Ersetzen von Leerzeichen durch `&nbsp;`-Symbole in Formeln in der Bearbeitungszeile behoben
- Falsches Verhalten des Excel-Imports mit datumsähnlichen Werten behoben
- Falsches Bearbeiten eines Zellenblocks behoben
- Den Skriptfehler behoben, der beim Aufruf von `getExcelDate()` während der Filterung auftrat
- Das Konvertieren eines Textwerts in eine Zahl beim Einfügen eines Zellinhalts behoben
- Falsches Einfügen von Daten aus einer Excel-Datei mit geänderter Spaltenbreite behoben

## Version 5.0.10 {#version-5010}

Veröffentlicht am 27. November 2023

### Fehlerbehebungen {#fixes-5010}

- Typprobleme behoben

## Version 5.0.9 {#version-509}

Veröffentlicht am 24. Oktober 2023

### Fehlerbehebungen {#fixes-509}

- Falschen Aufruf der setStyle()-Methode behoben, der before/afterSelectionSet-Events auslöste
- Falschen Inhaltsumbruch behoben
- Typprobleme behoben

## Version 5.0.7 {#version-507}

Veröffentlicht am 21. September 2023

### Fehlerbehebungen {#fixes-507}

- Das Problem beim Export von Formeln nach Excel behoben
- Das Problem beim Wiederherstellen des ausgeschnittenen Zellinhalts durch Klicken auf die Rückgängig-Schaltfläche behoben

## Version 5.0.6 {#version-506}

Veröffentlicht am 18. September 2023

### Fehlerbehebungen {#fixes-506}

- Das Problem beim Rendern von Nullen behoben
- Das Problem beim Anwenden von Farbstilen, die als Zeichenkettenwerte festgelegt sind, behoben
- Das Problem mit der XSS-Schwachstelle behoben
- Das Problem behoben, bei dem die Änderung eines Werts in einem inaktiven Tabellenblatt den Wert im aktiven Tabellenblatt änderte

## Version 5.0.5 {#version-505}

Veröffentlicht am 10. August 2023

### Fehlerbehebungen {#fixes-505}

- Das Problem mit der XSS-Schwachstelle behoben
- Falsches Einfügen von Daten mit Zellverbünden behoben

## Version 5.0.4 {#version-504}

Veröffentlicht am 5. Juni 2023

### Fehlerbehebungen {#fixes-504}

- Fehler bei der Blockauswahl oder beim Aufruf eines Kontextmenüs im Nur-Lesen-Modus behoben
- Das Problem mit der Anzeige des Bearbeitungsmenüs im Nur-Lesen-Modus behoben
- Falsches Runden von Zahlen behoben
- Das Problem beim Ersetzen einer Formel durch ihr Ergebnis in der Bearbeitungszeile nach dem Verbinden von Zellen behoben

## Version 5.0.3 {#version-503}

Veröffentlicht am 26. April 2023

### Fehlerbehebungen {#fixes-503}

- Falsche Berechnung der letzten zu verbindenden Zelle behoben
- Probleme mit Excel-Import/-Export behoben
- Das Problem behoben, das dazu führte, dass Daten nach der Anwendung der Datenvalidierung vertauscht wurden
- Das Problem behoben, bei dem Text mit dem ":"-Symbol als Link interpretiert wurde
- Das Problem beim Laden mehrzeiliger Daten behoben. Jetzt ist es möglich, die Eigenschaft `multiline: "wrap"` im [`styles`](api/spreadsheet_parse_method.md#parsing-styled-data)-Objekt zu setzen
- Das Problem beim Verbinden von Zellen bei der Spreadsheet-Initialisierung behoben, wenn [`multiSheets`](api/spreadsheet_multisheets_config.md) auf `false` gesetzt ist
- Das Problem beim Zurücksetzen der Scroll-Position nach einem Doppelklick auf den Größenänderungscursor einer Spalte im Tabellenkopf behoben

## Version 5.0.2 {#version-502}

Veröffentlicht am 14. Februar 2023

### Fehlerbehebungen {#fixes-502}

- Das Problem behoben, das dazu führte, dass die Ausrichtung einer Zelle nach dem Kopieren und Einfügen des Zellwerts nicht gespeichert wurde
- Das Problem behoben, das dazu führte, dass die Filterergebnisse nach dem Sortieren von Daten geändert wurden
- Das Problem mit der Anzeige des 12-Stunden-Formats im Timepicker behoben
- Das Problem beim Entfernen von Link-Stilen behoben, nachdem die Zelle automatisch ausgefüllt wurde
- Jetzt ist es möglich, mehrere [benutzerdefinierte Formate für Datumsangaben](number_formatting.md#formats-customization) hinzuzufügen
- Jetzt ist es möglich, Spalten und Zeilen zu entfernen, auch wenn sie zu den [begrenzten Spalten und Zeilen](configuration.md#number-of-rows-and-columns) gehören

## Version 5.0.1 {#version-501}

Veröffentlicht am 19. Januar 2023

### Fehlerbehebungen {#fixes-501}

- Das Problem behoben, das dazu führte, dass in Zellen mit Währungsformat eingegebene Werte als Zeichenkette und nicht als Zahl gespeichert wurden
- Das Problem beim Löschen der Auswahl der zuvor gesuchten Zellen behoben
- Das Problem mit der Datenanzeige nach dem Parsen in die Tabellenkalkulation behoben
- Das Problem beim Neuzeichnen des Rasters nach dem Entfernen von Spalten behoben
- Das Problem beim Sortieren leerer Werte behoben
- Das Problem bei der Validierung numerischer Werte bei Verwendung einer Dropdown-Liste behoben
- Die Funktion zum automatischen Ausfüllen von Zellen mit alphanumerischen Werten korrigiert
- Verbesserte Arbeit mit Masken von Zahlenformaten
- Jetzt werden alle Zahlenwerte in Zellen standardmäßig rechtsbündig ausgerichtet

## Version 5.0 {#version-50}

Veröffentlicht am 21. November 2022

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-0/)

### Breaking Changes {#breaking-changes-50}

Die neue Version führt einige Änderungen an der [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md)-Eigenschaft ein. Lesen Sie den [Migrationsartikel](migration.md#43---50), um mit der neuesten Version Schritt zu halten.

### Neue Funktionalität {#new-functionality-50}

- Datensuche:
    - die Möglichkeit, Daten über die [Benutzeroberfläche](data_search.md) zu suchen
    - die Möglichkeit, Daten über die [API](working_with_ssheet.md#searching-for-data) zu suchen:
        - neue Methoden: [`search()`](api/spreadsheet_search_method.md) und [`hideSearch()`](api/spreadsheet_hidesearch_method.md)
- Daten filtern:
    - die Möglichkeit, Daten über die [Benutzeroberfläche](filtering_data.md) zu filtern
    - die Möglichkeit, Daten über die [API](working_with_ssheet.md#filtering-data) zu filtern:
        - neue Methoden: [`setFilter()`](api/spreadsheet_setfilter_method.md) und [`getFilter()`](api/spreadsheet_getfilter_method.md)
        - neue Aktion: [`filter`](api/overview/actions_overview.md#list-of-actions)
- Zellen verbinden/teilen:
    - die Möglichkeit, Zellen über die [Benutzeroberfläche](merge_cells.md) zu verbinden/zu teilen
    - die Möglichkeit, Zellen über die [API](working_with_cells.md#merging-cells) zu verbinden/zu teilen:
        - neue Eigenschaft des Sheet-Objekts: [`merged`](api/spreadsheet_parse_method.md)
        - neue Methode: [`mergeCells()`](api/spreadsheet_mergecells_method.md)
        - neue Aktionen: [`merge`](api/overview/actions_overview.md#list-of-actions) und [`unmerge`](api/overview/actions_overview.md#list-of-actions)
- Spaltenbreite automatisch anpassen:
    - die Möglichkeit, die Spaltenbreite über die [Benutzeroberfläche](work_with_rows_cols.md#autofit-column-width) automatisch anzupassen
    - die Möglichkeit, die Spaltenbreite über die [API](working_with_ssheet.md#autofit-column-width) automatisch anzupassen:
        - neue Methode: [`fitColumn()`](api/spreadsheet_fitcolumn_method.md)
        - neue Aktion: [`fitColumn`](api/overview/actions_overview.md#list-of-actions)
- Hyperlink einfügen:
    - die Möglichkeit, einen Hyperlink in eine Zelle über die [Benutzeroberfläche](work_with_cells.md#inserting-a-hyperlink-into-a-cell) einzufügen
    - die Möglichkeit, einen Hyperlink in eine Zelle über die [API](working_with_cells.md#inserting-a-hyperlink-into-a-cell) einzufügen:
        - neue Methode: [`insertLink()`](api/spreadsheet_insertlink_method.md)
        - neue Aktion: [`insertLink`](api/overview/actions_overview.md#list-of-actions)
- [Durchgestrichenes Format von Daten](data_formatting.md#color-and-style)

### Aktualisierungen {#updates-50}

- [Erweiterte Liste der Lokalisierungsoptionen](localization.md#default-locale)
- [Erweiterte Liste der Tastenkombinationen](hotkeys.md):
    - für die Datensuche
        - `Ctrl (Cmd) + F`
        - `Ctrl (Cmd) + G`
        - `Ctrl (Cmd) + Shift + G`
    - zum Auswählen der gesamten Spalte/Zeile
        - `Ctrl (Cmd) + Space`
        - `Shift + Space`
    - zum Ausrichten des Zellinhalts links/rechts/zentriert
        - `Ctrl (Cmd) + Shift + L`
        - `Ctrl (Cmd) + Shift + R`
        - `Ctrl (Cmd) + Shift + E`
    - zum Durchstreichen des Zellinhalts
        - `Alt + Shift + 5 (Cmd + Shift + X)`
    - zum Hinzufügen neuer Tabellenblätter und Wechseln zwischen ihnen
        - `Shift + F11`
        - `Alt + Pfeil hoch/ Pfeil runter`
    - zum Einfügen eines Hyperlinks in eine Zelle
        - `Ctrl (Cmd) + K`

## Version 4.3 {#version-43}

Veröffentlicht am 23. Mai 2022

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-3/)

### Breaking Changes {#breaking-changes-43}

Version 4.3 bringt keine grundlegenden Änderungen, führt aber eine neue Methode zur Verarbeitung von in der Tabellenkalkulation durchgeführten Aktionen ein. Lesen Sie die Details im [Migrationsartikel](migration.md#42---43).

### Neue Funktionalität {#new-functionality-43}

- Die Möglichkeit, eine Dropdown-Liste mit Optionen in Zellen über die [`setValidation()`](api/spreadsheet_setvalidation_method.md)-Methode oder über die [Benutzeroberfläche](work_with_cells.md#using-drop-down-lists-in-cells) hinzuzufügen
- Die Möglichkeit, Zeilen am oberen Rand der Tabellenkalkulation über die `topSplit`-Eigenschaft zu fixieren
- Die Möglichkeit, Daten über die [`sortCells()`](api/spreadsheet_sortcells_method.md)-Methode oder über die [Benutzeroberfläche](sorting_data.md) zu sortieren
- [Die Möglichkeit, langen Text in mehrere Zeilen aufzuteilen](data_formatting.md#wrap-text-in-a-cell) (die Schaltfläche *Textumbruch* wurde in die Toolbar hinzugefügt)
- Erheblich erweiterte Liste der unterstützten [Datums-, Finanz-, Math- und Zeichenkettenfunktionen](functions.md#information-functions) (mit dem Label *added in v4.3* gekennzeichnet)
- Unterstützung für [Nachschlagefunktionen](functions.md#lookup-functions)
- [Zeitformat](number_formatting.md#default-number-formats) hinzugefügt
- Die Möglichkeit, das Format der Zeiten in den Tabellenkalkulations-Zellen über die [`timeFormat`](api/spreadsheet_localization_config.md)-Eigenschaft zu definieren
- Die Möglichkeit, die Zeit in einer Zelle über einen Timepicker einzugeben
- [Export nach JSON](api/export_json_method.md)
- [Import aus JSON](api/spreadsheet_load_method.md#loading-json-files)
- Neue Events hinzugefügt: [beforeAction](api/spreadsheet_beforeaction_event.md) und [afterAction](api/spreadsheet_afteraction_event.md)
- Neues [Aktionssystem](api/overview/actions_overview.md)

### Aktualisierungen {#updates-43}

- Die [`parse()`](api/spreadsheet_parse_method.md)-Methode wurde aktualisiert. Ein neues **editor**-Attribut eines Zellobjekts wurde hinzugefügt

## Version 4.2 {#version-42}

Veröffentlicht am 29. November 2021

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-2-with130-new-functions-boolean-operators-date-format-row-resizing-much/)

### Neue Funktionalität {#new-functionality-42}

- Unterstützung für [Datums-](functions.md#date-functions), [Finanz-](functions.md#financial-functions), [Informations-](functions.md#information-functions), [Regex-](functions.md#regex-functions) und [sonstige](functions.md#other-functions) Funktionen
- Unterstützung für [boolesche Operatoren](functions.md#boolean-operators)
- Die Möglichkeit, Zeilen über die Benutzeroberfläche in der Größe zu ändern
- Neue Schaltfläche [Vertikale Ausrichtung](data_formatting.md#alignment) in die Toolbar hinzugefügt
- Die Möglichkeit, das aktive Tabellenblatt über die `setActiveSheet()`-Methode festzulegen
- Die Möglichkeit, die Auswahl aus den angegebenen Zellen über die [`removeSelectedCell()`](api/selection_removeselectedcell_method.md)-Methode des Selection-Objekts zu entfernen
- Die Möglichkeit, eine Tabellenkalkulation oder ihr Tabellenblatt über die [`clear()`](api/spreadsheet_clear_method.md)- oder `clearSheet()`-Methode zu löschen
- Neue Events hinzugefügt: [`beforeClear`](api/spreadsheet_beforeclear_event.md), [`afterClear`](api/spreadsheet_afterclear_event.md), `beforeSheetClear`, `afterSheetClear`
- Die Möglichkeit, das Format der Datumsangaben in der Tabellenkalkulation über die [`dateFormat`](api/spreadsheet_localization_config.md)-Eigenschaft zu definieren
- [Datumsformat wurde zu den Standard-Zahlenformaten hinzugefügt](number_formatting.md#default-number-formats)

### Aktualisierungen {#updates-42}

- Erweiterte Liste der [Lokalisierungsoptionen](localization.md)
- Erweiterte Liste der [Math-](functions.md#math-functions) und [Zeichenkettenfunktionen](functions.md#string-functions)
- Der Ausrichten-Block der Spreadsheet-Toolbar wurde aktualisiert. Lesen Sie die Details im [Migrationsartikel](migration.md#41---42)
- Die [`parse()`](api/spreadsheet_parse_method.md)- und [`serialize()`](api/spreadsheet_serialize_method.md)-Methoden wurden aktualisiert. Neue **rows**- und **cols**-Attribute des Sheet-Objekts ermöglichen das Speichern des Zustands der Zeilenhöhe und Spaltenbreite für jedes Tabellenblatt.

### Fehlerbehebungen {#fixes-42}

- Problem mit der CTRL-X-Tastenkombination
- Problem, das dazu führte, dass ein Skriptfehler auftrat, wenn eine Zelle in der Tabellenkalkulation mit ausgeblendeter [Bearbeitungszeile](api/spreadsheet_editline_config.md) bearbeitet wurde

## Version 4.1.3 {#version-413}

Veröffentlicht am 31. August 2021

[Versionsüberblick im Blog](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-6-scheduler-5-3-12-suite-7-2-1/)

### Fehlerbehebungen {#fixes-413}

- Falsches Verhalten der Rückgängig-Operation beim Zurücksetzen der Zeile/Spalte nach dem Entfernen behoben
- Falsches Verhalten der im Zahlenformat-Objekt angegebenen "mask"-Eigenschaft behoben
- Das Problem behoben, das dazu führte, dass leere Zellen/Zeilen oben in der Auswahl nach dem Einfügen von Daten aus Excel in die Tabellenkalkulation abgeschnitten wurden
- Das Problem behoben, das dazu führte, dass die Zellen, auf die die absolute Formel verweist, nicht markiert wurden
- Das Problem mit dem "afterSelectionSet"-Event behoben, das dazu führte, dass das Event zweimal ausgelöst wurde, nachdem ein Zellbereich ausgewählt wurde
- Das Problem mit TypeScript-Definitionen behoben
- Die Probleme mit dem "text"-Zahlenformat behoben

## Version 4.1.2 {#version-412}

Veröffentlicht am 3. Juni 2021

[Versionsüberblick im Blog](https://dhtmlx.com/blog/maintenance-release-suite-7-1-9-spreadsheet-4-1-2/)

### Fehlerbehebungen {#fixes-412}

- Falsches automatisches Ausfüllen von Zellen mit mathematischen Funktionen beim gleichzeitigen Anwenden des automatischen Ausfüllens auf mehrere Spalten behoben
- Das Problem behoben, das dazu führte, dass die ausgewählte Zelle nach dem nächsten Klick mit "Strg + Klick" nicht deselektiert wurde
- Das Problem mit der Anwendung der mathematischen Formel auf die Zelle nach der Auswahl der Formel mit der Tastaturnavigation behoben
- Das Problem beim Sperren/Entsperren von Zellen, die mit "Strg + Klick" ausgewählt wurden, behoben
- Das Problem mit der "serialize()"-Methode behoben, das dazu führte, dass "0"-Werte nicht serialisiert wurden
- Das Problem mit der automatischen Anpassung der Spaltenbreite nach dem Klicken auf den Kopfbereichsrahmen zwischen den Spalten behoben
- Das Problem mit der Anzeige von Nullwerten in der Bearbeitungszeile behoben
- Das Problem beim Bearbeiten langer Zellinhalte behoben
- Das Problem beim Export der Tabellenkalkulation in eine Excel-Datei behoben
- Die Probleme mit dem falschen Verhalten der horizontalen Bildlaufleiste und der Anzeige von Spalten beim Arbeiten mit einer Tabellenkalkulation mit vielen Spalten behoben
- Den Skriptfehler behoben, der nach der Verwendung der Tastaturnavigation in der leeren Tabellenkalkulation auftrat

## Version 4.1.1 {#version-411}

Veröffentlicht am 14. April 2021

[Versionsüberblick im Blog](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-2-suite-7-1-5-spreadsheet-4-1-1/)

### Fehlerbehebungen {#fixes-411}

- Das Problem mit TypeScript-Definitionen behoben
- Die Probleme mit absoluten Referenzen behoben
- Die Probleme behoben, die beim Arbeiten mit aus einer ".xlsx"-Datei geladenen Daten auftraten
- Das Problem mit dem falschen Einfügen von aus einer Excel-Datei kopierten Daten behoben
- Das Problem behoben, das dazu führte, dass beim Summieren von Fließkommazahlen ein falsches Ergebnis zurückgegeben wurde

## Version 4.1 {#version-41}

Veröffentlicht am 24. März 2021

[Versionsüberblick im Blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-1-multiple-sheets/)

### Neue Funktionalität {#new-functionality-41}

- Neue [multiSheets](api/spreadsheet_multisheets_config.md)-Konfigurationsoption hinzugefügt
- Die Möglichkeit, [mit mehreren Tabellenblättern](work_with_sheets.md) in der Tabellenkalkulation zu arbeiten
- Die Möglichkeit, [Querverweise in mehreren Tabellenblättern](work_with_sheets.md#cross-references-between-sheets) zu verwenden
- Die Möglichkeit, [mehrere Tabellenblätter gleichzeitig](working_with_sheets.md#loading-multiple-sheets) in die Tabellenkalkulation zu laden
- Neue Methoden für die Arbeit mit [mehreren Tabellenblättern](working_with_sheets.md) hinzugefügt: `addSheet()`, `removeSheet()`, `getActiveSheet()`, `getSheets()`
- Neue Events hinzugefügt: `BeforeSheetAdd`, `AfterSheetAdd`, [`BeforeSheetChange`](api/spreadsheet_beforesheetchange_event.md), [`AfterSheetChange`](api/spreadsheet_aftersheetchange_event.md), `BeforeSheetRemove`, `AfterSheetRemove`, `BeforeSheetRename`, `AfterSheetRename`
- Die Möglichkeit, die Formel einer Zelle über die [getFormula()](api/spreadsheet_getformula_method.md)-Methode abzurufen

### Aktualisierungen {#updates-41}

- Das Format des "cell"-Parameters der [getValue()](api/spreadsheet_getvalue_method.md)-, [setValue()](api/spreadsheet_setvalue_method.md)-, [getStyle()](api/spreadsheet_getstyle_method.md)-, [setStyle()](api/spreadsheet_setstyle_method.md)-, [getFormat()](api/spreadsheet_getformat_method.md)-, [setFormat()](api/spreadsheet_setformat_method.md)-, [isLocked()](api/spreadsheet_islocked_method.md)-, [lock()](api/spreadsheet_lock_method.md)-, [unlock()](api/spreadsheet_unlock_method.md)-Methoden wurde aktualisiert. Jetzt kann der Verweis auf eine Zelle oder einen Zellbereich den Namen des Tabs enthalten.

## Version 4.0.5 {#version-405}

Veröffentlicht am 3. Februar 2021

### Fehlerbehebungen {#fixes-405}

- Das Leistungsproblem behoben
- Den Skriptfehler behoben, der auftrat, wenn der Benutzer die letzte Aktion in der Zelle rückgängig machte
- Den nach dem Aufruf des Destruktors geworfenen Skriptfehler behoben
- Das Problem behoben, das dazu führte, dass Werte aus einem Zellbereich beim Einfügen in eine einzelne Zelle abgeschnitten wurden
- Das Problem beim Erkennen des Formats einer Zelle behoben, nachdem die Zelle ausgeschnitten und dann ein zweites Mal eingefügt wurde

## Version 4.0.4 {#version-404}

Veröffentlicht am 12. Januar 2021

### Fehlerbehebungen {#fixes-404}

- Das falsche Verhalten der "SUM"-Funktion beim Arbeiten mit mehr als 2 Zahlen behoben
- Das Problem bei der Initialisierung der Tabellenkalkulation nach dem Aufruf von "destructor()" behoben
- Das Problem mit Typen behoben

## Version 4.0.3 {#version-403}

Veröffentlicht am 28. Dezember 2020

### Fehlerbehebungen {#fixes-403}

- Das Problem beim Festlegen des Formats für den Wert einer Zelle innerhalb eines Datensatzes behoben
- Den Fehler behoben, der beim Anhängen der Tabellenkalkulation an das Layout auftrat
- Das Problem behoben, das dazu führte, dass die für eine Zelle gesetzte Formel nach der Berechnung des Ergebnisses nicht bearbeitet werden konnte
- Das falsche Verhalten der [setFocusedCell()](api/selection_setfocusedcell_method.md)-Methode behoben
- Das falsche Fokusverhalten beim Arbeiten mit Formeln behoben
- Das Problem beim Auswählen eines Zellbereichs mit der "Strg"-Taste behoben
- Das Problem beim Hinzufügen eines Zellbereichs über "Strg+Klick" zu einer Zelle mit einer Formel behoben
- Das falsche Verhalten von Math-Funktionen behoben
- Das Problem mit der SUM()-Formel beim Auswählen über das Popup und einen Mausklick behoben

## Version 4.0.2 {#version-402}

Veröffentlicht am 21. Dezember 2020

### Fehlerbehebungen {#fixes-402}

- Das falsche Verhalten der Tastaturnavigation beim Erstellen von 2 oder mehr Tabellenkalkulations-Objekten auf der Seite behoben
- Das Problem mit dem aus der Datei types.d.ts geworfenen Fehler behoben
- Probleme beim Kopieren und Einfügen eines Zellbereichs behoben

## Version 4.0.1 {#version-401}

Veröffentlicht am 2. Dezember 2020

### Fehlerbehebungen {#fixes-401}

- Die falsche Anzeige der Tooltips beim Hovern über die Rückgängig/Wiederholen-Schaltflächen in der Toolbar
- Das Problem, das beim Entfernen der letzten Spalte der Tabellenkalkulation nach dem Import von Daten auftrat, die größer als die Tabellenkalkulationsgröße sind
- Das Problem mit der [setSelectedCell()](api/selection_setselectedcell_method.md)-Methode, das dazu führte, dass die Formel der ausgewählten Zelle nicht in der Formelleiste angezeigt wurde
- Die fehlerhafte Generierung der TypeScript-Definitionen
- Das visuelle Problem mit der Ausrichtung des Zellinhalts
- Das Problem mit der Serialisierung leerer Zellen oder Zellen mit dem Wert null

## Version 4.0 {#version-40}

Veröffentlicht am 19. Oktober 2020

### Neue Funktionalität {#new-functionality-40}

- [Math-Funktionen](functions.md)
- [TypeScript-Unterstützung](using_typescript.md)
- Die Möglichkeit, Spalten auf der linken Seite der Tabellenkalkulation über die `leftSplit`-Konfigurationseigenschaft einzufrieren
- [Das Text-Format zur Anzeige des Zellinhalts als Text wurde zu den Standard-Zahlenformaten hinzugefügt](number_formatting.md#default-number-formats)
- Die Möglichkeit, mehrere verstreute Zellbereiche durch Verwendung der Kombination ["Strg+Shift+Linksklick"](hotkeys.md#selection) auszuwählen

### Fehlerbehebungen {#fixes-40}

- Das falsche Verhalten des Farbwählers beim Anwenden der Hintergrundfarbe auf einen Zellbereich behoben
- Das falsche Parsen von Zahlen beim Import von Excel-Dateien behoben
- Das Problem behoben, das dazu führte, dass alle aus einer Google- oder Excel-Tabelle kopierten Daten in eine Zelle der Tabellenkalkulation eingefügt wurden
- Das falsche Verhalten der [editLine:false](api/spreadsheet_editline_config.md)-Eigenschaft behoben, das dazu führte, dass der Bearbeitungsvorgang mit einem Fehler in der Konsole endete
- Das Problem mit dem `AfterValueChange`-Event behoben, das dazu führte, dass das Event zweimal aufgerufen wurde

## Version 3.1.4 {#version-314}

Veröffentlicht am 19. September 2019

### Fehlerbehebungen {#fixes-314}

- Stil-Korrekturen

## Version 3.1.3 {#version-313}

Veröffentlicht am 19. September 2019

### Fehlerbehebungen {#fixes-313}

- Problem mit dem Fokus auf einer Zelle, wenn Spreadsheet an Layout angehängt ist

## Version 3.1.2 {#version-312}

Veröffentlicht am 25. März 2019

### Fehlerbehebungen {#fixes-312}

- Probleme mit Textstilen beim Excel-Export
- Problem mit dem Unterstreichen von rechtsbündig ausgerichtetem Text

## Version 3.1.1 {#version-311}

Veröffentlicht am 25. März 2019

### Fehlerbehebungen {#fixes-311}

- Probleme beim Export nach Excel

## Version 3.1 {#version-31}

Veröffentlicht am 21. März 2019

### Neue Funktionalität {#new-functionality-31}

- [Import aus Excel](loading_data.md#loading-excel-file-xlsx)
- [Export nach Excel](loading_data.md#exporting-data)
- [Zahlenformatierung](number_formatting.md)
- [Automatisches Ausfüllen von Zellen](work_with_cells.md#auto-filling-cells-with-content)

### Aktualisierungen {#updates-31}

- [Tastenkombinationsverhalten in einem Zellbereich](hotkeys.md)

### Fehlerbehebungen {#fixes-31}

- Probleme mit Tastenkombinationen auf der aktiven Zelle

## Version 3.0.3 {#version-303}

Veröffentlicht am 13. Dezember 2018

### Fehlerbehebungen {#fixes-303}

- Falsches Verhalten im benutzerdefinierten Nur-Lesen-Modus
- Probleme mit Methoden zum Entfernen einer Spalte/Zeile
- Probleme mit dem Fokusverlust auf der Bearbeitungszeile
- Probleme mit Tastenkombinationen auf der aktiven Zelle

## Version 3.0.2 {#version-302}

Veröffentlicht am 6. Dezember 2018

### Fehlerbehebungen {#fixes-302}

- Probleme mit dem Tastenkombinationsverhalten
- Probleme mit der Platzierung des Auswahlgriffs
- Probleme mit dem Fokusverlust auf der aktiven Zelle
- Falsches Auswahlverhalten auf der aktiven Zelle
- Falsches Tastenkombinationsverhalten auf der aktiven Zelle
- Falsches Scrollverhalten mit Pfeiltasten

## Version 3.0.1 {#version-301}

Veröffentlicht am 8. November 2018

### Fehlerbehebungen {#fixes-301}

- Falsches Verhalten der Rückgängig-Operation
- Falsches Verhalten der Ausschneiden-Einfügen-Operation auf einer Gruppe von Zellen

## Version 3.0 {#version-30}

Veröffentlicht am 25. Oktober 2018

### Breaking Change {#breaking-change}

{{note Die API der Version 3.0 ist nicht kompatibel mit API v2.1.}}

Im Vergleich zur vorherigen PHP-basierten Version ist DHTMLX Spreadsheet der Version 3.0 eine vollständig clientseitige JavaScript-Komponente.

Lesen Sie den [Migrations-](migration.md#21---30)Artikel, um Informationen zur Verwendung der neuen API zu erhalten.

### Neue Funktionalität {#new-functionality-30}

Die API von Spreadsheet wurde geändert und ist handlicher zu verwenden. Eine weitere wesentliche Aktualisierung ist das vollständige Redesign der Komponente, das der Oberfläche von Spreadsheet ein modernes Aussehen verlieh. Zusammen mit dem frischen Erscheinungsbild wurde die Benutzerfreundlichkeit von DHTMLX Spreadsheet erheblich verbessert.

- [Spreadsheet-Übersicht](/)
- [Vollständig anpassbare Struktur und einstellbares Erscheinungsbild](customization.md)
- [Vollständig erneuerte API](api/api_overview.md)
