---
sidebar_label: API overview
title: API Overview
description: You can have an API overview of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# API overview

## Constructor

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    rowsCount: 20,
    colsCount: 20
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- a hash of config options (check below)

## Spreadsheet methods

| Name                                                          | Description                                         |
| :------------------------------------------------------------ | :-------------------------------------------------- |
| [addColumn()](/api/spreadsheet_addcolumn_method/)            | @getshort(/api/spreadsheet_addcolumn_method.md)     |
| [addRow()](/api/spreadsheet_addrow_method/)                  | @getshort(/api/spreadsheet_addrow_method.md)         |
| [addSheet()](/api/spreadsheet_addsheet_method/)              | @getshort(/api/spreadsheet_addsheet_method.md)       |
| [clear()](/api/spreadsheet_clear_method/)                    | @getshort(/api/spreadsheet_clear_method.md)          |
| [clearSheet()](/api/spreadsheet_clearsheet_method/)          | @getshort(/api/spreadsheet_clearsheet_method.md)     |
| [deleteColumn()](/api/spreadsheet_deletecolumn_method/)      | @getshort(/api/spreadsheet_deletecolumn_method.md)   |
| [deleteRow()](/api/spreadsheet_deleterow_method/)            | @getshort(/api/spreadsheet_deleterow_method.md)      |
| [eachCell()](/api/spreadsheet_eachcell_method/)              | @getshort(/api/spreadsheet_eachcell_method.md)       |
| [endEdit()](/api/spreadsheet_endedit_method/)                | @getshort(/api/spreadsheet_endedit_method.md)        |
| [fitColumn()](/api/spreadsheet_fitcolumn_method/)            | @getshort(/api/spreadsheet_fitcolumn_method.md)      |
| [freezeCols()](/api/spreadsheet_freezecols_method/)          | @getshort(/api/spreadsheet_freezecols_method.md)     |
| [freezeRows()](/api/spreadsheet_freezerows_method/)          | @getshort(/api/spreadsheet_freezerows_method.md)     |
| [getActiveSheet()](/api/spreadsheet_getactivesheet_method/)  | @getshort(/api/spreadsheet_getactivesheet_method.md) |
| [getFilter()](/api/spreadsheet_getfilter_method/)            | @getshort(/api/spreadsheet_getfilter_method.md)      |
| [getFormat()](/api/spreadsheet_getformat_method/)            | @getshort(/api/spreadsheet_getformat_method.md)      |
| [getFormula()](/api/spreadsheet_getformula_method/)          | @getshort(/api/spreadsheet_getformula_method.md)     |
| [getSheets()](/api/spreadsheet_getsheets_method/)            | @getshort(/api/spreadsheet_getsheets_method.md)      |
| [getStyle()](/api/spreadsheet_getstyle_method/)              | @getshort(/api/spreadsheet_getstyle_method.md)       |
| [getValue()](/api/spreadsheet_getvalue_method/)              | @getshort(/api/spreadsheet_getvalue_method.md)       |
| [hideCols()](/api/spreadsheet_hidecols_method/)              | @getshort(/api/spreadsheet_hidecols_method.md)       |
| [hideRows()](/api/spreadsheet_hiderows_method/)              | @getshort(/api/spreadsheet_hiderows_method.md)       |
| [hideSearch()](/api/spreadsheet_hidesearch_method/)          | @getshort(/api/spreadsheet_hidesearch_method.md)     |
| [insertLink()](/api/spreadsheet_insertlink_method/)          | @getshort(/api/spreadsheet_insertlink_method.md)     |
| [isLocked()](/api/spreadsheet_islocked_method/)              | @getshort(/api/spreadsheet_islocked_method.md)       |
| [load()](/api/spreadsheet_load_method/)                      | @getshort(/api/spreadsheet_load_method.md)           |
| [lock()](/api/spreadsheet_lock_method/)                      | @getshort(/api/spreadsheet_lock_method.md)           |
| [mergeCells()](/api/spreadsheet_mergecells_method/)          | @getshort(/api/spreadsheet_mergecells_method.md)     |
| [parse()](/api/spreadsheet_parse_method/)                    | @getshort(/api/spreadsheet_parse_method.md)          |
| [redo()](/api/spreadsheet_redo_method/)                      | @getshort(/api/spreadsheet_redo_method.md)           |
| [removeSheet()](/api/spreadsheet_removesheet_method/)        | @getshort(/api/spreadsheet_removesheet_method.md)    |
| [search()](/api/spreadsheet_search_method/)                  | @getshort(/api/spreadsheet_search_method.md)         |
| [serialize()](/api/spreadsheet_serialize_method/)            | @getshort(/api/spreadsheet_serialize_method.md)      |
| [setActiveSheet()](/api/spreadsheet_setactivesheet_method/)  | @getshort(/api/spreadsheet_setactivesheet_method.md) |
| [setFilter()](/api/spreadsheet_setfilter_method/)            | @getshort(/api/spreadsheet_setfilter_method.md)      |
| [setFormat()](/api/spreadsheet_setformat_method/)            | @getshort(/api/spreadsheet_setformat_method.md)      |
| [setStyle()](/api/spreadsheet_setstyle_method/)              | @getshort(/api/spreadsheet_setstyle_method.md)       |
| [setValidation()](/api/spreadsheet_setvalidation_method/)    | @getshort(/api/spreadsheet_setvalidation_method.md)  |
| [setValue()](/api/spreadsheet_setvalue_method/)              | @getshort(/api/spreadsheet_setvalue_method.md)       |
| [showCols()](/api/spreadsheet_showcols_method/)              | @getshort(/api/spreadsheet_showcols_method.md)       |
| [showRows()](/api/spreadsheet_showrows_method/)              | @getshort(/api/spreadsheet_showrows_method.md)       |
| [startEdit()](/api/spreadsheet_startedit_method/)            | @getshort(/api/spreadsheet_startedit_method.md)      |
| [undo()](/api/spreadsheet_undo_method/)                      | @getshort(/api/spreadsheet_undo_method.md)           |
| [unfreezeCols()](/api/spreadsheet_unfreezecols_method/)      | @getshort(/api/spreadsheet_unfreezecols_method.md)   |
| [unfreezeRows()](/api/spreadsheet_unfreezerows_method/)      | @getshort(/api/spreadsheet_unfreezerows_method.md)   |
| [unlock()](/api/spreadsheet_unlock_method/)                  | @getshort(/api/spreadsheet_unlock_method.md)         |

