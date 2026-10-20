---
sidebar_label: Migration to newer versions
title: Migration
description: You can learn about migration in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Migration to newer versions

## 6.0.3 -> 6.0.4

Version 6.0.4 changes the result of several existing keys and API calls. No documented method, property, event or configuration option is removed or renamed.

### Arrow keys stop at the edges of the sheet

In 6.0.3, an arrow key pressed on the first or last visible row or column moved the active cell to the opposite edge of the sheet. Since 6.0.4, the active cell stays at the edge. If a range is selected, an arrow key at the edge collapses the range to the active cell.

### deleteRow() and deleteColumn() delete the whole merged cell

In 6.0.3, [`deleteRow()`](api/spreadsheet_deleterow_method.md) and [`deleteColumn()`](api/spreadsheet_deletecolumn_method.md) deleted only the row or column of the passed cell, even if the cell was inside a merged cell. Since 6.0.4, they delete every row or column that the merged cell spans:

~~~jsx
spreadsheet.mergeCells("B2:B4");

spreadsheet.deleteRow("B3");
// 6.0.3: row 3 is deleted
// 6.0.4: rows 2, 3 and 4 are deleted
~~~

The [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) handlers of the `deleteRow` and `deleteColumn` actions still receive the cell that was passed to the method, not the range that is deleted. The context menu shows the full range in the command name.

### Read-only mode keeps navigation and selection

In 6.0.3, a Spreadsheet with [`readonly: true`](api/spreadsheet_readonly_config.md) had no keyboard navigation, no mouse selection and no active cell. Since 6.0.4:

- the A1 cell is active after loading, and the cells can be navigated with the keyboard and selected with the mouse; the selection events fire on these actions;
- the cells can be copied and searched;
- editing keys, typing and paste are refused and announced to screen readers as "The sheet is read-only";
- the fill handle is hidden, and a double-click on a column border does not change the column width.

Custom `hotkeys` from the configuration are still not registered in read-only mode.

To keep the 6.0.3 behaviour, turn the selection off with the new `selection` option:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    readonly: true,
    selection: false,
});
~~~

The selection can also be turned off and on at runtime with `spreadsheet.selection.disable()` and `spreadsheet.selection.enable()`.

### The keyboard focus follows the active cell

Since 6.0.4, [`selection.setFocusedCell()`](api/selection_setfocusedcell_method.md) and any other change of the active cell (keyboard, undo, a sheet switch) move the keyboard focus to the cell after the redraw, if the focus is on the page body or inside the Spreadsheet. The focus is not moved when it is:

- in an element outside the Spreadsheet;
- on the toolbar, the menu or the sheet tabs reached with the keyboard;
- in an open cell editor.

~~~jsx
// the focus is on the page body, for example right after the page is loaded
spreadsheet.selection.setFocusedCell("D4");
// 6.0.3: the focus stays on the page body
// 6.0.4: the focus moves to the D4 cell
~~~

### Cell shortcuts do not act while the toolbar, the menu or the sheet tabs have focus

In 6.0.3, the arrow keys and typing acted on the cells while the toolbar had focus. Since 6.0.4, the toolbar, the menu and the sheet tabs use the arrow keys, `Home`, `End`, `Enter` and `Space` for their own controls, and the cell shortcuts (navigation, typing, `Delete`, `Enter`, `F2` and the like) work only while the focus is in the cells or in the formula bar.

The formatting, undo, search and link shortcuts (`Ctrl (Cmd) + B`, `Ctrl (Cmd) + Z`, `Ctrl (Cmd) + F`, `Ctrl (Cmd) + K` and the like) still work while the focus is on the toolbar. Custom `hotkeys` from the configuration are not filtered by the focus position.

## 5.2 -> 6.0

### Deprecated properties 

The following properties of `ISpreadsheetConfig` are deprecated and removed. Check the current usage below: 

- `dateFormat` configuration property. Set it in the [`localization`](api/spreadsheet_localization_config.md) configuration object as:
    - `{ localization: { dateFormat: "%d/%m/%Y" } }` 
- `timeFormat` configuration property. Set it in the [`localization`](api/spreadsheet_localization_config.md) configuration object as: 
    - `{ localization: { timeFormat: 12 } }` 

### Deprecated methods 

The following methods of the `ISpreadsheet` instance are deprecated and removed. 

Use the new [`sheets` module (Sheet Manager) API](api/overview/sheetmanager_overview.md) instead:

<div className="overflow-table">

