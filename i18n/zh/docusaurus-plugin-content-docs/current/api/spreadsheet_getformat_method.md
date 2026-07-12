---
sidebar_label: getFormat()
title: getFormat 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getFormat 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getFormat()

### 描述 {#description}

@short: 返回应用于单元格值的数字格式

### 用法 {#usage}

~~~jsx
getFormat(cell: string): string | array;
~~~

### 参数 {#parameters}

`cell` - （必填）单元格或单元格范围的 id

### 返回值 {#returns}

该方法返回应用于单元格值的格式

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 返回 "currency"
const format = spreadsheet.getFormat("A1");
~~~

:::info
从 v4.1 起，单元格引用可以使用以下格式指定：

~~~jsx
// 返回 "number"
const cellFormat = spreadsheet.getFormat("sheet1!A2"); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法返回当前活动标签页中单元格值所应用的格式。
:::

**相关文章：** [数字格式化](number_formatting.md)
