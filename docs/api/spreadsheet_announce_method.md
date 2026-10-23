---
sidebar_label: announce()
title: announce method
description: Send a status message to screen reader users of DHTMLX Spreadsheet with the announce() method, for example, to report the result of a custom toolbar or menu command.
---

# announce()

### Description

@short: Announces a message to screen reader users

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

Use the method to tell screen reader users about the result of an action that has no visible element of its own, such as a custom toolbar or menu command.

The message goes to a visually hidden live region placed right after the grid element (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`). The screen reader reads it after finishing its current speech, and the keyboard focus doesn't move.

The Spreadsheet announces its own messages through the same region: the selected range, new formula errors and invalid values, refused edits, search results, the start and end of import and export, and new column widths and row heights (see the [list of status announcements](accessibility.md#status-announcements)). The region holds one message at a time, so a later message, your own or a built-in one, replaces the previous one.

If you pass the text that is currently in the region, the screen reader reads it again.

The method also works in the [read-only mode](api/spreadsheet_readonly_config.md) and while the [selection](api/spreadsheet_selection_config.md) is turned off. It does nothing before the Spreadsheet is attached to the page and after the `destructor()` method is called.

**Change log:** Added in v6.0.4

**Related articles:**
- [Status announcements](accessibility.md#status-announcements)
- [Announcing a custom command](accessibility.md#announcing-a-custom-command)
- [Customizing the menu](customization.md#menu)
