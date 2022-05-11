---
sidebar_label: topSplit
title: topSplit config
description: You can learn about the topSplit config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# topSplit

### Description

@short: Optional. Sets the number of rows fixed to the top of the spreadsheet

### Usage

~~~jsx
topSplit?: number;
~~~

### Default config

~~~jsx
topSplit: 0
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    topSplit: 2,
    // other config parameters
});
~~~

**Change log:** Added in v4.3

**Related articles:** [Configuration](configuration.md#frozen-rows-and-columns)

**Related sample:** [Spreadsheet. Frozen rows and columns](https://snippet.dhtmlx.com/iazmc27w)
