---
sidebar_label: Configuration
title: JavaScript Spreadsheet - Configuration
description: changetext
---

# Configuration


You can adjust the desired settings of dhtmlxSpreadSheet to meet your needs. The available configuration options allow you to limit the number of rows and columns, change the toolbar appearance and control
the visibility of the menu and the editing bar. You can also initialize SpreadSheet in the readonly mode, if needed.

Toolbar
-----------

The toolbar of the SpreadSheet consists of several blocks of controls that can be changed according to your needs. By default, there are the following blocks of controls in the toolbar: 
"undo","colors","decoration","align","format","help": 
```
![Basic toolbar](basic_toolbar.png)
```
You can add more blocks from the list: "lock", "clear", "rows", "columns", "file".
```
![Extra buttons](toolbar_extra_buttons.png)
```
The structure of toolbar can be adjusted via the api/spreadsheet_toolbarblocks_config.md configuration option of the component, which is an array with strings presenting the names of controls.

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {
	// full toolbar
    toolbarBlocks: [
    	"undo", "colors", "decoration", "align", "lock", "clear", 
        "rows", "columns", "help", "format", "file"
    ]
});
~~~

{{sample  03_configuration/01_full_toolbar.html}}

You can also specify your own structure of the toolbar by enumerating necessary elements in the **toolbarBlocks** array in the desired order, for example:

~~~js
var spreadsheet = new dhx.Spreadsheet("cont", {
	toolbarBlocks: ["help","colors", "align", "decoration", "lock", "clear"]
});
~~~
```
![Custom toolbar](custom_toolbar.png)
```
Toolbar is [highly customizable](customization.md). You can add new controls, change the icons of controls and apply the desired icon pack. 

Editing bar
-------------

Since the structure of SpreadSheet is flexible, you can switch on/off the editing bar to get the desired look and feel of the component. Use the api/spreadsheet_editline_config.md configuration option to hide/show
the editing bar:

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {
    editLine: true
});
~~~

{{sample 03_configuration/02_disabled_line.html}}


Number of rows and columns
-------------------

When SpreadSheet is initialized, it has the initial configuration of grid which consists of 1000 columns and 25 rows. However, when this limit runs out, additional rows and columns are rendered automatically, so you
don't need to add them. Nevertheless, you can specify the exact number of rows and columns in the grid, if you want to limit them. Use the api/spreadsheet_colscount_config.md and api/spreadsheet_rowscount_config.md
options for this purpose:  

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    colsCount: 10,
    rowsCount: 10
});
~~~

{{sample 03_configuration/03_custom_cells_count.html}}

Frozen columns
----------------

Starting from v4.0, it is possible to fix (or "freeze") columns on the left side of the spreadsheet, so that they will become static, while the rest of columns remain movable. To do that, just set the number of columns you want to freeze as a value of the [leftSplit](api/spreadsheet_leftsplit_config.md) property:

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    leftSplit:3 
});
~~~

{{sample	03_configuration/08_frozen_columns.html}}

Menu
----------

The menu of the SpreadSheet is hidden by default. You can switch it on/off via the corresponding configuration option api/spreadsheet_menu_config.md:

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {
	menu: false
});
~~~

{{sample 03_configuration/04_menu.html}}

Read-only mode
----------------

It is also possible to enable the read-only mode to prevent editing of SpreadSheet cells via the api/spreadsheet_readonly_config.md configuration option:

~~~js
var spreadsheet = new dhx.Spreadsheet("cont", {
	readonly: true
});
~~~

{{sample 	03_configuration/05_readonly.html}}

You can also [customize the readonly behavior of SpreadSheet](customization.md#customreadonlymode).


Custom number formats for cells 
--------------------------

There are 5 default formats that can be applied to the values of cells:

~~~js
defaultFormats = [
	{ name: "Common", id: "common", mask: "", example: "2702.31" },
	{ name: "Number", id: "number", mask: "#,##0.00", example: "2702.31" },
	{ name: "Percent", id: "percent", mask: "#,##0.00%", example: "27.0231%" },
	{ name: "Currency", id: "currency", mask: "$#,##0.00", example: "$2702.31" },
	{ name: "Text", id: "text", mask: "abc", example: "'2702.31'" }
];
~~~

You can redefine configuration of default formats or specify your own number format via the api/spreadsheet_formats_config.md config option:

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    formats: [
    	{
    		name: "U.S. Dollar",
    		id: "currency",
    		mask: "$#,##0.00"
    	},
    	{
    		name: "Euro",
    		id: "euro",
    		mask: "[$€]#.##0,00",
    		example: "1000.50"
    	},
    	{
    		name: "Swiss franc",
    		id: "franc",
    		mask: "[$CHF ]#.##0,00"
    	}
    ]
});
~~~

{{sample 03_configuration/06_custom_formats.html}}

Check the details in the number_formatting.md article.

Path to export/import modules
-------------------

dhtmlxSpreadSheet provides the possibility to import/export data in the Excel format. The component uses WebAssembly-based libraries: [Excel2Json](https://github.com/dhtmlx/excel2json)
and [JSON2Excel](https://github.com/dhtmlx/json2excel) for import/export of data. 

After installing the necessary library, you need to set path to the **worker.js** file (either local or at CDN)
via the corresponding configuration option - api/spreadsheet_importmodulepath_config.md or api/spreadsheet_exportmodulepath_config.md:

~~~js
var spreadsheet = new dhx.Spreadsheet(document.body, {  
	importModulePath: "../libs/excel2json/1.0/worker.js"
	exportModulePath: "../libs/json2excel/1.0/worker.js"
});
~~~

All the details are given in the loading_data.md article. 



@todo: 
add list with toolbar blocks descr<br>
update images
