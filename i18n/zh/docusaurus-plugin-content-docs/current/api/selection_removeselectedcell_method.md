---
sidebar_label: removeSelectedCell() 
title: removeSelectedCell selection 方法
description: 使用 selection.removeSelectedCell() 方法取消 DHTMLX Spreadsheet 中指定单元格或单元格区域的选择。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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
