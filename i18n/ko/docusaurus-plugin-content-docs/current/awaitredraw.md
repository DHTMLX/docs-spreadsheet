---
sidebar_label: AwaitRedraw 헬퍼
title: AwaitRedraw 헬퍼
description: dhx.awaitRedraw 헬퍼로 DHTMLX Spreadsheet의 렌더링이 끝난 후 코드를 실행합니다. 컴포넌트가 페이지에 표시된 후에만 적용되는 API 메서드에 사용합니다.
---

# AwaitRedraw 헬퍼 {#awaitredraw-helper}

DHTMLX Spreadsheet의 일부 API 메서드는 컴포넌트가 페이지에 렌더링된 후에만 적용됩니다. 경우에 따라 렌더링에 시간이 걸릴 수 있으므로, 다음 코드를 실행하기 전에 브라우저가 렌더링을 완료할 때까지 기다려야 합니다.

이러한 경우 `dhx.awaitRedraw` 헬퍼를 사용할 수 있습니다. 이 헬퍼는 렌더링 사이클을 추적하여 Spreadsheet의 렌더링이 완료되는 즉시 코드를 실행합니다.

~~~js
dhx.awaitRedraw().then(() => {
    // 여기에 코드를 작성하세요
});
~~~

예를 들어, `afterDataLoaded` 내에서 `awaitRedraw`를 사용하여 셀 값을 읽기 전에 해당 값이 사용 가능한지 확인할 수 있습니다:

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~
