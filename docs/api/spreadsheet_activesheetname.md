---
sidebar_label: activeSheetName
title: activeSheetName property
description: You can learn about the activeSheetName property in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# activeSheetName

### Description

@short: A read-only property that returns the name of the currently active sheet

### Usage

~~~jsx
activeSheetName: string;
~~~

### Details

The property returns the display name of the currently active (visible) sheet. If there is
no active sheet, an empty string is returned. The property is read-only; to switch the active
sheet, use the [](api/sheetmanager_setactive_method.md) method.

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// gets the name of the currently active sheet
const name = spreadsheet.activeSheetName; // -> "sheet1"
~~~

**Related articles:** [Working with sheets](working_with_sheets.md)
