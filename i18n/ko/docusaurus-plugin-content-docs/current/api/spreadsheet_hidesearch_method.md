---
sidebar_label: hideSearch()
title: hideSearch 메서드
description: DHTMLX Spreadsheet에서 hideSearch() 메서드로 검색 바를 숨깁니다. 예를 들어 search() 메서드로 연 검색 바를 닫을 수 있습니다.
---

# hideSearch()

### 설명 {#description}

@short: 검색 바를 숨깁니다

### 사용법 {#usage}

~~~jsx
hideSearch(): void;
~~~

### 예제 {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 검색 바를 열고 발견된 셀을 강조 표시합니다
spreadsheet.search("min", true);

// 검색 바를 숨깁니다
spreadsheet.hideSearch(); 
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [Spreadsheet 다루기](working_with_ssheet.md#searching-for-data)
