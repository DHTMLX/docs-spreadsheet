---
sidebar_label: sortCells()
title: sortCells method
description: Sort the data of DHTMLX Spreadsheet in ascending or descending order by a column or a range of cells with the sortCells() method.
---

# sortCells()

### Description

@short: Sorts data in the spreadsheet

### Usage

~~~jsx
sortCells(cell: string, dir: number): void;
~~~

### Parameters

- `cell` -  (required) the id(s) of a cell(s) or a range of cells by which you want the data in the spreadsheet to be sorted
- `dir` - (required) the direction of sorting: 
    - 1 - ascending order
    - -1 - descending order

### Example

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // configuration parameters
});
spreadsheet.parse(data);

// sorts data on the first sheet
spreadsheet.sortCells("B2:B11", -1);

// sorts data on several sheets
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~


**Related sample:** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

**Related article:** [Sorting data](working_with_ssheet.md#sorting-data)