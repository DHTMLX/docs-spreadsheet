---
sidebar_label: lock()
title: lock 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 lock 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# lock()

### 설명 {#description}

@short: 지정한 셀을 잠급니다

### 사용법 {#usage}

~~~jsx
lock(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 id

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 셀 하나를 잠급니다
spreadsheet.lock("A1");

// 셀 범위를 잠급니다
spreadsheet.lock("A1:C1");

// 지정한 셀들을 잠급니다
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
v4.1부터 셀 또는 셀 범위 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
spreadsheet.lock("sheet1!A2"); 
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 현재 활성 탭의 셀을 잠급니다.
:::

**관련 예제**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)
