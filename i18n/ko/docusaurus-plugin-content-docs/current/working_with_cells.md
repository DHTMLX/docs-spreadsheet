---
sidebar_label: 셀 작업
title: 셀 작업
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 셀 작업에 대한 내용을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 셀 작업 {#work-with-cells}

## 셀 값 설정 {#setting-cell-value}

### 값 설정 {#set-values}

API를 통해 셀에 값을 설정하려면 [](api/spreadsheet_setvalue_method.md) 메서드를 사용하세요. 다음 파라미터를 전달하세요:

- `cells` - (`string`) 셀 또는 셀 범위의 id
- `value` - (`string/number/array`) 셀에 설정할 값

~~~jsx
// 하나의 셀에 값 설정
spreadsheet.setValue("A1",5);
// 셀 범위에 동일한 값 설정
spreadsheet.setValue("A1:D1",5);
// 서로 다른 셀에 동일한 값 설정
spreadsheet.setValue("B6,A1:D1",5);
// 배열의 값을 범위의 셀에 순서대로 설정
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

:::note
이 메서드는 지정된 셀에 동일한(반복되는) 값을 설정합니다. 스프레드시트 셀에 서로 다른 값을 추가하려면 [`parse()`](api/spreadsheet_parse_method.md) 메서드를 사용하세요.
:::


### 값 가져오기 {#get-values}

[](api/spreadsheet_getvalue_method.md) 메서드에 *필요한 셀의 id 또는 셀 범위*를 전달하여 셀에 설정된 값을 반환할 수도 있습니다.

이 메서드는 문자열, 숫자 또는 배열로 값을 반환합니다:

~~~jsx
// 하나의 셀 값 반환
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// 셀 범위의 값 반환
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// 서로 다른 셀의 값 반환
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## 셀 유효성 검사 {#validating-cells}

v4.3부터 드롭다운 옵션 목록을 추가하여 셀에 데이터 유효성 검사를 적용할 수 있습니다. 이를 위해 [](api/spreadsheet_setvalidation_method.md) 메서드를 사용하세요:

~~~jsx
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

드롭다운 목록은 사용자의 선택을 제한합니다. 사용자가 셀에 예상치 못한 값을 입력하면 *잘못된 값* 메시지가 표시됩니다.

:::info
[`setValidation()`](api/spreadsheet_setvalidation_method.md) 메서드는 지정된 셀에서 유효성 검사를 제거할 수도 있습니다. [자세한 내용 확인](api/spreadsheet_setvalidation_method.md#details).
:::

## 셀에 하이퍼링크 삽입 {#inserting-a-hyperlink-into-a-cell}

셀에 하이퍼링크를 삽입하려면 [`insertLink()`](api/spreadsheet_insertlink_method.md) 메서드를 사용하세요. 이 메서드는 하이퍼링크와 함께 표시될 텍스트도 추가할 수 있습니다:

~~~jsx
// "A2" 셀에 링크 삽입
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

셀에서 링크를 제거해야 하는 경우 메서드에 셀 ID만 전달하세요:

~~~jsx
// "A2" 셀에서 링크 제거
spreadsheet.insertLink("A2");
~~~

## 셀 스타일 지정 {#styling-cells}

### 스타일 설정 {#set-styles}

[](api/spreadsheet_setstyle_method.md) 메서드를 사용하여 셀 또는 셀 범위에 스타일을 적용할 수 있습니다. 두 개의 파라미터를 받습니다:

- `cells` - (`string`) 셀 또는 셀 범위의 id
- `styles` - (`object/array`) 셀에 적용할 스타일

~~~jsx
// 하나의 셀에 스타일 설정
spreadsheet.setStyle("A1", {background: "red"});
// 셀 범위에 동일한 스타일 설정
spreadsheet.setStyle("A1:D1", {color: "blue"});
// 서로 다른 셀에 동일한 스타일 설정
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// 배열의 스타일을 범위의 셀에 순서대로 설정
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

:::note 
이 메서드는 지정된 셀에 동일한 스타일을 설정합니다. 스프레드시트 셀에 서로 다른 스타일을 적용하려면 [`parse()`](api/spreadsheet_parse_method.md) 메서드를 사용하세요.
:::

### 스타일 가져오기 {#get-styles}

셀에 적용된 스타일을 가져오려면 [](api/spreadsheet_getstyle_method.md) 메서드를 사용하세요. *셀 또는 셀 범위의 id*를 전달하세요:

~~~jsx
// 하나의 셀 스타일 가져오기
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// 셀 범위의 스타일 가져오기
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> 자세한 내용 참조
 
// 서로 다른 셀의 스타일 가져오기
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

여러 셀의 경우 메서드는 각 셀에 적용된 스타일 객체 배열을 반환합니다:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

## 셀 편집 {#editing-a-cell}

### 셀 편집기 활성화 {#enable-cell-editor}

[](api/spreadsheet_startedit_method.md) 메서드를 호출하여 셀에 입력 필드를 추가할 수 있습니다:

~~~jsx
spreadsheet.startEdit();
~~~

이 메서드는 두 개의 선택적 파라미터를 받을 수 있습니다:

- `cell` - (`string`) 선택적, 셀의 id
- `value` - (`string`) 선택적, 셀 값

셀 id가 전달되지 않으면 현재 선택된 셀에 입력 필드가 추가됩니다.

### 셀 편집기 비활성화 {#disable-cell-editor}

셀 편집을 완료하려면 [](api/spreadsheet_endedit_method.md) 메서드를 사용하세요. 편집기를 닫고 입력된 값을 저장합니다.

~~~jsx
spreadsheet.endEdit();
~~~

## 셀 잠금 {#locking-cells}

### 셀 잠금 {#lock-cells}

사용자가 읽기 전용으로 만들기 위해 프로그래밍 방식으로 셀 또는 여러 셀을 잠글 수 있습니다. 이를 위해 [](api/spreadsheet_lock_method.md) 메서드를 사용하세요. 이 메서드는 잠글 *셀의 id* 또는 *셀 범위*를 파라미터로 받습니다.

~~~jsx
// 셀 잠금
spreadsheet.lock("A1");

// 셀 범위 잠금
spreadsheet.lock("A1:C1");

// 지정된 셀 잠금
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**관련 샘플**: [Spreadsheet. 잠긴 셀](https://snippet.dhtmlx.com/czeyiuf8)

### 셀 잠금 해제 {#unlock-cells}

잠긴 셀의 잠금을 해제하려면 [](api/spreadsheet_unlock_method.md) 메서드를 사용하세요. *셀의 id* 또는 *잠긴 셀이 포함된 범위*를 파라미터로 전달하세요:

~~~jsx
// 셀 잠금 해제
spreadsheet.unlock("A1");
 
// 셀 범위 잠금 해제
spreadsheet.unlock("A1:C1");
 
// 지정된 셀 잠금 해제
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### 셀 잠금 여부 확인 {#check-whether-a-cell-is-locked}

셀 또는 여러 셀이 잠겨 있는지 확인하려면 [](api/spreadsheet_islocked_method.md) 메서드를 사용하고 *셀의 id* 또는 *셀 범위*를 전달하세요:

~~~jsx
// 셀 잠금 여부 확인
var cellLocked = spreadsheet.isLocked("A1"); 

// 여러 셀 잠금 여부 확인
var rangeLocked = spreadsheet.isLocked("A1:C1");

// 흩어진 셀 잠금 여부 확인
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

이 메서드는 셀 상태에 따라 `true` 또는 `false`를 반환합니다. 여러 셀을 한 번에 확인하는 경우 지정된 셀 중 잠긴 셀이 하나 이상 있으면 `true`를 반환합니다.

## 셀 병합 {#merging-cells}

### 셀 병합 {#merge-cells}

[`mergeCells()`](api/spreadsheet_mergecells_method.md) 메서드에 병합할 셀 범위를 전달하여 두 개 이상의 셀을 하나로 병합할 수 있습니다:

~~~jsx
// A6, A7, A8 셀 병합
spreadsheet.mergeCells("A6:A8");

// B2, C2, D2 셀 병합
spreadsheet.mergeCells("B2:D2");
~~~

### 셀 분리 {#split-cells}

[`mergeCells()`](api/spreadsheet_mergecells_method.md) 메서드로 병합된 셀을 분리할 수도 있습니다. 셀 범위 외에 두 번째 파라미터로 `true`를 전달하면 지정된 셀이 병합 해제됩니다:

~~~jsx
// B2, C2, D2 셀 병합 해제
spreadsheet.mergeCells("B2:D2", true);
~~~

## 셀 선택 {#selecting-cells}

### 셀 선택 {#select-cells}

Spreadsheet는 `Selection` 객체의 API를 사용하여 셀 선택을 설정할 수 있습니다.

[](api/selection_setselectedcell_method.md) 메서드에 셀 id를 전달하여 셀을 선택할 수 있습니다:

~~~jsx
// 셀 선택
spreadsheet.selection.setSelectedCell("B5");
// 셀 범위 선택
spreadsheet.selection.setSelectedCell("B1:B5");
// 흩어진 셀 선택
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

[](api/selection_getselectedcell_method.md) 메서드를 통해 선택된 셀의 id를 가져올 수도 있습니다:

~~~jsx
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

### 셀 선택 해제 {#unselect-cells}

셀에서 선택을 제거하려면 [](api/selection_removeselectedcell_method.md) 메서드에 셀 id를 전달하세요:

~~~jsx
// 선택 설정
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// 선택 제거
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**관련 샘플:** [Spreadsheet. 선택 제거](https://snippet.dhtmlx.com/u4j76cuh)

## 셀에 포커스 설정 {#setting-focus-on-a-cell}

`Selection` 객체를 사용하면 스프레드시트 셀에 포커스를 설정하고 포커스된 셀의 id를 가져올 수 있습니다. 이를 위해 해당 메서드를 사용하세요:

- [](api/selection_setfocusedcell_method.md)

~~~jsx
// 포커스를 설정할 셀의 id 전달
spreadsheet.selection.setFocusedCell("D4");
~~~

- [](api/selection_getfocusedcell_method.md)

~~~jsx
// 포커스된 셀 가져오기
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~
