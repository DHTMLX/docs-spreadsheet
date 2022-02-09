---
sidebar_label: setActiveSheet()
title: setActiveSheet method
description: You can learn about the setActiveSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setActiveSheet()

### Description

@short: Sets the active sheet by its id

### Usage

~~~jsx
setActiveSheet(id: string): void;
~~~

### Parameters

- `id` - (required) the id of a sheet

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// sets the active sheet by the specified id
spreadsheet.setActiveSheet("u1636003130922");
~~~

**Change log:** Added in v4.2 

**Related articles:** [Setting active sheet](working_with_sheets.md/#setting-active-sheet)

**Related sample:** [Spreadsheet. Set active sheet](https://snippet.dhtmlx.com/iowl449t)
