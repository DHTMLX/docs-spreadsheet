---
sidebar_label: isLocked()
title: isLocked 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 isLocked 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# isLocked()

### 설명 {#description}

@short: 셀(들)이 잠겨 있는지 확인합니다

### 사용법 {#usage}

~~~jsx
isLocked(cell: string): boolean;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 id

### 반환값 {#returns}

이 메서드는 셀이 잠겨 있으면 `true`를, 잠기지 않았으면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 셀이 잠겨 있는지 확인
const cellLocked = spreadsheet.isLocked("A1");

// 여러 셀이 잠겨 있는지 확인
const rangeLocked = spreadsheet.isLocked("A1:C1");

// 분산된 셀들이 잠겨 있는지 확인
const cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

:::info
여러 셀을 동시에 확인하는 경우, 지정된 셀 중 하나라도 잠긴 셀이 있으면 메서드는 `true`를 반환합니다.
:::

:::info
v4.1부터 셀 또는 셀 범위에 대한 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
const cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 메서드는 활성 탭의 셀을 확인합니다.
:::
