---
sidebar_label: API overview
title: API Overview
description: You can have an API overview of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# API overview

## Constructor

~~~js
var spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
	rowsCount:20,
    colsCount:20
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- a hash of config options (check below)

## Spreadsheet methods

| Name                                         | Description                                         |
| :------------------------------------------- | :-------------------------------------------------- |
| [](api/spreadsheet_addcolumn_method.md)      | @getshort(api/spreadsheet_addcolumn_method.md)      |
| [](api/spreadsheet_addrow_method.md)         | @getshort(api/spreadsheet_addrow_method.md)         |
| [](api/spreadsheet_addsheet_method.md)       | @getshort(api/spreadsheet_addsheet_method.md)       |
| [](api/spreadsheet_clear_method.md)          | @getshort(api/spreadsheet_clear_method.md)          |
| [](api/spreadsheet_clearsheet_method.md)     | @getshort(api/spreadsheet_clearsheet_method.md)     |
| [](api/spreadsheet_deletecolumn_method.md)   | @getshort(api/spreadsheet_deletecolumn_method.md)   |
| [](api/spreadsheet_deleterow_method.md)      | @getshort(api/spreadsheet_deleterow_method.md)      |
| [](api/spreadsheet_eachcell_method.md)       | @getshort(api/spreadsheet_eachcell_method.md)       |
| [](api/spreadsheet_endedit_method.md)        | @getshort(api/spreadsheet_endedit_method.md)        |
| [](api/spreadsheet_getactivesheet_method.md) | @getshort(api/spreadsheet_getactivesheet_method.md) |
| [](api/spreadsheet_getformat_method.md)      | @getshort(api/spreadsheet_getformat_method.md)      |
| [](api/spreadsheet_getformula_method.md)     | @getshort(api/spreadsheet_getformula_method.md)     |
| [](api/spreadsheet_getsheets_method.md)      | @getshort(api/spreadsheet_getsheets_method.md)      |
| [](api/spreadsheet_getstyle_method.md)       | @getshort(api/spreadsheet_getstyle_method.md)       |
| [](api/spreadsheet_getvalue_method.md)       | @getshort(api/spreadsheet_getvalue_method.md)       |
| [](api/spreadsheet_islocked_method.md)       | @getshort(api/spreadsheet_islocked_method.md)       |
| [](api/spreadsheet_load_method.md)           | @getshort(api/spreadsheet_load_method.md)           |
| [](api/spreadsheet_lock_method.md)           | @getshort(api/spreadsheet_lock_method.md)           |
| [](api/spreadsheet_parse_method.md)          | @getshort(api/spreadsheet_parse_method.md)          |
| [](api/spreadsheet_redo_method.md)           | @getshort(api/spreadsheet_redo_method.md)           |
| [](api/spreadsheet_removesheet_method.md)    | @getshort(api/spreadsheet_removesheet_method.md)    |
| [](api/spreadsheet_serialize_method.md)      | @getshort(api/spreadsheet_serialize_method.md)      |
| [](api/spreadsheet_setactivesheet_method.md) | @getshort(api/spreadsheet_setactivesheet_method.md) |
| [](api/spreadsheet_setformat_method.md)      | @getshort(api/spreadsheet_setformat_method.md)      |
| [](api/spreadsheet_setstyle_method.md)       | @getshort(api/spreadsheet_setstyle_method.md)       |
| [](api/spreadsheet_setvalidation_method.md)  | @getshort(api/spreadsheet_setvalidation_method.md)  |
| [](api/spreadsheet_setvalue_method.md)       | @getshort(api/spreadsheet_setvalue_method.md)       |
| [](api/spreadsheet_startedit_method.md)      | @getshort(api/spreadsheet_startedit_method.md)      |
| [](api/spreadsheet_undo_method.md)           | @getshort(api/spreadsheet_undo_method.md)           |
| [](api/spreadsheet_unlock_method.md)         | @getshort(api/spreadsheet_unlock_method.md)         |

