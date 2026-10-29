---
sidebar_label: rowsCount
title: rowsCount 配置项
description: 使用 rowsCount 属性设置 DHTMLX Spreadsheet 初始化时显示的行数。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  rowsCount: 10,
  // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#number-of-rows-and-columns)

**相关示例：** [Spreadsheet. 完整工具栏](https://snippet.dhtmlx.com/kpm017nx)
