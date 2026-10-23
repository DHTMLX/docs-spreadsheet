---
sidebar_label: Work with rows and columns
title: Work with rows and columns
description: Work with rows and columns in DHTMLX Spreadsheet. Add and remove them, autofit and set the column width and row height, freeze, hide and show them.
---

# Work with rows and columns

DHTMLX Spreadsheet lets you add and remove columns and rows, automatically fit the column width to the content, freeze and unfreeze columns and rows, and hide and show columns and rows using toolbar buttons, menu options, and cell context menu options.

## Adding/removing rows and columns

### Adding rows

To add a new row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Add row above* option

![DHTMLX Spreadsheet Rows toolbar button with the Add row above option highlighted](/img/add_row_button.png)

- or select the **Insert** menu option and choose *Rows -> Add row above*

![DHTMLX Spreadsheet Insert menu showing Rows and the Add row above option](/img/add_row_menu.png)

- or right-click the row or a cell in the row and choose *Rows -> Add row above*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Add row above](/img/add_row_context_menu.png)

### Removing rows

To remove a row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the row.

2\. Choose one of the following actions:

- click the **Rows** button in the toolbar and select the *Remove row* option

![DHTMLX Spreadsheet Rows toolbar button with the Remove row option highlighted](/img/remove_row_button.png)

- or select the **Insert** menu option and choose *Rows -> Remove row*

![DHTMLX Spreadsheet Insert menu showing Rows and the Remove row option](/img/remove_row_menu.png)

- or right-click the row or a cell in the row and choose *Rows -> Remove row*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove row](/img/remove_row_context_menu.png)

:::note
To remove several rows at once: select the rows, right-click to call the context menu and choose *Rows -> Remove rows [ids]*.
:::

:::info
If the selected cell is inside a merged cell, all the rows of the merged cell are removed. Check the [Merging cells](merge_cells.md#removing-rows-and-columns-of-merged-cells) article for details.
:::

### Adding columns

To add a new column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Add column left* option

![DHTMLX Spreadsheet Columns toolbar button with the Add column left option highlighted](/img/add_column_button.png)

- or select the **Insert** menu option and choose *Columns -> Add column left*

![DHTMLX Spreadsheet Insert menu showing Columns and the Add column left option](/img/add_column_menu.png)

- or right-click the column or a cell in the column and choose *Columns -> Add column left*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Add column](/img/add_column_context_menu.png)

### Removing columns

To remove a column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the column.

2\. Choose one of the following actions:

- click the **Columns** button in the toolbar and select the *Remove column* option

![DHTMLX Spreadsheet Columns toolbar button with the Remove column option highlighted](/img/remove_column_button.png)

- or select the **Insert** menu option and choose *Columns -> Remove column*

![DHTMLX Spreadsheet Insert menu showing Columns and the Remove column option](/img/remove_column_menu.png)

- or right-click the column or a cell in the column and choose *Columns -> Remove column*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Remove column](/img/remove_column_context_menu.png)

:::note
To remove several columns at once: select the columns, right-click to call the context menu and choose *Columns -> Remove columns [ids]*.
:::

:::info
If the selected cell is inside a merged cell, all the columns of the merged cell are removed. Check the [Merging cells](merge_cells.md#removing-rows-and-columns-of-merged-cells) article for details.
:::

## AutoFit column width

To change the column width so that it would automatically fit the longest content in the column, you can:

- double-click the resize cursor of a column in the table header 

![DHTMLX Spreadsheet column header with the resize cursor for autofitting column width](/img/resize_cursor.png)

- or take the following steps:

1\. Left-click on a 3 dots icon of the column

![DHTMLX Spreadsheet column context menu opened from the three dots icon](/img/column_context_menu.png)

2\. Choose *Columns -> Fit to data*

![DHTMLX Spreadsheet Columns submenu with the Fit to data option for autofit column width](/img/column_autofit.png)

## Setting column width and row height

To set an exact width of columns, take the following steps:

1\. Select a column or a cell in the column. To change several columns, select a range of cells that spans them.

2\. Right-click the selection, or press `Shift + F10` or the Menu key, and choose *Columns -> Column width*. The same command is available in the menu of the 3 dots icon of the column.

3\. In the *Column width* dialog, enter the width in pixels and click **Apply** or press `Enter`.

To set an exact height of rows, choose *Rows -> Row height* in the context menu and enter the height in the *Row height* dialog.

The dialog shows the current size of the first selected column or row and applies the new size to every column or row of the selected range. The minimum width of a column is 20 px, and the minimum height of a row is 10 px: a smaller value is replaced with the minimum. The **Cancel** button or `Esc` closes the dialog without changes. Screen readers announce the new size, for example, "Column width set to 120 pixels".

The new size can be undone with `Ctrl (Cmd) + Z`. The command runs the `resizeCol` or `resizeRow` [action](api/overview/actions_overview.md). The `config` object that the [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) events receive contains the range of the columns or rows in `cell` and the new size in `val`. Unlike a resize by dragging, the `config` object has no `mouseEvent` property.

## Freezing/unfreezing rows and columns

### Freezing rows

To freeze rows up to a certain row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Freeze up to row [id]* option

![DHTMLX Spreadsheet Rows toolbar button with the Freeze up to row option highlighted](/img/freeze_rows_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Freeze up to row [id]*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to row](/img/freeze_rows_menu.png)

- or right-click a row or a cell in the row and choose *Rows -> Freeze up to row [id]*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Freeze up to row](/img/freeze_rows_context_menu.png)

