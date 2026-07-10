---
sidebar_label: Lokalisierung
title: Lokalisierung
description: Sie können sich in der Dokumentation über die Lokalisierung der DHTMLX JavaScript Spreadsheet-Bibliothek informieren. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
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

    filter: "Filter",

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
    deleteSheet: "Delete",
    renameSheet: "Rename",
    renameSheetAlert: "A sheet with the name $name already exists. Please enter another name. ",

    // Menu
    file: "File",
    import: "Import",
    export: "Export",
    downloadAs: "Download as...",
    importAs: "Import as...",

    data: "Data",
    validation: "Data validation",
    search: "Search",
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
};
~~~

## Benutzerdefiniertes Gebietsschema {#custom-locale}

Um ein anderes Gebietsschema anzuwenden, müssen Sie:

- Übersetzungen für alle Textbeschriftungen in Spreadsheet bereitstellen, beispielsweise für das russische Gebietsschema:

~~~jsx
const ru = {
    // language settings
};
~~~

- das neue Gebietsschema anwenden, indem Sie die Methode `dhx.i18n.setLocale()` vor der Initialisierung von Spreadsheet aufrufen:

~~~jsx
dhx.i18n.setLocale("spreadsheet", ru);
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

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
