---
sidebar_label: addColumn() 
title: addColumn 方法
description: 使用 addColumn() 方法向 DHTMLX Spreadsheet 添加一个空列，该列插入到指定单元格所在列的位置，现有列向右移动。
---

# addColumn()

### 描述 {#description}

@short: 向电子表格中添加新列

:::info
该方法会找到指定的单元格并选中它，将该单元格所在列向左移动一格，并在原位插入一个空列。
:::

### 用法 {#usage}

~~~jsx
addColumn(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含要添加列的列标识符的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 添加空的 "G" 列
spreadsheet.addColumn("G1");
~~~

**相关文章：** [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
