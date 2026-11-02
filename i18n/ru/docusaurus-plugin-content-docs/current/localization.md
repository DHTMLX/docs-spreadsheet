---
sidebar_label: Локализация
title: Локализация
description: Локализация DHTMLX Spreadsheet. Изучите локаль по умолчанию, создайте собственную, переведите встроенные виджеты и всплывающее окно формул и примените локаль.
---

# Локализация {#localization}

Вы можете локализовать метки в интерфейсе DHTMLX Spreadsheet и отобразить интерфейс на любом языке. Для этого предоставьте локализованные строки для меток и примените нужную локаль к компоненту.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Локаль по умолчанию {#default-locale}

По умолчанию используется английская локаль:

~~~jsx
const en = {
    // Toolbar
    undo: "Undo",
    redo: "Redo",

    textColor: "Text color",
    backgroundColor: "Background color",

    fontSize: "Font size",

    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikethrough: "Strikethrough",

    link: "Link",

    halign: "Horizontal align",
    valign: "Vertical align",
    left: "Left",
    right: "Right",
    center: "Center",
    top: "Top",
    bottom: "Bottom",
    multiline: "Text wrapping",
    clip: "Clip",
    wrap: "Wrap",
    merge: "Merge",
    unmerge: "Unmerge",

    lockCell: "Lock cell",
    unlockCell: "Unlock cell",

    clear: "Clear",
    clearValue: "Clear value",
    clearStyles: "Clear styles",
    clearAll: "Clear all",

    columns: "Columns",
    rows: "Rows",
    addColumn: "Add column left",
    removeColumn: "Remove column {col}",
    removeColumns: "Remove columns {col}",
    fitToData: "Fit to data",
    addRow: "Add row above",
    removeRow: "Remove row {row}",
    removeRows: "Remove rows {row}",
    columnWidth: "Column width",
    rowHeight: "Row height",
    widthInPixels: "Width in pixels",
    heightInPixels: "Height in pixels",
    row: "row",
    col: "col",
    freeze: "Freeze",
    freezeToCol: "Freeze up to column {col}",
    freezeToRow: "Freeze up to row {row}",
    unfreezeRows: "Unfreeze rows",
    unfreezeCols: "Unfreeze columns",
    hideCol: "Hide column {col}",
    hideCols: "Hide columns {col}",
    showCols: "Show columns",
    hideRows: "Hide rows {row}",
    hideRow: "Hide row {row}",
    showRows: "Show rows",

    format: "Format",
    common: "Common",
    number: "Number",
    currency: "Currency",
    percent: "Percent",
    text: "Text",
    date: "Date",
    time: "Time",
    scientific: "Scientific",

    filter: "Filter",
    openFilter: "Open filter",

    help: "Help",

    custom: "Custom",

    border: "Border",
    border_all: "All borders",
    border_inner: "Inner borders",
    border_horizontal: "Horizontal borders",
    border_vertical: "Vertical borders",
    border_outer: "Outer borders",
    border_color: "Border color",
    border_left: "Left border",
    border_top: "Top border",
    border_right: "Right border",
    border_bottom: "Bottom border",
    border_clear: "Clear borders",
    border_style: "Border style",

    // Tabbar
    // the name of a new sheet is this prefix followed by a number: sheet1, sheet2
    defaultSheetName: "sheet",
    addSheet: "Add sheet",
    deleteSheet: "Delete",
    renameSheet: "Rename",
    renameSheetAlert: "A sheet with the name $name already exists. Please enter another name. ",

    // Menu
    file: "File",
    import: "Import",
    export: "Export",
    downloadAs: "Download as...",
    importAs: "Import as...",
    xlsxFormat: "Microsoft Excel(.xlsx)",

    data: "Data",
    validation: "Data validation",
    search: "Search",
    previousMatch: "Previous match",
    nextMatch: "Next match",
    closeSearch: "Close search",
    sort: "Sort",
    ascSort: "Sort A to Z",
    descSort: "Sort Z to A",

    //Actions
    copy: "Copy",
    edit: "Edit",
    insert: "Insert",
    remove: "Remove",
    linkCopied: "Link copied to clipboard",


    //filter
    e: "Is empty",
    ne: "Is not empty",
    tc: "Text contains",
    tdc: "Text doesn't contain",
    ts: "Text starts with",
    te: "Text ends with",
    tex: "Text is exactly",
    d: "Date is",
    db: "Date is before",
    da: "Date is after",
    gt: "Greater than",
    geq: "Greater or equal to",
    lt: "Less than",
    leq: "Less or equal to",
    eq: "Is equal to",
    neq: "Is not equal to",
    ib: "Is between",
    inb: "Is not between",

    none: "None",
    value: "Value",
    values: "By values",
    condition: "By condition",
    and: "And",

    blank: "(Blank)",

    // Buttons
    cancel: "Cancel",
    save: "Save",
    removeValidation: "Remove validation",
    selectAll: "Select all",
    unselectAll: "Unselect all",
    apply: "Apply",
    ok: "Ok",

    // Messages
    alertTitle: "There was a problem!",
    mergeAlertMessage: "You can't $action a range containing merges!",
    spanMergeAlert: "You can't merge frozen and non-frozen cells!",
    dontShowAgain: "Don't show again",
    spanPasteError: "You can't paste merges that cross the boundary of a frozen region",
    spanMergeLockedError: "You can't merge locked cells!",
    spanUnmergeLockedError: "You can't unmerge locked cells!",
    spanOverFilteredRow: "You can't merge cells over a filtered row.",
    removeAlert: "You can't remove last $name!",
    wasmNotSupported: "WebAssembly is not supported by your browser",
    invalidValue: "Invalid value",

    // Accessible names, read by screen readers
    // accessible name of a color button; {label} is the name of the control, {color} is a name from the colorpicker locale
    aria_colorButton: "{label}: {color}",
    // accessible names of the toolbars; the screen reader adds the word "toolbar" itself
    aria_toolbarFormatting: "Formatting",
    aria_toolbarBorders: "Borders",
    aria_toolbarSheets: "Sheets",
    aria_toolbarSearch: "Search",
    aria_toolbarLink: "Link",
    // accessible names of the line styles in the border style list
    aria_borderStyleThin: "Thin line",
    aria_borderStyleMedium: "Medium line",
    aria_borderStyleThick: "Thick line",
    aria_borderStyleDashed: "Dashed line",
    aria_borderStyleDotted: "Dotted line",
    aria_borderStyleDouble: "Double line",
    // accessible names of the context menus; the screen reader adds the word "menu" itself
    aria_cellMenu: "Cell",
    aria_sheetMenu: "Sheet",
    // accessible name of the menu bar; the screen reader adds the words "menu bar" itself
    aria_menuBar: "Main",
    // accessible name of the cell grid; the screen reader adds the word "grid" itself
    aria_grid: "Spreadsheet",
    // accessible name of the select-all corner, the first column header
    aria_selectAll: "Select all",
    // accessible name of the formula bar; {cell} is the address of the cell it shows, for example "B7"
    aria_formulaBar: "Formula bar, {cell}",
    // accessible name of the input that edits a cell; {cell} is the address of the cell, for example "B7"
    aria_cellEditor: "Cell editor, {cell}",
    // accessible name of the close icon of the formula help panel
    aria_closeFormulaHelp: "Close formula help",

    // Cell descriptions, read with the content of the active cell
    // read with the content of a cell that has a filter icon; the icon itself is hidden from assistive technology
    aria_filter: "Filter",
    aria_filterApplied: "Filter applied",
    // read after the content of a selected cell that holds a link; Alt+Enter opens the link
    aria_cellLink: "link",
    // read after the content of a selected locked cell; the lock icon itself is hidden from assistive technology
    aria_lockedState: "locked",
    // read after the value of a cell with a formula error; the formula engine writes the error as #ERROR, #REF! or #SPILL!
    aria_errorSyntax: "Syntax error. Check the formula",
    aria_errorCalc: "Calculation error. Check the values and functions",
    aria_errorRef: "Reference error. Check the cell references",
    aria_errorSpill: "Spill error. Clear the cells the result needs",
    // read after the value of a cell that breaks its list validation
    aria_invalidValue: "Invalid value. Choose a value from the list",

    // Screen reader announcements
    // announced when an editing key is pressed in the read-only mode
    aria_readonlySheet: "The sheet is read-only",
    // announced when Ctrl+Shift+9 or Ctrl+Shift+0 finds nothing to reveal
    aria_noHiddenRows: "No hidden rows in the selection",
    aria_noHiddenCols: "No hidden columns in the selection",
    // announced when a selection of several cells changes; {range} is built from aria_rangeExtent
    aria_selectedRange: "{range}, {count} cells",
    aria_rangeExtent: "{start} to {end}",
    // joins the ranges of a selection made with Ctrl
    aria_rangeSeparator: ", ",
    // announced after an action; {message} is one of the texts above
    aria_cellMessage: "{cell}: {message}",
    // announced when an action makes several errors appear; {first} is aria_cellMessage for the first of them
    aria_newErrors: "{count} new errors. {first}",
    // announced when an action puts several invalid values; {first} is aria_cellMessage for the first of them
    aria_invalidValues: "{count} invalid values. {first}",
    // announced once when an edit of a locked cell is refused; the second one when a range holds locked cells
    aria_lockedCell: "The cell is locked",
    aria_lockedCells: "Locked cells were not changed",
    // announced when the search text changes; followed by aria_searchMatch for the first match
    aria_searchResults: "Results: {count}.",
    // announced for the current match; {cell} is its address, for example "B7"
    aria_searchMatch: "{index} of {count}, {cell}",
    aria_searchNoResults: "No results",
    // announced when an export or an import of a file starts and ends
    aria_exportStarted: "Exporting the file",
    aria_exportDone: "The file is exported",
    aria_importStarted: "Importing the file",
    aria_importDone: "The file is imported",
    // announced when the column width or the row height command is applied; {size} is the applied size
    aria_columnWidthSet: "Column width set to {size} pixels",
    aria_rowHeightSet: "Row height set to {size} pixels",
};
~~~

Ключи, которые начинаются с `aria_`, не отображаются в интерфейсе. Скринридеры озвучивают их как названия элементов управления, как описания активной ячейки и как сообщения live-региона, который также использует метод [`announce()`](api/spreadsheet_announce_method.md). Части в фигурных скобках, например `{cell}` или `{count}`, заменяются значениями при озвучивании строки. Сохраняйте их в переведённых строках. Пример переведённых строк доступности смотрите в руководстве [Accessibility](accessibility.md#translated-accessibility-strings).

Ключ `defaultSheetName` задаёт префикс имён листов по умолчанию. Spreadsheet добавляет к нему номер, поэтому значение по умолчанию `"sheet"` даёт имена "sheet1", "sheet2" и так далее. Например, со значением `"Tabelle"` (префикс, который использует Microsoft Excel в немецком языке) листы будут называться "Tabelle1", "Tabelle2" и так далее.

## Пользовательская локаль {#custom-locale}

Чтобы применить другую локаль, необходимо:

- предоставить переводы для всех текстовых меток в Spreadsheet, например для немецкой локали:

~~~jsx
const de = {
    // language settings
};
~~~

- применить новую локаль, вызвав метод `dhx.i18n.setLocale()` перед инициализацией Spreadsheet:

~~~jsx
dhx.i18n.setLocale("spreadsheet", de);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## Локализация встроенных виджетов {#localizing-built-in-widgets}

Внутри Spreadsheet используются виджеты Calendar, Colorpicker, Grid, Timepicker, Toolbar, Window и Message из DHTMLX Suite. Их строки хранятся в отдельных локалях, которые можно переводить так же, как локаль `spreadsheet`:

| Локаль | Строки, используемые в Spreadsheet |
| ------ | --------------------------- |
| `calendar` | названия месяцев и дней в редакторе дат и в фильтре по датам |
| `colorpicker` | метки режима пользовательского цвета во всплывающих окнах выбора цвета на панели инструментов, название палитры и названия цветов, которые скринридеры озвучивают для образцов и кнопок цвета, например "Text color: dark gray" |
| `grid` | сообщение о количестве загруженных строк |
| `timepicker` | метки редактора времени |
| `toolbar` | название панели инструментов по умолчанию для скринридеров |
| `window` | название диалогового окна по умолчанию для скринридеров |
| `message` | названия для скринридеров диалогов alert и confirm и их кнопок |

Вызывайте `dhx.i18n.setLocale()` с названием локали перед инициализацией Spreadsheet, так как панели инструментов, меню и контекстные меню читают локаль при создании:

~~~jsx
const deColorpicker = {
    cancel: "Abbrechen",
    select: "Auswählen",
    aria_palette: "Farbpalette",
    aria_colorRed: "rot",
    // other strings
};

const deMessage = {
    aria_confirm: "Bestätigen"
};

dhx.i18n.setLocale("spreadsheet", de);
dhx.i18n.setLocale("colorpicker", deColorpicker);
dhx.i18n.setLocale("message", deMessage);

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

Ключи локали плоские: передавайте каждый ключ на верхнем уровне объекта. Подробности смотрите в статье [Localization of screen-reader strings](https://docs.dhtmlx.com/suite/common_features/accessibility_support/#localization-of-screen-reader-strings) документации DHTMLX Suite.

## Локаль формул по умолчанию {#default-locale-for-formulas}

Объект `dhx.i18n.formulas` содержит локаль i18n для всплывающего окна формул Spreadsheet. Локаль формул по умолчанию выглядит следующим образом:

~~~jsx
const en = {
    SUM: [
        ["Number1", "Required. The first value to sum."],
        ["Number2", "Optional. The second value to sum."],
        ["Number3", "Optional. The third value to sum."]
    ],
    AVERAGE: [
        ["Number1", "Required. A number or cell reference that refers to numeric values."],
        ["Number2", "Optional. A number or cell reference that refers to numeric values."]
    ],
    // more formulas' descriptions
};
~~~

[Посмотреть полную локаль формул по умолчанию](formulas_locale.md).

**Связанный пример**: [Spreadsheet. Localization](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)

## Пользовательская локаль для формул {#custom-locale-for-formulas}

Чтобы применить пользовательскую локаль для формул Spreadsheet, используйте метод `dhx.i18n.setLocale()` следующим образом:

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // the structure of the formulas in the locale
        name: [param: string, description: string][]
    }
): void;
~~~

В метод нужно передать следующие параметры:

<table>
    <tbody>
        <tr>
            <td><b>Параметр</b></td>
            <td align="center"><b>Описание</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>(*обязательный*) название локали для формул</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>(*обязательный*) объект локали, содержащий описания формул в виде пар <i>ключ:значение</i>, где:<ul><li><b>ключ</b> - название функции</li><li><b>значение</b> - массив параметров, которые принимает функция. Каждый параметр функции представлен массивом из двух элементов, где:<ul><li>первый элемент - название параметра</li><li>второй элемент - описание параметра</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

Пример ниже:

~~~jsx
const de = {
    AVERAGE: [
        ["Zahl1", "Erforderlich. Eine Zahl oder Zellreferenz, die sich auf numerische Werte bezieht."],
        ["Zahl2", "Optional. Eine Zahl oder Zellreferenz, die auf numerische Werte verweist."]
    ],
    // other formulas' descriptions
};

dhx.i18n.setLocale("formulas", de);
~~~

## Пример {#example}

В этом сниппете показано, как переключаться между локалями:

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
