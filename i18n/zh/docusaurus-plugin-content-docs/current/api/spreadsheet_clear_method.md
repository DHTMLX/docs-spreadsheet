---
sidebar_label: clear()
title: clear 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 clear 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# clear()

### 描述 {#description}

@short: 清空电子表格

### 用法 {#usage}

~~~jsx
clear(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 清空电子表格
spreadsheet.clear();
~~~

**变更日志：** 在 v4.2 中新增

**相关文章：** [清空电子表格](working_with_ssheet.md#clearing-spreadsheet)

**相关示例：** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
