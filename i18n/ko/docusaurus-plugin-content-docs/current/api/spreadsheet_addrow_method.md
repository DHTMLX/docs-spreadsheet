---
sidebar_label: addRow()
title: addRow 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 addRow 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# addRow()

### 설명 {#description}

@short: 스프레드시트에 새 행을 추가합니다

:::info
이 메서드는 지정한 셀을 찾아 선택한 다음, 해당 셀이 위치한 행을 한 칸 아래로 이동시키고 그 자리에 빈 행을 추가합니다.
:::

### 사용법 {#usage}

~~~jsx
addRow(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 추가할 행의 id가 포함된 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 빈 두 번째 행 추가
spreadsheet.addRow("G2");
~~~

**관련 문서:** [Spreadsheet 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
