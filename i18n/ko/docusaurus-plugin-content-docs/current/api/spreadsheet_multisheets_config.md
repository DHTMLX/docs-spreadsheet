---
sidebar_label: multiSheets
title: multiSheets 설정
description: DHTMLX Spreadsheet에서 multiSheets 속성으로 여러 시트 작업 기능을 켜거나 끕니다. 이 속성은 하단의 시트 탭 바를 표시하거나 숨깁니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: false,
    // 다른 설정 매개변수
});
~~~

:::info
이 속성을 `false`로 설정하면 하단의 시트 탭 탭바가 숨겨집니다.
:::

**변경 로그:** v4.1에서 추가됨
