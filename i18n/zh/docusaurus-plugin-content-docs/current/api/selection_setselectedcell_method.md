---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 setSelectedCell selection 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# setSelectedCell()

### 描述 {#description}

@short: 选中指定单元格（可为多个）

### 用法 {#usage}

~~~jsx
setSelectedCell(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）选中单元格的 id 或单元格区域

### 示例 {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

// 选中单个单元格
spreadsheet.selection.setSelectedCell("B5");

// 选中单元格区域
spreadsheet.selection.setSelectedCell("B1:B5");

// 选中分散的单元格
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)
