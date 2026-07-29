---
sidebar_label: Mit Tabellenblättern arbeiten
title: Mit Tabellenblättern arbeiten
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie, wie Sie mit Tabellenblättern arbeiten. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Mit Tabellenblättern arbeiten {#work-with-sheets}

## Ein neues Tabellenblatt hinzufügen {#adding-a-new-sheet}

Um ein neues Tabellenblatt hinzuzufügen, gehen Sie wie folgt vor:

1. Wählen Sie einen Tabellenblatt-Tab aus, indem Sie darauf klicken

2. Klicken Sie in der unteren Symbolleiste auf die Schaltfläche **Tabellenblatt hinzufügen**

:::note
Beachten Sie, dass ein neues Tabellenblatt nach dem aktuell aktiven Tabellenblatt eingefügt wird.
:::

![DHTMLX Spreadsheet bottom toolbar with the Add sheet button and sheet tabs](/img/add_sheet.png)

## Ein Tabellenblatt entfernen {#removing-a-sheet}

Um ein Tabellenblatt aus der Tabellenkalkulation zu entfernen, klicken Sie mit der rechten Maustaste auf den Tabellenblatt-Tab und wählen Sie *Löschen*.

{{note Beachten Sie, dass ein Tabellenblatt nicht entfernt werden kann, wenn es das einzige Tabellenblatt in der Tabellenkalkulation ist.}}

![DHTMLX Spreadsheet sheet tab context menu with the Delete option highlighted](/img/remove_sheet.png)

## Das aktive Tabellenblatt wechseln {#changing-the-active-sheet}

Um das aktuell aktive Tabellenblatt zu wechseln, klicken Sie auf einen anderen Tabellenblatt-Tab.

![DHTMLX Spreadsheet sheet tabs at the bottom with the active sheet highlighted](/img/change_active_sheet.png)

## Ein Tabellenblatt umbenennen {#renaming-a-sheet}

Um ein Tabellenblatt umzubenennen, klicken Sie mit der rechten Maustaste auf den Tabellenblatt-Tab, klicken Sie auf *Umbenennen* und geben Sie den neuen Namen ein.

![DHTMLX Spreadsheet sheet tab context menu with the Rename option and a name input](/img/rename_sheet.png)

## Querverweise zwischen Tabellenblättern {#cross-references-between-sheets}

Sie können Daten aus mehreren Tabellenblättern mithilfe von Querverweisen in einem zusammenfassen. <br> Gehen Sie dazu wie folgt vor:

1\.  Geben Sie ein Gleichheitszeichen (=) in eine Zelle ein

2\.  Klicken Sie auf den Tabellenblatt-Tab, auf den Sie einen Querverweis setzen möchten, und wählen Sie die Zelle oder den Zellbereich aus

3\.  Beenden Sie die Eingabe der Formel und drücken Sie die Eingabetaste

![DHTMLX Spreadsheet cross-reference formula built across multiple sheet tabs](/img/cross_reference.gif)
