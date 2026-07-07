---
sidebar_label: showCols()
title: showCols 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 showCols 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# showCols()

### 描述 {#description}

@short: 显示隐藏的列

### 用法 {#usage}

~~~jsx
showCols(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于确定列 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx
spreadsheet.showCols("B2"); // "B" 列将重新变为可见
spreadsheet.showCols("sheet2!B2"); // "sheet2" 中的 "B" 列将重新变为可见
spreadsheet.showCols("B2:C2"); // "B" 列和 "C" 列将重新变为可见
~~~

**相关文章：** [使用电子表格](working_with_ssheet.md#hidingshowing-rows-and-columns)

**相关 API：** [`hideCols()`](api/spreadsheet_hidecols_method.md)

**相关示例：** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**变更日志：** 在 v5.2 中添加
