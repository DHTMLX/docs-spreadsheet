---
sidebar_label: colsCount
title: colsCount config
description: You can learn about the colsCount config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# colsCount

### Description

@short: sets the number of columns a spreadsheet will have on initialization

### Usage

~~~jsx
colsCount?: number
~~~

### Parameters

- `colsCount` - (optional) the number of columns when initializing

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
	colsCount: 10,
    // other config parameters
});
~~~

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)

**Related articles:** [Configuration](configuration.md#number-of-rows-and-columns)
