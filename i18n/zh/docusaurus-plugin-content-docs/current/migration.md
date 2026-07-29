---
sidebar_label: 迁移到新版本
title: 迁移
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解有关迁移的内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 迁移到新版本 {#migration-to-newer-versions}

## 5.2 -> 6.0 {#52---60}

### 已弃用的属性 {#deprecated-properties}

以下 `ISpreadsheetConfig` 属性已弃用并被移除。请查看下方的当前用法：

- `dateFormat` 配置属性。请在 [`localization`](api/spreadsheet_localization_config.md) 配置对象中进行设置，如下：
    - `{ localization: { dateFormat: "%d/%m/%Y" } }` 
- `timeFormat` 配置属性。请在 [`localization`](api/spreadsheet_localization_config.md) 配置对象中进行设置，如下：
    - `{ localization: { timeFormat: 12 } }` 

### 已弃用的方法 {#deprecated-methods}

以下 `ISpreadsheet` 实例方法已弃用并被移除。

请改用新的 [`sheets` 模块（Sheet Manager）API](api/overview/sheetmanager_overview.md)：

<div className="overflow-table">

| 已弃用方法 | 签名 | 新用法 | 新签名 |
| --- | --- | --- | --- |
| `clearSheet(id?)` | `(id?: string) => void` | [`sheets.clear(id?)`](api/sheetmanager_clear_method.md) | `(id?: Id) => void` |
| `removeSheet(id)` | `(id: string) => void` | [`sheets.remove(id)`](api/sheetmanager_remove_method.md) | `(id: Id) => void` |
| `addSheet(name?)` | `(name?: string) => string` | [`sheets.add(name?)`](api/sheetmanager_add_method.md) | `(name?: string) => Id` |
| `getSheets()` | `() => ISheet[]` | [`sheets.getAll()`](api/sheetmanager_getall_method.md) | `() => ISheet[]` |
| `getActiveSheet()` | `() => ISheet` | [`sheets.getActive()`](api/sheetmanager_getactive_method.md) | `() => ISheet` |
| `setActiveSheet(id)` | `(id: Id) => void` | [`sheets.setActive(id)`](api/sheetmanager_setactive_method.md) | `(id: Id) => void` |

</div>

### 已弃用的事件 {#deprecated-events}

以下事件已弃用并被移除。请改用通用的 [`beforeAction`](api/spreadsheet_beforeaction_event.md) / [`afterAction`](api/spreadsheet_afteraction_event.md) 事件对。

<div className="deprecated-events-table">

| 已弃用事件 | 回调签名 | 新用法 |
| --- | --- | --- |
| `beforeValueChange` | `(cell: string, value: string) => void \| boolean` | `beforeAction`，action 为 `"setCellValue"` |
| `afterValueChange` | `(cell: string, value: string) => void` | `afterAction`，action 为 `"setCellValue"` |
| `beforeStyleChange` | `(cell: string, style: ...) => void \| boolean` | `beforeAction`，action 为 `"setCellStyle"` |
| `afterStyleChange` | `(cell: string, style: ...) => void` | `afterAction`，action 为 `"setCellStyle"` |
| `beforeFormatChange` | `(cell: string, format: string) => void \| boolean` | `beforeAction`，action 为 `"setCellFormat"` |
| `afterFormatChange` | `(cell: string, format: string) => void` | `afterAction`，action 为 `"setCellFormat"` |
| `beforeRowAdd` | `(cell: string) => void \| boolean` | `beforeAction`，action 为 `"addRow"` |
| `afterRowAdd` | `(cell: string) => void` | `afterAction`，action 为 `"addRow"` |
| `beforeRowDelete` | `(cell: string) => void \| boolean` | `beforeAction`，action 为 `"deleteRow"` |
| `afterRowDelete` | `(cell: string) => void` | `afterAction`，action 为 `"deleteRow"` |
| `beforeColumnAdd` | `(cell: string) => void \| boolean` | `beforeAction`，action 为 `"addColumn"` |
| `afterColumnAdd` | `(cell: string) => void` | `afterAction`，action 为 `"addColumn"` |
| `beforeColumnDelete` | `(cell: string) => void \| boolean` | `beforeAction`，action 为 `"deleteColumn"` |
| `afterColumnDelete` | `(cell: string) => void` | `afterAction`，action 为 `"deleteColumn"` |
| `beforeSheetAdd` | `(name: string) => void \| boolean` | `beforeAction`，action 为 `"addSheet"` |
| `afterSheetAdd` | `(sheet: ISheet) => void` | `afterAction`，action 为 `"addSheet"` |
| `beforeSheetRemove` | `(sheet: ISheet) => void \| boolean` | `beforeAction`，action 为 `"deleteSheet"` |
| `afterSheetRemove` | `(sheet: ISheet) => void` | `afterAction`，action 为 `"deleteSheet"` |
| `beforeSheetRename` | `(sheet: ISheet, value: string) => void \| boolean` | `beforeAction`，action 为 `"renameSheet"` |
| `afterSheetRename` | `(sheet: ISheet) => void` | `afterAction`，action 为 `"renameSheet"` |
| `beforeSheetClear` | `(sheet: ISheet) => void \| boolean` | `beforeAction`，action 为 `"clearSheet"` |
| `afterSheetClear` | `() => void` | `afterAction`，action 为 `"clearSheet"` |

</div>

## 5.1 -> 5.2 {#51---52}

### 冻结/取消冻结功能 {#freezingunfreezing-functionality}

在 v5.2 中，冻结/取消冻结列和行的方式已更改：

- 之前用于固定列和行的 `leftSplit` 和 `topSplit` 配置属性已弃用并被移除

~~~jsx title="v5.2 之前"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // the number of row to "freeze"
    leftSplit: 1 // the number of columns to "freeze"
});
~~~

