---
sidebar_label: editLine
title: editLine 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리의 문서에서 editLine 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    editLine: true,
    // 기타 설정 매개변수
});
~~~

**관련 문서:** [설정](configuration.md#editing-bar)

**관련 샘플:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
