---
sidebar_label: editLine
title: editLine 설정
description: DHTMLX Spreadsheet에서 editLine 속성으로 편집 바를 표시하거나 숨깁니다. 편집 바는 기본적으로 표시됩니다.
---

# editLine

### 설명 {#description}

@short: 선택 사항. 편집 바를 표시하거나 숨깁니다

### 사용법 {#usage}

~~~jsx
editLine?: boolean;
~~~

### 기본 설정 {#default-config}

~~~jsx
editLine: true
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    editLine: true,
    // 기타 설정 매개변수
});
~~~

**관련 문서:** [설정](configuration.md#editing-bar)

**관련 샘플:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
