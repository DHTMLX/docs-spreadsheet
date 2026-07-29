---
sidebar_label: hideRows()
title: hideRows 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 hideRows 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# hideRows()

### 描述 {#description}

@short: 隐藏行

### 用法 {#usage}

~~~jsx
hideRows(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于确定行 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.hideRows("B2"); // 第 "2" 行将被隐藏
spreadsheet.hideRows("sheet2!B2"); // "sheet2" 中的第 "2" 行将被隐藏
spreadsheet.hideRows("B2:C4"); // 第 "2" 行到第 "4" 行将被隐藏
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#hidingshowing-rows-and-columns)

**相关 API：** [`showRows()`](api/spreadsheet_showrows_method.md)

**相关示例：** [Spreadsheet. 通过 API 隐藏列和行](https://snippet.dhtmlx.com/zere1ote)

**更新日志：** 在 v5.2 中新增
