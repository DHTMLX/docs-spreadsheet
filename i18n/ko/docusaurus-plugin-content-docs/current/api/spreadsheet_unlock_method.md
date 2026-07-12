---
sidebar_label: unlock()
title: unlock 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 unlock 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# unlock()

### 설명 {#description}

@short: 잠긴 셀의 잠금을 해제합니다

### 사용법 {#usage}

~~~jsx
unlock(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 ID

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 셀 잠금을 해제합니다
spreadsheet.unlock("A1");

// 셀 범위의 잠금을 해제합니다
spreadsheet.unlock("A1:C1");

// 지정된 셀들의 잠금을 해제합니다
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
v4.1부터 셀 또는 셀 범위에 대한 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

여기서 `sheet1`은 탭 이름입니다.

탭 이름을 지정하지 않으면 메서드는 활성 탭의 셀 잠금을 해제합니다.
:::
