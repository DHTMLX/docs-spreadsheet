---
sidebar_label: hideSearch()
title: hideSearch 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 hideSearch 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 검색 바를 열고 발견된 셀을 강조 표시합니다
spreadsheet.search("min", true);

// 검색 바를 숨깁니다
spreadsheet.hideSearch(); 
~~~

**변경 이력:** v5.0에서 추가됨

**관련 문서:** [Spreadsheet 다루기](working_with_ssheet.md#searching-for-data)
