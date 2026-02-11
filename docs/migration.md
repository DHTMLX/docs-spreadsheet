---
sidebar_label: Migration to newer versions
title: Migration
description: You can learn about migration in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Migration to newer versions

## 5.1 -> 5.2

### Freezing/unfreezing functionality

In v5.2 the way of freezing/unfreezing columns and rows has been modified:

- the `leftSplit` and `topSplit` configuration properties that have been used for fixing columns and rows are deprecated

~~~jsx title="Before v5.2"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // the number of row to "freeze"
    leftSplit: 1 // the number of columns to "freeze"
});
~~~

- new API methods are introduced: [`freezeCols()`](/api/spreadsheet_freezecols_method), [`unfreezeCols()`](/api/spreadsheet_unfreezecols_method), [`freezeRows()`](/api/spreadsheet_freezerows_method), [`unfreezeRows()`](/api/spreadsheet_unfreezerows_method) 

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

- new action is added: [`toggleFreeze`](/api/overview/actions_overview/#list-of-actions) 

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

- new `freeze` property for the *sheets* object of the [`parse()`](/api/spreadsheet_parse_method) method is added. It allows fixing rows and columns for particular sheets in the dataset, while parsing data into Spreadsheet: 

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

In v5.0, the *"help"* option of the [toolbarBlocks](/api/spreadsheet_toolbarblocks_config) property is renamed to *"helpers"*. Besides, the default set of options is extended by the new *"actions"* option.

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

Version 4.3 brings a new conception of tracking and handling the actions which are performed when you change something in the spreadsheet. 

The new [beforeAction](/api/spreadsheet_beforeaction_event) and [afterAction](/api/spreadsheet_afteraction_event) events will fire right before / after an action is executed and indicate which action has been performed. Thus, the new approach allows you to add the necessary logic for several actions at once via using only these two events. For instance: 

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

This way will reduce the size of your code because you won't need to add sets of paired [**before-** and **after-**](/api/overview/events_overview) events for each separate action. 

Still, the old approach continues working as before. For more details, check [Spreadsheet actions](/api/overview/actions_overview).

:::info
At the moment, there is a set of events which must be used in an old way as they can't be replaced with any actions: *beforeEditEnd, afterEditEnd, beforeEditStart,  afterEditStart, beforeFocusSet, afterFocusSet, beforeSheetChange, afterSheetChange, groupFill*.
:::

## 4.1 -> 4.2

In v4.2, the [Align](customization.md/#default-controls) block of the Spreadsheet toolbar is divided into two sub-blocks: Horizontal align and Vertical align. Thus, the list of ids of the default controls of the Align block is changed and extended:

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

Note, that the [locale options](localization.md/) for the **Align** block have been also updated:

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

This list of changes will help you to migrate from the [previous version 2.1](https://docs.dhtmlx.com/spreadsheet__index.html) where DHTMLX Spreadsheet was PHP-based to the totally renewed version 3.0 in which the component is totally built on JavaScript. Check the list below to explore all the changes.

{{note The [API of version 2.1](https://docs.dhtmlx.com/spreadsheet__reference.html) is still available, but it is incompatible with the [API of version 3.0](/api/api_overview).}}

### Changed API

- getStyle -> [spreadsheet.getStyle](/api/spreadsheet_getstyle_method) - returns styles applied to a cell(s)
- getValue -> [spreadsheet.getValue](/api/spreadsheet_getvalue_method) - returns an object with the value(s) of a cell(s)
- setStyle -> [spreadsheet.setStyle](/api/spreadsheet_setstyle_method) - sets style for a cell or a range of cells
- setValue -> [spreadsheet.setValue](/api/spreadsheet_setvalue_method) - sets value for a cell or a range of cells
- lock -> [spreadsheet.lock](/api/spreadsheet_lock_method) - locks a cell or a range of cells
- unlock -> [spreadsheet.unlock](/api/spreadsheet_unlock_method) - unlocks a locked cell or a range of cells

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
