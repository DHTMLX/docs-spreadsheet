---
sidebar_label: menu
title: menu 설정
description: DHTMLX Spreadsheet에서 menu 속성으로 메뉴를 표시하거나 숨깁니다.
---

# menu

### 설명 {#description}

@short: 선택 사항. 메뉴를 표시하거나 숨깁니다

### 사용법 {#usage}

~~~jsx
menu?: boolean;
~~~

### 기본값 {#default-config}

~~~jsx
menu: true
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  menu: false,
  // 다른 설정 매개변수
});
~~~

**관련 문서:** [구성](configuration.md#menu)

**관련 샘플:** [Spreadsheet. Menu](https://snippet.dhtmlx.com/uulux27v)
