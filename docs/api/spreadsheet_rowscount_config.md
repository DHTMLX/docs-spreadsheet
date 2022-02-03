---
sidebar_label: rowsCount
title: rowsCount config
description: You can learn about the rowsCount config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# rowsCount

### Description

@short: sets the number of rows a spreadsheet will have on initialization

### Usage

~~~jsx
rowsCount?: number
~~~

### Parameters

- `rowsCount` - (optional) the number of rows when initializing spreadsheet 

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)

**Related articles:** [Configuration](configuration.md#number-of-rows-and-columns)
