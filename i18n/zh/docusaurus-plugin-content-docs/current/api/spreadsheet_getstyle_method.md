---
sidebar_label: getStyle()
title: getStyle 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getStyle 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getStyle()

### 描述 {#description}

@short: 返回应用于单元格的样式

### 用法 {#usage}

~~~jsx
getStyle(cell: string): any;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格或单元格范围的 id

### 返回值 {#returns}

该方法返回单元格已设置的样式

### 示例 {#example}

~~~jsx {5,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 获取单个单元格的样式
const style = spreadsheet.getStyle("A1");
// -> {background: "#8DE9E1", color: "#03A9F4"}

// 获取单元格范围的样式
const rangeStyles = spreadsheet.getStyle("A1:D1"); // -> 详见说明

// 获取多个不同单元格的样式
const values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

:::info
对于多个单元格，该方法返回一个对象数组，包含每个单元格的样式：

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~
:::

:::info
从 v4.1 起，单元格或单元格范围的引用可以使用以下格式指定：

~~~jsx
const style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法返回活动标签页中单元格的样式。
:::
