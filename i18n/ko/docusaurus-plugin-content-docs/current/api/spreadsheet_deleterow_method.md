---
sidebar_label: deleteRow()
title: deleteRow 메서드
description: DHTMLX Spreadsheet에서 deleteRow() 메서드로 행 또는 행 범위를 제거합니다. 병합된 셀의 모든 행도 함께 제거됩니다.
---

# deleteRow()

### 설명 {#description}

@short: 스프레드시트에서 행을 제거합니다

:::info
이 메서드는 지정된 셀이 위치한 행을 제거하고, 그 아래에 있는 행을 위로 이동합니다.

셀이 병합된 셀 안에 있으면 병합된 셀이 걸쳐 있는 모든 행을 제거합니다.
:::

### 사용법 {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 삭제할 행의 id가 포함된 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 두 번째 행을 제거합니다
spreadsheet.deleteRow("G2");
~~~

:::note
"A1:C3"과 같이 셀 id의 범위를 메서드의 매개변수로 제공하여 여러 행을 삭제할 수 있습니다. 범위가 병합된 셀에 닿아 있으면 병합된 셀 전체의 행이 삭제됩니다. 예를 들어 A부터 Z까지 열이 있는 시트에서 "A2:Z3"처럼 전체 행을 포함하는 범위는 그대로 삭제됩니다.
:::

### 상세 정보 {#details}

병합된 셀 안의 행을 삭제하면 병합된 셀 전체가 모든 행과 함께 삭제됩니다:

~~~jsx
spreadsheet.mergeCells("B2:B4");

// removes rows 2, 3 and 4
spreadsheet.deleteRow("B3");
~~~

전체 행을 삭제하면 해당 행에 걸쳐 있던 병합된 셀의 크기가 작아집니다. 삭제된 행의 아래에 있는 병합된 셀은 해당 행과 함께 위로 이동합니다. 삭제된 행이 고정된 행이면 고정 영역이 삭제된 고정 행의 개수만큼 줄어듭니다.

`"deleteRow"` 액션의 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 및 [`afterAction`](api/spreadsheet_afteraction_event.md) 이벤트는 삭제된 행의 범위가 아니라 메서드에 전달된 셀을 받습니다.

**변경 로그:** 병합된 셀의 모든 행을 삭제하는 기능이 v6.0.4에서 추가됨

**관련 문서:**
- [행과 열 작업](work_with_rows_cols.md#removing-rows)
- [셀 병합](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [스프레드시트 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
