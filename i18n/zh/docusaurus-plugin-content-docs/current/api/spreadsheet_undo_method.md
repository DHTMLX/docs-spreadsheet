---
sidebar_label: undo()
title: undo 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 undo 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 执行一步撤销操作
spreadsheet.undo();
~~~
