---
sidebar_label: addColumn() 
title: addColumn 메서드
description: DHTMLX Spreadsheet에서 addColumn() 메서드로 빈 열을 추가합니다. 지정한 셀의 열 위치에 열을 삽입하고 기존 열을 오른쪽으로 이동합니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 빈 "G" 열 추가
spreadsheet.addColumn("G1");
~~~

**관련 문서:** [Spreadsheet 작업](working_with_ssheet.md#addingremoving-rows-and-columns)
