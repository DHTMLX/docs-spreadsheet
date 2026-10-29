---
sidebar_label: endEdit()
title: endEdit 메서드
description: DHTMLX Spreadsheet에서 endEdit() 메서드로 선택된 셀의 편집을 종료합니다. 이 메서드는 에디터를 닫고 입력된 값을 저장합니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 선택된 셀의 편집을 종료합니다
spreadsheet.endEdit();
~~~

**관련 문서:** [스프레드시트 작업](working_with_cells.md#editing-a-cell)
