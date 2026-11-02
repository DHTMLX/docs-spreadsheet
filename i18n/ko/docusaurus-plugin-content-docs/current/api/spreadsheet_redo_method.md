---
sidebar_label: redo()
title: redo 메서드
description: DHTMLX Spreadsheet에서 redo() 메서드로 취소된 작업을 다시 적용합니다.
---

# redo()

### 설명 {#description}

@short: 취소된 작업을 다시 적용합니다

### 사용법 {#usage}

~~~jsx
redo(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 취소된 작업을 다시 적용합니다
spreadsheet.redo();
~~~