## Spreadsheet events

| Name                                            | Description                                            |
| :---------------------------------------------- | :----------------------------------------------------- |
| [](api/spreadsheet_afterclear_event.md)         | @getshort(api/spreadsheet_afterclear_event.md)         |
| [](api/spreadsheet_aftercolumnadd_event.md)     | @getshort(api/spreadsheet_aftercolumnadd_event.md)     |
| [](api/spreadsheet_aftercolumndelete_event.md)  | @getshort(api/spreadsheet_aftercolumndelete_event.md)  |
| [](api/spreadsheet_aftereditend_event.md)       | @getshort(api/spreadsheet_aftereditend_event.md)       |
| [](api/spreadsheet_aftereditstart_event.md)     | @getshort(api/spreadsheet_aftereditstart_event.md)     |
| [](api/spreadsheet_afterfocusset_event.md)      | @getshort(api/spreadsheet_afterfocusset_event.md)      |
| [](api/spreadsheet_afterformatchange_event.md)  | @getshort(api/spreadsheet_afterformatchange_event.md)  |
| [](api/spreadsheet_afterrowadd_event.md)        | @getshort(api/spreadsheet_afterrowadd_event.md)        |
| [](api/spreadsheet_afterrowdelete_event.md)     | @getshort(api/spreadsheet_afterrowdelete_event.md)     |
| [](api/spreadsheet_afterselectionset_event.md)  | @getshort(api/spreadsheet_afterselectionset_event.md)  |
| [](api/spreadsheet_aftersheetadd_event.md)      | @getshort(api/spreadsheet_aftersheetadd_event.md)      |
| [](api/spreadsheet_aftersheetchange_event.md)   | @getshort(api/spreadsheet_aftersheetchange_event.md)   |
| [](api/spreadsheet_aftersheetclear_event.md)    | @getshort(api/spreadsheet_aftersheetclear_event.md)    |
| [](api/spreadsheet_aftersheetremove_event.md)   | @getshort(api/spreadsheet_aftersheetremove_event.md)   |
| [](api/spreadsheet_aftersheetrename_event.md)   | @getshort(api/spreadsheet_aftersheetrename_event.md)   |
| [](api/spreadsheet_afterstylechange_event.md)   | @getshort(api/spreadsheet_afterstylechange_event.md)   |
| [](api/spreadsheet_aftervaluechange_event.md)   | @getshort(api/spreadsheet_aftervaluechange_event.md)   |
| [](api/spreadsheet_beforeclear_event.md)        | @getshort(api/spreadsheet_beforeclear_event.md)        |
| [](api/spreadsheet_beforecolumnadd_event.md)    | @getshort(api/spreadsheet_beforecolumnadd_event.md)    |
| [](api/spreadsheet_beforecolumndelete_event.md) | @getshort(api/spreadsheet_beforecolumndelete_event.md) |
| [](api/spreadsheet_beforeeditend_event.md)      | @getshort(api/spreadsheet_beforeeditend_event.md)      |
| [](api/spreadsheet_beforeeditstart_event.md)    | @getshort(api/spreadsheet_beforeeditstart_event.md)    |
| [](api/spreadsheet_beforefocusset_event.md)     | @getshort(api/spreadsheet_beforefocusset_event.md)     |
| [](api/spreadsheet_beforeformatchange_event.md) | @getshort(api/spreadsheet_beforeformatchange_event.md) |
| [](api/spreadsheet_beforerowadd_event.md)       | @getshort(api/spreadsheet_beforerowadd_event.md)       |
| [](api/spreadsheet_beforerowdelete_event.md)    | @getshort(api/spreadsheet_beforerowdelete_event.md)    |
| [](api/spreadsheet_beforeselectionset_event.md) | @getshort(api/spreadsheet_beforeselectionset_event.md) |
| [](api/spreadsheet_beforesheetadd_event.md)     | @getshort(api/spreadsheet_beforesheetadd_event.md)     |
| [](api/spreadsheet_beforesheetchange_event.md)  | @getshort(api/spreadsheet_beforesheetchange_event.md)  |
| [](api/spreadsheet_beforesheetclear_event.md)   | @getshort(api/spreadsheet_beforesheetclear_event.md)   |
| [](api/spreadsheet_beforesheetremove_event.md)  | @getshort(api/spreadsheet_beforesheetremove_event.md)  |
| [](api/spreadsheet_beforesheetrename_event.md)  | @getshort(api/spreadsheet_beforesheetrename_event.md)  |
| [](api/spreadsheet_beforestylechange_event.md)  | @getshort(api/spreadsheet_beforestylechange_event.md)  |
| [](api/spreadsheet_beforevaluechange_event.md)  | @getshort(api/spreadsheet_beforevaluechange_event.md)  |

