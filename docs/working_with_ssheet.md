Work with SpreadSheet
=========================

While users interact with SpreadSheet via its intuitive interface, you can work with the component using [simple API](api/refs/spreadsheet.md).

Undo/redo actions
--------------

There is the api/spreadsheet_undo.md API method that allows reverting the latest action:

~~~js
spreadsheet.undo();
~~~

To reapply a reverted action once again use the api/spreadsheet_redo.md method:

~~~js
spreadsheet.redo();
~~~

Adding/removing rows and columns
------------------

### Columns

To add/delete a column, use the related API methods:

- api/spreadsheet_addcolumn.md
- api/spreadsheet_deletecolumn.md

Pass to the methods the id of the cell that contains the id of a column that should be added.

~~~js
// adds an empty "C" column 
spreadsheet.addColumn("C1");
// removes the "C" column
spreadsheet.deleteColumn("C1");
~~~

When a new column is added, neighboring columns are moved to the right.

### Rows

To add/delete a row, use the API methods below:

- api/spreadsheet_addrow.md
- api/spreadsheet_deleterow.md

Pass to the methods the id of the cell that contains the id of a row that should be added.

~~~js
// adds an empty second row
spreadsheet.addRow("A2");
// removes the second row
spreadsheet.deleteRow("A2");
~~~

When a new row is added, neighboring rows are moved one cell down.
 
Styling cells
-------------------------

###Set styles

You can apply certain styling to a cell or a range of cells via the api/spreadsheet_setstyle.md method. It takes two parameters:

- **cells**	- (*string*) the id(s) of a cell(s) or a range of cells
- **style**	- (*object/array*) styles that should be applied to cells

~~~js
// setting style for one cell
spreadsheet.setStyle("A1",{background:"red", border:"solid 1px yellow"});
// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1",{color:"blue"});
// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1",{color:"blue"});
// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1",[{color:"blue"},{color:"red"}]);
~~~

{{note The method allows setting the same style for the specified cells. In case you want to apply different cells to spreadsheet cells, you'd better use the api/spreadsheet_parse.md method.}}

###Get styles

To get the styles applied to a cell(s), use the api/spreadsheet_getstyle.md method. Pass the *id(s) of a cell(s) or a range of cells* to it:

~~~js
// getting style of one cell
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// getting styles of a range of cells
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details
 
// getting styles of different cells
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

For multiple cells the method returns an array of objects with styles applied to a cell:

~~~js
[
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
	{background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

Setting cell value
--------------------

###Set values

To set value for a cell(s) via the API, make use of the api/spreadsheet_setvalue.md method. Pass the following parameters to it:

- **cells**	- (*string*) the id(s) of a cell(s) or a range of cells
- **value**	- (*string/number/array*)	the value to be set for a cell/cells

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

{{note Please note that the method allows setting the same/repeated value(s) for the specified cells. In case you want to add different values into spreadsheet cells, you'd better use the api/spreadsheet_parse.md method.}}

###Get values

It is also possible to return the value(s) set in a cell(s) by passing the *id(s) of the necessary cell(s) or a range of cells* to the api/spreadsheet_getvalue.md method.

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

Locking cells
----------------

###Lock cells

You can lock a cell or several cells programmatically to make them read-only for users. Use the api/spreadsheet_lock.md method for this purpose. The method takes as a parameter the id of a cell(s) or a range of cells to lock.

~~~js
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

{{sample 02_usage/01_locked_cells.html}}

###Unlock cells

To unlock the locked cell(s), use the api/spreadsheet_unlock.md method. Pass the id(s) of the cell(s) or a range that contains locked cells as a parameter:

~~~js
// unlocks a cell
spreadsheet.unlock("A1");
 
// unlocks a range of cells
spreadsheet.unlock("A1:C1");
 
// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

###Check whether a cell is locked

To check whether a cell or several cells are locked, use the api/spreadsheet_islocked.md method and pass the *id of a cell(s)* or a *range of cells* to it:

~~~js
// checks whether a cell is locked
var cellLocked = spreadsheet.isLocked("A1"); 

// checks whether several cells are locked
var rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

The method will return *true* or *false* depending on the state of the cell. If several cells are checked at once, the method will return *true*, if there is at least one locked cell among the specified cells.

Editing cell
-------------------------

###Enable cell editor

You can add an input into a cell by calling the api/spreadsheet_startedit.md method:

~~~js
spreadsheet.startEdit();
~~~

The method may take two optional parameters:

- **cell**	 - (*string*) optional, the id of a cell
- **value**	- (*string*) optional, the cell value

If the id of a cell isn't passed, input will be added into the currently selected cell.

###Disable cell editor

To finish editing of a cell, use the api/spreadsheet_endedit.md method that will close the editor while saving the entered value.

~~~js
spreadsheet.endEdit();
~~~

Selecting cells
-----------------------

SpreadSheet provides a handy way of setting selection for cells via the API of the *Selection* object.

You can select cell(s) by passing its/their id(s) to the api/selection/setselectedcell.md method:

~~~js
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

It is also possible to get the id(s) of the selected cell(s) via the api/selection/getselectedcell.md method:

~~~js
var selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~


Setting focus on a cell
-----------------------

The *Selection* object allows setting focus on a desired spreadsheet cell, as well as getting the id of the cell in focus. Use the corresponding methods for this purpose:

- api/selection/setfocusedcell.md

~~~js
// pass the id of the cell to set focus on
spreadsheet.selection.setFocusedCell("D4");
~~~

- api/selection/getfocusedcell.md

~~~js
// getting the focused cell 
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~