| Deprecated method | Signature | New usage | New signature |
| --- | --- | --- | --- |
| `clearSheet(id?)` | `(id?: string) => void` | [`sheets.clear(id?)`](api/sheetmanager_clear_method.md) | `(id?: Id) => void` |
| `removeSheet(id)` | `(id: string) => void` | [`sheets.remove(id)`](api/sheetmanager_remove_method.md) | `(id: Id) => void` |
| `addSheet(name?)` | `(name?: string) => string` | [`sheets.add(name?)`](api/sheetmanager_add_method.md) | `(name?: string) => Id` |
| `getSheets()` | `() => ISheet[]` | [`sheets.getAll()`](api/sheetmanager_getall_method.md) | `() => ISheet[]` |
| `getActiveSheet()` | `() => ISheet` | [`sheets.getActive()`](api/sheetmanager_getactive_method.md) | `() => ISheet` |
| `setActiveSheet(id)` | `(id: Id) => void` | [`sheets.setActive(id)`](api/sheetmanager_setactive_method.md) | `(id: Id) => void` |

</div>

### Deprecated events  

The following events are deprecated and removed. Use the generic [`beforeAction`](api/spreadsheet_beforeaction_event.md) / [`afterAction`](api/spreadsheet_afteraction_event.md) events pair instead.

<div className="deprecated-events-table">

| Deprecated event | Callback signature | New usage |
| --- | --- | --- |
| `beforeValueChange` | `(cell: string, value: string) => void \| boolean` | `beforeAction` with action `"setCellValue"` |
| `afterValueChange` | `(cell: string, value: string) => void` | `afterAction` with action `"setCellValue"` |
| `beforeStyleChange` | `(cell: string, style: ...) => void \| boolean` | `beforeAction` with action `"setCellStyle"` |
| `afterStyleChange` | `(cell: string, style: ...) => void` | `afterAction` with action `"setCellStyle"` |
| `beforeFormatChange` | `(cell: string, format: string) => void \| boolean` | `beforeAction` with action `"setCellFormat"` |
| `afterFormatChange` | `(cell: string, format: string) => void` | `afterAction` with action `"setCellFormat"` |
| `beforeRowAdd` | `(cell: string) => void \| boolean` | `beforeAction` with action `"addRow"` |
| `afterRowAdd` | `(cell: string) => void` | `afterAction` with action `"addRow"` |
| `beforeRowDelete` | `(cell: string) => void \| boolean` | `beforeAction` with action `"deleteRow"` |
| `afterRowDelete` | `(cell: string) => void` | `afterAction` with action `"deleteRow"` |
| `beforeColumnAdd` | `(cell: string) => void \| boolean` | `beforeAction` with action `"addColumn"` |
| `afterColumnAdd` | `(cell: string) => void` | `afterAction` with action `"addColumn"` |
| `beforeColumnDelete` | `(cell: string) => void \| boolean` | `beforeAction` with action `"deleteColumn"` |
| `afterColumnDelete` | `(cell: string) => void` | `afterAction` with action `"deleteColumn"` |
| `beforeSheetAdd` | `(name: string) => void \| boolean` | `beforeAction` with action `"addSheet"` |
| `afterSheetAdd` | `(sheet: ISheet) => void` | `afterAction` with action `"addSheet"` |
| `beforeSheetRemove` | `(sheet: ISheet) => void \| boolean` | `beforeAction` with action `"deleteSheet"` |
| `afterSheetRemove` | `(sheet: ISheet) => void` | `afterAction` with action `"deleteSheet"` |
| `beforeSheetRename` | `(sheet: ISheet, value: string) => void \| boolean` | `beforeAction` with action `"renameSheet"` |
| `afterSheetRename` | `(sheet: ISheet) => void` | `afterAction` with action `"renameSheet"` |
| `beforeSheetClear` | `(sheet: ISheet) => void \| boolean` | `beforeAction` with action `"clearSheet"` |
| `afterSheetClear` | `() => void` | `afterAction` with action `"clearSheet"` |

</div>

## 5.1 -> 5.2

### Freezing/unfreezing functionality

In v5.2 the way of freezing/unfreezing columns and rows has been modified:

- the `leftSplit` and `topSplit` configuration properties that have been used for fixing columns and rows are deprecated and removed

~~~jsx title="Before v5.2"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // the number of row to "freeze"
    leftSplit: 1 // the number of columns to "freeze"
});
~~~

- new API methods are introduced: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md) 

~~~jsx title="From v5.2" 
// for rows
spreadsheet.freezeRows("B2"); // the rows up to the second row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the second row in "sheet2" will be fixed
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen

// for columns
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

- new action is added: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions) 

~~~jsx title="From v5.2"
// using the `toggleFreeze` action with the beforeAction/afterAction events
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});
~~~

- new `freeze` property for the *sheets* object of the [`parse()`](api/spreadsheet_parse_method.md) method is added. It allows fixing rows and columns for particular sheets in the dataset, while parsing data into Spreadsheet: 