## Spreadsheet properties

| Name                                           | Description                                           |
| ---------------------------------------------- | ----------------------------------------------------- |
| [](api/spreadsheet_colscount_config.md)        | @getshort(api/spreadsheet_colscount_config.md)        |
| [](api/spreadsheet_dateformat_config.md)       | @getshort(api/spreadsheet_dateformat_config.md)       |
| [](api/spreadsheet_editline_config.md)         | @getshort(api/spreadsheet_editline_config.md)         |
| [](api/spreadsheet_exportmodulepath_config.md) | @getshort(api/spreadsheet_exportmodulepath_config.md) |
| [](api/spreadsheet_formats_config.md)          | @getshort(api/spreadsheet_formats_config.md)          |
| [](api/spreadsheet_importmodulepath_config.md) | @getshort(api/spreadsheet_importmodulepath_config.md) |
| [](api/spreadsheet_leftsplit_config.md)        | @getshort(api/spreadsheet_leftsplit_config.md)        |
| [](api/spreadsheet_menu_config.md)             | @getshort(api/spreadsheet_menu_config.md)             |
| [](api/spreadsheet_multisheets_config.md)      | @getshort(api/spreadsheet_multisheets_config.md)      |
| [](api/spreadsheet_readonly_config.md)         | @getshort(api/spreadsheet_readonly_config.md)         |
| [](api/spreadsheet_rowscount_config.md)        | @getshort(api/spreadsheet_rowscount_config.md)        |
| [](api/spreadsheet_timeformat_config.md)       | @getshort(api/spreadsheet_timeformat_config.md)       |
| [](api/spreadsheet_toolbarblocks_config.md)    | @getshort(api/spreadsheet_toolbarblocks_config.md)    |
| [](api/spreadsheet_topsplit_config.md)         | @getshort(api/spreadsheet_topsplit_config.md)         |

## Selection methods

| Name                                           | Description                                           |
| :--------------------------------------------- | :---------------------------------------------------- |
| [](api/selection_getfocusedcell_method.md)     | @getshort(api/selection_getfocusedcell_method.md)     |
| [](api/selection_getselectedcell_method.md)    | @getshort(api/selection_getselectedcell_method.md)    |
| [](api/selection_removeselectedcell_method.md) | @getshort(api/selection_removeselectedcell_method.md) |
| [](api/selection_setfocusedcell_method.md)     | @getshort(api/selection_setfocusedcell_method.md)     |
| [](api/selection_setselectedcell_method.md)    | @getshort(api/selection_setselectedcell_method.md)    |

## Events Bus methods

| Name                               | Description                               |
| ---------------------------------- | ----------------------------------------- |
| [](api/eventsbus_detach_method.md) | @getshort(api/eventsbus_detach_method.md) |
| [](api/eventsbus_fire_method.md)   | @getshort(api/eventsbus_fire_method.md)   |
| [](api/eventsbus_on_method.md)     | @getshort(api/eventsbus_on_method.md)     |

## Export methods

| Name                          | Description                          |
| ----------------------------- | ------------------------------------ |
| [](api/export_xlsx_method.md) | @getshort(api/export_xlsx_method.md) |
