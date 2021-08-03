Initialization
=========================

This guide will give you detailed instructions on how to create dhtmlxSpreadSheet on a page to enrich your application with features of a mighty worksheet.
Follow the steps below to get a ready-to-use component:

1. [Include the dhtmlxSpreadSheet source files on a page](#includingsourcefiles).
2. [Create a container for dhtmlxSpreadSheet](#creatingcontainer).
3. [Initialize dhtmlxSpreadSheet with the object constructor](#initializingdhtmlxspreadsheet).

{{snippet index.html}}
~~~html
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with dhtmlxSpreadSheet</title>
		<script type="text/javascript" src="/codebase/spreadsheet.js"></script>
		<link rel="stylesheet" type="text/css" href="/codebase/spreadsheet.css">
	</head>
 	<body>
	 	<div id="spreadsheet"></div>
		<script>
			// creating dhtmlxSpreadSheet
			var spreadsheet = new dhx.SpreadSheet("spreadsheet",{document.body});
		</script>
 	</body>
</html>
~~~

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

To create dhtmlxSpreadSheet, you need to include 2 source files on your page:

- spreadsheet.js
- spreadsheet.css

Make sure that you set correct relative paths to these files:

{{snippet	index.html}}
~~~html
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

The structure of the SpreadSheet pack is the following:

- **sources** - the source code files of the library; they are easy-to-read and are mostly intended for debugging;
- **codebase** - the obfuscated code files of the library; they are much smaller and intended for use in production. **Include these files in your apps when they are ready**;
- **samples** - the code samples;
- **docs** - the full documentation of the component.


## Creating container 

Add a container for SpreadSheet and give it an id, for example "ssheet":

{{snippet	index.html}}
~~~html
<div id="ssheet"></div>
~~~

## Initializing dhtmlxSpreadSheet

Initialize dhtmlxSpreadSheet with the `dhx.Spreadsheet` object constructor. The constructor has two parameters:

- the HTML container for Spreadsheet,
- an object with configuration properties. [See the full list below](#configurationproperties).

{{snippet	index.html}}
~~~js
// creating dhtmlxSpreadSheet
var ssheet = new dhx.Spreadsheet("ssheet", {// config options});
~~~

### <span id="configurationproperties">Configuration properties</span>

This is a list of [properties](api/refs/spreadsheet_props.md) that you can specify in the SpreadSheet configuration object:

- **toolbarBlocks** - (*array*) specifies blocks of buttons that will be shown in the toolbar of spreadsheet
- **editLine** - (*boolean*) hides/shows the editing bar
- **menu** - (*boolean*) hides/shows the menu
- **multiSheets** - (*boolean*) enables/disables the ability to work with multiple sheets in the spreadsheet
- **colsCount** - (*number*) sets the number of columns a spreadsheet will have on initialization
- **rowsCount** - (*number*) sets the number of rows a spreadsheet will have on initialization
- **readonly** - (*boolean*) enables/disables the readonly mode
- **exportModulePath** - (*string*)	sets the path to the export module
- **importModulePath** - (*string*)	sets the path to the import module
- **autoFormat** - (*boolean*) defines whether the format of a cell content is detected automatically
- **formats** - (*array*) defines the list of number formats


You can set configuration options during initialization as the second parameter of the constructor:

~~~js
var ssheet = new dhx.Spreadsheet("ssheet", { 
    rowsCount:10,
    colsCount:10
});
~~~

{{sample	03_configuration/03_custom_cells_count.html}}
