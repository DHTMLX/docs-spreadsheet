---
sidebar_label: rowsCount
title: rowsCount 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 rowsCount 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# rowsCount

### 描述 {#description}

@short: 可选。设置电子表格初始化时的行数

### 用法 {#usage}

~~~jsx
rowsCount?: number;
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  rowsCount: 10,
  // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#number-of-rows-and-columns)

**相关示例：** [Spreadsheet. 完整工具栏](https://snippet.dhtmlx.com/kpm017nx)
