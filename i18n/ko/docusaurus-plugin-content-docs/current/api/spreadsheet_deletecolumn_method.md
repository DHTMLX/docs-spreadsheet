---
sidebar_label: deleteColumn()
title: deleteColumn 메서드
description: DHTMLX Spreadsheet에서 deleteColumn() 메서드로 열 또는 열 범위를 제거합니다. 병합된 셀의 모든 열도 함께 제거됩니다.
---

# deleteColumn()

### 설명 {#description}

@short: 스프레드시트에서 열을 제거합니다

:::info
이 메서드는 지정된 셀이 위치한 열을 제거하고, 그 오른쪽에 있는 열을 왼쪽으로 이동합니다.

셀이 병합된 셀 안에 있으면 병합된 셀이 걸쳐 있는 모든 열을 제거합니다.
:::

### 사용법 {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 삭제할 열의 이름이 포함된 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "G" 열을 제거합니다
spreadsheet.deleteColumn("G2");
~~~

:::note
"A1:C3"과 같이 셀 id의 범위를 메서드의 매개변수로 제공하여 여러 열을 삭제할 수 있습니다. 범위가 병합된 셀에 닿아 있으면 병합된 셀 전체의 열이 삭제됩니다. 예를 들어 행이 100개인 시트에서 "B1:C100"처럼 전체 열을 포함하는 범위는 그대로 삭제됩니다.
:::

### 상세 정보 {#details}

병합된 셀 안의 열을 삭제하면 병합된 셀 전체가 모든 열과 함께 삭제됩니다:

~~~jsx
spreadsheet.mergeCells("B2:D2");

// removes columns B, C and D
spreadsheet.deleteColumn("C2");
~~~

전체 열을 삭제하면 해당 열에 걸쳐 있던 병합된 셀의 크기가 작아집니다. 삭제된 열의 오른쪽에 있는 병합된 셀은 해당 열과 함께 왼쪽으로 이동합니다. 삭제된 열이 고정된 열이면 고정 영역이 삭제된 고정 열의 개수만큼 줄어듭니다.

`"deleteColumn"` 액션의 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 및 [`afterAction`](api/spreadsheet_afteraction_event.md) 이벤트는 삭제된 열의 범위가 아니라 메서드에 전달된 셀을 받습니다.

**변경 로그:** 병합된 셀의 모든 열을 삭제하는 기능이 v6.0.4에서 추가됨

**관련 문서:**
- [행과 열 작업](work_with_rows_cols.md#removing-columns)
- [셀 병합](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [스프레드시트 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
