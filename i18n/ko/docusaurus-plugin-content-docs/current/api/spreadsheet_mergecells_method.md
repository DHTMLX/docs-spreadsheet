---
sidebar_label: mergeCells()
title: mergeCells 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 mergeCells 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# mergeCells()

### 설명 {#description}

@short: 셀 범위를 하나로 병합하거나 병합된 셀을 분리합니다

### 사용법 {#usage}

~~~jsx
mergeCells( 
    cell: string,
    remove?: boolean
);
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 범위 (예: "A1:A5")
- `remove` - (선택) 셀에 수행할 작업을 정의합니다:
    - `false` - 셀을 병합합니다 (기본값)
    - `true` - 셀 병합을 해제합니다

### 예제 {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// A3, A4, A5 셀을 병합합니다
spreadsheet.mergeCells("A2:A5");

// A3, A4, A5 셀의 병합을 해제합니다
spreadsheet.mergeCells("A2:A5", true);
~~~

**변경 로그:** v5.0에서 추가됨

**관련 문서:** [셀 작업](working_with_cells.md#merging-cells)
