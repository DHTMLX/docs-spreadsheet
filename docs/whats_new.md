---
sidebar_label: What's New
title: JavaScript Spreadsheet - What's New
description: changetext
---

# What's new

```
<style>
.rel_date_pivot{
	color: #a0a0a0;
    font-size: 13px;
    margin-left: 20px;
}
</style>
```

## Version 4.1.3

<span class="rel_date_pivot">released on August 31, 2021</span>

### Fixes

- Fix the incorrect behavior of the undo operation when reverting the row/column after its removing
- Fix the incorrect work of the "mask" property specified in the number format object
- Fix the issue which caused empty cells/rows at the top of the selection to be trimmed after pasting the data from Excel to the spreadsheet
- Fix the issue which caused the cells the absolute formula refers to not being marked
- Fix the issue with the "afterSelectionSet" event which caused the event to occur twice after a range of cells is selected
- Fix the issue with TypeScript definitions
- Fix the issues with the "text" number format

## Version 4.1.2

<span class="rel_date_pivot">released on June 3, 2021</span>

### Fixes

- Fix the incorrect auto-filling of the cells that contain math functions when applying auto-filling to several columns at once
- Fix the issue that caused the selected cell not to become unselected after the next click on this cell using "Ctrl + Click"
- Fix the issue with applying the math formula to the cell after choosing the formula with the help of key navigation
- Fix the issue with locking/unlocking the cells if they are selected using "Ctrl + Click"
- Fix the issue with the "serialize()" method that caused "0" values not to be serialized
- Fix the issue with the auto adjustment of the width of the column after clicking on the header border between the columns
- Fix the issue with the display of zero values in the edit line
- Fix the issue with the editing of long content of the cell
- Fix the issue with the export of the spreadsheet into the Excel file
- Fix the issues with incorrect behavior of the horizontal scrollbar and display of columns when working with the spreadsheet that contains a lot of columns
- Fix the script error that appears after using key navigation in the empty spreadsheet

## Version 4.1.1

<span class="rel_date_pivot">released on April 14, 2021</span>

### Fixes

- Fix the issue with TypeScript definitions
- Fix the issues with absolute references
- Fix the issues appeared when working with data loaded from the file with the ".xlsx" extension
- Fix the issue with incorrect pasting of the data copied from the Excel file
- Fix the issue that caused the wrong result to return when summing float numbers

## Version 4.1

<span class="rel_date_pivot">released on March 24, 2021</span>

### New functionality

