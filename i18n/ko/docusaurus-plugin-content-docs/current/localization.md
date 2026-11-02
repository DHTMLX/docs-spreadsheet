---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX Spreadsheet를 현지화합니다. 기본 로케일을 확인하고, 사용자 정의 로케일을 만들고, 내장 위젯과 수식 팝업을 번역하고, 로케일을 적용하는 방법을 설명합니다.
---

# 로컬라이제이션 {#localization}

DHTMLX Spreadsheet 인터페이스의 레이블을 현지화하여 원하는 언어로 인터페이스를 표시할 수 있습니다. 이를 위해 레이블에 대한 현지화된 문자열을 제공하고 해당 로케일을 컴포넌트에 적용하세요.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 기본 로케일 {#default-locale}

기본적으로 영어 로케일이 사용됩니다:

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

`aria_`로 시작하는 키는 인터페이스에 표시되지 않습니다. 스크린 리더는 이 키를 컨트롤의 이름, 활성 셀의 설명, 그리고 [`announce()`](api/spreadsheet_announce_method.md) 메서드도 사용하는 라이브 영역의 메시지로 읽습니다. `{cell}`, `{count}`와 같이 중괄호로 둘러싸인 부분은 문자열을 읽을 때 값으로 대체됩니다. 번역한 문자열에도 이 부분을 그대로 유지하십시오. 번역된 접근성 문자열의 예는 [접근성](accessibility.md#translated-accessibility-strings) 가이드를 참조하십시오.

`defaultSheetName` 키는 기본 시트 이름의 접두사를 설정합니다. Spreadsheet는 여기에 숫자를 붙이므로 기본값 `"sheet"`는 "sheet1", "sheet2" 등의 이름을 만듭니다. 예를 들어 Microsoft Excel이 독일어에서 사용하는 접두사인 `"Tabelle"`을 사용하면 시트 이름은 "Tabelle1", "Tabelle2" 등이 됩니다.

## 사용자 정의 로케일 {#custom-locale}

다른 로케일을 적용하려면 다음을 수행해야 합니다:

- Spreadsheet의 모든 텍스트 레이블에 대한 번역을 제공합니다. 예를 들어 독일어 로케일의 경우:

~~~jsx
const de = {
    // 언어 설정
};
~~~

- Spreadsheet를 초기화하기 전에 `dhx.i18n.setLocale()` 메서드를 호출하여 새 로케일을 적용합니다:

~~~jsx
dhx.i18n.setLocale("spreadsheet", de);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## 내장 위젯 현지화 {#localizing-built-in-widgets}

Spreadsheet는 내부적으로 DHTMLX Suite의 Calendar, Colorpicker, Grid, Timepicker, Toolbar, Window, Message 위젯을 사용합니다. 이 위젯들의 문자열은 별도의 로케일에 저장되어 있으며, `spreadsheet` 로케일과 같은 방식으로 번역할 수 있습니다:

| 로케일 | Spreadsheet에서 사용하는 문자열 |
| ------ | --------------------------- |
| `calendar` | 날짜 편집기와 날짜 필터의 월 및 요일 이름 |
| `colorpicker` | 툴바의 색상 팝업에 있는 사용자 지정 색상 모드의 레이블, 팔레트 이름, 그리고 스크린 리더가 색상 견본과 색상 버튼에 대해 읽는 색상 이름(예: "Text color: dark gray") |
| `grid` | 로드된 행 수 안내 |
| `timepicker` | 시간 편집기의 레이블 |
| `toolbar` | 툴바의 기본 접근 가능한 이름 |
| `window` | 대화 상자의 기본 접근 가능한 이름 |
| `message` | alert 및 confirm 대화 상자와 해당 버튼의 접근 가능한 이름 |

툴바, 메뉴, 컨텍스트 메뉴는 생성될 때 로케일을 읽으므로, Spreadsheet를 초기화하기 전에 로케일 이름과 함께 `dhx.i18n.setLocale()`을 호출하십시오:

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

로케일 키는 평면 구조입니다. 각 키를 객체의 최상위 수준에 전달하십시오. 자세한 내용은 DHTMLX Suite 문서의 [스크린 리더 문자열 현지화](https://docs.dhtmlx.com/suite/common_features/accessibility_support/#localization-of-screen-reader-strings) 문서를 참조하십시오.

## 수식의 기본 로케일 {#default-locale-for-formulas}

`dhx.i18n.formulas` 객체에는 Spreadsheet 수식 팝업의 i18n 로케일이 포함되어 있습니다. 수식의 기본 로케일은 다음과 같습니다:

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
    // 더 많은 수식 설명
};
~~~

[수식의 전체 기본 로케일 확인하기](formulas_locale.md).

**관련 샘플**: [Spreadsheet. 로컬라이제이션](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)

## 수식의 사용자 정의 로케일 {#custom-locale-for-formulas}

Spreadsheet 수식에 사용자 정의 로케일을 적용하려면 다음과 같이 `dhx.i18n.setLocale()` 메서드를 사용해야 합니다:

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // 로케일의 수식 구조
        name: [param: string, description: string][]
    }
): void;
~~~

메서드에 다음 매개변수를 전달해야 합니다:

<table>
    <tbody>
        <tr>
            <td><b>매개변수</b></td>
            <td align="center"><b>설명</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>(*필수*) 수식 로케일의 이름</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>(*필수*) 수식의 설명을 <i>key:value</i> 쌍으로 포함하는 로케일 객체. 여기서:<ul><li><b>key</b>는 함수의 이름</li><li><b>value</b>는 함수가 받는 매개변수 배열. 각 매개변수는 두 요소의 배열로 구성:<ul><li>첫 번째 요소는 매개변수의 이름</li><li>두 번째 요소는 매개변수의 설명</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

아래 예제를 확인하세요:

~~~jsx
const de = {
    AVERAGE: [
        ["Zahl1", "Erforderlich. Eine Zahl oder Zellreferenz, die sich auf numerische Werte bezieht."],
        ["Zahl2", "Optional. Eine Zahl oder Zellreferenz, die auf numerische Werte verweist."]
    ],
    // 다른 수식 설명
};

dhx.i18n.setLocale("formulas", de);
~~~

## 예제 {#example}

이 스니펫에서 로케일 간 전환 방법을 확인할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
