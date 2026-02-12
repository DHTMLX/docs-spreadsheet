---
sidebar_label: Work with cells
title: Work with cells
description: You can learn about working with cells in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with cells

## Setting cell value

### Set values

To set value for a cell(s) via the API, make use of the [setValue()](../api/spreadsheet_setvalue_method) method. Pass the following parameters to it:

- **cells** - (*string*) the id(s) of a cell(s) or a range of cells
- **value** - (*string/number/array*) the value to be set for a cell/cells

~~~jsx
// setting value for one cell
spreadsheet.setValue("A1",5);
// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);
// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);
// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

:::note
Please note that the method allows setting the same/repeated value(s) for the specified cells. In case you want to add different values into spreadsheet cells, you'd better use the [`parse()`](../api/spreadsheet_parse_method) method.
:::


### Get values

It is also possible to return the value(s) set in a cell(s) by passing the *id(s) of the necessary cell(s) or a range of cells* to the [getValue()](../api/spreadsheet_getvalue_method) method.

The method will return the value(s) as a string,number or array:

~~~jsx
// returning the value of one cell
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// returning the values of the range of cells
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// returning the values of different cells
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## Validating cells

Starting with v4.3, you can apply data validation to cells via adding drop-down lists of options into the cells. To do that, use the [setValidation()](../api/spreadsheet_setvalidation_method) method:

~~~jsx
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

The drop-down list will limit the choice of the end user. It will show the *Invalid value* message when the user completes a cell with an unexpected value.

:::info
The [`setValidation()`](../api/spreadsheet_setvalidation_method) method can also remove validation from the specified cells. [Check the details](../api/spreadsheet_setvalidation_method/#details).
:::

## Inserting a hyperlink into a cell

To insert a hyperlink in a cell, use the [insertLink()](../api/spreadsheet_insertlink_method) method. The method also allows adding a text that will be displayed with the hyperlink:

~~~jsx
// insert a link in "A2" cell
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

If you need to remove the link from a cell, pass to the method only ID of the cell:

~~~jsx
// remove a link from "A2" cell
spreadsheet.insertLink("A2");
~~~

## Styling cells

### Set styles

You can apply certain styling to a cell or a range of cells via the [setStyle()](../api/spreadsheet_setstyle_method) method. It takes two parameters:

- **cells** - (*string*) the id(s) of a cell(s) or a range of cells
- **styles** - (*object/array*) styles that should be applied to cells

~~~jsx
// setting style for one cell
spreadsheet.setStyle("A1", {background: "red"});
// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1", {color: "blue"});
// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

:::note 
The method allows setting the same style for the specified cells. In case you want to apply different styles to spreadsheet cells, you'd better use the [`parse()`](../api/spreadsheet_parse_method) method.
:::

### Get styles

To get the styles applied to a cell(s), use the [getStyle()](../api/spreadsheet_getstyle_method) method. Pass the *id(s) of a cell(s) or a range of cells* to it:

~~~jsx
// getting style of one cell
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// getting styles of a range of cells
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details
 
// getting styles of different cells
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

For multiple cells the method returns an array of objects with styles applied to a cell:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

## Editing a cell

### Enable cell editor

You can add an input into a cell by calling the [startEdit()](../api/spreadsheet_startedit_method) method:

~~~jsx
spreadsheet.startEdit();
~~~

The method may take two optional parameters:

- **cell** - (*string*) optional, the id of a cell
- **value** - (*string*) optional, the cell value

If the id of a cell isn't passed, input will be added into the currently selected cell.

### Disable cell editor

To finish editing of a cell, use the [endEdit()](../api/spreadsheet_endedit_method) method that will close the editor while saving the entered value.

~~~jsx
spreadsheet.endEdit();
~~~

## Locking cells

### Lock cells

You can lock a cell or several cells programmatically to make them read-only for users. Use the [lock()](../api/spreadsheet_lock_method) method for this purpose. The method takes as a parameter the *id(s) of the cell(s)* or a *range of cells* to lock.

~~~jsx
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**Related sample**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)

### Unlock cells

To unlock the locked cell(s), use the [unlock()](../api/spreadsheet_unlock_method) method. Pass the *id(s) of the cell(s)* or a *range that contains locked cells* as a parameter:

~~~jsx
// unlocks a cell
spreadsheet.unlock("A1");
 
// unlocks a range of cells
spreadsheet.unlock("A1:C1");
 
// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### Check whether a cell is locked

To check whether a cell or several cells are locked, use the [isLocked()](../api/spreadsheet_islocked_method) method and pass the *id(s) of the cell(s)* or a *range of cells* to it:

~~~jsx
// checks whether a cell is locked
var cellLocked = spreadsheet.isLocked("A1"); 

// checks whether several cells are locked
var rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

The method will return *true* or *false* depending on the state of the cell. If several cells are checked at once, the method will return *true*, if there is at least one locked cell among the specified cells.

## Merging cells

### Merge cells

You can merge two or more cells into one by passing a range of cells you want to merge to the [mergeCells()](../api/spreadsheet_mergecells_method) method:

~~~jsx
//merge cells A6, A7, and A8
spreadsheet.mergeCells("A6:A8");

//merge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2");
~~~

### Split cells

You may also split the merged cells via the [mergeCells()](../api/spreadsheet_mergecells_method) method. In addition to the range of cells, pass `true` as a value of the second parameter which will define that the specified cells must be unmerged:

~~~jsx
//unmerge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2", true);
~~~

## Selecting cells

### Select cells

Spreadsheet provides a handy way of setting selection for cells via the API of the *Selection* object.

You can select cell(s) by passing its/their id(s) to the [setSelectedCell()](../api/selection_setselectedcell_method) method:

~~~jsx
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

It is also possible to get the id(s) of the selected cell(s) via the [getSelectedCell()](../api/selection_getselectedcell_method) method:

~~~jsx
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

### Unselect cells

To remove selection from cell(s), pass its/their id(s) to the [removeSelectedCell()](../api/selection_removeselectedcell_method) method:

~~~jsx
// sets selection
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// removes selection
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**Related sample:** [Spreadsheet. Remove selection](https://snippet.dhtmlx.com/u4j76cuh)

## Setting focus on a cell

The *Selection* object allows setting focus on a desired spreadsheet cell, as well as getting the id of the cell in focus. Use the corresponding methods for this purpose:

- [setFocusedCell()](../api/selection_setfocusedcell_method)

~~~jsx
// pass the id of the cell to set focus on
spreadsheet.selection.setFocusedCell("D4");
~~~

- [getFocusedCell()](../api/selection_getfocusedcell_method)

~~~jsx
// getting the focused cell 
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~