module.exports = {
    docs: [
        {
            type: "doc",
            id: "index"
        },
        {
            type: "doc",
            id: "how_to_start"
        },
        {
            type: "category",
            label: "What's new and migration",
            collapsible: true,
            collapsed: true,
            link: {
                type: 'generated-index',
                title: "What's new and migration",
                //description: '',
                //slug: '/category/docusaurus-guides',
                keywords: ['news'],
                image: '/img/docusaurus.png'
            },
            items: [
                "whats_new",
                "migration",
                "deprecated_doc"
            ]
        },
        {
            type: "category",
            label: "API",
            collapsible: true,
            collapsed: true,
            link: {
                type: 'doc',
                id: "api/api_overview"
            },
            items: [
                //"api/api_overview",
                {
                    type: "category",
                    label: "Spreadsheet methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/methods_overview"
                    },
                    items: [
                        "api/spreadsheet_addcolumn_method",
                        "api/spreadsheet_addrow_method",
                        "api/spreadsheet_addsheet_method",
                        "api/spreadsheet_clear_method",
                        "api/spreadsheet_clearsheet_method",
                        "api/spreadsheet_deletecolumn_method",
                        "api/spreadsheet_deleterow_method",
                        "api/spreadsheet_eachcell_method",
                        "api/spreadsheet_endedit_method",
                        "api/spreadsheet_fitcolumn_method",
                        "api/spreadsheet_freezecols_method",
                        "api/spreadsheet_freezerows_method",
                        "api/spreadsheet_getactivesheet_method",
                        "api/spreadsheet_getfilter_method",
                        "api/spreadsheet_getformat_method",
                        "api/spreadsheet_getformula_method",
                        "api/spreadsheet_getsheets_method",
                        "api/spreadsheet_getstyle_method",
                        "api/spreadsheet_getvalue_method",
                        "api/spreadsheet_hidecols_method",
                        "api/spreadsheet_hiderows_method",
                        "api/spreadsheet_hidesearch_method",
                        "api/spreadsheet_insertlink_method",
                        "api/spreadsheet_islocked_method", 
                        "api/spreadsheet_load_method",
                        "api/spreadsheet_lock_method",
                        "api/spreadsheet_mergecells_method",
                        "api/spreadsheet_parse_method",
                        "api/spreadsheet_redo_method",
                        "api/spreadsheet_removesheet_method",
                        "api/spreadsheet_search_method",
                        "api/spreadsheet_serialize_method",
                        "api/spreadsheet_setactivesheet_method",
                        "api/spreadsheet_setfilter_method",
                        "api/spreadsheet_setformat_method",
                        "api/spreadsheet_setstyle_method",
                        "api/spreadsheet_setvalidation_method",
                        "api/spreadsheet_setvalue_method",
                        "api/spreadsheet_showcols_method",
                        "api/spreadsheet_showrows_method",
                        "api/spreadsheet_sortcells_method",
                        "api/spreadsheet_startedit_method",
                        "api/spreadsheet_undo_method",
                        "api/spreadsheet_unfreezecols_method",
                        "api/spreadsheet_unfreezerows_method",
                        "api/spreadsheet_unlock_method"
                    ]
                },
                {
                    type: "category",
                    label: "Spreadsheet events",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/events_overview"
                    },
                    items: [
                        "api/spreadsheet_afteraction_event",
                        "api/spreadsheet_afterclear_event",
                        "api/spreadsheet_aftercolumnadd_event",
                        "api/spreadsheet_aftercolumndelete_event",
                        "api/spreadsheet_afterdataloaded_event",
                        "api/spreadsheet_aftereditend_event",
                        "api/spreadsheet_aftereditstart_event",
                        "api/spreadsheet_afterfocusset_event",
                        "api/spreadsheet_afterformatchange_event",
                        "api/spreadsheet_afterrowadd_event",
                        "api/spreadsheet_afterrowdelete_event",
                        "api/spreadsheet_afterselectionset_event",
                        "api/spreadsheet_aftersheetadd_event",
                        "api/spreadsheet_aftersheetchange_event",
                        "api/spreadsheet_aftersheetclear_event",
                        "api/spreadsheet_aftersheetremove_event",
                        "api/spreadsheet_aftersheetrename_event",
                        "api/spreadsheet_afterstylechange_event",
                        "api/spreadsheet_aftervaluechange_event",
                        "api/spreadsheet_beforeaction_event",
                        "api/spreadsheet_beforeclear_event",
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
                        "api/spreadsheet_beforesheetclear_event",
                        "api/spreadsheet_beforesheetremove_event",
                        "api/spreadsheet_beforesheetrename_event",
                        "api/spreadsheet_beforestylechange_event",
                        "api/spreadsheet_beforevaluechange_event",
                        "api/spreadsheet_groupfill_event"
                    ]
                },
                {
                    type: "doc",
                    id: "api/overview/actions_overview"
                },
                {
                    type: "category",
                    label: "Spreadsheet properties",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/properties_overview"
                    },
                    items: [
                        "api/spreadsheet_colscount_config",
                        "api/spreadsheet_dateformat_config",
                        "api/spreadsheet_editline_config",
                        "api/spreadsheet_exportmodulepath_config",
                        "api/spreadsheet_formats_config",
                        "api/spreadsheet_importmodulepath_config",
                        "api/spreadsheet_localization_config",
                        "api/spreadsheet_menu_config",
                        "api/spreadsheet_multisheets_config",
                        "api/spreadsheet_readonly_config",
                        "api/spreadsheet_rowscount_config",
                        "api/spreadsheet_timeformat_config",
                        "api/spreadsheet_toolbarblocks_config"
                    ]
                },
                {
                    type: "category",
                    label: "Selection methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/selection_overview"
                    },
                    items: [
                        "api/selection_getfocusedcell_method",
                        "api/selection_getselectedcell_method",
                        "api/selection_removeselectedcell_method",
                        "api/selection_setfocusedcell_method",
                        "api/selection_setselectedcell_method"
                    ]
                },
                {
                    type: "category",
                    label: "Events Bus methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/eventbus_overview"
                    },
                    items: [
                        "api/eventsbus_detach_method",
                        "api/eventsbus_fire_method",
                        "api/eventsbus_on_method"
                    ]
                },
                {
                    type: "category",
                    label: "Export methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: "api/overview/export_overview"
                    },
                    items: [
                        "api/export_json_method",
                        "api/export_xlsx_method"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Guides",
            collapsible: true,
            collapsed: false,
            link: {
                type: 'doc',
                id: "guides"
            },
            items: [
                //"guides",
                {
                    type: "category",
                    label: "Developer guides",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'generated-index',
                        title: "Developer guides",
                        keywords: ['developer guides'],
                        image: '/img/docusaurus.png'
                    },
                    items: [
                        "initialization",
                        "configuration",
                        "loading_data",
                        "working_with_ssheet",
                        "working_with_sheets",
                        "working_with_cells",
                        "number_formatting",
                        "functions",
                        "handling_events",
                        "localization",
                        "customization",
                        {
                            type: "category",
                            label: "Themes",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'generated-index',
                                title: "Themes",
                                keywords: ['themes'],
                                image: '/img/docusaurus.png'
                            },
                            items: [
                                "themes/themes",
                                "themes/base_themes_configuration",
                                "themes/custom_theme"
                            ]
                        },
                        {
                            type: "category",
                            label: "Integrations",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'generated-index',
                                title: "Integrations",
                                keywords: ['integrations'],
                                image: '/img/docusaurus.png'
                            },
                            items: [
                                "angular_integration",
                                "react_integration",
                                "svelte_integration",
                                "vuejs_integration"
                            ]
                        },
                        "using_typescript"
                    ]
                },
                {
                    type: "category",
                    label: "User guides",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: 'generated-index',
                        title: "User guides",
                        keywords: ['User guides'],
                        image: '/img/docusaurus.png'
                    },
                    items: [
                        "hotkeys",
                        "work_with_sheets",
                        "work_with_rows_cols",
                        {
                            type: "category",
                            label: "Work with cells",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: 'generated-index',
                                title: "Work with cells",
                                keywords: ['work with cells'],
                                image: '/img/docusaurus.png'
                            },
                            items: [
                                "work_with_cells",
                                "data_formatting",
                                "number_formatting_guide",
                                "merge_cells"
                            ]
                        },
                        "data_search",
                        "sorting_data",
                        "filtering_data",
                        "excel_import_export"
                    ]
                }
            ]
        }
    ]
};
