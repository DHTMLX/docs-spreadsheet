---
sidebar_label: endEdit()
title: endEdit method
description: You can learn about the endEdit method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# endEdit()

### Description

@short: Finishes editing in the selected cell, closes editor and saves the entered value

### Usage

~~~jsx
endEdit(): void;
~~~

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// finishes editing in the selected cell
spreadsheet.endEdit();
~~~

**Related articles:** [Work with Spreadsheet](editing_cells.md#editing-a-cell)
