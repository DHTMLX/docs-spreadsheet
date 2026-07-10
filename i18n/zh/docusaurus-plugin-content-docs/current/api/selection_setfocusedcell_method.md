---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 setFocusedCell selection 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# setFocusedCell()

### 描述 {#description}

@short: 将焦点设置到指定单元格

### 用法 {#usage}

~~~jsx
setFocusedCell(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）要设置焦点的单元格 id

### 示例 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)
