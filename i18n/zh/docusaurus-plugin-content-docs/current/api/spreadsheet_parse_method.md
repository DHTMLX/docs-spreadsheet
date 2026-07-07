---
sidebar_label: parse()
title: parse 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 parse 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# parse()

### 描述 {#description}

@short: 从本地数据源向电子表格中加载数据

### 用法 {#usage}

~~~jsx title="向单个工作表加载数据"
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        },
        locked?: boolean,
        link?: {
            text?: string,
            href: string
        }
    },
    // 更多单元格对象
]): void;
~~~

~~~jsx title="向多个工作表加载数据"
parse({
    sheets: [
        {
            name?: string,
            id?: string,
            cols?: [
                {
                    width?: number,
                    hidden?: boolean,
                },
                // 更多列对象
            ],
            rows?: [
                {
                    height?: number,
                    hidden?: boolean,
                },
                // 更多行对象
            ],
            data: [
                {
                    cell: string,
                    value: string | number | Date,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // 更多单元格对象
            ],
            merged?: [
                { 
                    from: { column: index, row: index }, 
                    to: { column: index, row: index }
                },
                // 更多对象
            ],
            freeze?: {
               col?: number,
               row?: number,
            }
        },
        // 更多工作表对象
    ]      
}): void;
~~~

### 参数 {#parameters}

若只需为*单个工作表*创建数据集，请将数据指定为**单元格对象数组**。每个**单元格**对象可指定以下参数：

- `cell` - （必填）单元格的 id，由"列 id + 行 id"组成，例如 A1
- `value` - （必填）单元格的值
- `css` - （可选）CSS 类的名称
- `format` - （可选）[默认数字格式](number_formatting.md#default-number-formats)或已添加的[自定义格式](number_formatting.md#formats-customization)的名称，用于应用到单元格值
- `editor` - （可选）单元格编辑器的配置对象：
    - `type` - （必填）单元格编辑器的类型："select"
    - `options` - （必填）单元格区域（"A1:B8"）或字符串值数组
- `locked` - （可选）定义单元格是否被锁定，默认为 `false`
- `link` - （可选）单元格中链接的配置对象：
    - `text` - （可选）链接的文本
    - `href` - （必填）定义链接目标的 URL

<br>

若需要*同时为多个工作表*创建数据集，请将数据指定为具有以下参数的**对象**：

- `sheets` - （必填）**工作表**对象数组。每个对象具有以下属性：
    - `name` - （可选）工作表名称
    - `id` - （可选）工作表 id
    - `rows` - （可选）行配置对象数组。每个对象可包含以下属性：
        - `height` - （可选）行高。若未指定，行高默认为 32px
        - `hidden` - （可选）定义行的可见性
    - `cols` - （可选）列配置对象数组。每个对象可包含以下属性：
        - `width` - （可选）列宽。若未指定，列宽默认为 120px
        - `hidden` - （可选）定义列的可见性
    - `data` - （必填）**单元格**对象数组。每个对象具有以下属性：
        - `cell` - （必填）单元格的 id，由"列 id + 行 id"组成，例如 A1
        - `value` - （必填）单元格的值
        - `css` - （可选）CSS 类的名称
        - `format` - （可选）[默认数字格式](number_formatting.md#default-number-formats)或已添加的[自定义格式](number_formatting.md#formats-customization)的名称，用于应用到单元格值
        - `editor` - （可选）单元格编辑器的配置对象：
            - `type` - （必填）单元格编辑器的类型："select"
            - `options` - （必填）单元格区域（"A1:B8"）或字符串值数组
        - `locked` - （可选）定义单元格是否被锁定，默认为 `false`
        - `link` - （可选）单元格中链接的配置对象：
            - `text` - （可选）链接的文本
            - `href` - （必填）定义链接目标的 URL
    - `merged` - （可选）对象数组，每个对象定义需要合并的单元格区域。每个对象必须包含以下属性：
        - `from` - 定义区域中第一个单元格位置的对象：
            - `column` - 列的索引
            - `row` - 行的索引
        - `to` - 定义区域中最后一个单元格位置的对象：
            - `column` - 列的索引
            - `row` - 行的索引
    - `freeze` - （可选）用于为特定工作表设置和调整固定列/行的对象。可包含以下属性：
        - `col` - （可选）指定固定列的数量（例如 2），默认为 `0`
        - `row` - （可选）指定固定行的数量（例如 2），默认为 `0`

:::info
若 [`multisheets`](api/spreadsheet_multisheets_config.md) 配置选项设置为 `false`，则只会创建一个工作表。
:::

### 示例 {#example}

~~~jsx {22} title="示例 1. 向单个工作表加载数据"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, css: "someclass" },
    { cell: "D2", value: 430 },
    { cell: "E2", value: 2872.4 },
    
    // 向单元格添加下拉列表
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // 更多数据
];

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);
~~~

