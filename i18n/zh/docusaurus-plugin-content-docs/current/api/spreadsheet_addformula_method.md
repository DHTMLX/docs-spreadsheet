---
sidebar_label: addFormula()
title: addFormula 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 addFormula 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# addFormula()

### 描述 {#description}

@short: 注册可在单元格公式中使用的自定义公式函数

注册完成后，该公式可在任意单元格中以大写名称使用（例如 `=MYFUNC(A1, B2)`）。

### 用法 {#usage}

~~~ts
type cellValue = string | number | boolean
type mathArgument = cellValue | cellValue[];
type mathFunction = (...x: mathArgument[]) => cellValue;

addFormula: (name: string, handler: mathFunction) => void;
~~~

### 参数 {#parameters}

- `name` - (*string*) 必填，公式名称（不区分大小写，内部以大写形式存储）
- `handler` - (*function*) 必填，处理输入参数（字符串、数字、布尔值或这些类型的数组）并返回单个值的 callback 函数

:::note
`handler` callback 函数必须是同步的。不允许在函数内部使用 `Promise` 或 `fetch`。
:::

### 示例 {#example}

~~~jsx {4-6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

// 添加一个将值翻倍的自定义公式
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});

// 在单元格中使用：=DOUBLE(A1)
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

**更新日志：** 在 v6.0 中添加

**相关示例：** [Spreadsheet. 添加自定义公式](https://snippet.dhtmlx.com/wvxdlahp)

**相关文章：** [公式与函数](functions.md#custom-formulas)
