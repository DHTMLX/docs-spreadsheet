---
sidebar_label: isLocked()
title: isLocked method
description: You can learn about the isLocked method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# isLocked()

### Description

@short: Checks whether a cell(s) is(are) locked

### Usage

~~~jsx
isLocked(cell: string): boolean;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Returns

The method returns `true`, if the cell is locked, and `false` if it's unlocked

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// checks whether a cell is locked
const cellLocked = spreadsheet.isLocked("A1");

// checks whether several cells are locked
const rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
const cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

:::info
If several cells are checked at once, the method will return *true*, if there is at least one locked cell among the specified cells.
:::

:::info
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~jsx
const cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will check the cell(s) of the active tab.
:::