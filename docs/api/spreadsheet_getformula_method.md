---
sidebar_label: getFormula()
title: getFormula method
description: You can learn about the getFormula method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFormula()

### Description

@short: Returns the formula of a cell

### Usage

~~~jsx 
getFormula(cell: string): string | array;
~~~

### Parameters

- `cell` - (required) the id of a cell

### Returns

The method returns a formula of the cell

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// returns "ABS(C2)"
const formula = spreadsheet.getFormula("B2");
~~~

:::info
The reference to a cell can be specified in the following format:

~~~js
// returns "ABS(C2)"
const formula = spreadsheet.getFormula("sheet1!B2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the formula of the cell from the active tab.
:::

**Change log:** Added in v4.1
