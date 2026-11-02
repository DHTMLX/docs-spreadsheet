---
sidebar_label: colsCount
title: colsCount 설정
description: DHTMLX Spreadsheet에서 colsCount 속성으로 초기화 시 표시되는 열 수를 설정합니다.
---

# colsCount

### 설명 {#description}

@short: 선택 사항. 초기화 시 스프레드시트의 열 수를 설정합니다

### 사용법 {#usage}

~~~jsx
colsCount?: number;
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    colsCount: 10,
    // 기타 설정 매개변수
});
~~~

**관련 문서:** [설정](configuration.md#number-of-rows-and-columns)

**관련 샘플:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
