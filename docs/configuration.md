---
sidebar_label: Configuration
title: Configuration
description: Configure DHTMLX Spreadsheet. Set up the toolbar, the editing bar, the menu, the number of rows and columns, the read-only mode, the selection of cells and number formats.
---

# Configuration

You can adjust the desired settings of DHTMLX Spreadsheet to meet your needs. The available configuration options allow you to limit the number of rows and columns, change the toolbar appearance and control the visibility of the menu and the editing bar. You can also initialize Spreadsheet in read-only mode, if needed. 

## Toolbar

The toolbar of the Spreadsheet consists of several blocks of controls that can be changed according to your needs. By default, there are the following blocks of controls in the toolbar: `"undo"`, `"colors"`, `"font"`, `"decoration"`, `"align"`, `"cell"`, `"format"`, `"actions"`. You can add more blocks from the list: `"lock"`, `"clear"`, `"rows"`, `"columns"`, `"file"`, `"help"`.

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

The structure of the toolbar can be adjusted via the [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) configuration option of the component, which is an array with strings presenting the names of controls.

You can also specify your own structure of the toolbar by enumerating necessary elements in the `toolbarBlocks` array in the desired order, for example: `"colors"`, `"align"`, `"cell"`, `"decoration"`, `"lock"`, `"clear"`.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

The toolbar is [highly customizable](customization.md). You can add new controls, change the icons of controls and apply the desired icon pack.

## Editing bar

Since the structure of Spreadsheet is flexible, you can switch on/off the editing bar to get the desired look and feel of the component. Use the [`editLine`](api/spreadsheet_editline_config.md) configuration option to hide/show
the editing bar.

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Number of rows and columns

When Spreadsheet is initialized, it starts with a grid of 26 columns and 1000 rows. However, when this limit runs out, additional rows and columns are rendered automatically, so you don't need to add them. Nevertheless, you can specify the exact number of rows and columns in the grid, if you want to limit them. Use the [`colsCount`](api/spreadsheet_colscount_config.md) and [`rowsCount`](api/spreadsheet_rowscount_config.md) options for this purpose.  

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Menu

The menu of the Spreadsheet is hidden by default. You can switch it on/off via the corresponding configuration option [`menu`](api/spreadsheet_menu_config.md):

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Read-only mode

You can also enable read-only mode to prevent editing of Spreadsheet cells via the [`readonly`](api/spreadsheet_readonly_config.md) configuration option.

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true,
});
~~~

In the read-only mode, the toolbar, the menu and the formula bar are hidden. Users can navigate the cells with the keyboard, select them with the mouse, copy and search them. Edits are refused and announced to screen readers as "The sheet is read-only". The fill handle is hidden. Check the details in the [`readonly`](api/spreadsheet_readonly_config.md#details) article. To learn how keyboard and screen reader users work with a read-only Spreadsheet, check the [Read-only setup](accessibility.md#read-only-setup) section of the Accessibility guide.

To turn off the keyboard navigation and the selection in the read-only mode, set the [`selection`](api/spreadsheet_selection_config.md) option to `false`:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true,
    selection: false,
});
~~~

You can also [customize the read-only behavior of Spreadsheet](customization.md#custom-read-only-mode).

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Selection of cells

By default, users can select cells with the mouse and the keyboard, and the Spreadsheet has an active cell. To turn the selection off, set the [`selection`](api/spreadsheet_selection_config.md) configuration option to `false`:

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
});
~~~

In this case, the Spreadsheet has no active cell, the cells can't be selected or edited from the interface, and the context menu is not available.

To turn the selection off and on at runtime, use the [`selection.disable()`](api/selection_disable_method.md) and [`selection.enable()`](api/selection_enable_method.md) methods. The [`selection.isDisabled()`](api/selection_isdisabled_method.md) method checks whether the selection is turned off.

Without the selection, the grid becomes one tab stop that the keyboard passes through. Check the [Read-only setup](accessibility.md#read-only-setup) section of the Accessibility guide.

## Custom number formats for cells

You can apply 7 default formats to cell values: "Common", "Number", "Percent", "Currency", "Date", "Time", "Text".

You can redefine configuration of default formats or specify your own number format via the [`formats`](api/spreadsheet_formats_config.md) config option. Check the details in the [Number Formatting](number_formatting.md) article.

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## Path to export/import modules

DHTMLX Spreadsheet can import and export data in Excel format. The component uses WebAssembly-based libraries: [Excel2Json](https://github.com/dhtmlx/excel2json) and [JSON2Excel](https://github.com/dhtmlx/json2excel) for import/export of data.

After installing the necessary library, you need to set the path to the *worker.js* file (either local or at CDN)
via the corresponding configuration option: [`importModulePath`](api/spreadsheet_importmodulepath_config.md) or [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md).

All the details are given in the [Data Loading and Export](loading_data.md) article.

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
