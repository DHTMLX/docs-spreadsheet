---
sidebar_label: editLine
title: editLine 配置项
description: 使用 editLine 属性显示或隐藏 DHTMLX Spreadsheet 的编辑栏，该属性默认开启。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    editLine: true,
    // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#editing-bar)

**相关示例：** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
