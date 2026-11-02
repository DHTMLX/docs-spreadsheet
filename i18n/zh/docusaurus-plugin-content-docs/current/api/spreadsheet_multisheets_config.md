---
sidebar_label: multiSheets
title: multiSheets 配置项
description: 使用 multiSheets 属性开启或关闭 DHTMLX Spreadsheet 中的多工作表功能，该属性会显示或隐藏底部的工作表标签栏。
---

# multiSheets

### 描述 {#description}

@short: 可选。启用/禁用在电子表格中使用多个工作表的功能

### 用法 {#usage}

~~~jsx
multiSheets?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
multiSheets: true
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: false,
    // 其他配置参数
});
~~~

:::info
将该属性设置为 `false` 时，底部带有工作表标签的标签栏将被隐藏。
:::

**更新日志：** 在 v4.1 中新增
