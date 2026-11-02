---
sidebar_label: fitColumn()
title: fitColumn 메서드
description: DHTMLX Spreadsheet에서 fitColumn() 메서드로 열 너비를 해당 열에서 가장 긴 값에 맞게 조정합니다.
---

# fitColumn()

### 설명 {#description}

@short: 열 너비를 해당 열에서 가장 긴 값에 맞게 조정합니다


### 사용법 {#usage}

~~~jsx
fitColumn(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 해당 열의 이름을 포함하는 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "G" 열의 너비를 조정합니다
spreadsheet.fitColumn("G2");
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#autofit-column-width)