## Spreadsheet events

| Name                                                              | Description                                            |
| :---------------------------------------------------------------- | :----------------------------------------------------- |
| [afterAction](/api/spreadsheet_afteraction_event/)               | @getshort(/api/spreadsheet_afteraction_event.md)        |
| [afterClear](/api/spreadsheet_afterclear_event/)                 | @getshort(/api/spreadsheet_afterclear_event.md)         |
| [afterColumnAdd](/api/spreadsheet_aftercolumnadd_event/)         | @getshort(/api/spreadsheet_aftercolumnadd_event.md)     |
| [afterColumnDelete](/api/spreadsheet_aftercolumndelete_event/)   | @getshort(/api/spreadsheet_aftercolumndelete_event.md)  |
| [afterDataLoaded](/api/spreadsheet_afterdataloaded_event/)       | @getshort(/api/spreadsheet_afterdataloaded_event.md)    |
| [afterEditEnd](/api/spreadsheet_aftereditend_event/)             | @getshort(/api/spreadsheet_aftereditend_event.md)       |
| [afterEditStart](/api/spreadsheet_aftereditstart_event/)         | @getshort(/api/spreadsheet_aftereditstart_event.md)     |
| [afterFocusSet](/api/spreadsheet_afterfocusset_event/)           | @getshort(/api/spreadsheet_afterfocusset_event.md)      |
| [afterFormatChange](/api/spreadsheet_afterformatchange_event/)   | @getshort(/api/spreadsheet_afterformatchange_event.md)  |
| [afterRowAdd](/api/spreadsheet_afterrowadd_event/)               | @getshort(/api/spreadsheet_afterrowadd_event.md)        |
| [afterRowDelete](/api/spreadsheet_afterrowdelete_event/)         | @getshort(/api/spreadsheet_afterrowdelete_event.md)     |
| [afterSelectionSet](/api/spreadsheet_afterselectionset_event/)   | @getshort(/api/spreadsheet_afterselectionset_event.md)  |
| [afterSheetAdd](/api/spreadsheet_aftersheetadd_event/)           | @getshort(/api/spreadsheet_aftersheetadd_event.md)      |
| [afterSheetChange](/api/spreadsheet_aftersheetchange_event/)     | @getshort(/api/spreadsheet_aftersheetchange_event.md)   |
| [afterSheetClear](/api/spreadsheet_aftersheetclear_event/)       | @getshort(/api/spreadsheet_aftersheetclear_event.md)    |
| [afterSheetRemove](/api/spreadsheet_aftersheetremove_event/)     | @getshort(/api/spreadsheet_aftersheetremove_event.md)   |
| [afterSheetRename](/api/spreadsheet_aftersheetrename_event/)     | @getshort(/api/spreadsheet_aftersheetrename_event.md)   |
| [afterStyleChange](/api/spreadsheet_afterstylechange_event/)     | @getshort(/api/spreadsheet_afterstylechange_event.md)   |
| [afterValueChange](/api/spreadsheet_aftervaluechange_event/)     | @getshort(/api/spreadsheet_aftervaluechange_event.md)   |
| [beforeAction](/api/spreadsheet_beforeaction_event/)             | @getshort(/api/spreadsheet_beforeaction_event.md)       |
| [beforeClear](/api/spreadsheet_beforeclear_event/)               | @getshort(/api/spreadsheet_beforeclear_event.md)        |
| [beforeColumnAdd](/api/spreadsheet_beforecolumnadd_event/)       | @getshort(/api/spreadsheet_beforecolumnadd_event.md)    |
| [beforeColumnDelete](/api/spreadsheet_beforecolumndelete_event/) | @getshort(/api/spreadsheet_beforecolumndelete_event.md) |
| [beforeEditEnd](/api/spreadsheet_beforeeditend_event/)           | @getshort(/api/spreadsheet_beforeeditend_event.md)      |
| [beforeEditStart](/api/spreadsheet_beforeeditstart_event/)       | @getshort(/api/spreadsheet_beforeeditstart_event.md)    |
| [beforeFocusSet](/api/spreadsheet_beforefocusset_event/)         | @getshort(/api/spreadsheet_beforefocusset_event.md)     |
| [beforeFormatChange](/api/spreadsheet_beforeformatchange_event/) | @getshort(/api/spreadsheet_beforeformatchange_event.md) |
| [beforeRowAdd](/api/spreadsheet_beforerowadd_event/)             | @getshort(/api/spreadsheet_beforerowadd_event.md)       |
| [beforeRowDelete](/api/spreadsheet_beforerowdelete_event/)       | @getshort(/api/spreadsheet_beforerowdelete_event.md)    |
| [beforeSelectionSet](/api/spreadsheet_beforeselectionset_event/) | @getshort(/api/spreadsheet_beforeselectionset_event.md) |
| [beforeSheetAdd](/api/spreadsheet_beforesheetadd_event/)         | @getshort(/api/spreadsheet_beforesheetadd_event.md)     |
| [beforeSheetChange](/api/spreadsheet_beforesheetchange_event/)   | @getshort(/api/spreadsheet_beforesheetchange_event.md)  |
| [beforeSheetClear](/api/spreadsheet_beforesheetclear_event/)     | @getshort(/api/spreadsheet_beforesheetclear_event.md)   |
| [beforeSheetRemove](/api/spreadsheet_beforesheetremove_event/)   | @getshort(/api/spreadsheet_beforesheetremove_event.md)  |
| [beforeSheetRename](/api/spreadsheet_beforesheetrename_event/)   | @getshort(/api/spreadsheet_beforesheetrename_event.md)  |
| [beforeStyleChange](/api/spreadsheet_beforestylechange_event/)   | @getshort(/api/spreadsheet_beforestylechange_event.md)  |
| [beforeValueChange](/api/spreadsheet_beforevaluechange_event/)   | @getshort(/api/spreadsheet_beforevaluechange_event.md)  |

