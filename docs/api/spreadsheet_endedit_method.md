---
sidebar_label: endEdit()
title: endEdit method
description: Finish editing the selected cell in DHTMLX Spreadsheet with the endEdit() method, which closes the editor and saves the entered value.
---

# endEdit()

### Description

@short: Finishes editing in the selected cell, closes the editor, and saves the entered value

### Usage

~~~jsx
endEdit(): void;
~~~

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// finishes editing in the selected cell
spreadsheet.endEdit();
~~~

**Related article:** [Work with Spreadsheet](working_with_cells.md#editing-a-cell)
