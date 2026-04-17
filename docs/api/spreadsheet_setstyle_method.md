---
sidebar_label: setStyle()
title: setStyle method
description: You can learn about the setStyle method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setStyle()

### Description

@short: Sets style to a cell(s)

:::info
The method allows setting the same style for the specified cells. In case you want to apply different cells to spreadsheet cells, you'd better use the [`parse()`](../../api/spreadsheet_parse_method/) method.
:::

### Usage

~~~jsx
setStyle(cell: string, styles: array | object): void;
~~~

### Parameters

- `cell` -  (required) the id(s) of a cell(s) or a range of cells
- `styles` - (required) styles that should be applied to cells. [Check the list of properties which you can use to style cells](../../api/spreadsheet_parse_method/#list-of-properties) 

### Example

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// setting style for one cell
spreadsheet.setStyle("A1", {background: "red"});

// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1", {color: "blue"});

// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1", {color:"blue"});

// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

**Related sample**: [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)

:::info
Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~jsx
spreadsheet.setStyle("sheet1!A2", {background: "red"}); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will apply the style to the cell(s) of the active tab.
:::