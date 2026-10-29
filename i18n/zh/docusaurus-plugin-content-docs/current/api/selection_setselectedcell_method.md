---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection 方法
description: 使用 selection.setSelectedCell() 方法在 DHTMLX Spreadsheet 中选择一个单元格、多个单元格或单元格区域，并可选择滚动到该位置。
---

# setSelectedCell()

### 描述 {#description}

@short: 选中指定单元格（可为多个）

### 用法 {#usage}

~~~jsx
setSelectedCell(cell: string, scroll?: boolean): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）选中单元格的 id 或单元格区域
- `scroll` - （可选）是否将 Spreadsheet 滚动到该单元格，默认为 `true`

### 示例 {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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
