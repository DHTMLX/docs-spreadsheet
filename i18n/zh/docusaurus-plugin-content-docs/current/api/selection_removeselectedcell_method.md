---
sidebar_label: removeSelectedCell() 
title: removeSelectedCell selection 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Selection 的 removeSelectedCell 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# removeSelectedCell()

### 描述 {#description}

@short: 取消指定单元格的选中状态

### 用法 {#usage}

~~~jsx
removeSelectedCell(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）选中单元格的 id 或单元格区域

### 示例 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

// 选中分散的单元格
spreadsheet.selection.setSelectedCell("A1:A9,C2,B4,D6");

// 取消指定单元格的选中状态
spreadsheet.selection.removeSelectedCell("A3:A6,C2");
~~~

**更新日志：** 在 v4.2 中新增

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)

**相关示例：** [Spreadsheet. 取消选中](https://snippet.dhtmlx.com/u4j76cuh)
