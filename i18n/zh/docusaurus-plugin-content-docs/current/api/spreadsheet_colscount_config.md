---
sidebar_label: colsCount
title: colsCount 配置项
description: 使用 colsCount 属性设置 DHTMLX Spreadsheet 在初始化时显示的列数。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    colsCount: 10,
    // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#number-of-rows-and-columns)

**相关示例：** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
