---
sidebar_label: getFilter()
title: getFilter 메서드
description: DHTMLX Spreadsheet에서 getFilter() 메서드로 시트의 필터링 조건을 가져옵니다. 필터링된 셀 범위와 필터 규칙을 반환합니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 현재 시트의 필터링 기준을 가져옵니다
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [데이터 필터링](working_with_ssheet.md#filtering-data)
