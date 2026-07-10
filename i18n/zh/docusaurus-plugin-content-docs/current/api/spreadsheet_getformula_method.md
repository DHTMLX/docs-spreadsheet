---
sidebar_label: getFormula()
title: getFormula 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getFormula 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getFormula()

### 描述 {#description}

@short: 返回单元格的公式

### 用法 {#usage}

~~~jsx 
getFormula(cell: string): string | array;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格的 id

### 返回值 {#returns}

该方法返回单元格的公式

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 返回 "ABS(C2)"
const formula = spreadsheet.getFormula("B2");
~~~

:::info
单元格引用可以使用以下格式指定：

~~~jsx
// 返回 "ABS(C2)"
const formula = spreadsheet.getFormula("sheet1!B2"); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法返回活动标签页中单元格的公式。
:::

**更新日志：** v4.1 中新增
