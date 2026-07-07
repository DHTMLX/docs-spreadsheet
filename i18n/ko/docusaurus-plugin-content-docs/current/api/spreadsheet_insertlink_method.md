---
sidebar_label: insertLink()
title: insertLink 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 insertLink 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# insertLink()

### 설명 {#description}

@short: 셀에 하이퍼링크를 삽입하거나 제거합니다

### 사용법 {#usage}

~~~jsx
insertLink( 
    cell: string,
    link? : {
        text?: string, 
        href: string
    }
): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀의 id
- `link` - (선택) 링크 설정 객체:
    - `text` - (선택) 하이퍼링크에 표시할 텍스트
    - `href` - (필수) 하이퍼링크가 연결되는 페이지의 URL

:::info
텍스트는 유지하면서 하이퍼링크만 제거하려면 `link` 매개변수 없이 메서드를 호출합니다.
:::

### 예제 {#example}

~~~jsx {5-7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "A2" 셀에 링크 삽입
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});

// "A2" 셀에서 링크 제거
spreadsheet.insertLink("A2");
~~~

**변경 이력:** v5.0에서 추가됨

**관련 문서:** [Spreadsheet 다루기](working_with_cells.md#inserting-a-hyperlink-into-a-cell)
