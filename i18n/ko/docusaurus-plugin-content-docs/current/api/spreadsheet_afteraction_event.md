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
afterAction: (
    action: string,
    config: {
        action?: string,
        cell?: string,
        row?: number,
        col?: number,
        val?: any,
        prev?: any,
        groupAction?: string,
        pageId?: string | number,
        pageName?: string,
        // other properties of the action
    } | object[]
) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `action` - (필수) 액션의 이름. 사용 가능한 액션의 전체 목록은 [여기](api/overview/actions_overview.md#list-of-actions)를 참조하세요.
- `config` - (필수) 액션의 매개변수를 포함한 객체. 속성 집합은 액션에 따라 다릅니다. 객체에는 다음이 포함될 수 있습니다:
    - `action` - (선택 사항) 액션의 이름
    - `cell` - (선택 사항) 액션이 적용되는 셀 또는 셀 범위의 id (예: `"A1"` 또는 `"B2:D5"`)
    - `row` - (선택 사항) 셀이 위치한 행의 0부터 시작하는 인덱스
    - `col` - (선택 사항) 셀이 위치한 열의 0부터 시작하는 인덱스
    - `val` - (선택 사항) 액션이 적용하는 새 값 (예: 셀 값, 스타일 또는 크기)
    - `prev` - (선택 사항) 이전 값
    - `groupAction` - (선택 사항) `cell`이 셀 범위일 때 `action` 대신 실행되는 액션의 이름 (예: `"groupAction"`, `"groupRowAction"` 또는 `"resizeCol"`)
    - `pageId` - (선택 사항) 시트의 id
    - `pageName` - (선택 사항) 시트의 이름

    붙여넣기처럼 여러 액션이 함께 실행되는 경우 `action` 매개변수는 `"groupAction"`이며, `config`는 이러한 객체의 배열입니다.

### 예제 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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
