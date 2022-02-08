---
sidebar_label: addSheet()
title: addSheet method
description: You can learn about the addSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# addSheet()

### Description

@short: Adds a new sheet into the spreadsheet

:::info
To apply this method, you need to enable the [multisheets](api/spreadsheet_multisheets_config.md) configuration option.
:::

### Usage

~~~jsx
addSheet(name?: string): string;
~~~

### Parameters

- `name` - (optional) the name of the new sheet

### Returns

The method returns an id of the new sheet.

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// returns "u1614669331209"
spreadsheet.addSheet("New Sheet");
~~~

**Change log:** Added in v4.1
