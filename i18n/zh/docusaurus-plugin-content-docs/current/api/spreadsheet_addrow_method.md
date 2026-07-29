---
sidebar_label: addRow()
title: addRow 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 addRow 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# addRow()

### 描述 {#description}

@short: 向电子表格中添加新行

:::info
该方法会找到指定的单元格并选中它，将该单元格所在行向下移动一格，并在原位插入一个空行。
:::

### 用法 {#usage}

~~~jsx
addRow(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含要添加行的行标识符的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 添加空的第二行
spreadsheet.addRow("G2");
~~~

**相关文章：** [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
