---
sidebar_label: endEdit()
title: endEdit 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 endEdit 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# endEdit()

### 설명 {#description}

@short: 선택된 셀의 편집을 종료하고, 에디터를 닫으며, 입력된 값을 저장합니다

### 사용법 {#usage}

~~~jsx
endEdit(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 선택된 셀의 편집을 종료합니다
spreadsheet.endEdit();
~~~

**관련 문서:** [스프레드시트 작업](working_with_cells.md#editing-a-cell)
