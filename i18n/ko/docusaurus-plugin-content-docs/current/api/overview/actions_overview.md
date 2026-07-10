---
sidebar_label: Spreadsheet 액션
title: 액션 개요
description: DHTMLX JavaScript Spreadsheet 라이브러리의 액션 개요를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# 액션 개요 {#actions-overview}

이 섹션에서는 Spreadsheet 이벤트와 상호작용하는 새로운 방식을 설명합니다.

v4.3부터 DHTMLX Spreadsheet는 코드를 더 간단하고 간결하게 만들어 주는 [`beforeAction`](api/spreadsheet_beforeaction_event.md)/[`afterAction`](api/spreadsheet_afteraction_event.md) 이벤트 쌍을 포함합니다. 이 이벤트들은 액션이 실행되기 직전에 발생하며, 어떤 액션이 수행되었는지를 정확히 나타냅니다.

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    // more actions
});

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config)
    },
    // more actions
});
~~~

[사용 가능한 액션의 전체 목록은 아래에서 확인하실 수 있습니다.](#list-of-actions)

>이는 더 이상 스프레드시트에서 무언가를 변경할 때 실행하는 액션을 추적하고 처리하기 위해 [**before-** 및 **after-**](api/overview/events_overview.md) 이벤트 쌍을 추가할 필요가 없다는 것을 의미합니다.

>그러나 필요한 경우 **이전 방식**도 사용할 수 있으며, 기존의 모든 이벤트는 이전과 동일하게 계속 작동합니다:
~~~jsx
spreadsheet.events.on("afterColumnAdd", function(cell){
    console.log("A new column is added", cell);
});
~~~
~~~jsx
spreadsheet.events.on("beforeColumnAdd", function(cell){
    console.log("A new column will be added", cell);
    return true;
});
~~~




## 액션 목록 {#list-of-actions}

| 액션                 | 설명                                                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addColumn**        | 새 열을 추가할 때 실행됩니다                                                                                                                                                              |
| **addRow**           | 새 행을 추가할 때 실행됩니다                                                                                                                                                              |
| **addSheet**         | 새 시트를 추가할 때 실행됩니다                                                                                                                                                            |
| **clear**            | <b>clear()</b> 메서드를 통해 스프레드시트를 지울 때 실행됩니다                                                                                                                           |
| **clearSheet**       | <b>sheets.clear()</b> 메서드를 통해 시트를 지울 때 실행됩니다                                                                                                                            |
| **deleteColumn**     | 열을 삭제할 때 실행됩니다                                                                                                                                                                 |
| **deleteRow**        | 행을 삭제할 때 실행됩니다                                                                                                                                                                 |
| **deleteSheet**      | 시트를 삭제할 때 실행됩니다                                                                                                                                                               |
| **filter**           | 시트에서 데이터를 필터링할 때 실행됩니다                                                                                                                                                  |
| **fitColumn**        | 열 너비를 자동으로 맞출 때 실행됩니다                                                                                                                                                     |
| **groupAction**      | 셀 범위를 선택하고 일부 작업(예: 셀 스타일 또는 형식 변경, 셀 잠금/잠금 해제, 셀 값 또는 스타일 지우기)을 적용할 때 실행됩니다                                                           |
| **insertLink**       | 셀에 하이퍼링크를 삽입할 때 실행됩니다                                                                                                                                                    |
| **lockCell**         | 셀을 잠그거나 잠금 해제할 때 실행됩니다                                                                                                                                                   |
| **merge**            | 셀 범위를 병합할 때 실행됩니다                                                                                                                                                            |
| **removeCellStyles** | 셀 스타일을 지울 때 실행됩니다                                                                                                                                                            |
| **renameSheet**      | 시트 이름을 바꿀 때 실행됩니다                                                                                                                                                            |
| **resizeCol**        | 열 크기를 조정할 때 실행됩니다                                                                                                                                                            |
| **resizeRow**        | 행 크기를 조정할 때 실행됩니다                                                                                                                                                            |
| **setCellFormat**    | 셀 형식을 변경할 때 실행됩니다                                                                                                                                                            |
| **setCellValue**     | 셀 값을 변경하거나 제거할 때 실행됩니다                                                                                                                                                   |
| **setValidation**    | 셀에 데이터 유효성 검사를 설정할 때 실행됩니다                                                                                                                                            |
| **sortCells**        | 스프레드시트에서 데이터를 정렬할 때 실행됩니다                                                                                                                                            |
| **setCellStyle**     | 셀 스타일을 변경할 때 실행됩니다                                                                                                                                                          |
| **toggleVisibility** | 열/행을 숨기거나 표시할 때 실행됩니다                                                                                                                                                     |
| **toggleFreeze**     | 열/행을 고정하거나 고정 해제할 때 실행됩니다                                                                                                                                              |
| **unmerge**          | 셀을 분할할 때 실행됩니다                                                                                                                                                                 |

**변경 로그:**

- **toggleFreeze** 및 **toggleVisibility** 액션이 v5.2에서 추가되었습니다
- **merge**, **unmerge**, **filter**, **fitColumn**, **insertLink** 액션이 v5.0에서 추가되었습니다

**관련 샘플:** [Spreadsheet. 액션](https://snippet.dhtmlx.com/efcuxlkt)
