---
sidebar_label: 本地化
title: 本地化
description: 本地化 DHTMLX Spreadsheet。了解默认语言区域、创建自定义语言区域、翻译内置组件和公式弹窗，以及应用语言区域。
---

# 本地化 {#localization}

您可以对 DHTMLX Spreadsheet 界面中的标签进行本地化，以任意语言呈现界面。为此，请为标签提供本地化字符串，并将您的语言区域应用到组件。

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 默认语言区域 {#default-locale}

默认使用英语区域：

~~~jsx
const en = {
    // Toolbar
    undo: "Undo",
    redo: "Redo",

    textColor: "Text color",
    backgroundColor: "Background color",

    fontSize: "Font size",

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
    columnWidth: "Column width",
    rowHeight: "Row height",
    widthInPixels: "Width in pixels",
    heightInPixels: "Height in pixels",
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
    scientific: "Scientific",

    filter: "Filter",
    openFilter: "Open filter",

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
    // the name of a new sheet is this prefix followed by a number: sheet1, sheet2
    defaultSheetName: "sheet",
    addSheet: "Add sheet",
    deleteSheet: "Delete",
    renameSheet: "Rename",
    renameSheetAlert: "A sheet with the name $name already exists. Please enter another name. ",

    // Menu
    file: "File",
    import: "Import",
    export: "Export",
    downloadAs: "Download as...",
    importAs: "Import as...",
    xlsxFormat: "Microsoft Excel(.xlsx)",

    data: "Data",
    validation: "Data validation",
    search: "Search",
    previousMatch: "Previous match",
    nextMatch: "Next match",
    closeSearch: "Close search",
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
    wasmNotSupported: "WebAssembly is not supported by your browser",
    invalidValue: "Invalid value",

    // Accessible names, read by screen readers
    // accessible name of a color button; {label} is the name of the control, {color} is a name from the colorpicker locale
    aria_colorButton: "{label}: {color}",
    // accessible names of the toolbars; the screen reader adds the word "toolbar" itself
    aria_toolbarFormatting: "Formatting",
    aria_toolbarBorders: "Borders",
    aria_toolbarSheets: "Sheets",
    aria_toolbarSearch: "Search",
    aria_toolbarLink: "Link",
    // accessible names of the line styles in the border style list
    aria_borderStyleThin: "Thin line",
    aria_borderStyleMedium: "Medium line",
    aria_borderStyleThick: "Thick line",
    aria_borderStyleDashed: "Dashed line",
    aria_borderStyleDotted: "Dotted line",
    aria_borderStyleDouble: "Double line",
    // accessible names of the context menus; the screen reader adds the word "menu" itself
    aria_cellMenu: "Cell",
    aria_sheetMenu: "Sheet",
    // accessible name of the menu bar; the screen reader adds the words "menu bar" itself
    aria_menuBar: "Main",
    // accessible name of the cell grid; the screen reader adds the word "grid" itself
    aria_grid: "Spreadsheet",
    // accessible name of the select-all corner, the first column header
    aria_selectAll: "Select all",
    // accessible name of the formula bar; {cell} is the address of the cell it shows, for example "B7"
    aria_formulaBar: "Formula bar, {cell}",
    // accessible name of the input that edits a cell; {cell} is the address of the cell, for example "B7"
    aria_cellEditor: "Cell editor, {cell}",
    // accessible name of the close icon of the formula help panel
    aria_closeFormulaHelp: "Close formula help",

    // Cell descriptions, read with the content of the active cell
    // read with the content of a cell that has a filter icon; the icon itself is hidden from assistive technology
    aria_filter: "Filter",
    aria_filterApplied: "Filter applied",
    // read after the content of a selected cell that holds a link; Alt+Enter opens the link
    aria_cellLink: "link",
    // read after the content of a selected locked cell; the lock icon itself is hidden from assistive technology
    aria_lockedState: "locked",
    // read after the value of a cell with a formula error; the formula engine writes the error as #ERROR, #REF! or #SPILL!
    aria_errorSyntax: "Syntax error. Check the formula",
    aria_errorCalc: "Calculation error. Check the values and functions",
    aria_errorRef: "Reference error. Check the cell references",
    aria_errorSpill: "Spill error. Clear the cells the result needs",
    // read after the value of a cell that breaks its list validation
    aria_invalidValue: "Invalid value. Choose a value from the list",

    // Screen reader announcements
    // announced when an editing key is pressed in the read-only mode
    aria_readonlySheet: "The sheet is read-only",
    // announced when Ctrl+Shift+9 or Ctrl+Shift+0 finds nothing to reveal
    aria_noHiddenRows: "No hidden rows in the selection",
    aria_noHiddenCols: "No hidden columns in the selection",
    // announced when a selection of several cells changes; {range} is built from aria_rangeExtent
    aria_selectedRange: "{range}, {count} cells",
    aria_rangeExtent: "{start} to {end}",
    // joins the ranges of a selection made with Ctrl
    aria_rangeSeparator: ", ",
    // announced after an action; {message} is one of the texts above
    aria_cellMessage: "{cell}: {message}",
    // announced when an action makes several errors appear; {first} is aria_cellMessage for the first of them
    aria_newErrors: "{count} new errors. {first}",
    // announced when an action puts several invalid values; {first} is aria_cellMessage for the first of them
    aria_invalidValues: "{count} invalid values. {first}",
    // announced once when an edit of a locked cell is refused; the second one when a range holds locked cells
    aria_lockedCell: "The cell is locked",
    aria_lockedCells: "Locked cells were not changed",
    // announced when the search text changes; followed by aria_searchMatch for the first match
    aria_searchResults: "Results: {count}.",
    // announced for the current match; {cell} is its address, for example "B7"
    aria_searchMatch: "{index} of {count}, {cell}",
    aria_searchNoResults: "No results",
    // announced when an export or an import of a file starts and ends
    aria_exportStarted: "Exporting the file",
    aria_exportDone: "The file is exported",
    aria_importStarted: "Importing the file",
    aria_importDone: "The file is imported",
    // announced when the column width or the row height command is applied; {size} is the applied size
    aria_columnWidthSet: "Column width set to {size} pixels",
    aria_rowHeightSet: "Row height set to {size} pixels",
};
~~~

以 `aria_` 开头的键不会显示在界面中。屏幕阅读器会将它们作为控件的名称、活动单元格的描述，以及实时区域的消息来朗读，[`announce()`](api/spreadsheet_announce_method.md) 方法也使用该实时区域。花括号中的部分（例如 `{cell}` 或 `{count}`）会在朗读字符串时被替换为相应的值。请在翻译后的字符串中保留它们。有关已翻译的无障碍字符串示例，请查看[无障碍](accessibility.md#translated-accessibility-strings)指南。

`defaultSheetName` 键用于设置默认工作表名称的前缀。Spreadsheet 会在其后添加一个数字，因此默认值 `"sheet"` 会生成名称 "sheet1"、"sheet2" 等。例如，使用 `"Tabelle"`（Microsoft Excel 在德语中使用的前缀），工作表将被命名为 "Tabelle1"、"Tabelle2" 等。

## 自定义语言区域 {#custom-locale}

要应用不同的语言区域，您需要：

- 为 Spreadsheet 中的所有文本标签提供翻译，例如，德语区域：

~~~jsx
const de = {
    // 语言设置
};
~~~

- 在初始化 Spreadsheet 之前，通过调用 `dhx.i18n.setLocale()` 方法应用新的语言区域：

~~~jsx
dhx.i18n.setLocale("spreadsheet", de);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## 本地化内置组件 {#localizing-built-in-widgets}

Spreadsheet 在内部使用 DHTMLX Suite 的 Calendar、Colorpicker、Grid、Timepicker、Toolbar、Window 和 Message 组件。它们的字符串存储在单独的语言区域中，您可以用与 `spreadsheet` 语言区域相同的方式翻译它们：

| 语言区域 | Spreadsheet 中使用的字符串 |
| ------ | --------------------------- |
| `calendar` | 日期编辑器和日期筛选器中的月份和星期名称 |
| `colorpicker` | 工具栏颜色弹窗中自定义颜色模式的标签、调色板的名称，以及屏幕阅读器为色块和颜色按钮朗读的颜色名称，例如 "Text color: dark gray" |
| `grid` | 已加载行数的播报 |
| `timepicker` | 时间编辑器的标签 |
| `toolbar` | 工具栏的默认无障碍名称 |
| `window` | 对话框的默认无障碍名称 |
| `message` | alert 和 confirm 对话框及其按钮的无障碍名称 |

请在初始化 Spreadsheet 之前使用语言区域的名称调用 `dhx.i18n.setLocale()`，因为工具栏、菜单和上下文菜单会在创建时读取语言区域：

~~~jsx
const deColorpicker = {
    cancel: "Abbrechen",
    select: "Auswählen",
    aria_palette: "Farbpalette",
    aria_colorRed: "rot",
    // other strings
};

const deMessage = {
    aria_confirm: "Bestätigen"
};

dhx.i18n.setLocale("spreadsheet", de);
dhx.i18n.setLocale("colorpicker", deColorpicker);
dhx.i18n.setLocale("message", deMessage);

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

语言区域的键是扁平的：请在对象的顶层传入每个键。详情请查看 DHTMLX Suite 文档中的 [Localization of screen-reader strings](https://docs.dhtmlx.com/suite/common_features/accessibility_support/#localization-of-screen-reader-strings) 文章。

## 公式的默认语言区域 {#default-locale-for-formulas}

`dhx.i18n.formulas` 对象包含 Spreadsheet 公式弹窗的 i18n 语言区域。公式的默认语言区域如下：

~~~jsx
const en = {
    SUM: [
        ["Number1", "Required. The first value to sum."],
        ["Number2", "Optional. The second value to sum."],
        ["Number3", "Optional. The third value to sum."]
    ],
    AVERAGE: [
        ["Number1", "Required. A number or cell reference that refers to numeric values."],
        ["Number2", "Optional. A number or cell reference that refers to numeric values."]
    ],
    // more formulas' descriptions
};
~~~

[查看完整的公式默认语言区域](formulas_locale.md)。

**相关示例**：[Spreadsheet. 本地化](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)

## 公式的自定义语言区域 {#custom-locale-for-formulas}

要为 Spreadsheet 公式应用自定义语言区域，需要按以下方式使用 `dhx.i18n.setLocale()` 方法：

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // the structure of the formulas in the locale
        name: [param: string, description: string][]
    }
): void;
~~~

您需要向该方法传递以下参数：

<table>
    <tbody>
        <tr>
            <td><b>参数</b></td>
            <td align="center"><b>描述</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>（*必填*）公式语言区域的名称</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>（*必填*）包含公式描述的语言区域对象，以 <i>key:value</i> 键值对形式表示，其中：<ul><li><b>key</b> 是函数的名称</li><li><b>value</b> 是该函数接受的参数数组。函数的每个参数都是一个包含两个元素的数组，其中：<ul><li>第一个元素是参数的名称</li><li>第二个元素是参数的描述</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

请参见以下示例：

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

## 示例 {#example}

在此代码片段中，您可以了解如何在语言区域之间切换：

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
