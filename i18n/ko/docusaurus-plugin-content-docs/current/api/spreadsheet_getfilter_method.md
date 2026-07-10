---
sidebar_label: getFilter()
title: getFilter 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getFilter 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# getFilter()

### 설명 {#description}

@short: 데이터 필터링에 지정된 기준이 포함된 객체를 반환합니다

### 사용법 {#usage}

~~~jsx   
getFilter(id?: string): {cell, rules};
~~~

### 매개변수 {#parameters}

- `id` - (선택 사항) 시트의 id. 지정하지 않으면 현재 시트에 대해 메서드가 호출됩니다

### 반환값 {#returns}

이 메서드는 필터링 기준이 포함된 객체를 반환합니다. 객체는 두 가지 속성을 포함합니다:

- `cell` - 필터링이 적용된 셀 범위
- `rules` - 필터링 규칙이 담긴 객체 배열

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 현재 시트의 필터링 기준을 가져옵니다
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [데이터 필터링](working_with_ssheet.md#filtering-data)
