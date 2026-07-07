---
sidebar_label: setValidation()
title: setValidation 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 setValidation 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# setValidation()

### 描述 {#description}

@short: 通过向单元格添加下拉列表来为单元格设置验证

该方法也可用于移除单元格的数据验证。

### 用法 {#usage}

~~~jsx
setValidation(
    cell: string,
    options: string | string[]
): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单个或多个单元格的 id，或单元格区域
- `options` - （必填）包含单元格区域的字符串（如 "C1:C3"）或字符串值数组

### 示例 {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});

spreadsheet.parse(dataset);

// 为 B10 单元格设置验证，并创建一个包含 3 个选项的下拉列表
spreadsheet.setValidation("B10", ["Apple", "Mango", "Avocado"]);
~~~

### 详情 {#details}

如需移除单元格的验证，请将 `null`、`0`、`false` 或 `undefined` 作为方法的第二个参数传入，而非选项列表：

~~~jsx
spreadsheet.setValidation("B15");

//或
spreadsheet.setValidation("B15", null);

//或
spreadsheet.setValidation("B15", false);
~~~

**变更日志：** 在 v4.3 中添加

**相关文章：** [验证单元格](working_with_cells.md#validating-cells)
