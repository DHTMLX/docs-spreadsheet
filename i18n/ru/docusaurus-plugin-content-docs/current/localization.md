---
sidebar_label: Локализация
title: Локализация
description: Вы можете узнать о локализации библиотеки DHTMLX JavaScript Spreadsheet в документации. Изучите руководства разработчика и справочник API, ознакомьтесь с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Локализация {#localization}

Вы можете локализовать метки в интерфейсе DHTMLX Spreadsheet и отобразить интерфейс на любом языке. Для этого предоставьте локализованные строки для меток и примените нужную локаль к компоненту.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Локаль по умолчанию {#default-locale}

По умолчанию используется английская локаль:

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

## Пользовательская локаль {#custom-locale}

Чтобы применить другую локаль, необходимо:

- предоставить переводы для всех текстовых меток в Spreadsheet, например для русской локали:

~~~jsx
const ru = {
    // language settings
};
~~~

- применить новую локаль, вызвав метод `dhx.i18n.setLocale()` перед инициализацией Spreadsheet:

~~~jsx
dhx.i18n.setLocale("spreadsheet", ru);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## Локаль формул по умолчанию {#default-locale-for-formulas}

Объект `dhx.i18n.formulas` содержит локаль i18n для всплывающего окна формул Spreadsheet. Локаль формул по умолчанию выглядит следующим образом:

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

[Посмотреть полную локаль формул по умолчанию](formulas_locale.md).

**Связанный пример**: [Spreadsheet. Localization](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)

## Пользовательская локаль для формул {#custom-locale-for-formulas}

Чтобы применить пользовательскую локаль для формул Spreadsheet, используйте метод `dhx.i18n.setLocale()` следующим образом:

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // the structure of the formulas in the locale
        name: [param: string, description: string][]
    }
): void;
~~~

В метод нужно передать следующие параметры:

<table>
    <tbody>
        <tr>
            <td><b>Параметр</b></td>
            <td align="center"><b>Описание</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>(*обязательный*) название локали для формул</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>(*обязательный*) объект локали, содержащий описания формул в виде пар <i>ключ:значение</i>, где:<ul><li><b>ключ</b> — название функции</li><li><b>значение</b> — массив параметров, которые принимает функция. Каждый параметр функции представлен массивом из двух элементов, где:<ul><li>первый элемент — название параметра</li><li>второй элемент — описание параметра</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

Пример ниже:

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

## Пример {#example}

В этом сниппете показано, как переключаться между локалями:

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
