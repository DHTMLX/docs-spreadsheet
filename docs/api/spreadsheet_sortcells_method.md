---
sidebar_label: sortCells()
title: sortCells method
description: You can learn about the sortCells method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    topSplit: 1
});
spreadsheet.parse(data);

// sorts data on the first sheet
spreadsheet.sortCells("B2:B11", -1);

// sorts data on several sheets
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~

:::info
Use the [topSplit](api/spreadsheet_topsplit_config.md) property if you need to exclude the top rows from sorting.
:::

**Related sample:** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

**Related articles:** [Sorting data](working_with_ssheet.md#sorting-data)