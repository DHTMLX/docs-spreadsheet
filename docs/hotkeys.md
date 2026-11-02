---
sidebar_label: Hot keys list
title: Hotkeys
description: Keyboard shortcuts of DHTMLX Spreadsheet for editing, formatting, navigation, selection, search, work with sheets, rows and columns, popups and dialogs.
---

# Hot keys list

Here is a list of hotkeys that you can use while working with DHTMLX Spreadsheet.

:::note
The shortcuts for cells work while the focus is in the cells or in the formula bar. The formatting, undo, search, link and add-sheet shortcuts also work while the focus is on the toolbar. When the focus is on the toolbar, the menu bar or the sheet tabs, the arrow keys, **Home**, **End**, **Enter** and **Space** work within that bar (see [Moving the focus](#moving-the-focus)).

In the [read-only mode](api/spreadsheet_readonly_config.md), the shortcuts for navigation, selection, copying and search work. The shortcuts that change the sheet, including **Ctrl (Cmd) + Shift + 9**, **Ctrl (Cmd) + Shift + 0** and **Shift + F11**, are refused, and screen readers announce "The sheet is read-only". The context menu isn't available, so **Shift + F10** and the Menu key don't work.

To learn how the keyboard navigation works with screen readers, check the [Accessibility](accessibility.md#keyboard-navigation) guide.
:::

## Editing

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>activates editor in a cell</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Enter</b></td>
            <td>stops cell's editing, leaves selection on the cell</td>
        </tr>
        <tr>
            <td><b>F2</b></td>
            <td>opens editor in the selected cell</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>closes editor in a cell without saving changes</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Enter</b></td>
            <td>opens the link of the active cell in a new tab</td>
        </tr>
    </tbody>
</table>

## Formatting cells

<table> 
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + C</b></td>
            <td>copies the value of a cell</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + V</b></td>
            <td>pastes the value into a cell, replacing any selected content</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + X</b></td>
            <td>cuts the value of a cell</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Z</b></td>
            <td>undoes the last action in a sheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Y</b></td>
            <td>repeats the last action in a sheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Z</b></td>
            <td>repeats the last action in a sheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + B</b></td>
            <td>makes the value of a cell bold</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + I</b></td>
            <td>makes the value of a cell italic</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + U</b></td>
            <td>makes the value of a cell underlined</td>
        </tr>
        <tr>
            <td><b>Alt + Shift + 5 (Cmd + Shift + X)</b></td>
            <td>makes the value of a cell crossed out</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + E</b></td>
            <td>centers the value of a cell horizontally</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + R</b></td>
            <td>aligns the value of a cell to the right</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + L</b></td>
            <td>aligns the value of a cell to the left</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + K</b></td>
            <td>inserts a hyperlink in a cell</td>
        </tr>
        <tr>
            <td><b>Delete</b></td>
            <td>removes the cell content, saving the applied styles</td>
        </tr>
        <tr>
            <td><b>Backspace</b></td>
            <td>removes the cell content, saving the applied styles</td>
        </tr>
    </tbody>
</table>

## Navigation

{{note Navigation works in case no cell is being edited.}}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>activates editor in a cell. Closes editor and moves selection one cell down (in a column). If a range of cells is selected, moves selection one cell down within the bounds of a range.</td>
        </tr>
        <tr>
            <td><b>Shift + Enter</b></td>
            <td>moves selection one cell up (in a column). If a range of cells is selected, moves selection one cell up within the bounds of a range.</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>moves selection one cell right (in a row). From the rightmost cell, moves selection to the first cell of the same row. If a range of cells is selected, moves selection one cell right within the bounds of a range. From the last cell of the sheet, saves the edited value and moves the focus out of the cells to the next part of the page, for example, the sheet tabs.</td>
        </tr>
        <tr>
            <td><b>Tab + Shift</b></td>
            <td>moves selection one cell left (in a row). From the leftmost cell, moves selection to the last cell of the same row. If a range of cells is selected, moves selection one cell left within the bounds of a range. From the first cell of the sheet, saves the edited value and moves the focus out of the cells to the previous part of the page, for example, the formula bar.</td>
        </tr>
        <tr>
            <td><b>Arrow keys</b></td>
            <td>provide navigation around cells in a sheet. Stop at the first and last visible row and column. If a range of cells is selected, an arrow key at the edge of the sheet collapses the range to the active cell</td>
        </tr>
        <tr>
            <td><b>Home</b></td>
            <td>moves selection to the first visible cell in the row</td>
        </tr>
        <tr>
            <td><b>End</b></td>
            <td>moves selection to the last visible cell in the row</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Left Arrow Key</b></td>
            <td>moves selection to the first visible cell in a row</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Right Arrow Key</b></td>
            <td>moves selection to the last visible cell in a row</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Up Arrow Key</b></td>
            <td>moves selection to the first visible cell in a column</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Down Arrow Key</b></td>
            <td>moves selection to the last visible cell in a column</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Home</b></td>
            <td>moves selection to the beginning of a sheet (top left-hand cell)</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + End</b></td>
            <td>moves selection to the end of a sheet (bottom right-hand cell)</td>
        </tr>
        <tr>
            <td><b>Shift + Up Arrow/Down Arrow/Left Arrow/Right Arrow Key</b></td>
            <td>extends selection from the selected cell</td>
        </tr>
        <tr>
            <td><b>Page Up</b></td>
            <td>scrolls the sheet one screen up</td>
        </tr>
        <tr>
            <td><b>Page Down</b></td>
            <td>scrolls the sheet one screen down</td>
        </tr>
    </tbody>
</table>

## Moving the focus

The toolbar, the menu bar and the sheet tabs are single tab stops: <b>Tab</b> moves the focus into a bar and out of it, and the focus lands on the control that was used last.

<table>
    <tbody>
        <tr>
            <td><b>Ctrl + F6</b></td>
            <td>moves the focus to the next part of the Spreadsheet in the order: the menu, the toolbar, the sheet (the active cell), the sheet tabs, and then back to the menu. The formula bar and hidden parts are skipped. Saves the value of the edited cell first</td>
        </tr>
        <tr>
            <td><b>Ctrl + Shift + F6</b></td>
            <td>moves the focus to the previous part of the Spreadsheet</td>
        </tr>
        <tr>
            <td><b>Left Arrow/Right Arrow Key</b></td>
            <td>moves the focus to the previous/next control of the toolbar, the menu bar or the sheet tabs</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>moves the focus to the first/last control of the bar</td>
        </tr>
        <tr>
            <td><b>Enter/Space</b></td>
            <td>presses the focused control: runs the command, opens the dropdown, or switches to the sheet of the focused tab</td>
        </tr>
        <tr>
            <td><b>Down Arrow Key</b></td>
            <td>opens the dropdown of the focused control and moves the focus to its first item</td>
        </tr>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>moves the focus between the items of an open dropdown or menu</td>
        </tr>
        <tr>
            <td><b>Right Arrow Key</b></td>
            <td>opens the submenu of the focused menu item</td>
        </tr>
        <tr>
            <td><b>Left Arrow Key</b></td>
            <td>closes the submenu. In the first level of a dropdown, closes the dropdown and returns the focus to its control</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>closes the dropdown or the menu and returns the focus to the control that opened it. Closes the tooltip of a toolbar control. Without <b>Esc</b>, the tooltip stays open while the pointer is over it</td>
        </tr>
        <tr>
            <td><b>Shift + F10 or Menu key</b></td>
            <td>opens the context menu of the active cell or of the focused sheet tab and moves the focus into it. After <b>Ctrl (Cmd) + Space</b>, the context menu of a cell shows the commands for the column. <b>Esc</b> closes the context menu and returns the focus to the cell</td>
        </tr>
    </tbody>
</table>

## Search

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + F</b></td>
            <td>opens a search box in the top right corner of the spreadsheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + G</b></td>
            <td>highlights the next found match</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + G</b></td>
            <td>highlights the previous found match</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>closes the search box and returns the focus to the active cell</td>
        </tr>
    </tbody>
</table>

## Selection

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + A</b></td>
            <td>selects all cells in a sheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Left click</b></td>
            <td>allows selecting multiple scattered cells</td>
        </tr>
        <tr>
            <td><b>Left Shift + Left click</b></td>
            <td>allows selecting a range of cells, where the selected cell is the first cell<br> of the range and the clicked cell is the last cell of the range</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Left click</b></td>
            <td>allows selecting multiple scattered ranges of cells</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Space</b></td>
            <td>selects the whole column</td>
        </tr>
        <tr>
            <td><b>Shift + Space</b></td>
            <td>selects the whole row</td>
        </tr>
    </tbody>
</table>

## Work with sheets

<table>
    <tbody>
        <tr>
            <td><b>Shift + F11</b></td>
            <td>adds a new sheet into the spreadsheet</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Up</b></td>
            <td>switches to the next sheet. From the last sheet, switches to the first one</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Down</b></td>
            <td>switches to the previous sheet. From the first sheet, switches to the last one</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Down</b></td>
            <td>switches to the next sheet</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Up</b></td>
            <td>switches to the previous sheet</td>
        </tr>
    </tbody>
</table>

## Work with rows and columns

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 9</b></td>
            <td>shows the hidden rows inside the selected range</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 0</b></td>
            <td>shows the hidden columns inside the selected range</td>
        </tr>
    </tbody>
</table>

## Toolbar popups

The keys below work in the popups of the *Text color*, *Background color* and *Border* controls of the toolbar. The popup takes the focus when it opens.

<table>
    <tbody>
        <tr>
            <td><b>Arrow keys</b></td>
            <td>move the focus between the colors of the palette or between the controls of the Border popup</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>moves the focus to the first/last color of the palette</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>applies the focused color or border. After a text or background color is applied, the focus returns to the active cell</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>returns from the custom color mode to the palette. In a color or style popup opened over the Border popup, closes it and returns the focus to its button in the Border popup. Otherwise, closes the popup and returns the focus to its toolbar control</td>
        </tr>
        <tr>
            <td><b>Tab/Tab + Shift</b></td>
            <td>closes the popup and returns the focus to its toolbar control. In the Border popup and the popups opened over it, closes them all and returns the focus to the Border control. In the custom color mode, moves the focus between the controls of the color picker</td>
        </tr>
    </tbody>
</table>

## List editor

The keys below work in the editor of a cell with a [list of values](api/spreadsheet_setvalidation_method.md).

<table>
    <tbody>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>moves through the list of values</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>chooses the value and closes the editor</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>closes the editor without saving changes</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>saves the value and moves selection one cell right</td>
        </tr>
    </tbody>
</table>

## Filter and dialogs

The keys below work in the popup of a [filter](filtering_data.md#opening-a-filter-with-the-keyboard) and in the [Column width and Row height](work_with_rows_cols.md#setting-column-width-and-row-height) dialogs.

<table>
    <tbody>
        <tr>
            <td><b>Esc</b></td>
            <td>closes the filter popup and returns the focus to the cell</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>applies the size in the Column width and Row height dialogs</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>closes the Column width and Row height dialogs without changes</td>
        </tr>
    </tbody>
</table>
