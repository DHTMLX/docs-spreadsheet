---
sidebar_label: Work with Spreadsheet
title: Working with Spreadsheet
description: You can learn about working with spreadsheet in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with Spreadsheet

While users interact with Spreadsheet via its intuitive interface, you can work with the component using [simple API](api/api_overview.md).

## Undo/redo actions

There is the [](api/spreadsheet_undo_method.md) API method that allows reverting the latest action:

~~~jsx
spreadsheet.undo();
~~~

To reapply a reverted action once again use the [](api/spreadsheet_redo_method.md) method:

~~~jsx
spreadsheet.redo();
~~~

## Adding/removing rows and columns

### Columns

To add/delete a column, use the related API methods:

- [](api/spreadsheet_addcolumn_method.md)
- [](api/spreadsheet_deletecolumn_method.md)

Pass to the methods the id of the cell that contains the id of a column that should be added.

~~~jsx
// adds an empty "C" column 
spreadsheet.addColumn("C1");
// removes the "C" column
spreadsheet.deleteColumn("C1");
~~~

When a new column is added, neighboring columns are moved to the right.

### Rows

To add/delete a row, use the API methods below:

- [](api/spreadsheet_addrow_method.md)
- [](api/spreadsheet_deleterow_method.md)

Pass to the methods the id of the cell that contains the id of a row that should be added.

~~~jsx
// adds an empty second row
spreadsheet.addRow("A2");
// removes the second row
spreadsheet.deleteRow("A2");
~~~

When a new row is added, neighboring rows are moved one cell down.

## Autofit column width

To change the column width so that it would automatically adjust to the longest content in the column, apply the [fitColumn()](api/spreadsheet_fitcolumn_method.md) method. The method takes one parameter - the id of the cell that contains the name of the necessary column.

~~~jsx
// adjusts the width of the "G" column
spreadsheet.fitColumn("G2");
~~~

## Freezing/unfreezing rows and columns

You may need to fix (or "freeze") some columns or rows, so that they will become static when you scroll the page, while the rest of columns/rows remain movable.

### Rows

To freeze/unfreeze rows, use the related API methods:

- [](api/spreadsheet_freezerows_method.md)
- [](api/spreadsheet_unfreezerows_method.md)

Pass to the methods the id of the cell to define the id of a row. If the cell id isn't passed, the currently selected cell will be used.

~~~jsx
// freezing rows
spreadsheet.freezeRows("B2"); // the rows up to the second row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the second row in "sheet2" will be fixed

// unfreezing rows
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen
~~~

### Columns

To freeze/unfreeze columns, use the related API methods:

- [](api/spreadsheet_freezecols_method.md)
- [](api/spreadsheet_unfreezecols_method.md)

Pass to the methods the id of the cell to define the id of a column. If the cell id isn't passed, the currently selected cell will be used.

~~~jsx 
// freezing columns
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed

// unfreezing columns
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~ 

## Hiding/showing rows and columns

You can hide and show particular rows and columns via the corresponding API methods.

### Rows

To hide/show a row, use the API methods below:

- [](api/spreadsheet_hiderows_method.md)
- [](api/spreadsheet_showrows_method.md)

Pass to the methods the id of the cell to define the id of a column. If the cell id isn't passed, the currently selected cell will be used.

~~~jsx
// hiding rows
spreadsheet.hideRows("B2"); // the "2" row will be hidden  
spreadsheet.hideRows("sheet2!B2"); // the "2" row in "sheet2" will be hidden
spreadsheet.hideRows("B2:C4"); // the rows from "2" to "4" will be hidden 

// showing rows
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

### Columns

To hide/show a column, use the following methods:

- [](api/spreadsheet_hidecols_method.md)
- [](api/spreadsheet_showcols_method.md)

Pass to the methods the id of the cell to define the id of a column. If the cell id isn't passed, the currently selected cell will be used.

~~~jsx
// hiding columns
spreadsheet.hideCols("B2"); // the "B" column will be hidden
spreadsheet.hideCols("sheet2!B2"); // the "B" column in "sheet2" will be hidden
spreadsheet.hideCols("B2:C2"); // the "B" and "C" columns will be hidden

// showing columns
spreadsheet.showCols("B2"); // the "B" column will become visible again
spreadsheet.showCols("sheet2!B2"); // the "B" column in "sheet2" will become visible again
spreadsheet.showCols("B2:C2"); // the "B" and "C" columns will become visible again
~~~

## Filtering data

### Set filter

You can filter data in the spreadsheet and render only the records that meet the specified criteria. For that, you need to use the [setFilter()](api/spreadsheet_setfilter_method.md) method and specify the rules of filtering for the necessary column(s) there. 

For example, you can specify criteria of filtering for a separate column:

~~~jsx
// filter data by criteria specified for column A
spreadsheet.setFilter("A2", [{condition: { factor: "tc", value: "e" }, exclude: ["Peru"]}]);

// filter data by criteria specified for column C
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);
~~~

In this case, a filter icon will be added for each column from the range of data.

But you may also specify the filtering criteria for a range of cells as in:

~~~jsx
// filter data by criteria specified for column C
spreadsheet.setFilter("C1:C9", [{condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);

// filter data by criteria specified for column A and C
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);
~~~

and a filter icon will be added only for columns withing the specified range.

**Related sample:** [Spreadsheet. Filtering via API](https://snippet.dhtmlx.com/effrcsg6)

### Reset filter

If you want to reset filtering, apply the [setFilter()](api/spreadsheet_setfilter_method.md) method without parameters or pass only the first parameter to the method:

~~~jsx
spreadsheet.setFilter("A2");
~~~

### Get filter

To get the criteria by which data are currently filtered in a sheet, apply the [getFilter()](api/spreadsheet_getfilter_method.md) method. Pass the ID of the necessary sheet as a parameter to the method.

~~~jsx
const filter = spreadsheet.getFilter("Income");
~~~

You don't need to pass the sheet's ID if you want to get the filter criteria applied to the currently active sheet:

~~~jsx
const filter = spreadsheet.getFilter();
~~~

## Searching for data

You may get cells which contain specific records by passing the value which you need to search to the [search()](api/spreadsheet_search_method.md) method. 

~~~jsx
spreadsheet.search("min"); // -> ['D1']
~~~

At the same time, you may pass `true` as a value of the second parameter. This will open the search bar and highlight the found cells in the spreadsheet:

~~~jsx
spreadsheet.search("min", true); 
~~~

By default, the spreadsheet will search the cells on the currently active sheet. To search for records on the other sheet, pass its ID as the third parameter of the method:

~~~jsx
spreadsheet.search("min", false, "Income");
~~~

### Close search bar

To hide the search bar, use the [hideSearch()](api/spreadsheet_hidesearch_method.md) method:

~~~jsx
spreadsheet.hideSearch();
~~~

## Sorting data

From v4.3, you can sort data in the spreadsheet via the [sortCells()](api/spreadsheet_sortcells_method.md) method. Pass to the method two parameters:
- `cell` - the id(s) of a cell(s) or a range of cells by which you want the data in the spreadsheet to be sorted
- `dir` - the sorting direction: 1 - ascending sort order, -1 - descending sort order

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.sortCells("B2:B11", -1);
~~~

## Clearing spreadsheet

You can clear the whole spreadsheet at once via the [clear()](api/spreadsheet_clear_method.md) method:

~~~jsx
spreadsheet.clear();
~~~

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

If you need to clear a specific sheet, use the [clearSheet()](api/spreadsheet_clearsheet_method.md) method.
