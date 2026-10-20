---
sidebar_label: announce()
title: announce method
description: You can learn about the announce method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# announce()

### Description

@short: Sends a status message to screen readers

### Usage

~~~jsx
announce(message: string): void;
~~~

### Parameters

- `message` - (required) the text to announce. An empty string clears the message

### Example

In the example below, a custom menu command counts the empty cells in the selected range and announces the result:

~~~jsx {17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.menu.data.add({
    id: "count-empty",
    value: "Count empty cells"
});

spreadsheet.menu.events.on("click", function (id) {
    if (id === "count-empty") {
        let count = 0;
        spreadsheet.eachCell(function (cell, value) {
            if (value === "" || value === undefined || value === null) count++;
        }, spreadsheet.selection.getSelectedCell());
        spreadsheet.announce(count + " empty cells in the selection");
    }
});
~~~

### Details

The method puts the message into a live region with `role="status"` and `aria-live="polite"`, which is placed next to the grid and hidden visually. A screen reader reads the message after it finishes the current speech, and the keyboard focus stays where it is.

The Spreadsheet uses the same live region for its own announcements, such as the refused edits, the search results and the progress of import and export. A message that repeats the current one is announced again.

The method works in the [read-only mode](api/spreadsheet_readonly_config.md) and while the [selection](api/spreadsheet_selection_config.md) is turned off.

**Change log:** Added in v6.0.4

**Related article:** [Customization](customization.md#menu)
