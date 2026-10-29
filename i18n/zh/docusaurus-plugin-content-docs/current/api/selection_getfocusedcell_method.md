---
sidebar_label: getFocusedCell() 
title: getFocusedCell selection 方法
description: 使用 selection.getFocusedCell() 方法获取 DHTMLX Spreadsheet 中焦点（活动）单元格的 id。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 配置参数
});
spreadsheet.parse(data);

// 将焦点设置到某个单元格
spreadsheet.selection.setFocusedCell("D4");

// 获取焦点单元格
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md)
