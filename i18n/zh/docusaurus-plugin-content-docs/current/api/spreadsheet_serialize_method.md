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
serialize(): {
    sheets: [
        {
            name: string,
            id: string,
            data: [
                {
                    cell: string,
                    value?: string | number,
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
                // more cell objects
            ],
            cols: [
                {
                    width: number,
                    hidden: boolean
                },
                // more column objects
            ],
            rows: [
                {
                    height: number,
                    hidden: boolean
                },
                // more row objects
            ],
            merged: [
                {
                    from: { column: number, row: number },
                    to: { column: number, row: number }
                },
                // more objects
            ],
            freeze: {
                col: number,
                row: number
            }
        },
        // more sheet objects
    ],
    styles: object,
    formats: array
};
~~~

### 返回值 {#returns}

该方法返回一个包含以下属性的序列化 JSON 对象：

- `formats` - 数字格式对象的数组
- `styles` - 包含已应用 CSS 类的对象，其中键为类名，值为包含该类样式属性的对象
- `sheets` - 工作表对象的数组。每个对象包含以下属性：
    - `name` - 工作表名称
    - `id` - 工作表 id
    - `data` - 单元格对象的数组。每个对象包含带有单元格 id 的 `cell` 属性，以及为该单元格设置的属性：`value`、`css`、`format`、`editor`、`locked`、`link`
    - `cols` - 列配置对象的数组。每个对象包含 `width` 和 `hidden` 属性
    - `rows` - 行配置对象的数组。每个对象包含 `height` 和 `hidden` 属性
    - `merged` - 对象数组，其中每个对象通过 `from` 和 `to` 属性定义一个合并单元格区域
    - `freeze` - 包含固定列数和行数的对象，若未固定任何内容则为 `{ col: 0, row: 0 }`

请注意：

- `merged` 和 `freeze` 属性始终存在于工作表对象中，列或行对象中的 `hidden` 属性也是如此，当列或行可见时该属性为 `false`
- `cols` 和 `rows` 数组覆盖工作表的数据范围，如果在该范围之外修改了列宽、行高或 `hidden` 状态，数组会继续扩展。因此空列和空行的自定义尺寸也会被保留
- 单元格在具有值、CSS 类、编辑器或 `locked` 状态时才会进入 `data` 数组。因此被锁定的空单元格也会被保留
- 返回的对象可以原样传递给 [](api/spreadsheet_parse_method.md) 方法

### 示例 {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const state = spreadsheet.serialize();
~~~

**相关文章：** [数据加载与导出](loading_data.md#saving-and-restoring-state)
