---
sidebar_label: showCols()
title: showCols 方法
description: 使用 showCols() 方法显示 DHTMLX Spreadsheet 中隐藏的列，列由传入的单元格或当前选中的单元格确定。
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

**更新日志：** 在 v5.2 中新增
