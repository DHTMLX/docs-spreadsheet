---
sidebar_label: unfreezeRows() 
title: unfreezeRows 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 unfreezeRows 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# unfreezeRows()

### 描述 {#description}

@short: 取消固定（"冻结"）的行

### 用法 {#usage}

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于定义行 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.unfreezeRows(); // 当前工作表中的固定行将被取消冻结
spreadsheet.unfreezeRows("sheet2!A1"); // "sheet2" 中的固定行将被取消冻结
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**相关 API：** [`freezeRows()`](api/spreadsheet_freezerows_method.md)

**相关示例：** [Spreadsheet. 通过 API 冻结列和行](https://snippet.dhtmlx.com/a12xd1mn)

**更新日志：** 
在 v5.2 中新增
