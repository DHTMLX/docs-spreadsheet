---
sidebar_label: readonly
title: readonly 配置项
description: 使用 readonly 属性开启 DHTMLX Spreadsheet 的只读模式，该模式会阻止数据更改，但保留键盘导航、选择、复制和搜索功能。
---

# readonly

### 描述 {#description}

@short: 可选。启用/禁用只读模式

### 用法 {#usage}

~~~jsx
readonly?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
readonly: false
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  readonly: true,
  // 其他配置参数
});
~~~

### 详情 {#details}

在只读模式下，工具栏、菜单和公式栏会被隐藏，上下文菜单和列菜单图标不可用。工作表标签保留，但没有添加工作表的按钮、工作表上下文菜单，也不能通过双击重命名。

用户仍然可以阅读和复制数据：

- 数据加载后，A1 单元格处于激活状态
- 可以使用键盘在单元格间导航并用鼠标选择单元格，这些操作会触发 selection 事件
- 可以使用 `Ctrl (Cmd) + C` 复制单元格，使用 `Ctrl (Cmd) + F` 搜索
- 可以在工作表标签中以及通过键盘切换工作表
- 可以打开单元格中的链接，但链接弹窗中用于编辑和删除链接的按钮被禁用

数据更改会被拒绝：

- 输入、编辑键、剪切和粘贴、撤销和重做，以及用于设置单元格格式、插入链接、添加工作表或显示隐藏行和列的快捷键都会被忽略，屏幕阅读器会播报“The sheet is read-only”
- 编辑数据的方法（例如 [`setValue()`](api/spreadsheet_setvalue_method.md)、[`setStyle()`](api/spreadsheet_setstyle_method.md) 和 [`deleteRow()`](api/spreadsheet_deleterow_method.md)）以及 [`startEdit()`](api/spreadsheet_startedit_method.md) 方法会被忽略。[`parse()`](api/spreadsheet_parse_method.md) 和 [`load()`](api/spreadsheet_load_method.md) 方法仍可加载数据
- 填充柄被隐藏
- 不能通过拖动边框来调整列和行的大小，双击列边框也不会使列宽适应数据

若要同时关闭键盘导航和选择功能，请将 [`selection`](api/spreadsheet_selection_config.md) 选项设置为 `false`。此时 Spreadsheet 没有活动单元格，也无法通过鼠标、键盘或 API 选择单元格：

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  readonly: true,
  selection: false,
  // other config parameters
});
~~~

**更新日志：** 只读模式下的键盘导航、选择、复制和搜索功能在 v6.0.4 中新增

**相关文章：**
- [配置](configuration.md#read-only-mode)
- [自定义](customization.md#custom-read-only-mode)
- [无障碍访问：只读设置](accessibility.md#read-only-setup)

**相关示例：** [Spreadsheet. 只读模式](https://snippet.dhtmlx.com/2w959gx2)


