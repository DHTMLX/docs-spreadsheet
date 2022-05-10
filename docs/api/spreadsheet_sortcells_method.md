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

- `cell` -  (required) a range of cells by which you want the data in the spreadsheet to be sorted
- `dir` - (required) the direction of sorting: 
    - 1 - ascending order
    - -1 - descending order

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.sortCells("B2:B11", -1);
~~~

**Related sample:** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

**Related articles:** [Sorting data](working_with_ssheet.md#sorting-data)