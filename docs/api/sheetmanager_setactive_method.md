---
sidebar_label: setActive()
title: setActive method
description: You can learn about the setActive method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setActive()

### Description

@short: Switches the active (visible) sheet to the one specified by its identifier

The spreadsheet UI will re-render to display the target sheet's contents.

### Usage

~~~jsx
setActive: (id: Id) => void;
~~~

### Parameters

- `id` - (*string | number*) the unique identifier of the sheet to activate.

### Example

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Switch to the second sheet
spreadsheet.sheets.setActive("sheet_2");

// Verify the switch
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Change log:** Added in v6.0

**Related articles:** [Working with sheets](working_with_sheets.md)
