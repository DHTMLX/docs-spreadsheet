---
sidebar_label: getFilter()
title: getFilter 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 getFilter 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# getFilter()

### 描述 {#description}

@short: 返回包含数据筛选条件的对象

### 用法 {#usage}

~~~jsx   
getFilter(id?: string): {cell, rules};
~~~

### 参数 {#parameters}

- `id` - （可选）工作表的 id。如果未指定，则对当前工作表调用该方法

### 返回值 {#returns}

该方法返回一个包含筛选条件的对象。该对象包含两个属性：

- `cell` - 应用筛选的单元格范围
- `rules` - 包含筛选规则的对象数组

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 获取当前工作表的筛选条件
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**更新日志：** v5.0 中新增

**相关文章：** [筛选数据](working_with_ssheet.md#filtering-data)
