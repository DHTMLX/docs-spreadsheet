---
sidebar_label: multiSheets
title: multiSheets 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 multiSheets 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# multiSheets

### 설명 {#description}

@short: 선택 사항. 스프레드시트에서 여러 시트를 사용하는 기능을 활성화하거나 비활성화합니다

### 사용법 {#usage}

~~~jsx
multiSheets?: boolean;
~~~

### 기본값 {#default-config}

~~~jsx
multiSheets: true
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    multiSheets: false,
    // 다른 설정 매개변수
});
~~~

:::info
이 속성을 `false`로 설정하면 하단의 시트 탭 탭바가 숨겨집니다.
:::

**변경 로그:** v4.1에서 추가됨
