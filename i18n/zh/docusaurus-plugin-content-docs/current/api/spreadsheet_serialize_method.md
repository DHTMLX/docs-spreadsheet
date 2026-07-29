---
sidebar_label: serialize()
title: serialize 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 serialize 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# serialize()

### 描述 {#description}

@short: 将电子表格数据序列化为 JSON 对象

### 用法 {#usage}

~~~jsx
serialize(): object;
~~~

### 返回值 {#returns}

该方法返回一个序列化后的 JSON 对象

序列化后的数据是一个包含以下属性的对象：

- `formats` - 数字格式对象的数组
- `styles` - 包含已应用 CSS 类的对象
- `sheets` - 工作表对象的数组。每个对象包含以下属性：
  - `name` - 工作表名称
  - `data` - 数据对象的数组
  - `rows` - 行高对象的数组
  - `cols` - 列宽对象的数组

### 示例 {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const data = spreadsheet.serialize();
~~~

**相关文章：** [数据加载与导出](loading_data.md#saving-and-restoring-state)
