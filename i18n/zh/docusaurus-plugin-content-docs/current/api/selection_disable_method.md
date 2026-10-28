---
sidebar_label: disable() 
title: disable selection 方法
description: 通过 selection.disable() 方法在运行时关闭 DHTMLX Spreadsheet 中的单元格选择功能，该方法会移除活动单元格，并忽略通过鼠标、键盘和 API 进行的选择操作。
---

# disable()

### 描述 {#description}

@short: 关闭单元格选择功能

### 用法 {#usage}

~~~jsx
disable(): void;
~~~

### 示例 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

spreadsheet.selection.disable();
~~~

### 详情 {#details}

该方法会：

- 结束单元格的编辑并保存已输入的值
- 移除每个工作表中的选中单元格和活动单元格
- 在调用 [`enable()`](api/selection_enable_method.md) 方法之前，忽略通过鼠标、键盘和 API 进行的选择操作

关闭选择功能后，[`getSelectedCell()`](api/selection_getselectedcell_method.md) 和 [`getFocusedCell()`](api/selection_getfocusedcell_method.md) 方法将返回 `undefined`。其他效果与 [`selection: false`](api/spreadsheet_selection_config.md#details) 配置选项相同。

如果选择功能已处于关闭状态，则该方法不执行任何操作。

**更新日志：** 在 v6.0.4 中新增

**相关文章：**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [无障碍：只读设置](accessibility.md#read-only-setup)
