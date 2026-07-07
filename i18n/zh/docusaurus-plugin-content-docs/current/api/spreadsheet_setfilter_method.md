---
sidebar_label: setFilter()
title: setFilter 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 setFilter 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# setFilter()

### 描述 {#description}

@short: 按指定条件筛选电子表格中的数据

### 用法 {#usage}

~~~jsx   
setFilter( 
    cell?: string,
    rules?:  [
        {
            condition?: {
                factor: "string", 
                value: date | number |string | [number, number]
            },
            exclude?: any[]
        },
        // more rule objects
    ]
): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）包含被筛选列 id 的单元格 id（或单元格区域），例如 "A1"、"A1:C10" 或 "sheet2!A1"
- `rules` - （可选）包含筛选规则的对象数组。每个对象可包含以下参数：
    - `condition` - （可选）用于对工作表进行条件筛选的参数对象：
        - `factor` - （必填）定义筛选比较表达式的字符串值。请参阅[下方](#list-of-factors)可用值列表
        - `value` - （必填）按指定条件进行筛选时使用的值
    - `exclude` - （可选）需从工作表中排除的数据点数组

:::note
要重置筛选，请不带参数调用该方法，或仅将 `cell` 参数传入该方法。
:::

### 示例 {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 按为列 A 指定的条件筛选数据
spreadsheet.setFilter("A2", [{condition: {factor: "te", value:"r" }}]);

// 按为 Date 工作表列 A 指定的条件筛选数据
spreadsheet.setFilter("Date!A1", [{condition: {factor: "db", value:"18/10/2022" }, exclude: ["25/06/2022"]}]);

// 按为列 C 指定的条件筛选数据
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}}]);

// 按为列 A 和列 C 指定的条件筛选数据
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);


// 重置筛选
spreadsheet.setFilter();
~~~

### 条件因子列表 {#list-of-factors}

| 因子   | 含义                  |
| ------ | --------------------- |
| "e"    | 为空                  |
| "ne"   | 不为空                |
| "tc"   | 文本包含              |
| "tdc"  | 文本不包含            |
| "ts"   | 文本开头为            |
| "te"   | 文本结尾为            |
| "tex"  | 文本完全匹配          |
| "d"    | 日期为                |
| "db"   | 日期早于              |
| "da"   | 日期晚于              |
| "gt"   | 大于                  |
| "geq"  | 大于或等于            |
| "lt"   | 小于                  |
| "leq"  | 小于或等于            |
| "eq"   | 等于                  |
| "neq"  | 不等于                |
| "ib"   | 介于之间              |
| "inb"  | 不介于之间            |

**变更日志：** 在 v5.0 中添加

**相关文章：** [筛选数据](working_with_ssheet.md#filtering-data)

**相关示例：** [Spreadsheet. Filtering via API](https://snippet.dhtmlx.com/effrcsg6)
