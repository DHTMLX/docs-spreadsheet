---
sidebar_label: deleteColumn()
title: deleteColumn 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 문서에서 deleteColumn 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# deleteColumn()

### 설명 {#description}

@short: 스프레드시트에서 열을 제거합니다

:::info
이 메서드는 지정된 셀을 찾아 선택한 다음, 해당 셀이 위치한 열을 제거하고 왼쪽 열을 해당 위치로 이동합니다.
:::

### 사용법 {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 삭제할 열의 이름이 포함된 셀의 id

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "G" 열을 제거합니다
spreadsheet.deleteColumn("G2");
~~~

:::note
"A1:C3"과 같이 셀 id의 범위를 메서드의 매개변수로 제공하여 여러 열을 삭제할 수 있습니다.
:::

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
