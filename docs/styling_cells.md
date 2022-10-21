---
sidebar_label: Styling cells
title: Styling cells
description: You can learn about styling cells in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Styling cells

## Setting styles

You can apply certain styling to a cell or a range of cells via the [](api/spreadsheet_setstyle_method.md) method. It takes two parameters:

- **cells** - (*string*) the id(s) of a cell(s) or a range of cells
- **style** - (*object/array*) styles that should be applied to cells

~~~js
// setting style for one cell
spreadsheet.setStyle("A1", {background: "red"});
// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1", {color: "blue"});
// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

{{note The method allows setting the same style for the specified cells. In case you want to apply different styles to spreadsheet cells, you'd better use the [](api/spreadsheet_parse_method.md) method.}}

## Getting styles

To get the styles applied to a cell(s), use the [](api/spreadsheet_getstyle_method.md) method. Pass the *id(s) of a cell(s) or a range of cells* to it:

~~~js
// getting style of one cell
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// getting styles of a range of cells
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details
 
// getting styles of different cells
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

For multiple cells the method returns an array of objects with styles applied to a cell:

~~~js
[
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
	{background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

