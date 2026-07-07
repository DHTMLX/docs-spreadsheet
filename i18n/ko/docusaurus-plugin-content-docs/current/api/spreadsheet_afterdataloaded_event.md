---
sidebar_label: afterDataLoaded
title: afterDataLoaded 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 afterDataLoaded 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하실 수 있습니다.
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

**관련 예제:** [Spreadsheet. 데이터 로드 이벤트](https://snippet.dhtmlx.com/vxr7amz6)
