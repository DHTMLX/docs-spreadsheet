---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript Spreadsheet 라이브러리의 로컬라이제이션에 대한 문서를 확인하세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
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

## 사용자 정의 로케일 {#custom-locale}

다른 로케일을 적용하려면 다음을 수행해야 합니다:

- Spreadsheet의 모든 텍스트 레이블에 대한 번역을 제공합니다. 예를 들어 러시아어 로케일의 경우:

~~~jsx
const ru = {
    // 언어 설정
};
~~~

- Spreadsheet를 초기화하기 전에 `dhx.i18n.setLocale()` 메서드를 호출하여 새 로케일을 적용합니다:

~~~jsx
dhx.i18n.setLocale("spreadsheet", ru);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

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
