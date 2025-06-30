---
sidebar_label: Localization
title: Localization
description: You can learn about the localization of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Localization

You can localize labels in the interface of DHTMLX Spreadsheet and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Default locale

The English locale is used by default:

~~~jsx
const en = {
    // Toolbar
    undo: "Undo",
    redo: "Redo",

    textColor: "Text color",
    backgroundColor: "Background color",

    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikethrough: "Strikethrough",

    link: "Link",

    halign: "Horizontal align",
    valign: "Vertical align",
    left: "Left",
    right: "Right",
    center: "Center",
    top: "Top",
    bottom: "Bottom",
    multiline: "Text wrapping",
    clip: "Clip",
    wrap: "Wrap",
    merge: "Merge",
    unmerge: "Unmerge",

    lockCell: "Lock cell",
    unlockCell: "Unlock cell",

    clear: "Clear",
    clearValue: "Clear value",
    clearStyles: "Clear styles",
    clearAll: "Clear all",

    columns: "Columns",
    rows: "Rows",
    addColumn: "Add column left",
    removeColumn: "Remove column {col}",
    removeColumns: "Remove columns {col}",
    fitToData: "Fit to data",
    addRow: "Add row above",
    removeRow: "Remove row {row}",
    removeRows: "Remove rows {row}",
    row: "row",
    col: "col",
    freeze: "Freeze",
    freezeToCol: "Freeze up to column {col}",
    freezeToRow: "Freeze up to row {row}",
    unfreezeRows: "Unfreeze rows",
    unfreezeCols: "Unfreeze columns",
    hideCol: "Hide column {col}",
    hideCols: "Hide columns {col}",
    showCols: "Show columns",
    hideRows: "Hide rows {row}",
    hideRow: "Hide row {row}",
    showRows: "Show rows",

    format: "Format",
    common: "Common",
    number: "Number",
    currency: "Currency",
    percent: "Percent",
    text: "Text",
    date: "Date",
    time: "Time",

    filter: "Filter",

    help: "Help",

    custom: "Custom",

    border: "Border",
    border_all: "All borders",
    border_inner: "Inner borders",
    border_horizontal: "Horizontal borders",
    border_vertical: "Vertical borders",
    border_outer: "Outer borders",
    border_color: "Border color",
    border_left: "Left border",
    border_top: "Top border",
    border_right: "Right border",
    border_bottom: "Bottom border",
    border_clear: "Clear borders",
    border_style: "Border style",

    // Tabbar
    deleteSheet: "Delete",
    renameSheet: "Rename",
    renameSheetAlert: "A sheet with the name $name already exists. Please enter another name. ",

    // Menu
    file: "File",
    import: "Import",
    export: "Export",
    downloadAs: "Download as...",
    importAs: "Import as...",

    data: "Data",
    validation: "Data validation",
    search: "Search",
    sort: "Sort",
    ascSort: "Sort A to Z",
    descSort: "Sort Z to A",

    //Actions
    copy: "Copy",
    edit: "Edit",
    insert: "Insert",
    remove: "Remove",
    linkCopied: "Link copied to clipboard",


    //filter
    e: "Is empty",
    ne: "Is not empty",
    tc: "Text contains",
    tdc: "Text doesn't contain",
    ts: "Text starts with",
    te: "Text ends with",
    tex: "Text is exactly",
    d: "Date is",
    db: "Date is before",
    da: "Date is after",
    gt: "Greater than",
    geq: "Greater or equal to",
    lt: "Less than",
    leq: "Less or equal to",
    eq: "Is equal to",
    neq: "Is not equal to",
    ib: "Is between",
    inb: "Is not between",

    none: "None",
    value: "Value",
    values: "By values",
    condition: "By condition",
    and: "And",

    blank: "(Blank)",

    // Buttons
    cancel: "Cancel",
    save: "Save",
    removeValidation: "Remove validation",
    selectAll: "Select all",
    unselectAll: "Unselect all",
    apply: "Apply",
    ok: "Ok",

    // Messages
    alertTitle: "There was a problem!",
    mergeAlertMessage: "You can't $action a range containing merges!",
    spanMergeAlert: "You can't merge frozen and non-frozen cells!",
    dontShowAgain: "Don't show again",
    spanPasteError: "You can't paste merges that cross the boundary of a frozen region",
    spanMergeLockedError: "You can't merge locked cells!",
    spanUnmergeLockedError: "You can't unmerge locked cells!",
    spanOverFilteredRow: "You can't merge cells over a filtered row.",
    removeAlert: "You can't remove last $name!",
};
~~~

## Custom locale

To apply a different locale you need to:

- provide translations for all text labels in Spreadsheet, e.g. for the Russian locale:

~~~jsx
const ru = {
    // language settings
};
~~~

- apply the new locale by calling the `dhx.i18n.setLocale()` method before initializing Spreadsheet:

~~~jsx
dhx.i18n.setLocale("spreadsheet", ru);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## Default locale for formulas

The i18n locale for the Spreadsheet popup with descriptions for formulas is contained in the `dhx.i18n.formulas` object. The default locale for formulas is the following:

~~~jsx
const en = {
    SUM: [
        [
            "Number1",
            "Required. The first value to sum."
        ],
        [
            "Number2",
            "Optional. The second value to sum."
        ],
        [
            "Number3",
            "Optional. The third value to sum."
        ]
    ],
    AVERAGE: [
        [
            "Number1",
            "Required. A number or cell reference that refers to numeric values."
        ],
        [
            "Number2",
            "Optional. A number or cell reference that refers to numeric values."
        ]
    ],
    // more formulas' descriptions
};
~~~

You can check the full default locale for formulas in the [HTML tab of the related snippet](https://snippet.dhtmlx.com/yn5hyyim).

## Custom locale for formulas

To apply a custom locale for Spreadsheet formulas, you need to use the `dhx.i18n.setLocale()` method in the following way:

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // the structure of the formulas in the locale
        name: [param: string, description: string][]
    }
): void;
~~~

You should pass the following parameters to the method:

<table>
    <tbody>
        <tr>
            <td><b>Parameter</b></td>
            <td align="center"><b>Description</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>(*required*) the name of the locale for formulas</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>(*required*) the locale object that contains formulas' descriptions as <i>key:value</i> pairs, where:<ul><li>the <b>key</b> is the name of the function</li><li>the <b>value</b> is an array of parameters the function takes. Each parameter of the function is an array of two elements, where:<ul><li>the first element is the name of the parameter</li><li>the second element is the description of the parameter</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

Check the example below:

~~~jsx
const de = {
    AVERAGE: [
        ["Zahl1", "Erforderlich. Eine Zahl oder Zellreferenz, die sich auf numerische Werte bezieht."],
        ["Zahl2", "Optional. Eine Zahl oder Zellreferenz, die auf numerische Werte verweist."]
    ],
    // other formulas' descriptions
};

dhx.i18n.setLocale("formulas", de);
~~~

## Example

In this snippet you can see how to switch between locales:

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
