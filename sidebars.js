module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "category",
      label: "SpreadSheet API",
      collapsible: true,
      collapsed: false,
      items: [
        // "whatsnew",
        // "migration",
      ],
    },
    {
      type: "doc",
      id: "whats_new",
    },
    {
      type: "doc",
      id: "migration",
    },
    {
      type: "doc",
      id: "overview",
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