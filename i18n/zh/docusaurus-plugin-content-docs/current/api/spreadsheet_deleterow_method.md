---
sidebar_label: deleteRow()
title: deleteRow 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 deleteRow 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# deleteRow()

### 描述 {#description}

@short: 从电子表格中删除一行

:::info
该方法会查找指定单元格，选中它，删除该单元格所在的行，并将下方的行移至该位置。
:::

### 用法 {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含待删除行 id 的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 删除第二行
spreadsheet.deleteRow("G2");
~~~

:::note
您可以通过提供单元格 id 范围作为方法参数来删除多行，例如："A1:C3"。
:::

**相关文章：** [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
