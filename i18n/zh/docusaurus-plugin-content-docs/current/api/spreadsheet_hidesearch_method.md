---
sidebar_label: hideSearch()
title: hideSearch 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 hideSearch 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# hideSearch()

### 描述 {#description}

@short: 隐藏搜索栏

### 用法 {#usage}

~~~jsx
hideSearch(): void;
~~~

### 示例 {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 打开搜索栏并高亮显示找到的单元格
spreadsheet.search("min", true);

// 隐藏搜索栏
spreadsheet.hideSearch(); 
~~~

**变更日志：** 在 v5.0 中新增

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#searching-for-data)
