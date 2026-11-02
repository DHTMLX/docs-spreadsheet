---
sidebar_label: undo()
title: undo 方法
description: 使用 undo() 方法撤销 DHTMLX Spreadsheet 中的最近一次操作，并使用 redo() 方法重新应用。
---

# undo()

### 描述 {#description}

@short: 撤销最近一次操作

### 用法 {#usage}

~~~jsx
undo(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 执行一步撤销操作
spreadsheet.undo();
~~~
