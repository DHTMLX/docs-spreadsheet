---
sidebar_label: getFormat()
title: getFormat method
description: You can learn about the getFormat method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFormat()

### Description

@short: Returns the number format applied to the value of a cell

### Usage

~~~jsx
getFormat(cell: string): string | array;
~~~

### Parameters

`cell` - (required) the id(s) of the cell(s) or a range of cells

### Returns

The method returns a format(s) applied to the value of the cell(s)

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// returns "currency"
const format = spreadsheet.getFormat("A1");
~~~

:::info
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~jsx
// returns "number"
const cellFormat = spreadsheet.getFormat("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the format applied to the value of a cell from the tab that is currently active.
:::

**Related articles:** [Number formatting](number_formatting.md)
