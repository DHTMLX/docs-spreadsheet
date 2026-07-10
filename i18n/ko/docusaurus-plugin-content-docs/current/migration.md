---
sidebar_label: 최신 버전으로 마이그레이션
title: 마이그레이션
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 마이그레이션에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
---

# 최신 버전으로 마이그레이션 {#migration-to-newer-versions}

## 5.2 -> 6.0 {#52---60}

### 더 이상 사용되지 않는 속성 {#deprecated-properties}

`ISpreadsheetConfig`의 다음 속성들은 더 이상 사용되지 않으며 제거되었습니다. 아래에서 현재 사용법을 확인하세요:

- `dateFormat` 구성 속성. [`localization`](api/spreadsheet_localization_config.md) 구성 객체에서 다음과 같이 설정하세요:
    - `{ localization: { dateFormat: "%d/%m/%Y" } }`
- `timeFormat` 구성 속성. [`localization`](api/spreadsheet_localization_config.md) 구성 객체에서 다음과 같이 설정하세요:
    - `{ localization: { timeFormat: 12 } }`

### 더 이상 사용되지 않는 메서드 {#deprecated-methods}

`ISpreadsheet` 인스턴스의 다음 메서드들은 더 이상 사용되지 않으며 제거되었습니다.

대신 새로운 [`sheets` 모듈 (Sheet Manager) API](api/overview/sheetmanager_overview.md)를 사용하세요:

<div className="overflow-table">

| 더 이상 사용되지 않는 메서드 | 시그니처 | 새로운 사용법 | 새 시그니처 |
| --- | --- | --- | --- |
| `clearSheet(id?)` | `(id?: string) => void` | [`sheets.clear(id?)`](api/sheetmanager_clear_method.md) | `(id?: Id) => void` |
| `removeSheet(id)` | `(id: string) => void` | [`sheets.remove(id)`](api/sheetmanager_remove_method.md) | `(id: Id) => void` |
| `addSheet(name?)` | `(name?: string) => string` | [`sheets.add(name?)`](api/sheetmanager_add_method.md) | `(name?: string) => Id` |
| `getSheets()` | `() => ISheet[]` | [`sheets.getAll()`](api/sheetmanager_getall_method.md) | `() => ISheet[]` |
| `getActiveSheet()` | `() => ISheet` | [`sheets.getActive()`](api/sheetmanager_getactive_method.md) | `() => ISheet` |
| `setActiveSheet(id)` | `(id: Id) => void` | [`sheets.setActive(id)`](api/sheetmanager_setactive_method.md) | `(id: Id) => void` |

</div>

### 더 이상 사용되지 않는 이벤트 {#deprecated-events}

다음 이벤트들은 더 이상 사용되지 않으며 제거되었습니다. 대신 일반 [`beforeAction`](api/spreadsheet_beforeaction_event.md) / [`afterAction`](api/spreadsheet_afteraction_event.md) 이벤트 쌍을 사용하세요.

<div className="deprecated-events-table">

| 더 이상 사용되지 않는 이벤트 | 콜백 시그니처 | 새로운 사용법 |
| --- | --- | --- |
| `beforeValueChange` | `(cell: string, value: string) => void \| boolean` | `"setCellValue"` 액션과 함께 `beforeAction` 사용 |
| `afterValueChange` | `(cell: string, value: string) => void` | `"setCellValue"` 액션과 함께 `afterAction` 사용 |
| `beforeStyleChange` | `(cell: string, style: ...) => void \| boolean` | `"setCellStyle"` 액션과 함께 `beforeAction` 사용 |
| `afterStyleChange` | `(cell: string, style: ...) => void` | `"setCellStyle"` 액션과 함께 `afterAction` 사용 |
| `beforeFormatChange` | `(cell: string, format: string) => void \| boolean` | `"setCellFormat"` 액션과 함께 `beforeAction` 사용 |
| `afterFormatChange` | `(cell: string, format: string) => void` | `"setCellFormat"` 액션과 함께 `afterAction` 사용 |
| `beforeRowAdd` | `(cell: string) => void \| boolean` | `"addRow"` 액션과 함께 `beforeAction` 사용 |
| `afterRowAdd` | `(cell: string) => void` | `"addRow"` 액션과 함께 `afterAction` 사용 |
| `beforeRowDelete` | `(cell: string) => void \| boolean` | `"deleteRow"` 액션과 함께 `beforeAction` 사용 |
| `afterRowDelete` | `(cell: string) => void` | `"deleteRow"` 액션과 함께 `afterAction` 사용 |
| `beforeColumnAdd` | `(cell: string) => void \| boolean` | `"addColumn"` 액션과 함께 `beforeAction` 사용 |
| `afterColumnAdd` | `(cell: string) => void` | `"addColumn"` 액션과 함께 `afterAction` 사용 |
| `beforeColumnDelete` | `(cell: string) => void \| boolean` | `"deleteColumn"` 액션과 함께 `beforeAction` 사용 |
| `afterColumnDelete` | `(cell: string) => void` | `"deleteColumn"` 액션과 함께 `afterAction` 사용 |
| `beforeSheetAdd` | `(name: string) => void \| boolean` | `"addSheet"` 액션과 함께 `beforeAction` 사용 |
| `afterSheetAdd` | `(sheet: ISheet) => void` | `"addSheet"` 액션과 함께 `afterAction` 사용 |
| `beforeSheetRemove` | `(sheet: ISheet) => void \| boolean` | `"deleteSheet"` 액션과 함께 `beforeAction` 사용 |
| `afterSheetRemove` | `(sheet: ISheet) => void` | `"deleteSheet"` 액션과 함께 `afterAction` 사용 |
| `beforeSheetRename` | `(sheet: ISheet, value: string) => void \| boolean` | `"renameSheet"` 액션과 함께 `beforeAction` 사용 |
| `afterSheetRename` | `(sheet: ISheet) => void` | `"renameSheet"` 액션과 함께 `afterAction` 사용 |
| `beforeSheetClear` | `(sheet: ISheet) => void \| boolean` | `"clearSheet"` 액션과 함께 `beforeAction` 사용 |
| `afterSheetClear` | `() => void` | `"clearSheet"` 액션과 함께 `afterAction` 사용 |

