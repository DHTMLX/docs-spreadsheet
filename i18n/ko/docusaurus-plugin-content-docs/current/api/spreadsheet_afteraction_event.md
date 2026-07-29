---
sidebar_label: afterAction
title: afterAction 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 afterAction 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# afterAction

### 설명 {#description}

@short: 액션이 실행된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterAction: (action: string, config: object) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `action` - (필수) 액션의 이름. 사용 가능한 액션의 전체 목록은 [여기](api/overview/actions_overview.md#list-of-actions)를 참조하세요.
- `config` - (필수) 액션의 매개변수를 포함한 객체

### 예제 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config 매개변수
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**변경 로그:** v4.3에서 추가됨

**관련 문서:** 
- [Spreadsheet 액션](api/overview/actions_overview.md)
- [이벤트 처리](handling_events.md)
