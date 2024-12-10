---
sidebar_label: What's new
title: What's new in DHTMLX Spreadsheet
description: You can learn what's new in the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# What's new

If you are updating Spreadsheet from an older version, check [Migration to Newer Version](migration.md) for details.

## Version 5.1.8 

Released on December 10, 2024

### Fixes

- The issue with the local trial package during import to frameworks

## Version 5.1.7 

Released on November 27, 2024

### Fixes

- The "item not found" warning has been removed
- Parsing optimization
- An open cell editor doesn't close when moving to an adjacent cell with the (Shift)+Tab shortcut

## Version 5.1.6 

Released on July 25, 2024

### Fixes

- Inserted rows/columns are missed in the serialized data on loading it
- An empty date cell displays the last picked date in the datepicker and the timepicker
- An issue with number localization and an empty string value in a cell
- Searching doesn't get focus while editing a cell
- Using `ngIf/ngFor` for the Spreadsheet container causes a break in the component


## Version 5.1.5 

Released on February 13, 2024

### Fixes

- Pasting a cell containing zeros creates an empty cell
- Copying and then pasting an empty cell throws an error
- Fix the `setValue()` functionality for the common format
- Saving the id of a sheet during serialization and returning it by the `afterAction` event 
- Fix cross-sheet formula usage via UI
- Fix Ctrl+F search 

## Version 5.1.4 

Released on January 31, 2024

### Fixes

- Incorrect pasting of spanned cells

## Version 5.1.3

Released on January 29, 2024

### Fixes

- Incorrect parsing of numeric values in the "common" format
- Localization i18n issues when Spreadsheet is used together with Suite
- Performance issues while loading a table with a great number of spans
- Incorrect pasting of spanned cells

## Version 5.1.2

Released on January 16, 2024

### Fixes

- Fix the issue with copying and pasting cells. Copied and pasted cells with Date to Spreadsheet from Excel are displayed as strings
- Fix the issue with numeric value in the "common" format that is formatted as a number
- Fix the issue with parsing data that mutates initial dataset
- Fix the issue with pasting of spanned cells

## Version 5.1.1

Released on December 14, 2023

### Fixes

- Fix the issue with the `fixColumn()` method ignoring the arrow icon of the select editor
- Fix the problem with cell styles taking precedence over the range styles
- Fix the issue with copying/pasting the content of cells with applied styles and the Undo functionality
- Fix the problem with a link changing while being pasted into a different cell
- Fix issues with copying/pasting of merged cells
- Fix the issue with serialization of styles
- Fix scrolling to the cell during the call of the `setSelectedCell()` or `setFocusedCell()` methods

## Version 5.1

Released on December 7, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-1/)

### New functionality

