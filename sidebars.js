module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "category",
      label: "Spreadsheet API",
      collapsible: true,
      collapsed: false,
      items: [
        "api/api_overview",
        {
          type: "category",
          label: "Spreadsheet methods",
          collapsible: true,
          collapsed: false,
          items: [
            "api/spreadsheet_addcolumn_method",
            "api/spreadsheet_addrow_method",
            "api/spreadsheet_addsheet_method",
            "api/spreadsheet_deletecolumn_method",
            "api/spreadsheet_deleterow_method",
            "api/spreadsheet_eachcell_method",
            "api/spreadsheet_endedit_method",
            "api/spreadsheet_getactivesheet_method",
            "api/spreadsheet_getformat_method",
            "api/spreadsheet_getformula_method",
            "api/spreadsheet_getsheets_method",
            "api/spreadsheet_getstyle_method",
            "api/spreadsheet_getvalue_method",
            "api/spreadsheet_islocked_method",
            "api/spreadsheet_load_method",
            "api/spreadsheet_lock_method",
            "api/spreadsheet_parse_method",
            "api/spreadsheet_redo_method",
            "api/spreadsheet_removesheet_method",
            "api/spreadsheet_serialize_method",
            "api/spreadsheet_setformat_method",
            "api/spreadsheet_setstyle_method",
            "api/spreadsheet_setvalue_method",
            "api/spreadsheet_startedit_method",
            "api/spreadsheet_undo_method",
            "api/spreadsheet_unlock_method",
          ],
        },
        {
          type: "category",
          label: "Selection methods",
          collapsible: true,
          collapsed: false,
          items: [
            "api/selection_getfocusedcell_method",
            "api/selection_getselectedcell_method",
            "api/selection_setfocusedcell_method",
            "api/selection_setselectedcell_method",
          ],
        },
        {
          type: "category",
          label: "Events Bus methods",
          collapsible: true,
          collapsed: false,
          items: [
            "api/eventsbus_detach_method",
            "api/eventsbus_fire_method",
            "api/eventsbus_on_method",
          ],
        },
        {
          type: "category",
          label: "Export methods",
          collapsible: true,
          collapsed: false,
          items: [
            "api/export_xlsx_method",
          ],
        },
        {
          type: "category",
          label: "Spreadsheet events",
          collapsible: true,
          collapsed: false,
          items: [
            "api/spreadsheet_aftercolumnadd_event",
            "api/spreadsheet_aftercolumndelete_event",
            "api/spreadsheet_aftereditend_event",
            "api/spreadsheet_aftereditstart_event",
            "api/spreadsheet_afterfocusset_event",
            "api/spreadsheet_afterformatchange_event",
            "api/spreadsheet_afterrowadd_event",
            "api/spreadsheet_afterrowdelete_event",
            "api/spreadsheet_afterselectionset_event",
            "api/spreadsheet_aftersheetadd_event",
            "api/spreadsheet_aftersheetchange_event",
            "api/spreadsheet_aftersheetremove_event",
            "api/spreadsheet_aftersheetrename_event",
            "api/spreadsheet_afterstylechange_event",
            "api/spreadsheet_aftervaluechange_event",
            "api/spreadsheet_beforecolumnadd_event",
            "api/spreadsheet_beforecolumndelete_event",
            "api/spreadsheet_beforeeditend_event",
            "api/spreadsheet_beforeeditstart_event",
            "api/spreadsheet_beforefocusset_event",
            "api/spreadsheet_beforeformatchange_event",
            "api/spreadsheet_beforerowadd_event",
            "api/spreadsheet_beforerowdelete_event",
            "api/spreadsheet_beforeselectionset_event",
            "api/spreadsheet_beforesheetadd_event",
            "api/spreadsheet_beforesheetchange_event",
            "api/spreadsheet_beforesheetremove_event",
            "api/spreadsheet_beforesheetrename_event",
            "api/spreadsheet_beforestylechange_event",
            "api/spreadsheet_beforevaluechange_event",
          ],
        },
        {
          type: "category",
          label: "Spreadsheet properties",
          collapsible: true,
          collapsed: false,
          items: [
            //"api/spreadsheet_autoformat_config", ?
            "api/spreadsheet_colscount_config",
            "api/spreadsheet_editline_config",
            "api/spreadsheet_exportmodulepath_config",
            //"api/spreadsheet_formataliases_config", ?
            "api/spreadsheet_formats_config",
            "api/spreadsheet_importmodulepath_config",
            "api/spreadsheet_leftsplit_config",
            "api/spreadsheet_menu_config",
            "api/spreadsheet_multisheets_config",
            "api/spreadsheet_readonly_config",
            "api/spreadsheet_rowscount_config",
            "api/spreadsheet_toolbarblocks_config",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Whats new and migration",
      collapsible: true,
      collapsed: false,
      items: [
        "whats_new",
        "migration",
      ],
    },
    {
      //type: "doc",
      //id: "whats_new",
    },
    {
      //type: "doc",
      //id: "migration",
    },
    {
      type: "doc",
      id: "overview", //to index?
    },
    {
      type: "category",
      label: "Guides",
      collapsible: false,
      items: [
        "initialization",
        "configuration",
        "localization",
        "loading_data",
        "working_with_ssheet",
        "working_with_sheets",
        "number_formatting",
        "functions",
        "handling_events",
        "customization",
        "using_typescript",
        "angular_integration",
        "react_integration",
        "vuejs_integration",
      ],
    },
    {
      type: "category",
      label: "User guides",
      collapsible: false,
      items: [
        "hotkeys",
        "work_with_cells",
        "work_with_rows_cols",
        "work_with_sheets",
        "data_formatting",
        "number_formatting_guide",
        "excel_import_export",
      ],
    },

  ],
};