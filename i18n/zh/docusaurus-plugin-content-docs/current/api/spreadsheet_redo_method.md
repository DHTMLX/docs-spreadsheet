---
sidebar_label: redo()
title: redo 方法
description: 使用 redo() 方法在 DHTMLX Spreadsheet 中重新执行已撤销的操作。
---

# redo()

### 描述 {#description}

@short: 重新执行已撤销的操作

### 用法 {#usage}

~~~jsx
redo(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 重新执行已撤销的操作
spreadsheet.redo();
~~~
