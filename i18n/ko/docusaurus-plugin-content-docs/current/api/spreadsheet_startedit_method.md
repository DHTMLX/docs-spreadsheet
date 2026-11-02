---
sidebar_label: startEdit()
title: startEdit 메서드
description: DHTMLX Spreadsheet에서 startEdit() 메서드로 전달된 셀 또는 선택된 셀의 편집을 시작합니다. 초기 값을 지정할 수도 있습니다.
---

# startEdit()

### 설명 {#description}

@short: 선택된 셀에서 편집을 시작합니다

:::info
셀 id를 전달하지 않으면 현재 선택된 셀에서 편집이 시작됩니다.
:::

### 사용법 {#usage}

~~~jsx
startEdit(cell?: string, initialValue?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 셀 id
- `initialValue` - (선택 사항) 셀 값

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 현재 선택된 셀에서 편집 시작
spreadsheet.startEdit();
~~~

### 상세 정보 {#details}

활성 셀에 입력하면 이 메서드를 통해 편집이 시작됩니다. 입력기(IME)로 조합한 텍스트는 조합이 끝날 때 `initialValue`로 전달됩니다. 따라서 [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md) 및 [`afterEditStart`](api/spreadsheet_aftereditstart_event.md) 이벤트는 입력한 텍스트 또는 조합한 텍스트를 받으며, `beforeEditStart`는 편집을 취소할 수 있습니다.

**변경 로그:** IME로 조합한 텍스트로 편집을 시작하는 기능이 v6.0.4에서 추가됨

**관련 문서:** [Spreadsheet 사용](working_with_cells.md#editing-a-cell)
