---
sidebar_label: Editing cells
title: Editing cells
description: You can learn about working with cells in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Editing cells

## Setting cell value

### Set values

To set value for a cell(s) via the API, make use of the [](api/spreadsheet_setvalue_method.md) method. Pass the following parameters to it:

- **cells** - (*string*) the id(s) of a cell(s) or a range of cells
- **value** - (*string/number/array*) the value to be set for a cell/cells

~~~js
// setting value for one cell
spreadsheet.setValue("A1",5);
// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);
// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);
// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

{{note Please note that the method allows setting the same/repeated value(s) for the specified cells. In case you want to add different values into spreadsheet cells, you'd better use the [](api/spreadsheet_parse_method.md) method.}}

### Get values

It is also possible to return the value(s) set in a cell(s) by passing the *id(s) of the necessary cell(s) or a range of cells* to the [](api/spreadsheet_getvalue_method.md) method.

The method will return the value(s) as a string,number or array:

~~~js
// returning the value of one cell
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// returning the values of the range of cells
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// returning the values of different cells
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## Validating cells

Starting with v4.3, you can apply data validation to cells via adding drop-down lists of options into the cells. To do that, use the [](api/spreadsheet_setvalidation_method.md) method:

~~~js
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

The drop-down list will limit the choice of the end user. It will show the *Invalid value* message when the user completes a cell with an unexpected value.

:::info
The [](api/spreadsheet_setvalidation_method.md) method can also remove validation from the specified cells. [Check the details](../api/spreadsheet_setvalidation_method/#details).
:::

## Inserting a hyperlink into a cell

To insert a hyperlink in a cell, use the [insertLink()](api/spreadsheet_insertlink_method.md) method. The method also allows adding a text that will be displayed with the hyperlink:

~~~js
// insert a link in "A2" cell
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

If you need to remove the link from a cell, pass to the method only ID of the cell:

~~~js
// remove a link from "A2" cell
spreadsheet.insertLink("A2");
~~~

## Editing a cell

### Enable cell editor

You can add an input into a cell by calling the [](api/spreadsheet_startedit_method.md) method:

~~~js
spreadsheet.startEdit();
~~~

The method may take two optional parameters:

- **cell** - (*string*) optional, the id of a cell
- **value** - (*string*) optional, the cell value

If the id of a cell isn't passed, input will be added into the currently selected cell.

### Disable cell editor

To finish editing of a cell, use the [](api/spreadsheet_endedit_method.md) method that will close the editor while saving the entered value.

~~~js
spreadsheet.endEdit();
~~~

## Locking cells

### Lock cells

You can lock a cell or several cells programmatically to make them read-only for users. Use the [](api/spreadsheet_lock_method.md) method for this purpose. The method takes as a parameter the id of a cell(s) or a range of cells to lock.

~~~js
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**Related sample**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)

### Unlock cells

To unlock the locked cell(s), use the [](api/spreadsheet_unlock_method.md) method. Pass the id(s) of the cell(s) or a range that contains locked cells as a parameter:

~~~js
// unlocks a cell
spreadsheet.unlock("A1");
 
// unlocks a range of cells
spreadsheet.unlock("A1:C1");
 
// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### Check whether a cell is locked

To check whether a cell or several cells are locked, use the [](api/spreadsheet_islocked_method.md) method and pass the *id of a cell(s)* or a *range of cells* to it:

~~~js
// checks whether a cell is locked
var cellLocked = spreadsheet.isLocked("A1"); 

// checks whether several cells are locked
var rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

The method will return *true* or *false* depending on the state of the cell. If several cells are checked at once, the method will return *true*, if there is at least one locked cell among the specified cells.