- [Support for new themes](spreadsheet/themes.md): Dark, Light High Contrast and Dark High Contrast
- Extended [support for number, date, time and currency format localization](spreadsheet/number_formatting.md/#number-date-time-currency-localization)
- [Integration with the Svelte framework](spreadsheet/svelte_integration.md)
- Ability to [provide a custom name for an exported .xlsx file](spreadsheet/loading_data.md/#how-to-set-a-custom-name-for-an-exported-file)
- Ability to [save the "locked" cell status](spreadsheet/loading_data.md#setting-the-locked-state-for-a-cell) and [specify a link for a cell](loading_data.md/#adding-a-link-into-a-cell) in a data set

### Updates

- Renewed [integrations with React, Angular and Vue.js](spreadsheet/category/integrations.md)
- Automatic [conversion of lowercase letters to upper case](spreadsheet/functions.md) in formulas 
- Auto closing of formulas 

### Fixes

- Fix the problem with applying Undo to the value set in a cell
- Fix the limitation on the number of pasted rows
- Fix replacement of spaces with the `&nbsp;` symbols in formulas in the Edit line
- Fix incorrect work of Excel import with the date-like values
- Fix incorrect editing of a block of cells
- Fix the script error that appeared on calling `getExcelDate()` during filtering 
- Fix converting a text value to a number while pasting a cell content
- Fix incorrect pasting of data from an Excel file with the modified column width

## Version 5.0.10

Released on November 27, 2023

### Fixes

- Fix types issues

## Version 5.0.9

Released on October 24, 2023

### Fixes

- Fix incorrect calling of the setStyle() method which triggered before/afterSelectionSet events
- Fix incorrect content wrapping
- Fix types issues

## Version 5.0.7

Released on September 21, 2023

### Fixes

- Fix the problem with exporting formulas to Excel
- Fix the issue with restoring the cut content of a cell on clicking the Undo button

## Version 5.0.6

Released on September 18, 2023

### Fixes

- Fix the problem with rendering zeros
- Fix the issue with applying color styles set as string values
- Fix the issue with the XSS vulnerability
- Fix the problem when changing a value in an inactive sheet modified the value in the active sheet instead

## Version 5.0.5 

Released on August 10, 2023

### Fixes

- Fix the issue with the XSS vulnerability
- Fix incorrect pasting of data containing cell spans

## Version 5.0.4

Released on June 5, 2023

### Fixes

- Fix errors during block selection or a context menu call in the read-only mode
- Fix the issue with the Edit menu displaying in the read-only mode
- Fix incorrect rounding of numbers
- Fix the problem with replacing a formula with its result in the editing line after cells merging

## Version 5.0.3

Released on April 26, 2023

### Fixes

- Fix incorrect calculation of the last cell to merge
- Fix issues with Excel import/export
- Fix the issue which caused data to be swapped after applying of data validation
- Fix the issue which interpreted text with the ":" symbol as a link
- Fix the issue with loading multiline data. Now it is possible to set the `multiline: "wrap"` property in the [`styles`](api/spreadsheet_parse_method.md#parsing-styled-data) object
- Fix the issue with merging of cells on Spreadsheet initialization when [`multiSheets`](api/spreadsheet_multisheets_config.md) is set to `false`
- Fix the issue with resetting of scroll position after double-click on the resize cursor of a column in the table header

## Version 5.0.2

Released on February 14, 2023

### Fixes

- Fix the issue which caused alignment of a cell not to be saved after copying and pasting the value of the cell 
- Fix the issue which caused the results of filtering to be changed after sorting of data
- Fix the issue with display of the 12-hour format in the timepicker 
- Fix the issue with removing of link styles after the cell was auto-filled
- Now it is possible to add several [custom formats for dates](spreadsheet/number_formatting.md#formats-customization)
- Now it is possible to remove columns and rows even if they belong to the [limited columns and rows](spreadsheet/configuration.md#number-of-rows-and-columns)

## Version 5.0.1

Released on January 19, 2023

### Fixes

- Fix the issue which caused values entered into the cell with the currency format to be saved as a string not as a number 
- Fix the issue with clearing of selection of the previously searched cells
- Fix the issue with display of data after parsing it into the spreadsheet
- Fix the issue with redrawing of the grid after removing columns
- Fix the issue with sorting of empty values
- Fix the issue with validation of numeric values when using a drop-down list
- Fix work of auto-filling of cells with alphanumeric values
- Improved work with masks of number formats
- Now all number values in cells will be aligned to the right by default

## Version 5.0

Released on November 21, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-0/)

### Breaking changes

The new release introduces some changes to the [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) property. Check the [Migration article](migration.md#43---50) to keep in step with the latest version.

### New functionality

- Data search:
    - the ability to search for data via [UI](data_search.md)
    - the ability to search for data via [API](working_with_ssheet.md#searching-for-data):
        - new methods: [`search()`](api/spreadsheet_search_method.md) and [`hideSearch()`](api/spreadsheet_hidesearch_method.md)
- Filtering data
    - the ability to filter data via [UI](filtering_data.md)
    - the ability to filter data via [API](working_with_ssheet.md#filtering-data):
        - new methods: [`setFilter()`](api/spreadsheet_setfilter_method.md) and [`getFilter()`](api/spreadsheet_getfilter_method.md)
        - new action: [`filter`](api/overview/actions_overview.md#list-of-actions)
- Merging/splitting cells:
    - the ability to merge/split cells via [UI](merge_cells.md)
    - the ability to merge/split cells via [API](working_with_cells.md#merging-cells):
        - new property of the sheet object : [`merged`](api/spreadsheet_parse_method.md)
        - new method: [`mergeCells()`](api/spreadsheet_mergecells_method.md)
        - new actions: [`merge`](api/overview/actions_overview.md#list-of-actions) and [`unmerge`](api/overview/actions_overview.md#list-of-actions)
- AutoFit column width:
    - the ability to autofit column width via [UI](work_with_rows_cols.md#autofit-column-width)   
    - the ability to autofit column width via [API](working_with_ssheet.md#autofit-column-width):
        - new method: [`fitColumn()`](api/spreadsheet_fitcolumn_method.md)
        - new action: [`fitColumn`](api/overview/actions_overview.md#list-of-actions)
- Inserting a hyperlink:
    - the ability to insert a hyperlink into a cell via [UI](work_with_cells.md#inserting-a-hyperlink-into-a-cell)
    - the ability to insert a hyperlink into a cell via [API](working_with_cells.md#inserting-a-hyperlink-into-a-cell):
        - new method: [`insertLink()`](api/spreadsheet_insertlink_method.md)
        - new action: [`insertLink`](api/overview/actions_overview.md#list-of-actions)
- [Strikethrough format of data](data_formatting.md#color-and-style)

### Updates

- [Extended list of locale options](localization.md#default-locale)
- [Extended list of hotkey combinations](hotkeys.md):
    - for data search
        - `Ctrl (Cmd) + F`
        - `Ctrl (Cmd) + G`
        - `Ctrl (Cmd) + Shift + G`
    - for selecting the whole column/row
        - `Ctrl (Cmd) + Space`
        - `Shift + Space`
    - for aligning the content of a cell left/right/center
        - `Ctrl (Cmd) + Shift + L`
        - `Ctrl (Cmd) + Shift + R`
        - `Ctrl (Cmd) + Shift + E`
    - for crossing out the content of a cell 
        - `Alt + Shift + 5 (Cmd + Shift + X)`
    - for adding new sheets and switching between them
        - `Shift + F11`
        - `Alt + Arrow Up/ Arrow Down`
    - for inserting a hyperlink in a cell 
        - `Ctrl (Cmd) + K`

## Version 4.3

Released on May 23, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-3/)

### Breaking changes

Version 4.3 doesn't bring any breaking changes but introduces a new way of handling actions performed in the spreadsheet. Check the details in the [Migration article](migration.md#42---43).

### New functionality

- The ability to add a drop-down list of options into the cells via the [`setValidation()`](api/spreadsheet_setvalidation_method.md) method or via [UI](work_with_cells.md#using-drop-down-lists-in-cells)
- The ability to fix rows on the top of the spreadsheet via the [`topSplit`](api/spreadsheet_topsplit_config.md) property
- The ability to sort data via the [`sortCells()`](api/spreadsheet_sortcells_method.md) method or via [UI](sorting_data.md)
- [The ability to split long text into multiple lines](data_formatting.md#wrap-text-in-a-cell) (*Text wrapping* button is added into the toolbar)
- Significantly extended list of supported [Date, Financial, Math, String functions](functions.md#information-functions) (marked with *added in v4.3* label)
- Support for [Lookup functions](functions.md#lookup-functions)
- [Time format](number_formatting.md/#default-number-formats) is added
- The ability to define the format of times in the spreadsheet cells via the [`timeFormat`](api/spreadsheet_timeformat_config.md) property
- The ability to enter time in a cell via a time picker
- [Export to JSON](api/export_json_method.md)
- [Import from JSON](api/spreadsheet_load_method.md#loading-json-files)
- New events are added: [beforeAction](api/spreadsheet_beforeaction_event.md) and [afterAction](api/spreadsheet_afteraction_event.md)
- New [Actions system](api/overview/actions_overview.md)

### Updates

- The [`parse()`](api/spreadsheet_parse_method.md) method is updated. New **editor** attribute of a cell object is added

## Version 4.2

Released on November 29, 2021

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-2-with130-new-functions-boolean-operators-date-format-row-resizing-much/)

### New functionality

- Support for [date](functions.md/#date-functions), [financial](functions.md/#financial-functions), [information](functions.md/#information-functions), [regex](functions.md/#regex-functions), and [other](functions.md/#other-functions) functions
- Support for [boolean operators](functions.md/#boolean-operators)
- The ability to resize rows from UI
- New [Vertical align](data_formatting.md/#alignment) button is added into the toolbar
- The ability to set the active sheet via the [`setActiveSheet()`](api/spreadsheet_setactivesheet_method.md) method
- The ability to remove selection from the specified cells via the [`removeSelectedCell()`](api/selection_removeselectedcell_method.md) method of the Selection object
- The ability to clear a spreadsheet or its sheet via the [`clear()`](api/spreadsheet_clear_method.md) or [`clearSheet()`](api/spreadsheet_clearsheet_method.md) method correspondingly
- New events are added: [`beforeClear`](api/spreadsheet_beforeclear_event.md), [`afterClear`](api/spreadsheet_afterclear_event.md), [`beforeSheetClear`](api/spreadsheet_beforesheetclear_event.md), [`afterSheetClear`](api/spreadsheet_aftersheetclear_event.md)
- The ability to define the format of dates in the spreadsheet via the [`dateFormat`](api/spreadsheet_dateformat_config.md) property
- [Date format is added to default number formats](number_formatting.md/#default-number-formats)

### Updates

- Extended list of [locale options](localization.md)
- Extended list of [math](functions.md/#math-functions) and [string](functions.md/#string-functions) functions
- The Align block of the Spreadsheet toolbar is updated. Check the details in the [Migration article](migration.md/#41---42)
- The [`parse()`](api/spreadsheet_parse_method.md) and [`serialize()`](api/spreadsheet_serialize_method.md) methods are updated. New **rows** and **cols** attributes of the sheet object allows saving the state of the row height and column width for each sheet.

### Fixes

- Issue with the CTRL-X shortcut key
- Issue which caused the script error to appear when editing a cell in the spreadsheet with hidden [editing bar](api/spreadsheet_editline_config.md/)

## Version 4.1.3

Released on August 31, 2021

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-6-scheduler-5-3-12-suite-7-2-1/)

### Fixes

- Fix the incorrect behavior of the undo operation when reverting the row/column after its removing
- Fix the incorrect work of the "mask" property specified in the number format object
- Fix the issue which caused empty cells/rows at the top of the selection to be trimmed after pasting the data from Excel to the spreadsheet
- Fix the issue which caused the cells the absolute formula refers to not being marked
- Fix the issue with the "afterSelectionSet" event which caused the event to occur twice after a range of cells is selected
- Fix the issue with TypeScript definitions
- Fix the issues with the "text" number format

## Version 4.1.2

Released on June 3, 2021

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-suite-7-1-9-spreadsheet-4-1-2/)

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

Released on April 14, 2021

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-2-suite-7-1-5-spreadsheet-4-1-1/)

### Fixes

- Fix the issue with TypeScript definitions
- Fix the issues with absolute references
- Fix the issues appeared when working with data loaded from the file with the ".xlsx" extension
- Fix the issue with incorrect pasting of the data copied from the Excel file
- Fix the issue that caused the wrong result to return when summing float numbers

## Version 4.1

Released on March 24, 2021

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-1-multiple-sheets/)

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

Released on February 3, 2021

### Fixes

- Fix the performance issue
- Fix the script error that happened when the user reverted the latest action in the cell
- Fix the script error thrown after calling the destructor
- Fix the issue that caused values from a range of cell to be truncated after inserting into a single cell
- Fix the issue with recognition of the format of a cell after the cell is cut and then pasted for a second time 

## Version 4.0.4

Released on January 12, 2021

### Fixes

- Fix the incorrect work of the "SUM" function when working with more than 2 numbers
- Fix the issue with initialization of the spreadsheet after calling "destructor()"
- Fix the issue with types

## Version 4.0.3

Released on December 28, 2020

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

Released on December 21, 2020

### Fixes

- Fix the incorrect behavior of key navigation when creating 2 or more spreadsheet objects on the page
- Fix the issue with the error thrown from the types.d.ts file
- Fix issues with copying and pasting a range of cells

## Version 4.0.1

Released on December 2, 2020

### Fixes

- The incorrect displaying of the tooltips when hovering over the Undo/Redo buttons in the toolbar
- The issue which happened when removing the last column of the spreadsheet after importing the data bigger than the size of the spreadsheet
- The issue with the [setSelectedCell()](api/selection_setselectedcell_method.md) method which caused the formula of the selected cell not to be shown in the formula bar
- The incorrect generation of the typescript definitions
- The visual issue with the alignment of the cell content
- The issue with serializing of empty cells or cells with zero value

## Version 4.0

Released on October 19, 2020

### New functionality

- [Math functions](functions.md)
- [TypeScript Support](using_typescript.md)
- The ability [to freeze columns on the left side of the spreadsheet](configuration.md#frozen-rows-and-columns) via the [leftSplit](api/spreadsheet_leftsplit_config.md) configuration property
- [The Text format for displaying the content of a cell as text is added to default number formats](number_formatting.md#default-number-formats)
- The ability to select multiple scattered ranges of cells by using ["Ctrl+Shift+Left Click"](hotkeys.md#selection) combination

### Fixes

- Fix the incorrect work of the colorpicker when applying the background color to the range of cells
- Fix the incorrect parsing of numbers when importing Excel files
- Fix the issue which caused all data copied from a Google or Excel table to be inserted into one cell of the spreadsheet
- Fix the incorrect work of the [editLine:false](api/spreadsheet_editline_config.md) property that caused the edit operation to finish with an error in the console
- Fix the issue with the [AfterValueChange](api/spreadsheet_aftervaluechange_event.md) event which caused the event to be called twice

## Version 3.1.4

Released on September 19, 2019

### Fixes

- Styles fixes

## Version 3.1.3

Released on September 19, 2019

### Fixes

- Issue with focus on a cell when Spreadsheet is attached to Layout

## Version 3.1.2

Released on March 25, 2019

### Fixes

- Issues with text styles in Excel export
- Issue with underlining right-aligned text

## Version 3.1.1

Released on March 25, 2019

### Fixes

- Issues with export to Excel

## Version 3.1

Released on March 21, 2019

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

Released on December 13, 2018

### Fixes

- Incorrect behavior in the custom read-only mode
- Issues with methods of removing a column/row
- Issues with loss of focus on the edit line
- Issues with hotkeys on the active cell

## Version 3.0.2

Released on December 6, 2018

### Fixes

- Issues with hotkeys behavior
- Issues with placement of the selection handle
- Issues with loss of focus on the active cell
- Incorrect behavior of selection on the active cell
- Incorrect behavior of hotkeys on the active cell
- Incorrect behavior of scrolling by arrow keys

## Version 3.0.1

Released on November 8, 2018

### Fixes

- Incorrect behavior of the undo operation
- Incorrect behavior of the cut-paste operation on a group of cells

## Version 3.0

Released on October 25, 2018

### Breaking change

{{note API of the version 3.0 is not compatible with API v2.1.}}

In comparison to the previous PHP-based version, DHTMLX Spreadsheet of version 3.0 is a completely client-side JavaScript component.

Check the [Migration](migration.md) article to get information about the usage of new API. If you feel like keep using the previous version for a while, [the documentation for DHTMLX Spreadsheet v2.1](https://docs.dhtmlx.com/spreadsheet__index.html) is still available.

### New functionality

The API of Spreadsheet has been changed and became more handy to work with. One more significant update is the total redesign of the component which gave a modern look to the interface of Spreadsheet. Together with the fresh appearance the usability of DHTMLX Spreadsheet is greatly enhanced.

- [](index.md)
- [Fully customizable structure and adjustable look and feel](customization.md)
- [Completely refreshed API](api/api_overview.md)
