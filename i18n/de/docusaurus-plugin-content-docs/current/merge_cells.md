---
sidebar_label: Zellen zusammenführen
title: Zellen zusammenführen
description: Führen Sie Zellen in DHTMLX Spreadsheet über die Symbolleiste oder das Menü „Format" zusammen und teilen Sie sie wieder auf. Erfahren Sie außerdem, wie sich das Entfernen von Zeilen und Spalten auf zusammengeführte Zellen auswirkt.
---

# Zellen zusammenführen {#merging-cells}

## Zellen zusammenführen {#merge-cells}

Gehen Sie wie folgt vor, um Zellen zusammenzuführen:

1\. Wählen Sie einen Zellbereich aus, den Sie zusammenführen möchten

2\. Klicken Sie in der Symbolleiste auf die Schaltfläche **Merge**

![DHTMLX Spreadsheet-Symbolleiste mit der Schaltfläche „Merge" zum Zusammenführen eines Zellbereichs](/img/merge_cells.png)

oder

1\. Wählen Sie einen Zellbereich aus, den Sie zusammenführen möchten

2\. Navigieren Sie zu: *Format -> Merge* im Menü

![DHTMLX Spreadsheet-Menü „Format" mit der Option „Merge" zum Zusammenführen von Zellen](/img/merge_cells_via_menu.png)

:::info
Die zusammengeführte Zelle zeigt den Inhalt der oberen linken Zelle des ausgewählten Bereichs an.
:::

## Zellen aufteilen {#split-cells}

Gehen Sie wie folgt vor, um eine zusammengeführte Zelle aufzuteilen:

1\. Wählen Sie die zusammengeführte Zelle aus

2\. Klicken Sie in der Symbolleiste auf die Schaltfläche **Unmerge**

![DHTMLX Spreadsheet-Symbolleiste mit der Schaltfläche „Unmerge" zum Aufteilen zusammengeführter Zellen](/img/unmerge_cells.png)

oder

1\. Wählen Sie die zusammengeführte Zelle aus

2\. Navigieren Sie zu: *Format -> Unmerge* im Menü

![DHTMLX Spreadsheet-Menü „Format" mit der Option „Unmerge" zum Aufteilen zusammengeführter Zellen](/img/unmerge_cells_via_menu.png)

## Zeilen und Spalten zusammengeführter Zellen entfernen {#removing-rows-and-columns-of-merged-cells}

Wenn Sie eine Zeile oder eine Spalte über eine zusammengeführte Zelle entfernen, werden alle Zeilen oder Spalten entfernt, die sich über die zusammengeführte Zelle erstrecken. Das gilt, wenn eine Zelle oder ein Zellbereich ausgewählt ist und die Zeile oder Spalte über die Symbolleiste, das Menü, das Kontextmenü oder die Methoden [`deleteRow()`](api/spreadsheet_deleterow_method.md) / [`deleteColumn()`](api/spreadsheet_deletecolumn_method.md) entfernt wird. Das Kontextmenü zeigt den gesamten Bereich im Namen des Befehls an, zum Beispiel *Remove rows 2-4*.

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove rows 2-4 for a merged cell](/img/remove_merged_rows_context_menu.png)

Wenn ganze Zeilen oder Spalten ausgewählt sind, zum Beispiel durch Klicken auf ihre Kopfzellen oder mit `Shift + Space` bzw. `Ctrl (Cmd) + Space`, werden nur die ausgewählten Zeilen oder Spalten entfernt. Eine zusammengeführte Zelle, die sich über sie erstreckt, wird kleiner, und eine zusammengeführte Zelle, von der nur eine einzelne Zelle übrig bleibt, wird zu einer gewöhnlichen Zelle.

Zusammengeführte Zellen, die unterhalb oder rechts von den entfernten Zeilen oder Spalten liegen, werden mit ihnen verschoben.
