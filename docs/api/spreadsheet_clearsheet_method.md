---
sidebar_label: clearSheet()
title: clearSheet method
description: You can learn about the clearSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# clearSheet()

### Description

@short: Clears a sheet

### Usage

~~~jsx
clearSheet(id?: string): void;
~~~

### Parameters

- `id` - (optional) the id of a sheet to be cleared. If not specified, the method clears the currently active sheet

### Example

~~~jsx {5,7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// clears the sheet by its id
spreadsheet.clearSheet("u1636003130922");
// clears the currently active sheet
spreadsheet.clearSheet();
~~~

**Changelog:** Added in v4.2 

**Related articles:** [Clearing sheets](/working_with_sheets/#clearing-sheets)

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

