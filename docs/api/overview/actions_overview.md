---
sidebar_label: Spreadsheet actions
title: Actions Overview
description: You can have an Actions overview of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Actions overview

This section is dedicated to a new conception of interaction with Spreadsheet events.

Starting from v4.3, DHTMLX Spreadsheet includes a pair of the [`beforeAction`](../../spreadsheet_beforeaction_event/)/[`afterAction`](../../spreadsheet_afteraction_event/) events that are intended to make your code simple and concise. They will fire right before an action is executed and indicate which exactly action has been performed.

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    // more actions
});

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config)
    },
    // more actions
});
~~~

[The full list of the available actions is given below.](#list-of-actions)

>It means, that you don't have to constantly add sets of paired [**before-** and **after-**](../events_overview/) events anymore to track and handle the actions which you execute when changing something in the spreadsheet. 

>But if needed you can use an **old approach** because all the existing events will continue work as before:
~~~jsx
spreadsheet.events.on("afterColumnAdd", function(cell){
    console.log("A new column is added", cell);
});
~~~
~~~jsx
spreadsheet.events.on("beforeColumnAdd", function(cell){
    console.log("A new column will be added", cell);
    return true;
});
~~~




## List of actions

| Action               | Description                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addColumn**        | The action is executed when adding a new column                                                                                                                                                         |
| **addRow**           | The action is executed when adding a new row                                                                                                                                                            |
| **addSheet**         | The action is executed when adding a new sheet                                                                                                                                                          |
| **clear**            | The action is executed when clearing the spreadsheet via the <b>clear()</b> method                                                                                                                      |
| **clearSheet**       | The action is executed when clearing a sheet via the <b>clearSheet()</b> method                                                                                                                         |
| **deleteColumn**     | The action is executed when removing a column                                                                                                                                                           |
| **deleteRow**        | The action is executed when removing a row                                                                                                                                                              |
| **deleteSheet**      | The action is executed when removing a sheet                                                                                                                                                            |
| **filter**           | The action is executed when filtering data in a sheet                                                                                                                                                   |
| **fitColumn**        | The action is executed when auto-fitting the width of the column                                                                                                                                        |
| **groupAction**      | The action is executed when selecting a range of cells and applying to them some actions (for instance, change the style or format of cells, lock/unlock the cells, clear cells' value or styles, etc.) |
| **insertLink**       | The action is executed when inserting a hyperlink in a cell                                                                                                                                             |
| **lockCell**         | The action is executed when locking/unlocking a cell                                                                                                                                                    |
| **merge**            | The action is executed when merging a range of cells                                                                                                                                                    |
| **removeCellStyles** | The action is executed when clearing styles of a cell                                                                                                                                                   |
| **renameSheet**      | The action is executed when renaming a sheet                                                                                                                                                            |
| **resizeCol**        | The action is executed when resizing a column                                                                                                                                                           |
| **resizeRow**        | The action is executed when resizing a row                                                                                                                                                              |
| **setCellFormat**    | The action is executed when changing the format of a cell                                                                                                                                               |
| **setCellValue**     | The action is executed when changing or removing the value of a cell                                                                                                                                    |
| **setValidation**    | The action is executed when setting data validation for a cell                                                                                                                                          |
| **sortCells**        | The action is executed when sorting data in spreadsheet                                                                                                                                                 |
| **setCellStyle**     | The action is executed when changing the style of a cell                                                                                                                                                |
| **toggleVisibility** | The action is executed when hiding/showing columns/rows                                                                                                                                                 |
| **toggleFreeze**     | The action is executed when freezing/unfreezing columns/rows                                                                                                                                            |
| **unmerge**          | The action is executed when splitting cells                                                                                                                                                             |

**Change log:**

- The **toggleFreeze** and **toggleVisibility** actions were added in v5.2
- The **merge**, **unmerge**, **filter**, **fitColumn**, **insertLink** actions were added in v5.0

**Related sample:** [Spreadsheet. Actions](https://snippet.dhtmlx.com/efcuxlkt)