~~~jsx {10-13} title="From v5.2"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // more "sheet_1" settings
        }, 
        // more sheets configuration objects
    ]
};

spreadsheet.parse(data);
~~~

## 4.3 -> 5.0

In v5.0, the `"help"` option of the [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) property is renamed to `"helpers"`. In addition, the default set of options now includes the new `"actions"` option.

~~~jsx title="Before v5.0" {8}
// default configuration 
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "help"
]
~~~

~~~jsx title="From v5.0" {8,9}
// default configuration
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "actions",
    "helpers"
]
~~~


## 4.2 -> 4.3 

:::info
Version 4.3 is the last version which provides IE support
:::

Version 4.3 introduces a new approach to tracking and handling the actions performed when you change something in the spreadsheet. 

The new [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) events fire right before/after an action is executed and indicate which action was performed. This approach lets you add the necessary logic for several actions at once using only these two events. For instance: 

~~~jsx
spreadsheet.events.on("BeforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return true;
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    ...
});

spreadsheet.events.on("AfterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config)
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
    },
    ...
});
~~~

This approach reduces the size of your code because you won't need to add sets of paired [**before-** and **after-**](api/overview/events_overview.md) events for each separate action. 

Still, the old approach continues working as before. For more details, check [Spreadsheet actions](api/overview/actions_overview.md).

:::info
At the moment, there is a set of events which must be used in an old way as they can't be replaced with any actions: *beforeEditEnd, afterEditEnd, beforeEditStart,  afterEditStart, beforeFocusSet, afterFocusSet, beforeSheetChange, afterSheetChange, groupFill*.
:::

## 4.1 -> 4.2

In v4.2, the [Align](customization.md#default-controls) block of the Spreadsheet toolbar is divided into two sub-blocks: Horizontal align and Vertical align. Thus, the list of ids of the default controls of the Align block is changed and extended:

`Before v4.2`:

The **Align** block:

- the *Align left* button (id: "align-left")
- the *Align center* button (id: "align-center")
- the *Align right* button (id: "align-right")

`From v4.2`:

The **Horizontal align** sub-block of the **Align** block:

- the *Left* button (id: "halign-left")
- the *Center* button (id: "halign-center")
- the *Right* button (id: "halign-right")
  
The **Vertical align** sub-block of the **Align** block:
    
- the *Top* button (id: "valign-top")
- the *Center* button (id: "valign-center")
- the *Bottom* button (id: "valign-bottom")

### Localization

Note, that the [locale options](localization.md) for the **Align** block have been also updated:

`Before v4.2`:

~~~jsx
const locale = {
    align: "Align",
    ...
}
~~~

`From v4.2`:

~~~jsx
const locale = {
    halign: "Horizontal align",
    valign: "Vertical align",
    ...
}
~~~

## 2.1 -> 3.0

This list of changes helps you migrate from version 2.1, where DHTMLX Spreadsheet was PHP-based, to the fully rebuilt version 3.0, which is built entirely in JavaScript. Check the list below to explore all the changes.

:::info
The **API of version 2.1** is still available, but it is incompatible with the [**API starting from version 3.0**](api/api_overview.md). If you require the documentation for version 2.1, please [contact us](https://dhtmlx.com/docs/contact.shtml), and we will send it to you.
:::

### Changed API

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle_method.md) - returns styles applied to a cell(s)
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue_method.md) - returns an object with the value(s) of a cell(s)
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle_method.md) - sets style for a cell or a range of cells
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue_method.md) - sets value for a cell or a range of cells
- lock -> [spreadsheet.lock](api/spreadsheet_lock_method.md) - locks a cell or a range of cells
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock_method.md) - unlocks a locked cell or a range of cells

### Removed API

#### Spreadsheet class

- getCell
- getCells
- isCell
- setSheetId

#### SpreadsheetCell

<table>
<tr>
    <td>calculate</td>
    <td>getCoords</td>
    <td>setBgColor</td>
</tr>
<tr>
    <td>exists</td>
    <td>getValidator</td>
    <td>setBold</td>
</tr>
<tr>
    <td>getAlign</td>
    <td>isBold</td>
    <td>setColor</td>
</tr>
<tr>
    <td>getBgColor</td>
    <td>isIncorrect</td>
    <td>setItalic</td>
</tr>
<tr>
    <td>getCalculatedValue</td>
    <td>isItalic</td>
    <td>setLocked</td>
</tr>
<tr>
    <td>getColIndex</td>
    <td>parseStyle</td>
    <td>setValidator</td>
</tr>
<tr>
    <td>getColName</td>
    <td>serializeStyle</td>
    <td></td>
</tr>
<tr>
    <td>getColor</td>
    <td>setAlign</td>
    <td></td>
</tr>
</table>
