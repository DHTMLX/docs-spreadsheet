---
sidebar_label: menu
title: menu 配置项
description: 使用 menu 属性显示或隐藏 DHTMLX Spreadsheet 的菜单。
---

# menu

### 描述 {#description}

@short: 可选。显示/隐藏菜单栏

### 用法 {#usage}

~~~jsx
menu?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
menu: true
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  menu: false,
  // 其他配置参数
});
~~~

**相关文章：** [配置](configuration.md#menu)

**相关示例：** [Spreadsheet. 菜单栏](https://snippet.dhtmlx.com/uulux27v)
