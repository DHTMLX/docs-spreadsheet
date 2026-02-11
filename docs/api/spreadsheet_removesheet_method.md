---
sidebar_label: removeSheet()
title: removeSheet method
description: You can learn about the removeSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# removeSheet()

### Description

@short: Removes a sheet from the spreadsheet by its id

:::info
To apply this method, you need to enable the [multiSheets](/api/spreadsheet_multisheets_config) configuration option.

Also note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.
:::

### Usage

~~~jsx
removeSheet(id: string): void;
~~~

### Parameters

- `id` - (required) the id of a sheet

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// removes a sheet from the spreadsheet by the specified id
spreadsheet.removeSheet("u1614669331209");
~~~

**Change log:** Added in v4.1
