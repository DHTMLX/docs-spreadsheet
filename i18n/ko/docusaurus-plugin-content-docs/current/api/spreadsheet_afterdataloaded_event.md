---
sidebar_label: afterDataLoaded
title: afterDataLoaded 이벤트
description: DHTMLX Spreadsheet에서 afterDataLoaded 이벤트로 데이터가 로드된 후 코드를 실행합니다. 예를 들어, 로딩이 완료되면 메시지를 표시할 수 있습니다.
---

# afterDataLoaded

### 설명 {#description}

@short: 데이터 로딩이 완료된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterDataLoaded: () => void;
~~~

### 예제 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "afterDataLoaded" 이벤트 구독
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.message({
        text: "Data is successfully loaded into Spreadsheet!",
        css: "dhx_message--success",
        expire: 5000
    });
});
~~~

**변경 로그:** v5.2에서 추가됨

**관련 문서:** [이벤트 처리](handling_events.md)

**관련 샘플:** [Spreadsheet. 데이터 로드 이벤트](https://snippet.dhtmlx.com/vxr7amz6)