## Spreadsheet properties

| Name                                                              | Description                                           |
| ---------------------------------------------------------------   | ----------------------------------------------------- |
| [colsCount](/api/spreadsheet_colscount_config/)                  | @getshort(/api/spreadsheet_colscount_config.md)        |
| [dateFormat](/api/spreadsheet_dateformat_config/)                | @getshort(/api/spreadsheet_dateformat_config.md)       |
| [editLine](/api/spreadsheet_editline_config/)                    | @getshort(/api/spreadsheet_editline_config.md)         |
| [exportModulePath](/api/spreadsheet_exportmodulepath_config/)    | @getshort(/api/spreadsheet_exportmodulepath_config.md) |
| [formats](/api/spreadsheet_formats_config/)                      | @getshort(/api/spreadsheet_formats_config.md)          |
| [importModulePath](/api/spreadsheet_importmodulepath_config/)    | @getshort(/api/spreadsheet_importmodulepath_config.md) |
| [localization](/api/spreadsheet_localization_config/)            | @getshort(/api/spreadsheet_localization_config.md)     |
| [menu](/api/spreadsheet_menu_config/)                            | @getshort(/api/spreadsheet_menu_config.md)             |
| [multiSheets](/api/spreadsheet_multisheets_config/)              | @getshort(/api/spreadsheet_multisheets_config.md)      |
| [readonly](/api/spreadsheet_readonly_config/)                    | @getshort(/api/spreadsheet_readonly_config.md)         |
| [rowsCount](/api/spreadsheet_rowscount_config/)                  | @getshort(/api/spreadsheet_rowscount_config.md)        |
| [timeFormat](/api/spreadsheet_timeformat_config/)                | @getshort(/api/spreadsheet_timeformat_config.md)       |
| [toolbarBlocks](/api/spreadsheet_toolbarblocks_config/)          | @getshort(/api/spreadsheet_toolbarblocks_config.md)    |


