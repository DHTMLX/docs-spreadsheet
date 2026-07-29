---
sidebar_label: Spreadsheet-Übersicht
title: DHTMLX Spreadsheet Übersicht
slug: /
description: Sie finden eine Übersicht der JavaScript-Spreadsheet-Bibliothek in der DHTMLX-Dokumentation. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# DHTMLX Spreadsheet-Übersicht {#dhtmlx-spreadsheet-overview}

DHTMLX Spreadsheet ist eine clientseitige JavaScript-Komponente zum Online-Bearbeiten und -Formatieren von Tabellendaten. Sie umfasst eine konfigurierbare Toolbar, ein praktisches Menü und Kontextmenü sowie ein anpassbares Grid, unterstützt die Hotkey-Navigation, lädt Daten aus externen und lokalen Quellen und kann die Oberfläche in die gewünschte Sprache lokalisieren.

:::tip
Das [Benutzerhandbuch](guides.md#user-guides) erleichtert Ihren Benutzern die Arbeit mit Spreadsheet.
:::

## Spreadsheet-Struktur {#spreadsheet-structure}

### Toolbar {#toolbar}

Der Abschnitt **Toolbar** ist sehr flexibel. Er enthält mehrere Standardblöcke mit Steuerelementen: "undo", "colors", "decoration", "align", "cell", "format", "actions". Sie können die [Toolbar-Struktur ändern](configuration.md#toolbar) und weitere Blöcke hinzufügen oder eine eigene Reihenfolge der Blöcke festlegen.

![DHTMLX Spreadsheet toolbar with undo, color, decoration, align, cell, format, and action controls](/img/overview_toolbar.png)

Sie können die [Toolbar auch anpassen](customization.md#toolbar), indem Sie eigene Steuerelemente hinzufügen und die Konfiguration der Steuerelemente aktualisieren.  

### Bearbeitungszeile {#editing-line}

Die **Bearbeitungszeile** erfüllt zwei Zwecke:

- den Inhalt der ausgewählten Zelle bearbeiten
- Änderungen in der aktuell bearbeiteten Zelle verfolgen

![DHTMLX Spreadsheet editing line for editing cell content and tracking changes](/img/overview_editline.png)

Bei Bedarf können Sie die Bearbeitungszeile über die entsprechende [Konfigurationsoption](configuration.md#editing-bar) deaktivieren.

### Grid {#grid}

Das **Grid** ist eine Tabelle, deren Spalten durch Buchstaben und deren Zeilen durch Zahlen definiert sind. Eine Zelle des Grids wird daher durch den Buchstaben der Spalte und die Nummer der Zeile bezeichnet, zum Beispiel C3.

![DHTMLX Spreadsheet grid with columns labeled by letters and numbered rows](/img/spreadsheet_init.png)

### Kontextmenü {#context-menu}

Der Abschnitt **Kontextmenü** enthält 6 Einträge — **Lock**, **Clear**, **Columns**, **Rows**, **Sort** und **Insert link** — mit Untereinträgen.

![DHTMLX Spreadsheet context menu with Lock, Clear, Columns, Rows, Sort, and Insert link options](/img/overview_contextmenu.png)

Die [Struktur des Kontextmenüs ist ebenfalls anpassbar](customization.md#context-menu). Sie können benutzerdefinierte Steuerelemente hinzufügen, die Konfiguration der Steuerelemente aktualisieren und nicht benötigte Steuerelemente entfernen.

### Menü {#menu}

Der Abschnitt **Menü** enthält mehrere Blöcke, die die am häufigsten verwendeten Optionen aus Toolbar und Kontextmenü für den schnellen Zugriff zusammenfassen.

Standardmäßig ist der Abschnitt **Menü** ausgeblendet, Sie können ihn jedoch über die entsprechende [Konfigurationsoption](configuration.md#menu) aktivieren.

![DHTMLX Spreadsheet menu section combining frequently used toolbar and context menu options](/img/overview_menu.png)

Sie können die [Struktur des Menüs ändern](customization.md#menu), indem Sie benutzerdefinierte Steuerelemente verwenden, die Konfiguration der Steuerelemente aktualisieren und nicht benötigte Steuerelemente entfernen.

## Wie geht es weiter {#whats-next}

Jetzt können Sie DHTMLX Spreadsheet in Ihrer Anwendung einsetzen. Folgen Sie den Anweisungen des Tutorials [Erste Schritte](how_to_start.md).

Um mehr über DHTMLX Spreadsheet zu erfahren, lesen Sie folgende Anleitungen:

- [API-Übersicht](api/api_overview.md)
- [Anleitungen](guides.md)
