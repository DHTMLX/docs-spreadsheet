---
sidebar_label: Spreadsheet actions
title: Actions Overview
description: You can have an Actions overview of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Actions overview

From v4.3, you don't have to constantly add a set of paired **before-** and **after-** events to track and handle the actions which you execute when changing something in the spreadsheet. 

Now DHTMLX Spreadsheet includes a pair of the [beforeAction](api/spreadsheet_beforeaction_event.md)/[afterAction](api/spreadsheet_afteraction_event.md) events that are intended to make your code simple and concise. They will fire right before an action is executed and indicate which exactly action was performed.

The full list of available actions is given below.

| Action             | Description                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addColumn**       | The action is executed when you add a new column                                                                                                                                                      |
| **addRow**          | The action is executed when you add a new row                                                                                                                                                         |
| **addSheet**         | The action is executed when you add a new sheet                                                                                                                                                       |
| **clear**            | The action is executed when you clear the spreadsheet via the <b>clear()</b> method                                                                                                       |
| **clearSheet**      | The action is executed when you clear a sheet via the <b>clearSheet()</b> method                                                                                                          |
| **deleteColumn**     | The action is executed when you remove a column                                                                                                                                                       |
| **deleteRow**        | The action is executed when you remove a row                                                                                                                                                          |
| **deleteSheet**      | The action is executed when you remove a sheet                                                                                                                                                        |
| **groupAction**      | The action is executed when you select a range of cells and apply to them some actions (for instance, change the style or format of cells, lock/unlock the cells, clear cells' value or styles, etc.) |
| **lockCell**         | The action is executed when you lock/unlock a cell                                                                                                                                                    |
| **removeCellStyles** | The action is executed when you clear styles of a cell                                                                                                                                                |
| **renameSheet**      | The action is executed when you rename a sheet                                                                                                                                                        |
| **resizeCol**        | The action is executed when you resize a column                                                                                                                                                       |
| **resizeRow**        | The action is executed when you resize a row                                                                                                                                                          |
| **setCellFormat**    | The action is executed when you change the format of a cell                                                                                                                                           |
| **setCellValue**     | The action is executed when you change the value of a cell                                                                                                                                            |
| **setValidation**    | The action is executed when you set data validation for a cell                                                                                                                                        |
| **sortCells**        | The action is executed when you sort data in spreadsheet                                                                                                                                              |
| **setCellStyle**     | The action is executed when you change the style of a cell                                                                                                                                            |