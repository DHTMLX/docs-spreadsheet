---
sidebar_label: Work with rows and columns
title: Work with rows and columns
description: You can learn about how to work with rows and columns in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with rows and columns

DHTMLX Spreadsheet allows adding and removing columns and rows into a sheet via both toolbar buttons and options of the context menu.

## Adding rows

To add a new row, take the following steps:

1\. Select a row by clicking on its header.

2\. Choose one of the two actions:

- click the **Add row** button in the toolbar

![Adding rows](assets/add_row_button.png)

- or right-click the row and choose *Rows -> Add row*

![Adding rows](assets/add_row_context_menu.png)

:::note 
Note that a new row will be added above the selected one.
:::

## Removing rows

To remove a row, take the following steps:

1\. Select a row by clicking on its header.

2\. Choose one of the two actions:

- click the **Remove row** button in the toolbar

![Removing rows](assets/remove_row_button.png)

- or right-click the row and choose *Rows -> Remove row*

![Removing rows](assets/remove_row_context_menu.png)

## Adding columns

To add a new column, take the following steps:

1\. Select a column by clicking on its header.

2\. Choose one of the two actions:

- click the **Add column** button in the toolbar

![Adding columns](assets/add_column_button.png)

- or right-click the column and choose *Columns -> Add column*

![Adding columns](assets/add_column_context_menu.png)

:::note 
Note that a new column will be added to the left of the selected one.
:::

## Removing columns

To remove a column, take the following steps:

1\. Select a column by clicking on its header.

2\. Choose one of the two actions:

- click the **Remove column** button in the toolbar

![Adding columns](assets/remove_column_button.png)

- or right-click the column and choose *Columns -> Remove column*

![Adding columns](assets/remove_column_context_menu.png)

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

- or right-click a row/cell and choose *Rows -> Freeze up to row [id]*

![Freezing rows context menu](assets/freeze_rows_context_menu.png)

### Unfreezing rows

(*In the images below rows are frozen up to the "5" row*)

To unfreeze rows, take one of the following steps:

- either click the **Rows** button in the toolbar and select the *Unfreeze rows* option

![Unfreezing rows toolbar](assets/unfreeze_rows_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze rows*

![Unfreezing rows menu](assets/unfreeze_rows_menu.png)

- or right-click any row/cell in the row and choose *Rows -> Unfreeze rows*

![Unfreezing rows context menu](assets/unfreeze_rows_context_menu.png)

### Freezing columns

To freeze columns up to a certain column, take the following steps:

1\. Select a column (by clicking on its header) or a cell in the necessary column.

2\. Choose one of the following actions:

- either click the **Columns** button in the toolbar and select the *Freeze up to column [id]* option

![Freezing columns toolbar](assets/freeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Freeze up to column [id]*

![Freezing columns menu](assets/freeze_columns_menu.png)

- or right-click a column/cell and choose *Columns -> Freeze up to column [id]*

![Freezing columns context menu](assets/freeze_columns_context_menu.png)

### Unfreezing columns

(*In the images below columns are frozen up to the "D" column*)

To unfreeze columns, take one of the following steps:

- either click the **Columns** button in the toolbar and select the *Unfreeze columns* option

![Unfreezing columns toolbar](assets/unfreeze_columns_toolbar.png)

- or select the **Edit** menu option and choose *Freeze -> Unfreeze columns*

![Unfreezing columns menu](assets/unfreeze_columns_menu.png)

- or right-click any column/cell and choose *Columns -> Unfreeze columns*

![Unfreezing columns context menu](assets/unfreeze_columns_context_menu.png)