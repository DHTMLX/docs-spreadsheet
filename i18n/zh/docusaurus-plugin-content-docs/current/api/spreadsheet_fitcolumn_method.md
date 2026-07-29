---
sidebar_label: fitColumn()
title: fitColumn 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 fitColumn 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# fitColumn()

### 描述 {#description}

@short: 将列宽调整为与其最长值匹配


### 用法 {#usage}

~~~jsx
fitColumn(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含目标列名称的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 调整 "G" 列的宽度
spreadsheet.fitColumn("G2");
~~~

**更新日志：** v5.0 中新增

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#autofit-column-width)
