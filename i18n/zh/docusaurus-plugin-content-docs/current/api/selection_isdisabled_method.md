---
sidebar_label: isDisabled() 
title: isDisabled selection 方法
description: 通过 selection.isDisabled() 方法检查 DHTMLX Spreadsheet 中的单元格选择功能是否已关闭。
---

# isDisabled()

### 描述 {#description}

@short: 检查单元格选择功能是否已关闭

### 用法 {#usage}

~~~jsx
isDisabled(): boolean;
~~~

### 返回值 {#returns}

如果选择功能已关闭，该方法返回 `true`；否则返回 `false`

### 示例 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // 其他配置参数
});
spreadsheet.parse(data);

const disabled = spreadsheet.selection.isDisabled(); // -> true
~~~

**更新日志：** 在 v6.0.4 中新增

**相关文章：**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [`disable()`](api/selection_disable_method.md)
- [无障碍：只读设置](accessibility.md#read-only-setup)
