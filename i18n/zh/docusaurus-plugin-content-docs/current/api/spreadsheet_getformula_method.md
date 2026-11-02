---
sidebar_label: getFormula()
title: getFormula 方法
description: 使用 getFormula() 方法获取 DHTMLX Spreadsheet 中单元格的公式，包括其他工作表中的单元格。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
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
