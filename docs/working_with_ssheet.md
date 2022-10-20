---
sidebar_label: Work with Spreadsheet
title: Working with Spreadsheet
description: You can learn about working with spreadsheet in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with Spreadsheet

While users interact with Spreadsheet via its intuitive interface, you can work with the component using [simple API](api/api_overview.md).

## Undo/redo actions

There is the [](api/spreadsheet_undo_method.md) API method that allows reverting the latest action:

~~~js
spreadsheet.undo();
~~~

To reapply a reverted action once again use the [](api/spreadsheet_redo_method.md) method:

~~~js
spreadsheet.redo();
~~~

## Adding/removing rows and columns

### Columns

To add/delete a column, use the related API methods:

- [](api/spreadsheet_addcolumn_method.md)
- [](api/spreadsheet_deletecolumn_method.md)

Pass to the methods the id of the cell that contains the id of a column that should be added.

~~~js
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

~~~js
// adds an empty second row
spreadsheet.addRow("A2");
// removes the second row
spreadsheet.deleteRow("A2");
~~~

When a new row is added, neighboring rows are moved one cell down.

## Autofit column width

To change the column width so that it would automatically adjust to the longest content in the column, apply the [fitColumn()](api/spreadsheet_fitcolumn_method.md) method. The method takes one parameter - the id of the cell that contains the name of the necessary column.

~~~js
// adjusts the width of the "G" column
spreadsheet.fitColumn("G2");
~~~

## Filtering data

### Set filter

You can filter data in the spreadsheet and render only the records that meet the specified criteria. For that, you need to use the [setFilter()](api/spreadsheet_setfilter_method.md) method and specify the rules of filtering for the necessary column there. 

For example, you can filter data of the "A" column so that only the records which contain the "c" text will display:

~~~js
spreadsheet.setFilter("A2", [{ condition: { factor: "tc", value: "c" } }]);
~~~

:::tip
The [**factor**](api/spreadsheet_setfilter_method.md#list-of-factors) attribute of the **condition** parameter defines a comparison expression for filtering.
:::

Or you can exclude the records from the sheet if the "A" column contains data points with the "Touch Projector" value:

~~~js
spreadsheet.setFilter("A2", [{ exclude: ["Touch Projector"] }]);
~~~

### Reset filter

If you want to reset filtering, apply the [setFilter()](api/spreadsheet_setfilter_method.md) method without parameters or pass only the first parameter to the method:

~~~js
spreadsheet.setFilter("A2");
~~~

### Get filter

To get the criteria by which data are currently filtered in a sheet, apply the [getFilter()](api/spreadsheet_getfilter_method.md) method. Pass the ID of the necessary sheet as a parameter to the method.

~~~js
const filter = spreadsheet.getFilter("Income");
~~~

You don't need to pass the sheet's ID if you want to get the filter criteria applied to the currently active sheet:

~~~js
const filter = spreadsheet.getFilter();
~~~

## Searching for data

You may find cells which contain specific records by passing the value which you need to search to the [search()](api/spreadsheet_search_method.md) method. 

~~~js
spreadsheet.search("min"); // -> ['D1']
~~~

At the same time, you may pass `true` as a value of the second parameter to open the search box and highlight the found cells in the spreadsheet:

~~~js
spreadsheet.search("min", true); 
~~~

By default, the spreadsheet will search the cells on the currently active sheet. To search for records on the other sheet, pass its ID as the third parameter of the method:

~~~js
spreadsheet.search("min", false, "Income");
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

~~~js
spreadsheet.clear();
~~~

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

If you need to clear a specific sheet, use the [clearSheet()](api/spreadsheet_clearsheet_method.md) method.

## Selecting cells

Spreadsheet provides a handy way of setting selection for cells via the API of the *Selection* object.

You can select cell(s) by passing its/their id(s) to the [](api/selection_setselectedcell_method.md) method:

~~~js
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

It is also possible to get the id(s) of the selected cell(s) via the [](api/selection_getselectedcell_method.md) method:

~~~js
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

To remove selection from cell(s), pass its/their id(s) to the [](api/selection_removeselectedcell_method.md) method:

~~~js
// sets selection
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// removes selection
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**Related sample:** [Spreadsheet. Remove selection](https://snippet.dhtmlx.com/u4j76cuh)

## Setting focus on a cell

The *Selection* object allows setting focus on a desired spreadsheet cell, as well as getting the id of the cell in focus. Use the corresponding methods for this purpose:

- [](api/selection_setfocusedcell_method.md)

~~~js
// pass the id of the cell to set focus on
spreadsheet.selection.setFocusedCell("D4");
~~~

- [](api/selection_getfocusedcell_method.md)

~~~js
// getting the focused cell 
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~
