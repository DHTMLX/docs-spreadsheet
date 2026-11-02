---
sidebar_label: setFormat()
title: setFormat method
description: Apply a number format to the value of a cell or a range of cells in DHTMLX Spreadsheet with the setFormat() method.
---

# setFormat()

### Description

@short: Sets a specified format to the value of a cell

### Usage

~~~jsx
setFormat(cell: string, format: string | array): void;
~~~

### Parameters

- `cell` -  (required) the id(s) of a cell(s) or a range of cells
- `format` - (required) the name(s) of the number format to apply to the cell value

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// applies the currency format to the cell A1
spreadsheet.setFormat("A1","currency");
~~~

:::info
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

where `sheet1` is the name of the tab.

If the name of the tab isn't specified, the method sets the format to the value of a cell of the active tab.
:::

**Related article:** [Number formatting](number_formatting.md)
