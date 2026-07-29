---
sidebar_label: beforeSheetChange
title: beforeSheetChange 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리의 문서에서 beforeSheetChange 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# beforeSheetChange

### 설명 {#description}

@short: 현재 활성 시트가 변경되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeSheetChange: (sheet: object) => void | boolean;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `sheet` - (필수) 현재 활성 시트의 이름과 id를 포함하는 객체

### 반환값 {#returns}

활성 시트를 변경하려면 `true`를 반환하고, 활성 시트 변경을 방지하려면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "beforeSheetChange" 이벤트를 구독합니다
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed");
    console.log(sheet);
    return true;
});
~~~

**변경 로그:** v4.1에서 추가됨

**관련 문서:** [이벤트 처리](handling_events.md)
