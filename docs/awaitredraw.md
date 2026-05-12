---
sidebar_label: AwaitRedraw helper
title: AwaitRedraw helper
description: You can explore the AwaitRedraw helper in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# AwaitRedraw helper

Some API methods of DHTMLX Spreadsheet take effect only after the component is rendered on the page. In some cases this can take a moment, so you need to wait until the browser completes rendering before running the next piece of code.

For such cases, you can use the **dhx.awaitRedraw** helper. It tracks the rendering cycle and runs your code as soon as Spreadsheet completes its rendering.

~~~js
dhx.awaitRedraw().then(() => {
    // your code here
});
~~~

## Usage examples

### Read a cell value after data loads

Use `awaitRedraw` to make sure the cell value is available before reading it:

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~

### Set focus after a sheet switch

Calling `setFocusedCell` right after a sheet switch has no visible effect because the new sheet hasn't finished rendering yet. Use `awaitRedraw` to set focus once it has:

~~~js
spreadsheet.events.on("afterSheetChange", (sheet) => {
    dhx.awaitRedraw().then(() => {
        console.log(sheet.name);
        spreadsheet.selection.setFocusedCell("A1");
    });
});
~~~
