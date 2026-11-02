---
sidebar_label: selection
title: selection 配置
description: 通过 selection 属性关闭 DHTMLX Spreadsheet 中的单元格选择功能（可单独使用，也可与只读模式结合使用），以在没有活动单元格的情况下展示数据。
---

# selection

### 描述 {#description}

@short: 可选。启用/禁用单元格选择功能

### 用法 {#usage}

~~~jsx
selection?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
selection: true
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
~~~

### 详情 {#details}

当该属性设置为 `false` 时：

- Spreadsheet 没有活动单元格
- 无法通过鼠标、键盘或 API 选择单元格：[`setSelectedCell()`](api/selection_setselectedcell_method.md) 和 [`setFocusedCell()`](api/selection_setfocusedcell_method.md) 方法会被忽略，[`getSelectedCell()`](api/selection_getselectedcell_method.md) 和 [`getFocusedCell()`](api/selection_getfocusedcell_method.md) 方法返回 `undefined`
- 无法通过界面编辑单元格：公式栏被锁定，填充柄被隐藏，[`startEdit()`](api/spreadsheet_startedit_method.md) 方法会被忽略
- 上下文菜单和列菜单图标不可用
- `Tab` 键在网格上仅停留一次，然后将焦点移到后面的元素，`Ctrl + F6` 会跳过网格

仍可通过拖动边框调整列和行的大小，也仍可通过 API 更改数据，例如使用 [`setValue()`](api/spreadsheet_setvalue_method.md) 方法。

与 [`readonly`](api/spreadsheet_readonly_config.md) 属性结合使用时，该选项会关闭只读模式下可用的键盘导航和选择功能：

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true,
    selection: false,
    // other config parameters
});
~~~

若要在运行时关闭和开启选择功能，请使用 [`selection.disable()`](api/selection_disable_method.md) 和 [`selection.enable()`](api/selection_enable_method.md) 方法。

**更新日志：** 在 v6.0.4 中新增

**相关文章：**
- [单元格选择](configuration.md#selection-of-cells)
- [只读模式](configuration.md#read-only-mode)
- [无障碍：只读设置](accessibility.md#read-only-setup)
