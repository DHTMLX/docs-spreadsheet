---
sidebar_label: editLine
title: editLine config
description: You can learn about the editLine config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# editLine

### Description

@short: shows/hides the editing bar

### Usage

~~~jsx
editLine?: boolean
~~~

### Parameters

- `editLine` - (optional) shows/hides the editing bar

### Default config

~~~jsx
editLine: true
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
	editLine: true,
    // other config parameters
});
~~~

**Related sample:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)

**Related articles:** [Configuration](configuration.md#editing-bar)
