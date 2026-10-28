---
sidebar_label: Merging cells
title: Merging cells
description: Merge and split cells in DHTMLX Spreadsheet through the toolbar or the Format menu, and learn how removing rows and columns affects merged cells.
---

# Merging cells

## Merge cells

To merge cells, take the steps below:

1\. Select a range of cells that you want to merge

2\. Click the **Merge** button in the toolbar

![DHTMLX Spreadsheet toolbar with the Merge button for merging a range of cells](/img/merge_cells.png)

or

1\. Select a range of cells that you want to merge

2\. Go to: *Format -> Merge* in the menu

![DHTMLX Spreadsheet Format menu with the Merge option for cell merging](/img/merge_cells_via_menu.png)

:::info
The merged cell displays the content of the upper-left cell of the selected range.
:::

## Split cells

To split a merged cell, take the steps below:

1\. Select the merged cell

2\. Click the **Unmerge** button in the toolbar

![DHTMLX Spreadsheet toolbar with the Unmerge button for splitting merged cells](/img/unmerge_cells.png)

or

1\. Select the merged cell

2\. Go to: *Format -> Unmerge* in the menu

![DHTMLX Spreadsheet Format menu with the Unmerge option for splitting merged cells](/img/unmerge_cells_via_menu.png)

## Removing rows and columns of merged cells

When you remove a row or a column through a merged cell, every row or column that the merged cell spans is removed. It works this way when a cell or a range of cells is selected and the row or column is removed via the toolbar, the menu, the context menu or the [`deleteRow()`](api/spreadsheet_deleterow_method.md) / [`deleteColumn()`](api/spreadsheet_deletecolumn_method.md) methods. The context menu shows the full range in the command name, for example, *Remove rows 2-4*.

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove rows 2-4 for a merged cell](/img/remove_merged_rows_context_menu.png)

When whole rows or columns are selected by clicking their headers, only the selected rows or columns are removed. A merged cell that spans them becomes smaller, and a merged cell left with a single cell becomes an ordinary cell.

Merged cells located below or on the right of the removed rows or columns move together with them.
