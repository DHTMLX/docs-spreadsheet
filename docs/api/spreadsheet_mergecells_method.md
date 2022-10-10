---
sidebar_label: mergeCells()
title: mergeCells method
description: You can learn about the mergeCells method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# mergeCells()

### Description

@short: merges a range of cells into one or makes merged cells unmerged

### Usage

~~~js
mergeCells( 
    cell: string,
    remove?: boolean
);
~~~

### Parameters

- `cell` - (required) a range of cells (for instance, "A1:A5")
- `remove` - (optional) defines the action to be done over the cells:
    - `false` - to merge cells (by default)
    - `true` - to unmerge cells

### Example

~~~jsx {5,7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
//makes the cells merged
spreadsheet.mergeCells("A2:A5");
// makes the cells unmerged
spreadsheet.mergeCells("A2:A3", true);
~~~

**Changelog:** Added in v5.0

