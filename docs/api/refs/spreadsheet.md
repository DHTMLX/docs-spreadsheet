dhtmlxSpreadSheet API
=========================

Constructor
-----------

~~~js
var spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
	rowsCount:20,
    colsCount:20
});
~~~

Parameters: 

- an HTML container (or the ID of an HTML container)
- a hash of config options (check below)

<div class='h2'>Objects</div>

- contextMenu
- [config](api/refs/spreadsheet_props.md)
- [events](api/refs/events_methods.md)
- [export](api/refs/export_methods.md)
- menu
- [selection](api/refs/selection_methods.md)
- toolbar

	

<div class='h2' id="methods">Methods</div>

{{api
- api/spreadsheet_addcolumn_method.md - adds a new column into the spreadsheet
- api/spreadsheet_addrow_method.md - adds a new row into the spreadsheet
- api/spreadsheet_addsheet_method.md - adds a new sheet into the spreadsheet
- api/spreadsheet_deletecolumn_method.md - removes a column from the spreadsheet
- api/spreadsheet_deleterow_method.md - removes a row from the spreadsheet
- api/spreadsheet_eachcell_method.md - iterates over cells in the spreadsheet
- api/spreadsheet_endedit_method.md - finishes editing in a cell
- api/spreadsheet_getactivesheet_method.md - returns the sheet that is currently active
- api/spreadsheet_getformat_method.md - gets the number format applied to the value of a cell
- api/spreadsheet_getformula_method.md - returns the formula of a cell
- api/spreadsheet_getsheets_method.md - gets all sheets of the spreadsheet
- api/spreadsheet_getstyle_method.md - returns styles applied to the spreadsheet cells
- api/spreadsheet_getvalue_method.md - returns the value(s) of a cell(s)
- api/spreadsheet_islocked_method.md - checks whether a cell is locked
- api/spreadsheet_load_method.md - loads data from an external file
- api/spreadsheet_lock_method.md - locks the specified cell
- api/spreadsheet_parse_method.md - loads data into spreadsheet from a local data source
- api/spreadsheet_redo_method.md - applies the reverted action once again
- api/spreadsheet_removesheet_method.md - removes a sheet from the spreadsheet by its id
- api/spreadsheet_serialize_method.md - serializes data of spreadsheet into an array of JSON objects
- api/spreadsheet_setformat_method.md - sets a specified format to the value of a cell
- api/spreadsheet_setstyle_method.md - applies styling to spreadsheet cells
- api/spreadsheet_setvalue_method.md - sets a value for a cell(s)
- api/spreadsheet_startedit_method.md - starts editing in a cell
- api/spreadsheet_undo_method.md - reverts the latest action
- api/spreadsheet_unlock_method.md - unlocks a locked cell
}}


{{block Selection}}
{{api
- api/selection/getfocusedcell.md - returns the id of a focused cell
- api/selection/getselectedcell.md - returns the id(s) of selected cells
- api/selection/setfocusedcell.md - sets focus on the specified cell
- api/selection/setselectedcell.md - selects the specified cell(s)
}}
{{end}}


{{block Events Bus}}
{{api
- api/eventsbus_detach_method.md - detaches a handler from an event (which was attached before by the on() method)
- api/eventsbus_fire_method.md - triggers an inner event
- api/eventsbus_on_method.md - attaches a handler to an inner event of SpreadSheet
}}
{{end}}


{{block Export}}
{{api
- api/export_xlsx_method.md
}}
{{end}}


<div class='h2' id="events">Events</div>

{{api
- api/spreadsheet_aftereditend_event.md - fires after editing of a cell is finished
- api/spreadsheet_aftereditstart_event.md - fires after editing of a cell has started
- api/spreadsheet_afterfocusset_event.md - fires after focus is set on a cell
- api/spreadsheet_afterformatchange_event.md - fires after the format of a cell is changed
- api/spreadsheet_afterselectionset_event.md - fires after cells are selected
- api/spreadsheet_aftersheetadd_event.md - fires after a new sheet is added
- api/spreadsheet_aftersheetchange_event.md - fires after the currently active sheet is changed
- api/spreadsheet_aftersheetremove_event.md - fires after a sheet is removed
- api/spreadsheet_aftersheetrename_event.md - fires after a sheet is renamed
- api/spreadsheet_afterstylechange_event.md - fires after the style of a cell is changed
- api/spreadsheet_aftervaluechange_event.md - fires after the value of a cell is changed
- api/spreadsheet_beforeeditend_event.md - fires before editing of a cell is finished
- api/spreadsheet_beforeeditstart_event.md - fires before editing of a cell has started
- api/spreadsheet_beforefocusset_event.md - fires before focus is set on a cell 
- api/spreadsheet_beforeformatchange_event.md - fires before the format of a cell is changed
- api/spreadsheet_beforeselectionset_event.md - fires before cells are selected 
- api/spreadsheet_beforesheetadd_event.md - fires before a new sheet is added 
- api/spreadsheet_beforesheetchange_event.md - fires before changing the currently active sheet
- api/spreadsheet_beforesheetremove_event.md - fires before a sheet is removed
- api/spreadsheet_beforesheetrename_event.md - fires before a sheet is renamed
- api/spreadsheet_beforestylechange_event.md - fires before the style of a cell is changed
- api/spreadsheet_beforevaluechange_event.md - fires before the value of a cell is changed
}}


<div class='h2' id="config">Properties</div>

{{api
- api/spreadsheet_colscount_config.md - sets the number of columns a spreadsheet will have on initialization
- api/spreadsheet_editline_config.md - shows/hides the editing bar
- api/spreadsheet_exportmodulepath_config.md - sets the path to the export module 
- api/spreadsheet_formats_config.md - defines the list of number formats
- api/spreadsheet_importmodulepath_config.md - sets the path to the import module 
- api/spreadsheet_leftsplit_config.md - sets the number of columns fixed to the left side of the spreadsheet
- api/spreadsheet_menu_config.md - shows/hides the menu
- api/spreadsheet_multisheets_config.md - enables/disables the ability to work with multiple sheets in the spreadsheet
- api/spreadsheet_readonly_config.md - enables/disables the readonly mode
- api/spreadsheet_rowscount_config.md - sets the number of rows a spreadsheet will have on initialization
- api/spreadsheet_toolbarblocks_config.md - specifies blocks that will be shown in the toolbar of spreadsheet
}}


@index:
- api/refs/spreadsheet_methods.md
- api/refs/spreadsheet_events.md
- api/refs/spreadsheet_props.md
- api/refs/selection_methods.md
- api/refs/events_methods.md
- api/refs/export_methods.md