~~~jsx title="示例 2. 向多个工作表加载数据"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            rows: [
                { height: 50, hidden: true }, // 第一行的配置
                { height: 50 }, // 第二行的配置
                // 其他行的高度为 32
            ],
            cols: [
                { width: 300 }, // 第一列的配置
                { width: 300, hidden: true }, // 第二列的配置
                // 其他列的宽度为 120
            ],
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            merged: [
                // 合并单元格 A1 和 B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // 合并单元格 A2、A3、A4 和 A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } }
            ],
            freeze: {
                col: 2,
                row: 2
            },
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
            ]
        }
    ]
};

spreadsheet.parse(data);
~~~

## 解析带样式的数据 {#parsing-styled-data}

您也可以在准备数据集时为单元格添加特定样式。为此，请将数据定义为包含以下两个参数的对象：

- `styles` - （必填）包含要应用于特定单元格的 CSS 类的对象。[详情请参阅下方](#list-of-properties)
- `data` - （必填）要加载的数据

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "a1", value: "Country" },
        { cell: "b1", value: "Product" },
        { cell: "c1", value: "Price" },
        { cell: "d1", value: "Amount" },
        { cell: "e1", value: "Total Price" },

        { cell: "a2", value: "Ecuador" },
        { cell: "b2", value: "Banana" },
        { cell: "c2", value: 6.68, css: "someclass" },
        { cell: "d2", value: 430, css: "someclass" },
        { cell: "e2", value: 2872.4 }
    ],
};

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

:::info
通过 `css` 属性为单元格设置 CSS 类。
:::

### 属性列表 {#list-of-properties}

可在 `styles` 对象中指定的属性列表：

- `background`
- `color`
- `textAlign`
- `verticalAlign`
- `textDecoration`
- `fontWeight`
- `fontStyle`
- `multiline: "wrap"`（自 v5.0.3 起）
- `border`、`border-right`、`border-left`、`border-top`、`border-bottom`（自 v5.2 起）

:::note
如有需要，还可以使用以下属性：

- `fontSize`
- `font`
- `fontFamily`
- `textShadow`

但在某些情况下，这些属性可能无法按预期生效（例如，在应用 `position: absolute` 或 `display: box` 时）
:::

**更新日志：**

- `sheets` 对象的 `freeze` 属性以及 `rows` 和 `cols` 属性中的 `hidden` 参数在 v5.2 中新增
- `cell` 对象的 `locked` 和 `link` 属性在 v5.1 中新增
- `sheets` 对象的 `merged` 属性在 v5.0 中新增
- `cell` 对象的 `editor` 属性在 v4.3 中新增
- `sheets` 对象的 `rows` 和 `cols` 属性在 v4.2 中新增
- 支持为多个工作表准备数据的功能在 v4.1 中新增

**相关文章：** [数据加载与导出](loading_data.md)

**相关示例**：

- [Spreadsheet. 带样式的数据](https://snippet.dhtmlx.com/abnh7glb)
- [Spreadsheet. 使用多个工作表初始化](https://snippet.dhtmlx.com/ihtkdcoc)
- [Spreadsheet. 使用合并单元格初始化](https://snippet.dhtmlx.com/0vtukep9)
