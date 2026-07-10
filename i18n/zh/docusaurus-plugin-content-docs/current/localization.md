---
sidebar_label: 本地化
title: 本地化
description: 您可以在文档中了解 DHTMLX JavaScript Spreadsheet 库的本地化功能。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
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

## 自定义语言区域 {#custom-locale}

要应用不同的语言区域，您需要：

- 为 Spreadsheet 中的所有文本标签提供翻译，例如，俄语区域：

~~~jsx
const ru = {
    // 语言设置
};
~~~

- 在初始化 Spreadsheet 之前，通过调用 `dhx.i18n.setLocale()` 方法应用新的语言区域：

~~~jsx
dhx.i18n.setLocale("spreadsheet", ru);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

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
