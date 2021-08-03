getStyle
=============

@short:
	returns styles applied to a cell(s)	

@params:
- cells			string			the id of a cell or a range of cells

@returns:
- style			object,array		styles set for a cell/cells

@example:
// getting style of one cell
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}

// getting styles of a range of cells
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details

// getting styles of different cells
var values = spreadsheet.getStyle("A1,B1,C1:C3"); 

@template: api_method
@descr:
1\. For multiple cells the method returns an array of objects with styles applied to a cell:

~~~js
[
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "red", border: "solid 1px yellow", color: "blue"},
	{background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
	{background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

2\. Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
var style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the style(s) of the cell(s) from the active tab.

@relatedapi:
api/spreadsheet_setstyle.md

