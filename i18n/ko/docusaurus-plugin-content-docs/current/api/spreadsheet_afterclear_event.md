---
sidebar_label: afterClear
title: afterClear 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 afterClear 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# afterClear

:::caution
`afterClear` 이벤트는 v4.3에서 deprecated되었습니다. 아직 작동하지만, 다음과 같이 새로운 방식을 사용하는 것을 권장합니다:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
    }
});
~~~

새로운 개념에 대한 자세한 내용은 **[Spreadsheet 액션](api/overview/actions_overview.md)**을 참조하세요.
:::

### 설명 {#description}

@short: 스프레드시트가 초기화된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterClear: () => void;
~~~

### 예제 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "afterClear" 이벤트 구독
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**변경 로그:** v4.2에서 추가됨

**관련 문서:** [이벤트 처리](handling_events.md)
