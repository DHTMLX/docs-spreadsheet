---
sidebar_label: getCellIndex()
title: getCellIndex method
description: You can learn about the getCellIndex method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getCellIndex()

### Description

@short: Returns the row number and column letter for the specified cell or range

### Usage

~~~jsx
getCellIndex(cell: string): 
    { row: string, col: string } |              // for a single cell
    { start: {...}, end: {...} };               // for a range of cells
~~~

### Parameters

- `cell` - (required) the id of a cell ("B5") or a range of cells ("A1:B2")

### Returns

- for a single cell - an object with two attributes:
    - `row` - the row number as a string (e.g. "5")
    - `col` - the column letter (e.g. "B")
- for a range of cells - an object with the `start` and `end` attributes, each of which is a `{ row, col }` object for the top-left and bottom-right cells of the range

### Example

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// gets the index of a single cell
const index = spreadsheet.getCellIndex("B5"); // -> { row: "5", col: "B" }

// gets the index of a range of cells
const range = spreadsheet.getCellIndex("A1:B2");
// -> { start: { row: "1", col: "A" }, end: { row: "2", col: "B" } }
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md)
