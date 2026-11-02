---
sidebar_label: setValue()
title: setValue method
description: Set a value for a cell, several cells or a range of cells in DHTMLX Spreadsheet with the setValue() method, passing a single value or an array of values repeated across the cells.
---

# setValue()

### Description

@short: Sets a value for a cell

:::info
The method sets the same (repeated) value(s) for the specified cells. If you want to add different values to spreadsheet cells, use the [](api/spreadsheet_parse_method.md) method.
:::

### Usage

~~~jsx
setValue(cell: string, value: string | number | array): void;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells
- `value` - (required) the value(s) to set for cells

### Example

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// setting value for one cell
spreadsheet.setValue("A1",5);

// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);

// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);

// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

**Related sample:** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

:::info
Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~jsx
spreadsheet.setValue("sheet1!A1",5);
~~~

where `sheet1` is the name of the tab.

If the name of the tab isn't specified, the method sets the value(s) for the cell(s) of the active tab.
:::