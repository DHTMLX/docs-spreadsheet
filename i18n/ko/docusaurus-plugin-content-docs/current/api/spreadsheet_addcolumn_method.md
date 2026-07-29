---
sidebar_label: addColumn() 
title: addColumn 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 addColumn 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# addColumn()

### 설명 {#description}

@short: 스프레드시트에 새 열을 추가합니다

:::info
이 메서드는 지정한 셀을 찾아 선택한 다음, 해당 셀이 위치한 열을 한 칸 왼쪽으로 이동시키고 그 자리에 빈 열을 추가합니다.
:::

### 사용법 {#usage}

~~~jsx
addColumn(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 추가할 열의 id가 포함된 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 빈 "G" 열 추가
spreadsheet.addColumn("G1");
~~~

**관련 문서:** [Spreadsheet 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
