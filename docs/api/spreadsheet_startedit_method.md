---
sidebar_label: startEdit()
title: JavaScript Spreadsheet - startEdit Method
description: changetext
---

# startEdit()

@short: starts editing in the selected cell

@signature: {`startEdit(cell?: string, initialValue?: string);`}

@params:
- `cell: string` - optional, the id of a cell
- `initialValue: string` - optional, the cell value

@example:
spreadsheet.startEdit();

@descr:

If the id of a cell isn't passed, editing will start in the currently selected cell.

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#editing-cell)
