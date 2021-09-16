---
sidebar_label: Initialization
title: JavaScript Spreadsheet - Initialization
description: changetext
---

# Initialization

This guide will give you detailed instructions on how to create DHTMLX Spreadsheet on a page to enrich your application with features of a mighty worksheet. Follow the steps below to get a ready-to-use component:

1. [Include the DHTMLX Spreadsheet source files on a page](#including-source-files).
2. [Create a container for DHTMLX Spreadsheet](#creating-container).
3. [Initialize DHTMLX Spreadsheet with the object constructor](#initializing-dhtmlx-spreadsheet).

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="200"></iframe>

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

To create DHTMLX Spreadsheet, you need to include 2 source files on your page:

- spreadsheet.js
- spreadsheet.css

Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

The structure of the Spreadsheet pack is the following:

- **sources** - the source code files of the library; they are easy-to-read and are mostly intended for debugging;
- **codebase** - the obfuscated code files of the library; they are much smaller and intended for use in production. **Include these files in your apps when they are ready**;
- **samples** - the code samples;
- **docs** - the full documentation of the component.

## Creating container

Add a container for Spreadsheet and give it an id, for example "spreadsheet":

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## Initializing DHTMLX Spreadsheet

Initialize DHTMLX Spreadsheet with the `dhx.Spreadsheet` object constructor. The constructor has two parameters:

- the HTML container for Spreadsheet,
- an object with configuration properties. [See the full list below](#configuration-properties).

~~~js title="index.html"
// creating DHTMLX Spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config options
});
~~~

### Configuration properties

This is a list of [properties](api/api_overview.md/#spreadsheet-properties) that you can specify in the Spreadsheet configuration object:

- **colsCount** - (*number*) sets the number of columns a spreadsheet will have on initialization
- **editLine** - (*boolean*) hides/shows the editing bar
- **exportModulePath** - (*string*) sets the path to the export module
- **formats** - (*array*) defines the list of number formats
- **importModulePath** - (*string*) sets the path to the import module
- **leftSplit** - (*number*) sets the number of columns fixed to the left side of the spreadsheet
- **menu** - (*boolean*) hides/shows the menu
- **multiSheets** - (*boolean*) enables/disables the ability to work with multiple sheets in the spreadsheet
- **readonly** - (*boolean*) enables/disables the readonly mode
- **rowsCount** - (*number*) sets the number of rows a spreadsheet will have on initialization
- **toolbarBlocks** - (*array*) specifies blocks of buttons that will be shown in the toolbar of spreadsheet

You can set configuration options during initialization as the second parameter of the constructor:

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="200"></iframe>



------------------------------------

This guide will give you detailed instructions on how to create DHTMLX Spreadsheet on a page to enrich your application with features of a mighty worksheet. Follow the steps below to get a ready-to-use component:

1. [Include the DHTMLX Spreadsheet source files on a page](#including-source-files).
2. [Create a container for DHTMLX Spreadsheet](#creating-container).
3. [Initialize DHTMLX Spreadsheet with the object constructor](#initializing-dhtmlx-spreadsheet).

~~~html title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with DHTMLX Spreadsheet</title>
		<script type="text/javascript" src="/codebase/spreadsheet.js"></script>
		<link rel="stylesheet" type="text/css" href="/codebase/spreadsheet.css">
	</head>
 	<body>
	 	<div id="spreadsheet"></div>
		<script>
			// creating DHTMLX Spreadsheet
			var spreadsheet = new dhx.Spreadsheet("spreadsheet",{document.body});
		</script>
 	</body>
</html>
~~~

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

To create DHTMLX Spreadsheet, you need to include 2 source files on your page:

- spreadsheet.js
- spreadsheet.css

Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

The structure of the Spreadsheet pack is the following:

- **sources** - the source code files of the library; they are easy-to-read and are mostly intended for debugging;
- **codebase** - the obfuscated code files of the library; they are much smaller and intended for use in production. **Include these files in your apps when they are ready**;
- **samples** - the code samples;
- **docs** - the full documentation of the component.

## Creating container

Add a container for Spreadsheet and give it an id, for example "ssheet":

~~~html title="index.html"
<div id="ssheet"></div>
~~~

## Initializing DHTMLX Spreadsheet

Initialize DHTMLX Spreadsheet with the `dhx.Spreadsheet` object constructor. The constructor has two parameters:

- the HTML container for Spreadsheet,
- an object with configuration properties. [See the full list below](#configuration-properties).

~~~js title="index.html"
// creating DHTMLX Spreadsheet
var ssheet = new dhx.Spreadsheet("ssheet", {
    // config options
});
~~~

### Configuration properties

This is a list of [properties](api/api_overview.md/#spreadsheet-properties) that you can specify in the Spreadsheet configuration object:

- **colsCount** - (*number*) sets the number of columns a spreadsheet will have on initialization
- **editLine** - (*boolean*) hides/shows the editing bar
- **exportModulePath** - (*string*) sets the path to the export module
- **formats** - (*array*) defines the list of number formats
- **importModulePath** - (*string*) sets the path to the import module
- **leftSplit** - (*number*) sets the number of columns fixed to the left side of the spreadsheet
- **menu** - (*boolean*) hides/shows the menu
- **multiSheets** - (*boolean*) enables/disables the ability to work with multiple sheets in the spreadsheet
- **readonly** - (*boolean*) enables/disables the readonly mode
- **rowsCount** - (*number*) sets the number of rows a spreadsheet will have on initialization
- **toolbarBlocks** - (*array*) specifies blocks of buttons that will be shown in the toolbar of spreadsheet

You can set configuration options during initialization as the second parameter of the constructor:

~~~js
var ssheet = new dhx.Spreadsheet("ssheet", { 
    rowsCount:10,
    colsCount:10
});
~~~

{{sample	03_configuration/03_custom_cells_count.html}}
