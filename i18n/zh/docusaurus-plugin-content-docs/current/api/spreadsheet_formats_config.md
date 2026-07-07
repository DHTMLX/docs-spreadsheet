---
sidebar_label: formats
title: formats 配置
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 formats 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# formats

### 描述 {#description}

@short: 可选。定义数字格式列表

### 用法 {#usage}

~~~jsx
formats?: array;
~~~

### 参数 {#parameters}

`formats` 属性是一个数字格式对象数组，每个对象包含一组属性：

- `id` - 格式的 id，用于通过 [](api/spreadsheet_setformat_method.md) 方法为单元格设置格式
- `mask` - 数字格式的掩码
- `name` - 格式名称，显示在工具栏和菜单下拉列表中
- `example` - 示例，展示格式化后的数字外观。数字 2702.31 被用作格式示例的默认值

### 默认配置 {#default-config}

默认数字格式如下：

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // 取决于 timeFormat 配置
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" }
];
~~~


### 示例 {#example}

~~~jsx {2-19}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    formats: [
        {
            name: "U.S. Dollar",
            id: "currency",
            mask: "$#,##0.00"
        },
        {
            name: "Euro",
            id: "euro",
            mask: "[$€]#.##0,00",
            example: "1000.50"
        },
        {
            name: "Swiss franc",
            id: "franc",
            mask: "[$CHF ]#.##0,00"
        }
    ],
    // 其他配置参数
});
~~~

**更新日志：**
- "Time" 格式在 v4.3 中新增
- "Date" 格式在 v4.2 中新增
- "Text" 格式在 v4.0 中新增

**相关文章：** 
- [数字格式化](number_formatting.md)
- [格式自定义](number_formatting.md#formats-customization)
