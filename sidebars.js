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
          label: "Spreadsheet events",
          collapsible: true,
          collapsed: false,
          items: [
            "api/api_overview",
            //"api/spreadsheet_addrow",
            //"api/spreadsheet_addcolumn"
          ],
        },
        {
          type: "category",
          label: "Spreadsheet properties",
          collapsible: true,
          collapsed: false,
          items: [
            "api/api_overview",
            //"api/spreadsheet_addrow",
            //"api/spreadsheet_addcolumn"
            
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