---
sidebar_label: toolbarBlocks
title: toolbarBlocks config
description: You can learn about the toolbarBlocks config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# toolbarBlocks

### Description

@short: Optional. Specifies blocks of buttons that will be shown in the toolbar of spreadsheet

### Usage

~~~jsx
toolbarBlocks?: array;
~~~

### Default config

~~~jsx
toolbarBlocks: ["undo", "colors", "decoration", "align", "cell", "format", "actions"]
~~~

### Example

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // full toolbar
    toolbarBlocks: [
        "undo",
        "colors",
        "decoration",
        "align",
        "cell",
        "format",
        "actions", 
        "lock",
        "clear",
        "columns",
        "rows",
        "file",
        "help"
    ]
});
~~~

### Details

You can specify your own structure of the toolbar by enumerating necessary elements in the `toolbarBlocks` array in the desired order, for example:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Check how you can [customize the toolbar](customization.md/#toolbar).

**Change log:**

- The *"cell"* block was added in v5.2
- The *"actions"* block was added in v5.0 

**Related articles:**
- [Configuration](configuration.md#toolbar)
- [Customization](customization.md)

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)