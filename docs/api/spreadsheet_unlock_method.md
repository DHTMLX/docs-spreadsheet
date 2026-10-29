---
sidebar_label: unlock()
title: unlock method
description: Unlock a locked cell, several cells or a range of cells in DHTMLX Spreadsheet with the unlock() method, so that users can edit them again.
---

# unlock()

### Description

@short: Unlocks a locked cell(s)

### Usage

~~~jsx
unlock(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// unlocks a cell
spreadsheet.unlock("A1");

// unlocks a range of cells
spreadsheet.unlock("A1:C1");

// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

where `sheet1` is the name of the tab.

If the name of the tab isn't specified, the method unlocks the cell(s) of the active tab.
:::