## Selection methods

| Name                                                                 | Description                                           |
| :------------------------------------------------------------------- | :---------------------------------------------------- |
| [getFocusedCell()](/api/selection_getfocusedcell_method/)           | @getshort(/api/selection_getfocusedcell_method.md)     |
| [getSelectedCell()](/api/selection_getselectedcell_method/)         | @getshort(/api/selection_getselectedcell_method.md)    |
| [removeSelectedCell()](/api/selection_removeselectedcell_method/)   | @getshort(/api/selection_removeselectedcell_method.md) |
| [setFocusedCell()](/api/selection_setfocusedcell_method/)           | @getshort(/api/selection_setfocusedcell_method.md)     |
| [setSelectedCell()](/api/selection_setselectedcell_method/)         | @getshort(/api/selection_setselectedcell_method.md)    |

## Events Bus methods

| Name                                       | Description                               |
| ------------------------------------------ | ----------------------------------------- |
| [detach()](/api/eventsbus_detach_method/) | @getshort(/api/eventsbus_detach_method.md) |
| [fire()](/api/eventsbus_fire_method/)     | @getshort(/api/eventsbus_fire_method.md)   |
| [on()](/api/eventsbus_on_method/)         | @getshort(/api/eventsbus_on_method.md)     |

## Export methods

| Name                                | Description                          |
| ----------------------------------- | ------------------------------------ |
| [json()](/api/export_json_method/) | @getshort(/api/export_json_method.md) |
| [xlsx()](/api/export_xlsx_method/) | @getshort(/api/export_xlsx_method.md) |
