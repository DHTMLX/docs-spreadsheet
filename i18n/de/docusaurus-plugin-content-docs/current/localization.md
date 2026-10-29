---
sidebar_label: Lokalisierung
title: Lokalisierung
description: Lokalisieren Sie DHTMLX Spreadsheet. Lernen Sie das Standard-Gebietsschema kennen, erstellen Sie ein benutzerdefiniertes, übersetzen Sie die integrierten Widgets und das Formel-Popup und wenden Sie ein Gebietsschema an.
---

# Lokalisierung {#localization}

Sie können die Beschriftungen in der DHTMLX Spreadsheet-Oberfläche lokalisieren und die Oberfläche in beliebiger Sprache darstellen. Stellen Sie dazu übersetzte Zeichenfolgen für die Beschriftungen bereit und wenden Sie Ihr Gebietsschema auf die Komponente an.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Standard-Gebietsschema {#default-locale}

Standardmäßig wird das englische Gebietsschema verwendet:

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

Die Schlüssel, die mit `aria_` beginnen, werden in der Oberfläche nicht angezeigt. Screenreader lesen sie als Namen der Steuerelemente, als Beschreibungen der aktiven Zelle und als Meldungen des Live-Bereichs, den auch die Methode [`announce()`](api/spreadsheet_announce_method.md) verwendet. Die Teile in geschweiften Klammern, wie `{cell}` oder `{count}`, werden beim Vorlesen der Zeichenfolge durch die Werte ersetzt. Behalten Sie sie in den übersetzten Zeichenfolgen bei. Ein Beispiel für übersetzte Barrierefreiheits-Zeichenfolgen finden Sie im Handbuch [Barrierefreiheit](accessibility.md#translated-accessibility-strings).

Der Schlüssel `defaultSheetName` legt das Präfix der Standardnamen von Tabellenblättern fest. Spreadsheet hängt eine Nummer an, sodass der Standardwert `"sheet"` die Namen "sheet1", "sheet2" usw. ergibt. Mit `"Tabelle"`, dem Präfix, das Microsoft Excel im Deutschen verwendet, heißen die Tabellenblätter beispielsweise "Tabelle1", "Tabelle2" usw.

## Benutzerdefiniertes Gebietsschema {#custom-locale}

Um ein anderes Gebietsschema anzuwenden, müssen Sie:

- Übersetzungen für alle Textbeschriftungen in Spreadsheet bereitstellen, beispielsweise für das deutsche Gebietsschema:

~~~jsx
const de = {
    // language settings
};
~~~

- das neue Gebietsschema anwenden, indem Sie die Methode `dhx.i18n.setLocale()` vor der Initialisierung von Spreadsheet aufrufen:

~~~jsx
dhx.i18n.setLocale("spreadsheet", de);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

## Integrierte Widgets lokalisieren {#localizing-built-in-widgets}

Spreadsheet verwendet intern die Widgets Calendar, Colorpicker, Grid, Timepicker, Toolbar, Window und Message von DHTMLX Suite. Ihre Zeichenfolgen sind in separaten Gebietsschemas gespeichert, die Sie auf dieselbe Weise übersetzen können wie das Gebietsschema `spreadsheet`:

| Gebietsschema | In Spreadsheet verwendete Zeichenfolgen |
| ------ | --------------------------- |
| `calendar` | die Monats- und Tagesnamen des Datumseditors und des Datumsfilters |
| `colorpicker` | die Beschriftungen des benutzerdefinierten Farbmodus in den Farb-Popups der Symbolleiste, der Name der Palette und die Farbnamen, die Screenreader für die Farbfelder und die Farbschaltflächen vorlesen, zum Beispiel "Text color: dark gray" |
| `grid` | die Ansage der Anzahl geladener Zeilen |
| `timepicker` | die Beschriftungen des Zeiteditors |
| `toolbar` | der standardmäßige zugängliche Name einer Symbolleiste |
| `window` | der standardmäßige zugängliche Name eines Dialogs |
| `message` | die zugänglichen Namen der Alert- und Confirm-Dialoge und ihrer Schaltflächen |

Rufen Sie `dhx.i18n.setLocale()` mit dem Namen des Gebietsschemas vor der Initialisierung von Spreadsheet auf, da die Symbolleisten, die Menüs und die Kontextmenüs das Gebietsschema beim Erstellen auslesen:

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

Die Gebietsschema-Schlüssel sind flach: Übergeben Sie jeden Schlüssel auf der obersten Ebene des Objekts. Weitere Informationen finden Sie im Artikel [Localization of screen-reader strings](https://docs.dhtmlx.com/suite/common_features/accessibility_support/#localization-of-screen-reader-strings) in der Dokumentation von DHTMLX Suite.

## Standard-Gebietsschema für Formeln {#default-locale-for-formulas}

Das Objekt `dhx.i18n.formulas` enthält das i18n-Gebietsschema für das Spreadsheet-Formel-Popup. Das Standard-Gebietsschema für Formeln sieht wie folgt aus:

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

[Vollständiges Standard-Gebietsschema für Formeln ansehen](formulas_locale.md).

**Verwandtes Beispiel**: [Spreadsheet. Lokalisierung](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)

## Benutzerdefiniertes Gebietsschema für Formeln {#custom-locale-for-formulas}

Um ein benutzerdefiniertes Gebietsschema für Spreadsheet-Formeln anzuwenden, müssen Sie die Methode `dhx.i18n.setLocale()` auf folgende Weise verwenden:

~~~jsx
dhx.i18n.setLocale(
    "formulas", 
    locale: {   
        // the structure of the formulas in the locale
        name: [param: string, description: string][]
    }
): void;
~~~

Sie müssen der Methode die folgenden Parameter übergeben:

<table>
    <tbody>
        <tr>
            <td><b>Parameter</b></td>
            <td align="center"><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td>"formulas"</td>
            <td>(*erforderlich*) der Name des Gebietsschemas für Formeln</td>
        </tr>
        <tr>
            <td>locale</td>
            <td>(*erforderlich*) das Gebietsschema-Objekt, das die Beschreibungen der Formeln als <i>key:value</i>-Paare enthält, wobei:<ul><li>der <b>Schlüssel</b> der Name der Funktion ist</li><li>der <b>Wert</b> ein Array der Parameter ist, die die Funktion entgegennimmt. Jeder Parameter der Funktion ist ein Array aus zwei Elementen, wobei:<ul><li>das erste Element der Name des Parameters ist</li><li>das zweite Element die Beschreibung des Parameters ist</li></ul></li></ul></td>
        </tr>
    </tbody>
</table>

Sehen Sie sich das folgende Beispiel an:

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

## Beispiel {#example}

In diesem Snippet sehen Sie, wie Sie zwischen Gebietsschemas wechseln können:

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
