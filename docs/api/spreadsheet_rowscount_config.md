---
sidebar_label: rowsCount
title: rowsCount config
description: Set the number of rows that DHTMLX Spreadsheet shows on initialization with the rowsCount property.
---

# rowsCount

### Description

@short: Optional. Sets the number of rows in a spreadsheet on initialization

### Usage

~~~jsx
rowsCount?: number;
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Related article:** [Configuration](configuration.md#number-of-rows-and-columns)

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