</div>

## 5.1 -> 5.2 {#51---52}

### 고정/해제 기능 {#freezingunfreezing-functionality}

v5.2에서는 열과 행의 고정/해제 방식이 변경되었습니다:

- 열과 행을 고정하는 데 사용되었던 `leftSplit` 및 `topSplit` 구성 속성이 더 이상 사용되지 않으며 제거되었습니다

~~~jsx title="v5.2 이전"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // 고정할 행 수
    leftSplit: 1 // 고정할 열 수
});
~~~

- 새 API 메서드 추가: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

~~~jsx title="v5.2부터"
// 행의 경우
spreadsheet.freezeRows("B2"); // 두 번째 행까지의 행이 고정됩니다
spreadsheet.freezeRows("sheet2!B2"); // "sheet2"의 두 번째 행까지의 행이 고정됩니다
spreadsheet.unfreezeRows(); // 현재 시트의 고정된 행이 해제됩니다
spreadsheet.unfreezeRows("sheet2!A1"); // "sheet2"의 고정된 행이 해제됩니다

// 열의 경우
spreadsheet.freezeCols("B2"); // "B" 열까지의 열이 고정됩니다
spreadsheet.freezeCols("sheet2!B2"); // "sheet2"의 "B" 열까지의 열이 고정됩니다
spreadsheet.unfreezeCols(); // 현재 시트의 고정된 열이 해제됩니다
spreadsheet.unfreezeCols("sheet2!A1"); // "sheet2"의 고정된 열이 해제됩니다
~~~

- 새 액션 추가: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions)

~~~jsx title="v5.2부터"
// beforeAction/afterAction 이벤트와 함께 `toggleFreeze` 액션 사용
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});
~~~

- [`parse()`](api/spreadsheet_parse_method.md) 메서드의 *sheets* 객체에 새 `freeze` 속성이 추가되었습니다. 이를 통해 데이터를 Spreadsheet에 파싱할 때 특정 시트의 행과 열을 고정할 수 있습니다:

~~~jsx {10-13} title="v5.2부터"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // "sheet_1"의 추가 설정
        }, 
        // 추가 시트 구성 객체
    ]
};

spreadsheet.parse(data);
~~~

## 4.3 -> 5.0 {#43---50}

v5.0에서는 [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 속성의 `"help"` 옵션이 `"helpers"`로 이름이 변경되었습니다. 또한 기본 옵션 세트에 새로운 `"actions"` 옵션이 추가되었습니다.

~~~jsx title="v5.0 이전" {8}
// 기본 구성
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "help"
]
~~~

~~~jsx title="v5.0부터" {8,9}
// 기본 구성
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "actions",
    "helpers"
]
~~~


## 4.2 -> 4.3 {#42---43}

:::info
버전 4.3은 IE 지원을 제공하는 마지막 버전입니다
:::

버전 4.3은 스프레드시트에서 변경 사항을 수행할 때 수행된 액션을 추적하고 처리하는 새로운 방식을 도입합니다.

새로운 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 및 [`afterAction`](api/spreadsheet_afteraction_event.md) 이벤트는 액션이 실행되기 직전/직후에 발생하며 어떤 액션이 수행되었는지 나타냅니다. 이 접근 방식을 사용하면 이 두 이벤트만으로 여러 액션에 필요한 로직을 한 번에 추가할 수 있습니다. 예를 들어:

