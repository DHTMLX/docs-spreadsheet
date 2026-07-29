---
sidebar_label: getValue()
title: getValue 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getValue 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getValue()

### 描述 {#description}

@short: 返回单元格的值

### 用法 {#usage}

~~~jsx
getValue(cell: string): any | array;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格或单元格范围的 id

### 返回值 {#returns}

该方法返回单元格的值

### 示例 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 返回单个单元格的值
const cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// 返回单元格范围的值
const rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// 返回多个离散单元格的值
const values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

:::info
从 v4.1 开始，可以使用以下格式指定单元格或单元格范围的引用：

~~~jsx
const cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将返回活动标签页中单元格的值。
:::
