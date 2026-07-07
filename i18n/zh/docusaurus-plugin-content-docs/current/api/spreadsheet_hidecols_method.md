---
sidebar_label: hideCols()
title: hideCols 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 hideCols 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# hideCols()

### 描述 {#description}

@short: 隐藏列

### 用法 {#usage}

~~~jsx
hideCols(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于确定列 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.hideCols("B2"); // "B" 列将被隐藏
spreadsheet.hideCols("sheet2!B2"); // "sheet2" 中的 "B" 列将被隐藏
spreadsheet.hideCols("B2:C2"); // "B" 列和 "C" 列将被隐藏
~~~


**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#hidingshowing-rows-and-columns)

**相关 API：** [`showCols()`](api/spreadsheet_showcols_method.md)

**相关示例：** [Spreadsheet. 通过 API 隐藏列和行](https://snippet.dhtmlx.com/zere1ote)

**变更日志：** 在 v5.2 中新增
