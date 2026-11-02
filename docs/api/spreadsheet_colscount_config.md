---
sidebar_label: colsCount
title: colsCount config
description: Set the number of columns that DHTMLX Spreadsheet shows on initialization with the colsCount property.
---

# colsCount

### Description

@short: Optional. Sets the number of columns in a spreadsheet on initialization

### Usage

~~~jsx
colsCount?: number;
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    colsCount: 10,
    // other config parameters
});
~~~

**Related article:** [Configuration](configuration.md#number-of-rows-and-columns)

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
