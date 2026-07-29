---
sidebar_label: startEdit()
title: startEdit 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 startEdit 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 현재 선택된 셀에서 편집 시작
spreadsheet.startEdit();
~~~

**관련 문서:** [Spreadsheet 사용](working_with_cells.md#editing-a-cell)
