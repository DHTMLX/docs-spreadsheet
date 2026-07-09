---
sidebar_label: toolbarBlocks
title: toolbarBlocks 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 toolbarBlocks 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# toolbarBlocks

### 描述 {#description}

@short: 可选。指定电子表格工具栏中显示的按钮分组

### 用法 {#usage}

~~~jsx
toolbarBlocks?: array;
~~~

### 默认配置 {#default-config}

~~~jsx
toolbarBlocks: ["undo", "colors", "font", "decoration", "align", "cell", "format", "actions"]
~~~

### 示例 {#example}

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 完整工具栏
    toolbarBlocks: [
        "undo",
        "colors",
        "font",
        "decoration",
        "align",
        "cell",
        "format",
        "actions", 
        "lock",
        "clear",
        "columns",
        "rows",
        "file",
        "help"
    ]
});
~~~

### 详情 {#details}

您可以通过在 `toolbarBlocks` 数组中按所需顺序列举必要元素来自定义工具栏结构，例如：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

查看如何[自定义工具栏](customization.md#toolbar)。

**更新日志：**

- `"font"` 分组在 v6.0 中添加
- `"cell"` 分组在 v5.2 中添加
- `"actions"` 分组在 v5.0 中添加

**相关文章：**
- [配置](configuration.md#toolbar)
- [自定义](customization.md)

**相关示例：** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
