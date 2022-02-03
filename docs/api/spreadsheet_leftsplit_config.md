---
sidebar_label: leftSplit
title: leftSplit config
description: You can learn about the leftSplit config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# leftSplit

### Description

@short: sets the number of columns fixed to the left side of the spreadsheet

### Usage

~~~jsx
leftSplit?: number
~~~

### Parameters

- `leftSplit` - (optional) the number of columns fixed to the left side of the spreadsheet

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  leftSplit:3,
  // other config parameters
});
~~~

**Changelog:** Added in v4.0

**Related sample:** [Spreadsheet. Frozen columns](https://snippet.dhtmlx.com/iazmc27w)

**Related articles:** [Configuration](configuration.md#frozen-columns)
