---
sidebar_label: lock()
title: lock method
description: You can learn about the lock method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# lock()

### Description

@short: Locks the specified cell

### Usage

~~~jsx
lock(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~js
spreadsheet.lock("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will lock the cell(s) of the active tab.
:::

**Related sample**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)