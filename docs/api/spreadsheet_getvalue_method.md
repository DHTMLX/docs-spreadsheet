---
sidebar_label: getValue()
title: getValue method
description: You can learn about the getValue method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getValue()

### Description

@short: Returns the value(s) of a cell(s)

### Usage

~~~jsx
getValue(cell: string): any | array;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Returns

The method returns values of cells

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// returning the value of one cell
const cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// returning the values of the range of cells
const rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// returning the values of different cells
const values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

:::info
Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
const cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the value(s) of the cell(s) from the active tab.
:::