- New [multiSheets](api/spreadsheet_multisheets_config.md) configuration option is added
- The ability to [work with multiple sheets](work_with_sheets.md) in the spreadsheet
- The ability to use [cross-references in multiple sheets](work_with_sheets.md#cross-references-between-sheets)
- The ability to [load several sheets](working_with_sheets.md#loading-multiple-sheets) into the spreadsheet at once
- New methods for working with [multiple sheets](working_with_sheets.md) are added: [addSheet()](api/spreadsheet_addsheet_method.md), [removeSheet()](api/spreadsheet_removesheet_method.md), [getActiveSheet()](api/spreadsheet_getactivesheet_method.md), [getSheets()](api/spreadsheet_getsheets_method.md)
- New events are added: [BeforeSheetAdd](api/spreadsheet_beforesheetadd_event.md), [AfterSheetAdd](api/spreadsheet_aftersheetadd_event.md), [BeforeSheetChange](api/spreadsheet_beforesheetchange_event.md), [AfterSheetChange](api/spreadsheet_aftersheetchange_event.md), [BeforeSheetRemove](api/spreadsheet_beforesheetremove_event.md), [AfterSheetRemove](api/spreadsheet_aftersheetremove_event.md), [BeforeSheetRename](api/spreadsheet_beforesheetrename_event.md), [AfterSheetRename](api/spreadsheet_aftersheetrename_event.md)
- The ability to get the formula of a cell via the [getFormula()](api/spreadsheet_getformula_method.md) method

### Updates

- The format of the "cell" parameter of the [getValue()](api/spreadsheet_getvalue_method.md), [setValue()](api/spreadsheet_setvalue_method.md), [getStyle()](api/spreadsheet_getstyle_method.md), [setStyle()](api/spreadsheet_setstyle_method.md), [getFormat()](api/spreadsheet_getformat_method.md), [setFormat()](api/spreadsheet_setformat_method.md), [isLocked()](api/spreadsheet_islocked_method.md), [lock()](api/spreadsheet_lock_method.md), [unlock()](api/spreadsheet_unlock_method.md) methods is updated. Now the reference to a cell, or a range of cells can contain the name of the tab.

## Version 4.0.5

<span class="rel_date_pivot">released on February 3, 2021</span>

### Fixes

- Fix the performance issue
- Fix the script error that happened when the user reverted the latest action in the cell
- Fix the script error thrown after calling the destructor
- Fix the issue that caused values from a range of cell to be truncated after inserting into a single cell
- Fix the issue with recognition of the format of a cell after the cell is cut and then pasted for a second time 

## Version 4.0.4

<span class="rel_date_pivot">released on January 12, 2021</span>

### Fixes

- Fix the incorrect work of the "SUM" function when working with more than 2 numbers
- Fix the issue with initialization of the spreadsheet after calling "destructor()"
- Fix the issue with types

## Version 4.0.3

<span class="rel_date_pivot">released on December 28, 2020</span>

### Fixes

- Fix the issue with setting the format for the value of a cell within a data set 
- Fix the error that occurred when attaching the spreadsheet to the layout
- Fix the issue which caused the formula set for a cell not being edited after the result was calculated
- Fix the incorrect work of the [setFocusedCell()](api/selection_setfocusedcell_method.md) method
- Fix the incorrect behavior of focus when working with formulas
- Fix the issue with selecting a range of cells using the "ctrl" key
- Fix the issue with adding a range of cells via "ctrl+click" to a cell with a formula
- Fix the incorrect work of Math functions
- Fix the issue with the SUM() formula when selecting it via the popup and a mouse click 

## Version 4.0.2

<span class="rel_date_pivot">released on December 21, 2020</span>

### Fixes

- Fix the incorrect behavior of key navigation when creating 2 or more spreadsheet objects on the page
- Fix the issue with the error thrown from the types.d.ts file
- Fix issues with copying and pasting a range of cells

## Version 4.0.1

<span class="rel_date_pivot">released on December 2, 2020</span>

### Fixes

- The incorrect displaying of the tooltips when hovering over the Undo/Redo buttons in the toolbar
- The issue which happened when removing the last column of the spreadsheet after importing the data bigger than the size of the spreadsheet
- The issue with the [setSelectedCell()](api/selection_setselectedcell_method.md) method which caused the formula of the selected cell not to be shown in the formula bar
- The incorrect generation of the typescript definitions
- The visual issue with the alignment of the cell content
- The issue with serializing of empty cells or cells with zero value

## Version 4.0

<span class="rel_date_pivot">released on October 19, 2020</span>

### New functionality

- [Math functions](functions.md)
- [TypeScript Support](using_typescript.md)
- The ability [to freeze columns on the left side of the spreadsheet](configuration.md#frozen-columns) via the api/spreadsheet_leftsplit_config.md configuration property
- [The Text format for displaying the content of a cell as text is added to default number formats](number_formatting.md#defaultnumberformats)
- The ability to select multiple scattered ranges of cells by using ["Ctrl+Shift+Left Click"](hotkeys.md#selection) combination

### Fixes

- Fix the incorrect work of the colorpicker when applying the background color to the range of cells
- Fix the incorrect parsing of numbers when importing Excel files
- Fix the issue which caused all data copied from a Google or Excel table to be inserted into one cell of the spreadsheet
- Fix the incorrect work of the [editLine:false](api/spreadsheet_editline_config.md) property that caused the edit operation to finish with an error in the console
- Fix the issue with the [AfterValueChange](api/spreadsheet_aftervaluechange_event.md) event which caused the event to be called twice

## Version 3.1.4

<span class="rel_date_pivot">released on September 19, 2019</span>

### Fixes

- Styles fixes

## Version 3.1.3

<span class="rel_date_pivot">released on September 19, 2019</span>

### Fixes

- Issue with focus on a cell when Spreadsheet is attached to Layout

## Version 3.1.2

<span class="rel_date_pivot">released on March 25, 2019</span>

### Fixes

- Issues with text styles in Excel export
- Issue with underlining right-aligned text

## Version 3.1.1

<span class="rel_date_pivot">released on March 25, 2019</span>

### Fixes

- Issues with export to Excel

## Version 3.1

<span class="rel_date_pivot">released on March 21, 2019</span>

### New functionality

- [Import from Excel](loading_data.md#loading-excel-file-xlsx)
- [Export to Excel](loading_data.md#exporting-data)
- [Number formatting](number_formatting.md)
- [Auto filling of cells](work_with_cells.md#auto-filling-cells-with-content)

### Updates

- [Hotkeys behavior in a range of cells](hotkeys.md)

### Fixes

- Issues with hotkeys on the active cell

## Version 3.0.3

<span class="rel_date_pivot">released on December 13, 2018</span>

### Fixes

- Incorrect behavior in the custom read-only mode
- Issues with methods of removing a column/row
- Issues with loss of focus on the edit line
- Issues with hotkeys on the active cell

## Version 3.0.2

<span class="rel_date_pivot">released on December 6, 2018</span>

### Fixes

- Issues with hotkeys behavior
- Issues with placement of the selection handle
- Issues with loss of focus on the active cell
- Incorrect behavior of selection on the active cell
- Incorrect behavior of hotkeys on the active cell
- Incorrect behavior of scrolling by arrow keys

## Version 3.0.1

<span class="rel_date_pivot">released on November 8, 2018</span>

### Fixes

- Incorrect behavior of the undo operation
- Incorrect behavior of the cut-paste operation on a group of cells

## Version 3.0

<span class="rel_date_pivot">released on October 25, 2018</span>

### Breaking change

{{note API of the version 3.0 is not compatible with API v2.1.}}

In comparison to the previous PHP-based version, DHTMLX Spreadsheet of version 3.0 is a completely client-side JavaScript component.

Check the [Migration](migration.md) article to get information about the usage of new API. If you feel like keep using the previous version for a while, [the documentation for DHTMLX Spreadsheet v2.1](https://docs.dhtmlx.com/spreadsheet__index.html) is still available.

### New functionality

The API of Spreadsheet has been changed and became more handy to work with. One more significant update is the total redesign of the component which gave a modern look to the interface of Spreadsheet. Together with the fresh appearance the usability of DHTMLX Spreadsheet is greatly enhanced.

- [](index.md)
- [Fully customizable structure and adjustable look and feel](customization.md)
- [Completely refreshed API](api/api_overview.md)

to do: not working [Entire redesign of the interface](index.md)
