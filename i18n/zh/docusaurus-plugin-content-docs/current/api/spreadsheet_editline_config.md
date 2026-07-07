---
sidebar_label: editLine
title: editLine 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 editLine 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# editLine

### 描述 {#description}

@short: 可选。显示/隐藏编辑栏

### 用法 {#usage}

~~~jsx
editLine?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
editLine: true
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    editLine: true,
    // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#editing-bar)

**相关示例：** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
