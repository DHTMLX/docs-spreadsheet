---
sidebar_label: setFormat()
title: setFormat 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 setFormat 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# setFormat()

### 描述 {#description}

@short: 为单元格的值设置指定格式

### 用法 {#usage}

~~~jsx
setFormat(cell: string, format: string | array): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单个或多个单元格的 id，或单元格区域
- `format` - （必填）应用于单元格值的数字格式名称（可为一个或多个）

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 将货币格式应用于单元格 A1
spreadsheet.setFormat("A1","currency");
~~~

:::info
从 v4.1 起，可以使用以下格式指定单元格引用：

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将为当前活动标签页中单元格的值设置格式。
:::

**相关文章：** [数字格式](number_formatting.md)
