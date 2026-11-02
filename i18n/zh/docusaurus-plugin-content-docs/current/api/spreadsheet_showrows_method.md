---
sidebar_label: showRows()
title: showRows 方法
description: 使用 showRows() 方法显示 DHTMLX Spreadsheet 中隐藏的行，行由传入的单元格或当前选中的单元格确定。
---

# showRows()

### 描述 {#description}

@short: 显示隐藏的行

### 用法 {#usage}

~~~jsx
showRows(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于确定行 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.showRows("B2"); // 第 "2" 行将重新变为可见
spreadsheet.showRows("sheet2!B2"); // "sheet2" 中的第 "2" 行将重新变为可见
spreadsheet.showRows("B2:C2"); // 第 "2" 行到第 "4" 行将重新变为可见
~~~

**相关文章：** [使用电子表格](working_with_ssheet.md#hidingshowing-rows-and-columns)

**相关 API：** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**相关示例：** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**更新日志：** 在 v5.2 中新增
