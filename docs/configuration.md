---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Configuration

You can adjust the desired settings of DHTMLX Spreadsheet to meet your needs. The available configuration options allow you to limit the number of rows and columns, change the toolbar appearance and control the visibility of the menu and the editing bar. You can also initialize Spreadsheet in the readonly mode, if needed. 

## Toolbar

The toolbar of the Spreadsheet consists of several blocks of controls that can be changed according to your needs. By default, there are the following blocks of controls in the toolbar: "undo", "colors", "decoration", "align", "cell", "format", "actions". You can add more blocks from the list: "lock", "clear", "rows", "columns", "file", "help".

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

The structure of toolbar can be adjusted via the [](/api/spreadsheet_toolbarblocks_config) configuration option of the component, which is an array with strings presenting the names of controls.

You can also specify your own structure of the toolbar by enumerating necessary elements in the **toolbarBlocks** array in the desired order, for example: "colors", "align", "cell", "decoration", "lock", "clear".

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Toolbar is [highly customizable](/customization). You can add new controls, change the icons of controls and apply the desired icon pack.

## Editing bar

Since the structure of Spreadsheet is flexible, you can switch on/off the editing bar to get the desired look and feel of the component. Use the [](/api/spreadsheet_editline_config) configuration option to hide/show
the editing bar.

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Number of rows and columns

When Spreadsheet is initialized, it has the initial configuration of grid which consists of 1000 columns and 25 rows. However, when this limit runs out, additional rows and columns are rendered automatically, so you don't need to add them. Nevertheless, you can specify the exact number of rows and columns in the grid, if you want to limit them. Use the [](/api/spreadsheet_colscount_config) and [](/api/spreadsheet_rowscount_config) options for this purpose.  

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Menu

The menu of the Spreadsheet is hidden by default. You can switch it on/off via the corresponding configuration option [](/api/spreadsheet_menu_config):

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Read-only mode

It is also possible to enable the read-only mode to prevent editing of Spreadsheet cells via the [](/api/spreadsheet_readonly_config) configuration option.

You can also [customize the readonly behavior of Spreadsheet](/customization/#custom-read-only-mode).

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Custom number formats for cells

There are 7 default formats that can be applied to the values of cells: "Common", "Number", "Percent", "Currency", "Date", "Time", "Text".

You can redefine configuration of default formats or specify your own number format via the [](/api/spreadsheet_formats_config) config option. Check the details in the [Number Formatting](/number_formatting) article.

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## Path to export/import modules

DHTMLX Spreadsheet provides the possibility to import/export data in the Excel format. The component uses WebAssembly-based libraries: [Excel2Json](https://github.com/dhtmlx/excel2json) and [JSON2Excel](https://github.com/dhtmlx/json2excel) for import/export of data.

After installing the necessary library, you need to set path to the **worker.js** file (either local or at CDN)
via the corresponding configuration option - [](/api/spreadsheet_importmodulepath_config) or [](/api/spreadsheet_exportmodulepath_config).

All the details are given in the [Data Loading and Export](/loading_data) article.

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
