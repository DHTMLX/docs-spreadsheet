---
sidebar_label: beforeAction
title: beforeAction 이벤트
description: DHTMLX Spreadsheet에서 beforeAction 이벤트로 액션을 가로챕니다. 이 이벤트는 액션의 이름과 매개변수를 받으며, 핸들러가 false를 반환하면 액션을 취소합니다.
---

# beforeAction

### 설명 {#description}

@short: 액션이 실행되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeAction: (
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
) => void | boolean;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `action` - (필수) 액션의 이름. 사용 가능한 액션의 전체 목록은 [여기](api/overview/actions_overview.md#list-of-actions)에서 확인하세요
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

### 반환값 {#returns}

액션 실행을 방지하려면 `false`를 반환하고, 그렇지 않으면 `true`를 반환하세요

### 예제 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(dataset);

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return false;
    }
});
~~~

**변경 로그:** v4.3에서 추가됨

**관련 문서:**
- [Spreadsheet 액션](api/overview/actions_overview.md)
- [이벤트 처리](handling_events.md)
