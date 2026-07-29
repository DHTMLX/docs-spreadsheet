---
sidebar_label: multiSheets
title: multiSheets 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 multiSheets 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    multiSheets: false,
    // 其他配置参数
});
~~~

:::info
将该属性设置为 `false` 时，底部带有工作表标签的标签栏将被隐藏。
:::

**更新日志：** 在 v4.1 中新增
