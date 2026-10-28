---
sidebar_label: enable() 
title: enable selection 方法
description: 通过 selection.enable() 方法重新开启 DHTMLX Spreadsheet 中的单元格选择功能，该方法会将 A1 单元格设为活动单元格并触发选择相关事件。
---

# enable()

### 描述 {#description}

@short: 开启单元格选择功能

### 用法 {#usage}

~~~jsx
enable(): void;
~~~

### 示例 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // 其他配置参数
});
spreadsheet.parse(data);

spreadsheet.selection.enable();
~~~

### 详情 {#details}

该方法会将当前工作表的 A1 单元格设为活动单元格。针对 A1 单元格会触发 [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md)、[`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md)、[`afterFocusSet`](api/spreadsheet_afterfocusset_event.md) 和 [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md) 事件。

如果选择功能已处于开启状态，则该方法不执行任何操作。

**更新日志：** 在 v6.0.4 中新增

**相关文章：**
- [`selection`](api/spreadsheet_selection_config.md)
- [`disable()`](api/selection_disable_method.md)
- [无障碍：只读设置](accessibility.md#read-only-setup)
