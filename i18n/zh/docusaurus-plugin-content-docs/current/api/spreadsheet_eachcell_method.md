---
sidebar_label: eachCell()
title: eachCell 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 eachCell 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# eachCell()

### 描述 {#description}

@short: 遍历电子表格中的单元格

:::info
如果未指定单元格范围，该方法将遍历当前选中的单元格。
:::

### 用法 {#usage}

~~~jsx
eachCell(
    cb: (cellName: string, cellValue: any) => any, 
    range?: string
): void;
~~~ 

### 参数 {#parameters}

- `callback` - （必填）回调函数
- `range` - （可选）要遍历的单元格范围

### 示例 {#example}

~~~jsx {21-27}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});

spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    items: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});

function checkValue(check) {
    spreadsheet.eachCell(function (cell, value) {
        if (!check(value)) {
            spreadsheet.setStyle(cell, { background: "#e57373" });
        } else {
            spreadsheet.setStyle(cell, { background: "" });
        }
    }, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
    switch (id) {
        case "isNumber":
            checkValue(function (value) { return !isNaN(value) });
            break;
        case "isEven":
            checkValue(function (value) { return value % 2 === 0 });
            break;
    }
});
~~~

**相关文章：** [自定义](customization.md#menu)

**相关示例：** [Spreadsheet. Menu](https://snippet.dhtmlx.com/2mlv2qaz)