### Unfreezing rows

(*In the images below rows are frozen up to the row 5*)

To unfreeze rows, take one of the following steps:

- either click the **Rows** button in the toolbar and select the *Unfreeze rows* option

![DHTMLX Spreadsheet Rows toolbar button with the Unfreeze rows option highlighted](/img/unfreeze_rows_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze rows*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze rows](/img/unfreeze_rows_menu.png)

- or right-click any cell and choose *Rows -> Unfreeze rows*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Unfreeze rows](/img/unfreeze_rows_context_menu.png)

### Freezing columns

To freeze columns up to a certain column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Freeze up to column [id]* option

![DHTMLX Spreadsheet Columns toolbar button with the Freeze up to column option highlighted](/img/freeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Freeze up to column [id]*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to column](/img/freeze_columns_menu.png)

- or right-click a column or a cell in the column and choose *Columns -> Freeze up to column [id]*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Freeze up to column](/img/freeze_columns_context_menu.png)

### Unfreezing columns

(*In the images below columns are frozen up to the column D*)

To unfreeze columns, take one of the following steps:

- either click the **Columns** button in the toolbar and select the *Unfreeze columns* option

![DHTMLX Spreadsheet Columns toolbar button with the Unfreeze columns option highlighted](/img/unfreeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze columns*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze columns](/img/unfreeze_columns_menu.png)

- or right-click any cell and choose *Columns -> Unfreeze columns*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Unfreeze columns](/img/unfreeze_columns_context_menu.png)

## Hiding/showing rows and columns

### Hiding rows

To hide a row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Hide row(s) [id]* option

![DHTMLX Spreadsheet Rows toolbar button with the Hide rows option highlighted](/img/hide_rows_toolbar.png)

- or right-click a row or a cell in the row and choose *Rows -> Hide row(s) [id]*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Hide rows](/img/hide_row_context_menu.png)

:::info
If the active cell is in a row that becomes hidden, the active cell moves to the first visible row below it. If there are no visible rows below, it moves to the last visible row above.
:::

### Showing rows

To show hidden rows, take one of the following steps:

- either click the "arrows" icon that appears in the rows header instead of the hidden row/rows

(*In the image below the rows 8 and 11 are hidden*)

![DHTMLX Spreadsheet rows header with the arrows icon indicating hidden rows](/img/show_rows.png)

- or select rows or several cells so that the hidden rows were included into the selection, right-click to call the context menu and choose *Rows -> Show rows*

(*In the image below the row 8 is hidden*)

![DHTMLX Spreadsheet context menu with the Rows submenu showing Show rows](/img/show_rows_context_menu.png)

- or select rows or several cells so that the hidden rows were included into the selection, and press `Ctrl (Cmd) + Shift + 9`. For example, select rows 2-4 to show the hidden row 3. If the selection includes no hidden rows, screen readers announce "No hidden rows in the selection"

### Hiding columns

To hide a column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Hide column(s) [id]* option

![DHTMLX Spreadsheet Columns toolbar button with the Hide columns option highlighted](/img/hide_columns_toolbar.png)

- or right-click a column or a cell in the column and choose *Columns -> Hide column(s) [id]*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Hide columns](/img/hide_columns_context_menu.png)

:::info
If the active cell is in a column that becomes hidden, the active cell moves to the first visible column on the right of it. If there are no visible columns on the right, it moves to the last visible column on the left.
:::

### Showing columns

To show hidden columns, take one of the following steps:

- either click the "arrows" icon that appears in the columns header instead of the hidden column/columns

(*In the image below the columns C and E are hidden*)

![DHTMLX Spreadsheet columns header with the arrows icon indicating hidden columns](/img/show_columns.png)

- or select columns or several cells so that the hidden columns were included into the selection, right-click to call the context menu and choose *Columns -> Show columns*

(*In the image below the column C is hidden*)

![DHTMLX Spreadsheet context menu with the Columns submenu showing Show columns](/img/show_columns_context_menu.png)

- or select columns or several cells so that the hidden columns were included into the selection, and press `Ctrl (Cmd) + Shift + 0`. If the selection includes no hidden columns, screen readers announce "No hidden columns in the selection"
