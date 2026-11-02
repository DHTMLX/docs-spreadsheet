---
sidebar_label: undo()
title: undo 메서드
description: DHTMLX Spreadsheet에서 undo() 메서드로 마지막 작업을 되돌리고 redo() 메서드로 다시 적용합니다.
---

# undo()

### 설명 {#description}

@short: 마지막 작업을 되돌립니다

### 사용법 {#usage}

~~~jsx
undo(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 한 단계 뒤로 되돌립니다
spreadsheet.undo();
~~~
