---
sidebar_label: toolbarBlocks
title: toolbarBlocks config
description: Choose which blocks of buttons the DHTMLX Spreadsheet toolbar shows, such as undo, colors, font, align and format, with the toolbarBlocks property.
---

# toolbarBlocks

### Description

@short: Optional. Specifies blocks of buttons shown in the spreadsheet toolbar

### Usage

~~~jsx
toolbarBlocks?: array;
~~~

### Default config

~~~jsx
toolbarBlocks: ["undo", "colors", "font", "decoration", "align", "cell", "format", "actions"]
~~~

### Example

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // full toolbar
    toolbarBlocks: [
        "undo",
        "colors",
        "font",
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

Check how you can [customize the toolbar](customization.md#toolbar).

**Change log:**

- The `"font"` block was added in v6.0
- The `"cell"` block was added in v5.2
- The `"actions"` block was added in v5.0 

**Related articles:**
- [Configuration](configuration.md#toolbar)
- [Customization](customization.md)

**Related sample:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)