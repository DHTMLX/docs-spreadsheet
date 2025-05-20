---
sidebar_label: Work with rows and columns
title: Work with rows and columns
description: You can learn about how to work with rows and columns in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with rows and columns

DHTMLX Spreadsheet allows adding/removing columns and rows, automatically fitting the column width to the content, freezing/unfreezing columns and rows, as well as hiding/showing columns and rows via toolbar buttons, menu options and the options of the context menu of a cell.

## Adding/removing rows and columns

### Adding rows

To add a new row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Add row above* option

![Adding rows toolbar](assets/add_row_button.png)

- or select the **Insert** menu option and choose *Rows -> Add row above*

![Adding rows menu](assets/add_row_menu.png)

- or right-click the row or a cell in the row and choose *Rows -> Add row above*

![Adding rows context menu](assets/add_row_context_menu.png)

### Removing rows

To remove a row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the row.

2\. Choose one of the following actions:

- click the **Rows** button in the toolbar and select the *Remove row* option

![Removing rows toolbar](assets/remove_row_button.png)

- or select the **Insert** menu option and choose *Rows -> Remove row*

![Removing rows menu](assets/remove_row_menu.png)

- or right-click the row or a cell in the row and choose *Rows -> Remove row*

![Removing rows context menu](assets/remove_row_context_menu.png)

### Adding columns

To add a new column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Add column left* option

![Adding columns toolbar](assets/add_column_button.png)

- or select the **Insert** menu option and choose *Columns -> Add column left*

![Adding columns menu](assets/add_column_menu.png)

- or right-click the column or a cell in the column and choose *Columns -> Add column left*

![Adding columns](assets/add_column_context_menu.png)

### Removing columns

To remove a column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the column.

2\. Choose one of the following actions:

- click the **Columns** button in the toolbar and select the *Remove column* option

![Adding columns toolbar](assets/remove_column_button.png)

- or select the **Insert** menu option and choose *Columns -> Remove column*

![Removing columns menu](assets/remove_column_menu.png)

- or right-click the column or a cell in the column and choose *Columns -> Remove column*

![Adding columns context menu](assets/remove_column_context_menu.png)

## AutoFit column width

To change the column width so that it would automatically fit the longest content in the column, you can:

- double-click the resize cursor of a column in the table header 

![Autofit column width](assets/resize_cursor.png)

- or take the following steps:

1\. Left-click on a 3 dots icon of the column

![Column context menu](assets/column_context_menu.png)

2\. Choose *Columns -> Fit to data*

![Autofit column width](assets/column_autofit.png)

## Freezing/unfreezing rows and columns

### Freezing rows

To freeze rows up to a certain row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Freeze up to row [id]* option

![Freezing rows toolbar](assets/freeze_rows_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Freeze up to row [id]*

![Freezing rows menu](assets/freeze_rows_menu.png)

- or right-click a row or a cell in the row and choose *Rows -> Freeze up to row [id]*

![Freezing rows context menu](assets/freeze_rows_context_menu.png)

### Unfreezing rows

(*In the images below rows are frozen up to the row 5*)

To unfreeze rows, take one of the following steps:

- either click the **Rows** button in the toolbar and select the *Unfreeze rows* option

![Unfreezing rows toolbar](assets/unfreeze_rows_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze rows*

![Unfreezing rows menu](assets/unfreeze_rows_menu.png)

- or right-click any cell and choose *Rows -> Unfreeze rows*

![Unfreezing rows context menu](assets/unfreeze_rows_context_menu.png)

### Freezing columns

To freeze columns up to a certain column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Freeze up to column [id]* option

![Freezing columns toolbar](assets/freeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Freeze up to column [id]*

![Freezing columns menu](assets/freeze_columns_menu.png)

- or right-click a column or a cell in the column and choose *Columns -> Freeze up to column [id]*

![Freezing columns context menu](assets/freeze_columns_context_menu.png)

### Unfreezing columns

(*In the images below columns are frozen up to the column D*)

To unfreeze columns, take one of the following steps:

- either click the **Columns** button in the toolbar and select the *Unfreeze columns* option

![Unfreezing columns toolbar](assets/unfreeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze columns*

![Unfreezing columns menu](assets/unfreeze_columns_menu.png)

- or right-click any cell and choose *Columns -> Unfreeze columns*

![Unfreezing columns context menu](assets/unfreeze_columns_context_menu.png)

## Hiding/showing rows and columns

### Hiding rows

To hide a row, take the following steps:

1\. Select a row (by clicking on its header) or a cell in the necessary row.

2\. Choose one of the following actions:

- either click the **Rows** button in the toolbar and select the *Hide row(s) [id]* option

![Hiding rows toolbar](assets/hide_rows_toolbar.png)

- or right-click a row or a cell in the row and choose *Rows -> Hide row(s) [id]*

![Hiding rows context menu](assets/hide_row_context_menu.png)

### Showing rows

To show hidden rows, take one of the following steps:

- either click the "arrows" icon that appears in the rows header instead of the hidden row/rows

(*In the image below the rows 8 and 11 are hidden*)

![Showing rows](assets/show_rows.png)

- or select rows or several cells so that the hidden rows were included into the selection, right-click to call the context menu and choose *Rows -> Show rows*

(*In the image below the row 8 is hidden*)

![Showing rows context menu](assets/show_rows_context_menu.png)

### Hiding columns

To hide a column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Hide column(s) [id]* option

![Hiding columns toolbar](assets/hide_columns_toolbar.png)

- or right-click a column or a cell in the column and choose *Columns -> Hide column(s) [id]*

![Hiding columns context menu](assets/hide_column_context_menu.png)

### Showing columns

To show hidden columns, take one of the following steps:

- either click the "arrows" icon that appears in the columns header instead of the hidden column/columns

(*In the image below the columns C and E are hidden*)

![Showing columns](assets/show_columns.png)

- or select columns or several cells so that the hidden columns were included into the selection, right-click to call the context menu and choose *Columns -> Show columns*

(*In the image below the column C is hidden*)

![Showing columns context menu](assets/show_columns_context_menu.png)


