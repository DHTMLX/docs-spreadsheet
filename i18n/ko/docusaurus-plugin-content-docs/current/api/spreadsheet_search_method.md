---
sidebar_label: search()
title: search 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 search 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# search()

### 설명 {#description}

@short: 지정한 매개변수로 셀을 검색합니다

이 메서드는 스프레드시트 오른쪽 상단에 검색 상자를 열고 일치하는 결과를 강조 표시할 수도 있습니다

### 사용법 {#usage}

~~~jsx
search( 
    text?: string,
    openSearch?: boolean, 
    sheetId?: string | number
): string[];
~~~

### 매개변수 {#parameters}

- `text` - (선택) 검색할 값
- `openSearch` - (선택) `true`이면 검색 상자를 열고 일치하는 결과가 있는 셀을 강조 표시합니다. 기본값은 `false`
- `sheetId` - (선택) 시트의 ID. 기본적으로 현재 활성 시트에서 셀을 검색합니다

### 반환값 {#returns}

이 메서드는 검색된 셀의 ID로 구성된 배열을 반환합니다

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 일치하는 셀의 ID를 반환하고, 검색 바를 열며 검색된 셀을 강조 표시합니다
spreadsheet.search("feb", true, "Income"); // -> ['C1']
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#searching-for-data)
