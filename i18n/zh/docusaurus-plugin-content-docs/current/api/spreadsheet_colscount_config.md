---
sidebar_label: colsCount
title: colsCount 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 colsCount 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# colsCount

### 描述 {#description}

@short: 可选。设置电子表格初始化时的列数

### 用法 {#usage}

~~~jsx
colsCount?: number;
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    colsCount: 10,
    // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#number-of-rows-and-columns)

**相关示例：** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
