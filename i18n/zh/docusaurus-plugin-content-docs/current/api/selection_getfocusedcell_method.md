---
sidebar_label: getFocusedCell() 
title: getFocusedCell selection 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getFocusedCell selection 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getFocusedCell()

### 描述 {#description}

@short: 返回当前焦点单元格的 id

### 用法 {#usage}

~~~jsx
getFocusedCell(): string;
~~~

### 返回值 {#returns}

该方法返回焦点单元格的 id

### 示例 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

// 将焦点设置到某个单元格
spreadsheet.selection.setFocusedCell("D4");

// 获取焦点单元格
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)
