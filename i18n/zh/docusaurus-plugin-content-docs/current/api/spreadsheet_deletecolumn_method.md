---
sidebar_label: deleteColumn()
title: deleteColumn 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 deleteColumn 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# deleteColumn()

### 描述 {#description}

@short: 从电子表格中删除一列

:::info
该方法会查找指定单元格，选中它，删除该单元格所在的列，并将左侧的列移至该位置。
:::

### 用法 {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含待删除列名称的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 删除 "G" 列
spreadsheet.deleteColumn("G2");
~~~

:::note
您可以通过提供单元格 id 范围作为方法参数来删除多列，例如："A1:C3"。
:::

**相关文章：** [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