~~~jsx
spreadsheet.events.on("BeforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return true;
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    ...
});

spreadsheet.events.on("AfterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config)
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
    },
    ...
});
~~~

이 접근 방식은 각각의 개별 액션에 대해 쌍으로 된 [**before-** 및 **after-**](api/overview/events_overview.md) 이벤트 세트를 추가할 필요가 없으므로 코드 크기를 줄일 수 있습니다.

기존 접근 방식도 이전과 같이 계속 작동합니다. 자세한 내용은 [Spreadsheet 액션](api/overview/actions_overview.md)을 확인하세요.

:::info
현재 액션으로 대체할 수 없어 기존 방식으로 사용해야 하는 이벤트 세트가 있습니다: *beforeEditEnd, afterEditEnd, beforeEditStart, afterEditStart, beforeFocusSet, afterFocusSet, beforeSheetChange, afterSheetChange, groupFill*.
:::

## 4.1 -> 4.2 {#41---42}

v4.2에서는 Spreadsheet 툴바의 [정렬](customization.md#default-controls) 블록이 두 개의 하위 블록으로 분리되었습니다: 가로 정렬과 세로 정렬. 따라서 정렬 블록의 기본 컨트롤 id 목록이 변경되고 확장되었습니다:

`v4.2 이전`:

**정렬** 블록:

- *왼쪽 정렬* 버튼 (id: "align-left")
- *가운데 정렬* 버튼 (id: "align-center")
- *오른쪽 정렬* 버튼 (id: "align-right")

`v4.2부터`:

**정렬** 블록의 **가로 정렬** 하위 블록:

- *왼쪽* 버튼 (id: "halign-left")
- *가운데* 버튼 (id: "halign-center")
- *오른쪽* 버튼 (id: "halign-right")

**정렬** 블록의 **세로 정렬** 하위 블록:

- *위* 버튼 (id: "valign-top")
- *가운데* 버튼 (id: "valign-center")
- *아래* 버튼 (id: "valign-bottom")

### 로컬라이제이션 {#localization}

**정렬** 블록의 [로케일 옵션](localization.md)도 업데이트되었다는 점에 유의하세요:

`v4.2 이전`:

~~~jsx
const locale = {
    align: "Align",
    ...
}
~~~

`v4.2부터`:

~~~jsx
const locale = {
    halign: "Horizontal align",
    valign: "Vertical align",
    ...
}
~~~

## 2.1 -> 3.0 {#21---30}

이 변경 사항 목록은 PHP 기반이었던 버전 2.1에서 완전히 JavaScript로 재구축된 버전 3.0으로 마이그레이션하는 데 도움이 됩니다. 모든 변경 사항을 살펴보려면 아래 목록을 확인하세요.

:::info
**버전 2.1의 API**는 여전히 사용 가능하지만 [**버전 3.0부터의 API**](api/api_overview.md)와 호환되지 않습니다. 버전 2.1에 대한 문서가 필요하시면 [문의하기](https://dhtmlx.com/docs/contact.shtml)를 통해 연락해 주시면 보내드리겠습니다.
:::

### 변경된 API {#changed-api}

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle_method.md) - 셀에 적용된 스타일을 반환합니다
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue_method.md) - 셀의 값을 포함하는 객체를 반환합니다
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle_method.md) - 셀 또는 셀 범위에 스타일을 설정합니다
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue_method.md) - 셀 또는 셀 범위에 값을 설정합니다
- lock -> [spreadsheet.lock](api/spreadsheet_lock_method.md) - 셀 또는 셀 범위를 잠급니다
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock_method.md) - 잠긴 셀 또는 셀 범위를 잠금 해제합니다

### 제거된 API {#removed-api}

#### Spreadsheet 클래스 {#spreadsheet-class}

- getCell
- getCells
- isCell
- setSheetId

#### SpreadsheetCell {#spreadsheetcell}

<table>
<tr>
    <td>calculate</td>
    <td>getCoords</td>
    <td>setBgColor</td>
</tr>
<tr>
    <td>exists</td>
    <td>getValidator</td>
    <td>setBold</td>
</tr>
<tr>
    <td>getAlign</td>
    <td>isBold</td>
    <td>setColor</td>
</tr>
<tr>
    <td>getBgColor</td>
    <td>isIncorrect</td>
    <td>setItalic</td>
</tr>
<tr>
    <td>getCalculatedValue</td>
    <td>isItalic</td>
    <td>setLocked</td>
</tr>
<tr>
    <td>getColIndex</td>
    <td>parseStyle</td>
    <td>setValidator</td>
</tr>
<tr>
    <td>getColName</td>
    <td>serializeStyle</td>
    <td></td>
</tr>
<tr>
    <td>getColor</td>
    <td>setAlign</td>
    <td></td>
</tr>
</table>
