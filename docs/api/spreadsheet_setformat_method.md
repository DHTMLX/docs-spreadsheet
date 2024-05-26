---
sidebar_label: setFormat()
title: setFormat method
description: You can learn about the setformat method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
- `format` - (required) the name(s) of the number format to apply to cells value

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// applies the currency format to the cell A1
spreadsheet.setFormat("A1","currency");
~~~

:::info
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will set the format to the value of a cell of the active tab.
:::

**Related articles:** [Number formatting](number_formatting.md)
