---
sidebar_label: endEdit()
title: endEdit 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 endEdit 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# endEdit()

### 描述 {#description}

@short: 结束对选定单元格的编辑，关闭编辑器并保存输入的值

### 用法 {#usage}

~~~jsx
endEdit(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 结束对选定单元格的编辑
spreadsheet.endEdit();
~~~

**相关文章：** [使用 Spreadsheet](working_with_cells.md#editing-a-cell)