- 新增了以下 API 方法：[`freezeCols()`](api/spreadsheet_freezecols_method.md)、[`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)、[`freezeRows()`](api/spreadsheet_freezerows_method.md)、[`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md) 

~~~jsx title="从 v5.2 开始" 
// for rows
spreadsheet.freezeRows("B2"); // the rows up to the second row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the second row in "sheet2" will be fixed
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen

// for columns
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

- 新增了操作：[`toggleFreeze`](api/overview/actions_overview.md#list-of-actions) 

~~~jsx title="从 v5.2 开始"
// using the `toggleFreeze` action with the beforeAction/afterAction events
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});
~~~

- 为 [`parse()`](api/spreadsheet_parse_method.md) 方法的 *sheets* 对象新增了 `freeze` 属性。该属性允许在将数据解析到 Spreadsheet 时，为特定工作表固定行和列：

~~~jsx {10-13} title="从 v5.2 开始"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // more "sheet_1" settings
        }, 
        // more sheets configuration objects
    ]
};

spreadsheet.parse(data);
~~~

## 4.3 -> 5.0 {#43---50}

在 v5.0 中，[`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 属性的 `"help"` 选项被重命名为 `"helpers"`。此外，默认选项集现在新增了 `"actions"` 选项。

~~~jsx title="v5.0 之前" {8}
// default configuration 
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "help"
]
~~~

~~~jsx title="从 v5.0 开始" {8,9}
// default configuration
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "actions",
    "helpers"
]
~~~


## 4.2 -> 4.3 {#42---43}

:::info
版本 4.3 是最后一个提供 IE 支持的版本
:::

版本 4.3 引入了一种新的方式来追踪和处理在电子表格中执行更改时触发的操作。

新的 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 和 [`afterAction`](api/spreadsheet_afteraction_event.md) 事件会在操作执行前/后触发，并指示执行了哪个操作。这种方式只需使用这两个事件，即可为多个操作添加必要的逻辑。例如：

~~~jsx
spreadsheet.events.on("BeforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return true;
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    ...
});

spreadsheet.events.on("AfterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config)
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
    },
    ...
});
~~~

这种方式减少了代码量，因为您无需为每个独立操作添加成对的 [**before- 和 after-**](api/overview/events_overview.md) 事件。

旧的方式仍然照常工作。更多详情，请查看 [Spreadsheet 操作](api/overview/actions_overview.md)。

:::info
目前，有一组事件必须以旧方式使用，因为它们无法被任何操作替代：*beforeEditEnd、afterEditEnd、beforeEditStart、afterEditStart、beforeFocusSet、afterFocusSet、beforeSheetChange、afterSheetChange、groupFill*。
:::

## 4.1 -> 4.2 {#41---42}

在 v4.2 中，Spreadsheet 工具栏的 [对齐](customization.md#default-controls) 块被划分为两个子块：水平对齐和垂直对齐。因此，对齐块默认控件的 id 列表已更改并扩展：

`v4.2 之前`：

**对齐** 块：

- *左对齐* 按钮（id："align-left"）
- *居中对齐* 按钮（id："align-center"）
- *右对齐* 按钮（id："align-right"）

`从 v4.2 开始`：

**对齐** 块的 **水平对齐** 子块：

- *左* 按钮（id："halign-left"）
- *居中* 按钮（id："halign-center"）
- *右* 按钮（id："halign-right"）
  
**对齐** 块的 **垂直对齐** 子块：
    
- *顶部* 按钮（id："valign-top"）
- *居中* 按钮（id："valign-center"）
- *底部* 按钮（id："valign-bottom"）

### 本地化 {#localization}

请注意，**对齐** 块的 [语言区域选项](localization.md) 也已更新：

`v4.2 之前`：

~~~jsx
const locale = {
    align: "Align",
    ...
}
~~~

`从 v4.2 开始`：

~~~jsx
const locale = {
    halign: "Horizontal align",
    valign: "Vertical align",
    ...
}
~~~

## 2.1 -> 3.0 {#21---30}

此更改列表帮助您从版本 2.1（基于 PHP 的 DHTMLX Spreadsheet）迁移到完全用 JavaScript 重写的版本 3.0。请查看下方列表，了解所有更改内容。

:::info
**版本 2.1 的 API** 仍然可用，但与 [**从版本 3.0 开始的 API**](api/api_overview.md) 不兼容。如果您需要版本 2.1 的文档，请[联系我们](https://dhtmlx.com/docs/contact.shtml)，我们将向您发送。
:::

### 已变更的 API {#changed-api}

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle_method.md) - 返回应用于单元格的样式
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue_method.md) - 返回包含单元格值的对象
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle_method.md) - 为单元格或单元格范围设置样式
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue_method.md) - 为单元格或单元格范围设置值
- lock -> [spreadsheet.lock](api/spreadsheet_lock_method.md) - 锁定单元格或单元格范围
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock_method.md) - 解锁已锁定的单元格或单元格范围

### 已移除的 API {#removed-api}

#### Spreadsheet 类 {#spreadsheet-class}

- getCell
- getCells
- isCell
- setSheetId

#### SpreadsheetCell {#spreadsheetcell}

<table>
<tr>
    <td>calculate</td>
    <td>getCoords</td>
    <td>setBgColor</td>
</tr>
<tr>
    <td>exists</td>
    <td>getValidator</td>
    <td>setBold</td>
</tr>
<tr>
    <td>getAlign</td>
    <td>isBold</td>
    <td>setColor</td>
</tr>
<tr>
    <td>getBgColor</td>
    <td>isIncorrect</td>
    <td>setItalic</td>
</tr>
<tr>
    <td>getCalculatedValue</td>
    <td>isItalic</td>
    <td>setLocked</td>
</tr>
<tr>
    <td>getColIndex</td>
    <td>parseStyle</td>
    <td>setValidator</td>
</tr>
<tr>
    <td>getColName</td>
    <td>serializeStyle</td>
    <td></td>
</tr>
<tr>
    <td>getColor</td>
    <td>setAlign</td>
    <td></td>
</tr>
</table>
