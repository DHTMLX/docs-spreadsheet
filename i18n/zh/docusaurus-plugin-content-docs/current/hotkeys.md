---
sidebar_label: 快捷键列表
title: 快捷键
description: DHTMLX Spreadsheet 的键盘快捷键：编辑、格式化、导航、选择、搜索、使用工作表、行和列、弹窗及对话框。
---

# 快捷键列表 {#hot-keys-list}

以下是在使用 DHTMLX Spreadsheet 时可以使用的快捷键列表。

:::note
单元格快捷键在焦点位于单元格或公式栏时有效。格式化、撤销、搜索、链接和添加工作表的快捷键在焦点位于工具栏时也有效。当焦点位于工具栏、菜单栏或工作表标签页时，方向键、**Home**、**End**、**Enter** 和 **Space** 在该栏内起作用（请参见[移动焦点](#moving-the-focus)）。

在[只读模式](api/spreadsheet_readonly_config.md)下，导航、选择、复制和搜索的快捷键有效。会修改工作表的快捷键（包括 **Ctrl (Cmd) + Shift + 9**、**Ctrl (Cmd) + Shift + 0** 和 **Shift + F11**）会被拒绝，屏幕阅读器会播报 "The sheet is read-only"。上下文菜单不可用，因此 **Shift + F10** 和 Menu 键不起作用。

要了解键盘导航如何配合屏幕阅读器使用，请查看[无障碍](accessibility.md#keyboard-navigation)指南。
:::

## 编辑 {#editing}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>激活单元格中的编辑器</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Enter</b></td>
            <td>停止单元格编辑，保持选中该单元格</td>
        </tr>
        <tr>
            <td><b>F2</b></td>
            <td>在选中的单元格中打开编辑器</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭单元格中的编辑器，不保存更改</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Enter</b></td>
            <td>在新标签页中打开活动单元格的链接</td>
        </tr>
    </tbody>
</table>

## 格式化单元格 {#formatting-cells}

<table> 
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + C</b></td>
            <td>复制单元格的值</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + V</b></td>
            <td>将值粘贴到单元格中，替换任何已选中的内容</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + X</b></td>
            <td>剪切单元格的值</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Z</b></td>
            <td>撤销工作表中的最后一个操作</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Y</b></td>
            <td>重做工作表中的最后一个操作</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Z</b></td>
            <td>重做工作表中的最后一个操作</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + B</b></td>
            <td>将单元格的值设为粗体</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + I</b></td>
            <td>将单元格的值设为斜体</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + U</b></td>
            <td>为单元格的值添加下划线</td>
        </tr>
        <tr>
            <td><b>Alt + Shift + 5 (Cmd + Shift + X)</b></td>
            <td>为单元格的值添加删除线</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + E</b></td>
            <td>将单元格的值水平居中对齐</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + R</b></td>
            <td>将单元格的值右对齐</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + L</b></td>
            <td>将单元格的值左对齐</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + K</b></td>
            <td>在单元格中插入超链接</td>
        </tr>
        <tr>
            <td><b>Delete</b></td>
            <td>删除单元格内容，保留已应用的样式</td>
        </tr>
        <tr>
            <td><b>Backspace</b></td>
            <td>删除单元格内容，保留已应用的样式</td>
        </tr>
    </tbody>
</table>

## 导航 {#navigation}

{{note 导航仅在没有单元格处于编辑状态时有效。}}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>激活单元格中的编辑器。关闭编辑器并将选中项向下移动一个单元格（在列中）。如果选中了单元格区域，则在区域范围内向下移动一个单元格。</td>
        </tr>
        <tr>
            <td><b>Shift + Enter</b></td>
            <td>将选中项向上移动一个单元格（在列中）。如果选中了单元格区域，则在区域范围内向上移动一个单元格。</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>将选中项向右移动一个单元格（在行中）。从最右侧单元格开始，将选中项移至同一行的第一个单元格。如果选中了单元格区域，则在区域范围内向右移动一个单元格。从工作表的最后一个单元格开始，保存已编辑的值，并将焦点从单元格移至页面的下一部分，例如工作表标签页。</td>
        </tr>
        <tr>
            <td><b>Tab + Shift</b></td>
            <td>将选中项向左移动一个单元格（在行中）。从最左侧单元格开始，将选中项移至同一行的最后一个单元格。如果选中了单元格区域，则在区域范围内向左移动一个单元格。从工作表的第一个单元格开始，保存已编辑的值，并将焦点从单元格移至页面的上一部分，例如公式栏。</td>
        </tr>
        <tr>
            <td><b>方向键</b></td>
            <td>在工作表的单元格之间导航。在第一个和最后一个可见的行和列处停止。如果选中了单元格区域，在工作表边缘按方向键会将区域折叠为活动单元格</td>
        </tr>
        <tr>
            <td><b>Home</b></td>
            <td>将选中项移至行中的第一个可见单元格</td>
        </tr>
        <tr>
            <td><b>End</b></td>
            <td>将选中项移至行中的最后一个可见单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 左方向键</b></td>
            <td>将选中项移至行中的第一个可见单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 右方向键</b></td>
            <td>将选中项移至行中的最后一个可见单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 上方向键</b></td>
            <td>将选中项移至列中的第一个可见单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 下方向键</b></td>
            <td>将选中项移至列中的最后一个可见单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Home</b></td>
            <td>将选中项移至工作表的起始位置（左上角单元格）</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + End</b></td>
            <td>将选中项移至工作表的末尾位置（右下角单元格）</td>
        </tr>
        <tr>
            <td><b>Shift + 上/下/左/右方向键</b></td>
            <td>从选中的单元格扩展选区</td>
        </tr>
        <tr>
            <td><b>Page Up</b></td>
            <td>向上滚动工作表一屏</td>
        </tr>
        <tr>
            <td><b>Page Down</b></td>
            <td>向下滚动工作表一屏</td>
        </tr>
    </tbody>
</table>

## 移动焦点 {#moving-the-focus}

工具栏、菜单栏和工作表标签页各自是单个 Tab 停靠点：<b>Tab</b> 将焦点移入和移出某个栏，焦点会落在最后使用过的控件上。

<table>
    <tbody>
        <tr>
            <td><b>Ctrl + F6</b></td>
            <td>按以下顺序将焦点移至 Spreadsheet 的下一部分：菜单、工具栏、工作表（活动单元格）、工作表标签页，然后返回菜单。公式栏和隐藏的部分会被跳过。会先保存已编辑单元格的值</td>
        </tr>
        <tr>
            <td><b>Ctrl + Shift + F6</b></td>
            <td>将焦点移至 Spreadsheet 的上一部分</td>
        </tr>
        <tr>
            <td><b>Left Arrow/Right Arrow Key</b></td>
            <td>将焦点移至工具栏、菜单栏或工作表标签页的上一个/下一个控件</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>将焦点移至栏中的第一个/最后一个控件</td>
        </tr>
        <tr>
            <td><b>Enter/Space</b></td>
            <td>按下获得焦点的控件：执行命令、打开下拉列表，或切换到获得焦点的标签页所对应的工作表</td>
        </tr>
        <tr>
            <td><b>Down Arrow Key</b></td>
            <td>打开获得焦点的控件的下拉列表，并将焦点移至其第一项</td>
        </tr>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>在已打开的下拉列表或菜单的各项之间移动焦点</td>
        </tr>
        <tr>
            <td><b>Right Arrow Key</b></td>
            <td>打开获得焦点的菜单项的子菜单</td>
        </tr>
        <tr>
            <td><b>Left Arrow Key</b></td>
            <td>关闭子菜单。在下拉列表的第一级中，关闭下拉列表并将焦点返回到其控件</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭下拉列表或菜单，并将焦点返回到打开它的控件。关闭工具栏控件的提示。如果不按 <b>Esc</b>，只要指针停留在提示上，提示就会保持打开</td>
        </tr>
        <tr>
            <td><b>Shift + F10 or Menu key</b></td>
            <td>打开活动单元格或获得焦点的工作表标签页的上下文菜单，并将焦点移入其中。在按下 <b>Ctrl (Cmd) + Space</b> 之后，单元格的上下文菜单会显示针对列的命令。<b>Esc</b> 关闭上下文菜单并将焦点返回到单元格</td>
        </tr>
    </tbody>
</table>

## 搜索 {#search}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + F</b></td>
            <td>在电子表格右上角打开搜索框</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + G</b></td>
            <td>高亮显示下一个匹配结果</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + G</b></td>
            <td>高亮显示上一个匹配结果</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭搜索框，并将焦点返回到活动单元格</td>
        </tr>
    </tbody>
</table>

## 选择 {#selection}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + A</b></td>
            <td>选中工作表中的所有单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 鼠标左键单击</b></td>
            <td>允许选中多个不连续的单元格</td>
        </tr>
        <tr>
            <td><b>Shift + 鼠标左键单击</b></td>
            <td>允许选中单元格区域，其中选中的单元格为区域的第一个单元格，单击的单元格为区域的最后一个单元格</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 鼠标左键单击</b></td>
            <td>允许选中多个不连续的单元格区域</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Space</b></td>
            <td>选中整列</td>
        </tr>
        <tr>
            <td><b>Shift + Space</b></td>
            <td>选中整行</td>
        </tr>
    </tbody>
</table>

## 使用工作表 {#work-with-sheets}

<table>
    <tbody>
        <tr>
            <td><b>Shift + F11</b></td>
            <td>在电子表格中添加新工作表</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Up</b></td>
            <td>切换到下一个工作表。从最后一个工作表切换到第一个</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Down</b></td>
            <td>切换到上一个工作表。从第一个工作表切换到最后一个</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Down</b></td>
            <td>切换到下一个工作表</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Up</b></td>
            <td>切换到上一个工作表</td>
        </tr>
    </tbody>
</table>

## 使用行和列 {#work-with-rows-and-columns}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 9</b></td>
            <td>显示所选区域内的隐藏行</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 0</b></td>
            <td>显示所选区域内的隐藏列</td>
        </tr>
    </tbody>
</table>

## 工具栏弹窗 {#toolbar-popups}

以下按键在工具栏的 *Text color*、*Background color* 和 *Border* 控件的弹窗中有效。弹窗打开时会获得焦点。

<table>
    <tbody>
        <tr>
            <td><b>Arrow keys</b></td>
            <td>在调色板的颜色之间或 Border 弹窗的控件之间移动焦点</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>将焦点移至调色板的第一个/最后一个颜色</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>应用获得焦点的颜色或边框。应用文本颜色或背景颜色后，焦点返回到活动单元格</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>从自定义颜色模式返回调色板。在 Border 弹窗之上打开的颜色或样式弹窗中，关闭该弹窗并将焦点返回到 Border 弹窗中的对应按钮。其他情况下，关闭弹窗并将焦点返回到其工具栏控件</td>
        </tr>
        <tr>
            <td><b>Tab/Tab + Shift</b></td>
            <td>关闭弹窗并将焦点返回到其工具栏控件。在 Border 弹窗及其上打开的弹窗中，关闭所有弹窗并将焦点返回到 Border 控件。在自定义颜色模式中，在取色器的控件之间移动焦点</td>
        </tr>
    </tbody>
</table>

## 列表编辑器 {#list-editor}

以下按键在带有[值列表](api/spreadsheet_setvalidation_method.md)的单元格编辑器中有效。

<table>
    <tbody>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>在值列表中移动</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>选择该值并关闭编辑器</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭编辑器，不保存更改</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>保存该值并将选中项向右移动一个单元格</td>
        </tr>
    </tbody>
</table>

## 筛选器和对话框 {#filter-and-dialogs}

以下按键在[筛选器](filtering_data.md#opening-a-filter-with-the-keyboard)的弹窗以及[列宽和行高](work_with_rows_cols.md#setting-column-width-and-row-height)对话框中有效。

<table>
    <tbody>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭筛选器弹窗，并将焦点返回到单元格</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>在列宽和行高对话框中应用尺寸</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>关闭列宽和行高对话框，不应用更改</td>
        </tr>
    </tbody>
</table>
