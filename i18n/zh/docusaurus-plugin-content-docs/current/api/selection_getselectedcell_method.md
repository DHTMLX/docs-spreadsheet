---
sidebar_label: getSelectedCell() 
title: getSelectedCell selection 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getSelectedCell selection 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getSelectedCell()

### 描述 {#description}

@short: 返回选中单元格的 id（可为多个）

### 用法 {#usage}

~~~jsx
getSelectedCell(): string;
~~~

### 返回值 {#returns}

该方法返回选中单元格的 id 或单元格区域

### 示例 {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// 获取选中的单元格
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)
