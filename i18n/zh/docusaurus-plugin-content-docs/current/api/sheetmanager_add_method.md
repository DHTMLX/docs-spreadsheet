---
sidebar_label: add()
title: add 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Sheet Manager 的 add 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# add()

### 描述 {#description}

@short: 向电子表格中添加一个新的空工作表，并返回新建工作表的唯一标识符

如果未提供名称，系统将自动生成默认名称（例如 "Sheet 2" 或 "Sheet 3"）。

:::info
要使用此方法，您需要启用 [`multiSheets`](api/spreadsheet_multisheets_config.md) 配置选项。
:::

### 用法 {#usage}

~~~ts
add: (name?: string) => Id;
~~~

### 参数 {#parameters}

- `name` - （`string`）可选，新工作表标签页的显示名称。若省略，则自动分配默认名称。

### 返回值 {#returns}

- `Id` - （`string | number`）新建工作表的唯一标识符。

### 示例 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 添加一个自定义名称的工作表
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // 例如 "sheet_2"

// 添加一个自动命名的工作表
const anotherSheetId = spreadsheet.sheets.add();
~~~

**更新日志：** 在 v6.0 中新增

**相关文章：** [使用工作表](working_with_sheets.md)
