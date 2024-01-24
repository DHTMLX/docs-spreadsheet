---
sidebar_label: getStyle()
title: getStyle method
description: You can learn about the getStyle method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getStyle()

### Description

@short: Returns styles applied to a cell(s)

### Usage

~~~jsx
getStyle(cell: string): any;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Returns

The method returns the styles set for the cells

### Example

~~~jsx {5,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// getting style of one cell
const style = spreadsheet.getStyle("A1");
// -> {background: "#8DE9E1", color: "#03A9F4"}

// getting styles of a range of cells
const rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details

// getting styles of different cells
const values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

:::info
For multiple cells the method returns an array of objects with styles applied to a cell:

~~~js
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~
:::

:::info
Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
const style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the style(s) of the cell(s) from the active tab.
:::