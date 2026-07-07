---
sidebar_label: unfreezeCols() 
title: unfreezeCols 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 unfreezeCols 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# unfreezeCols()

### 描述 {#description}

@short: 取消固定（"冻结"）的列

### 用法 {#usage}

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于定义列 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.unfreezeCols(); // 当前工作表中的固定列将被取消冻结
spreadsheet.unfreezeCols("sheet2!A1"); // "sheet2" 中的固定列将被取消冻结
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**相关 API：** [`freezeCols()`](api/spreadsheet_freezecols_method.md)

**相关示例：** [Spreadsheet. 通过 API 冻结列和行](https://snippet.dhtmlx.com/a12xd1mn)

**更新日志：** 
在 v5.2 中新增
