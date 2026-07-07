---
sidebar_label: Migration zu neueren Versionen
title: Migration
description: Sie finden Informationen zur Migration in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Migration zu neueren Versionen {#migration-to-newer-versions}

## 5.2 -> 6.0 {#52---60}

### Veraltete Eigenschaften {#deprecated-properties}

Die folgenden Eigenschaften von `ISpreadsheetConfig` sind veraltet und wurden entfernt. Lesen Sie die aktuelle Verwendung unten:

- `dateFormat` Konfigurationseigenschaft. Legen Sie diese im Konfigurationsobjekt [`localization`](api/spreadsheet_localization_config.md) fest als:
    - `{ localization: { dateFormat: "%d/%m/%Y" } }` 
- `timeFormat` Konfigurationseigenschaft. Legen Sie diese im Konfigurationsobjekt [`localization`](api/spreadsheet_localization_config.md) fest als: 
    - `{ localization: { timeFormat: 12 } }` 

### Veraltete Methoden {#deprecated-methods}

Die folgenden Methoden der `ISpreadsheet`-Instanz sind veraltet und wurden entfernt.

Verwenden Sie stattdessen das neue [`sheets`-Modul (Sheet Manager) API](api/overview/sheetmanager_overview.md):

<div className="overflow-table">

| Veraltete Methode | Signatur | Neue Verwendung | Neue Signatur |
| --- | --- | --- | --- |
| `clearSheet(id?)` | `(id?: string) => void` | [`sheets.clear(id?)`](api/sheetmanager_clear_method.md) | `(id?: Id) => void` |
| `removeSheet(id)` | `(id: string) => void` | [`sheets.remove(id)`](api/sheetmanager_remove_method.md) | `(id: Id) => void` |
| `addSheet(name?)` | `(name?: string) => string` | [`sheets.add(name?)`](api/sheetmanager_add_method.md) | `(name?: string) => Id` |
| `getSheets()` | `() => ISheet[]` | [`sheets.getAll()`](api/sheetmanager_getall_method.md) | `() => ISheet[]` |
| `getActiveSheet()` | `() => ISheet` | [`sheets.getActive()`](api/sheetmanager_getactive_method.md) | `() => ISheet` |
| `setActiveSheet(id)` | `(id: Id) => void` | [`sheets.setActive(id)`](api/sheetmanager_setactive_method.md) | `(id: Id) => void` |

</div>

### Veraltete Events {#deprecated-events}

Die folgenden Events sind veraltet und wurden entfernt. Verwenden Sie stattdessen das generische Event-Paar [`beforeAction`](api/spreadsheet_beforeaction_event.md) / [`afterAction`](api/spreadsheet_afteraction_event.md).

<div className="deprecated-events-table">

| Veraltetes Event | Callback-Signatur | Neue Verwendung |
| --- | --- | --- |
| `beforeValueChange` | `(cell: string, value: string) => void \| boolean` | `beforeAction` mit Action `"setCellValue"` |
| `afterValueChange` | `(cell: string, value: string) => void` | `afterAction` mit Action `"setCellValue"` |
| `beforeStyleChange` | `(cell: string, style: ...) => void \| boolean` | `beforeAction` mit Action `"setCellStyle"` |
| `afterStyleChange` | `(cell: string, style: ...) => void` | `afterAction` mit Action `"setCellStyle"` |
| `beforeFormatChange` | `(cell: string, format: string) => void \| boolean` | `beforeAction` mit Action `"setCellFormat"` |
| `afterFormatChange` | `(cell: string, format: string) => void` | `afterAction` mit Action `"setCellFormat"` |
| `beforeRowAdd` | `(cell: string) => void \| boolean` | `beforeAction` mit Action `"addRow"` |
| `afterRowAdd` | `(cell: string) => void` | `afterAction` mit Action `"addRow"` |
| `beforeRowDelete` | `(cell: string) => void \| boolean` | `beforeAction` mit Action `"deleteRow"` |
| `afterRowDelete` | `(cell: string) => void` | `afterAction` mit Action `"deleteRow"` |
| `beforeColumnAdd` | `(cell: string) => void \| boolean` | `beforeAction` mit Action `"addColumn"` |
| `afterColumnAdd` | `(cell: string) => void` | `afterAction` mit Action `"addColumn"` |
| `beforeColumnDelete` | `(cell: string) => void \| boolean` | `beforeAction` mit Action `"deleteColumn"` |
| `afterColumnDelete` | `(cell: string) => void` | `afterAction` mit Action `"deleteColumn"` |
| `beforeSheetAdd` | `(name: string) => void \| boolean` | `beforeAction` mit Action `"addSheet"` |
| `afterSheetAdd` | `(sheet: ISheet) => void` | `afterAction` mit Action `"addSheet"` |
| `beforeSheetRemove` | `(sheet: ISheet) => void \| boolean` | `beforeAction` mit Action `"deleteSheet"` |
| `afterSheetRemove` | `(sheet: ISheet) => void` | `afterAction` mit Action `"deleteSheet"` |
| `beforeSheetRename` | `(sheet: ISheet, value: string) => void \| boolean` | `beforeAction` mit Action `"renameSheet"` |
| `afterSheetRename` | `(sheet: ISheet) => void` | `afterAction` mit Action `"renameSheet"` |
| `beforeSheetClear` | `(sheet: ISheet) => void \| boolean` | `beforeAction` mit Action `"clearSheet"` |
| `afterSheetClear` | `() => void` | `afterAction` mit Action `"clearSheet"` |

</div>

## 5.1 -> 5.2 {#51---52}

### Einfrieren/Auftauen von Spalten und Zeilen {#freezingunfreezing-functionality}

In v5.2 wurde die Art und Weise, wie Spalten und Zeilen eingefroren/aufgetaut werden, geandert:

- die Konfigurationseigenschaften `leftSplit` und `topSplit`, die zum Fixieren von Spalten und Zeilen verwendet wurden, sind veraltet und wurden entfernt

~~~jsx title="Vor v5.2"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // die Anzahl der einzufrierende Zeilen
    leftSplit: 1 // die Anzahl der einzufrierende Spalten
});
~~~

- neue API-Methoden wurden eingefuhrt: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md) 

~~~jsx title="Ab v5.2" 
// fur Zeilen
spreadsheet.freezeRows("B2"); // die Zeilen bis zur zweiten Zeile werden fixiert
spreadsheet.freezeRows("sheet2!B2"); // die Zeilen bis zur zweiten Zeile in "sheet2" werden fixiert
spreadsheet.unfreezeRows(); // fixierte Zeilen im aktuellen Sheet werden aufgetaut
spreadsheet.unfreezeRows("sheet2!A1"); // fixierte Zeilen in "sheet2" werden aufgetaut

// fur Spalten
spreadsheet.freezeCols("B2"); // die Spalten bis zur Spalte "B" werden fixiert
spreadsheet.freezeCols("sheet2!B2"); // die Spalten bis zur Spalte "B" in "sheet2" werden fixiert
spreadsheet.unfreezeCols(); // fixierte Spalten im aktuellen Sheet werden aufgetaut
spreadsheet.unfreezeCols("sheet2!A1"); // fixierte Spalten in "sheet2" werden aufgetaut
~~~

- neue Action wurde hinzugefugt: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions) 

~~~jsx title="Ab v5.2"
// Verwendung der `toggleFreeze`-Action mit den beforeAction/afterAction-Events
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "toggleFreeze") {
        console.log(actionName, config);
    }
});
~~~

- neue `freeze`-Eigenschaft fur das *sheets*-Objekt der Methode [`parse()`](api/spreadsheet_parse_method.md) wurde hinzugefugt. Sie ermoglicht das Fixieren von Zeilen und Spalten fur bestimmte Sheets im Datensatz beim Einlesen von Daten in Spreadsheet: 

~~~jsx {10-13} title="Ab v5.2"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // weitere "sheet_1"-Einstellungen
        }, 
        // weitere Sheet-Konfigurationsobjekte
    ]
};

spreadsheet.parse(data);
~~~

## 4.3 -> 5.0 {#43---50}

In v5.0 wurde die Option `"help"` der Eigenschaft [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) in `"helpers"` umbenannt. Ausserdem enthalt der Standardsatz von Optionen nun die neue Option `"actions"`.

~~~jsx title="Vor v5.0" {8}
// Standardkonfiguration 
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "help"
]
~~~

~~~jsx title="Ab v5.0" {8,9}
// Standardkonfiguration
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "actions",
    "helpers"
]
~~~


## 4.2 -> 4.3 {#42---43}

:::info
Version 4.3 ist die letzte Version mit IE-Unterstutzung
:::

Version 4.3 fuhrt einen neuen Ansatz zum Nachverfolgen und Behandeln von Actions ein, die beim Andern von Daten in der Tabelle ausgefuhrt werden.

Die neuen Events [`beforeAction`](api/spreadsheet_beforeaction_event.md) und [`afterAction`](api/spreadsheet_afteraction_event.md) werden unmittelbar vor bzw. nach der Ausfuhrung einer Action ausgelost und geben an, welche Action ausgefuhrt wurde. Dieser Ansatz ermoglicht es Ihnen, mit nur diesen zwei Events die notige Logik fur mehrere Actions gleichzeitig hinzuzufugen. Zum Beispiel:

~~~jsx
spreadsheet.events.on("BeforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return true;
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    ...
});

spreadsheet.events.on("AfterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config)
    }
    if (actionName === "addColumn") {
        console.log(actionName, config);
    },
    ...
});
~~~

Dieser Ansatz reduziert den Umfang Ihres Codes, da Sie nicht mehr fur jede einzelne Action Sets von gepaarten [**before-** und **after-**](api/overview/events_overview.md) Events hinzufugen mussen.

Der alte Ansatz funktioniert nach wie vor wie zuvor. Weitere Details finden Sie unter [Spreadsheet-Actions](api/overview/actions_overview.md).

:::info
Derzeit gibt es eine Reihe von Events, die auf die alte Weise verwendet werden mussen, da sie nicht durch Actions ersetzt werden konnen: *beforeEditEnd, afterEditEnd, beforeEditStart, afterEditStart, beforeFocusSet, afterFocusSet, beforeSheetChange, afterSheetChange, groupFill*.
:::

## 4.1 -> 4.2 {#41---42}

In v4.2 wurde der [Ausrichten](customization.md#default-controls)-Block der Spreadsheet-Toolbar in zwei Unterblocks aufgeteilt: Horizontales Ausrichten und Vertikales Ausrichten. Dadurch wurde die Liste der IDs der Standard-Controls des Ausrichten-Blocks geandert und erweitert:

`Vor v4.2`:

Der **Ausrichten**-Block:

- die Schaltflache *Linksbundig* (id: "align-left")
- die Schaltflache *Zentrieren* (id: "align-center")
- die Schaltflache *Rechtsbundig* (id: "align-right")

`Ab v4.2`:

Der Unterblock **Horizontales Ausrichten** des **Ausrichten**-Blocks:

- die Schaltflache *Links* (id: "halign-left")
- die Schaltflache *Mitte* (id: "halign-center")
- die Schaltflache *Rechts* (id: "halign-right")
  
Der Unterblock **Vertikales Ausrichten** des **Ausrichten**-Blocks:
    
- die Schaltflache *Oben* (id: "valign-top")
- die Schaltflache *Mitte* (id: "valign-center")
- die Schaltflache *Unten* (id: "valign-bottom")

### Lokalisierung {#localization}

Beachten Sie, dass die [Lokalisierungsoptionen](localization.md) fur den **Ausrichten**-Block ebenfalls aktualisiert wurden:

`Vor v4.2`:

~~~jsx
const locale = {
    align: "Align",
    ...
}
~~~

`Ab v4.2`:

~~~jsx
const locale = {
    halign: "Horizontal align",
    valign: "Vertical align",
    ...
}
~~~

## 2.1 -> 3.0 {#21---30}

Diese Liste von Anderungen hilft Ihnen bei der Migration von Version 2.1, in der DHTMLX Spreadsheet PHP-basiert war, zur vollstandig neu entwickelten Version 3.0, die vollstandig in JavaScript aufgebaut ist. Lesen Sie die folgende Liste, um alle Anderungen zu erfahren.

:::info
Die **API von Version 2.1** ist weiterhin verfugbar, ist jedoch nicht kompatibel mit der [**API ab Version 3.0**](api/api_overview.md). Falls Sie die Dokumentation fur Version 2.1 benotigen, [kontaktieren Sie uns](https://dhtmlx.com/docs/contact.shtml) bitte, und wir senden sie Ihnen zu.
:::

### Geanderte API {#changed-api}

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle_method.md) - gibt die auf eine oder mehrere Zellen angewendeten Styles zuruck
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue_method.md) - gibt ein Objekt mit dem Wert oder den Werten einer oder mehrerer Zellen zuruck
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle_method.md) - legt den Style fur eine Zelle oder einen Zellbereich fest
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue_method.md) - legt den Wert fur eine Zelle oder einen Zellbereich fest
- lock -> [spreadsheet.lock](api/spreadsheet_lock_method.md) - sperrt eine Zelle oder einen Zellbereich
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock_method.md) - entsperrt eine gesperrte Zelle oder einen gesperrten Zellbereich

### Entfernte API {#removed-api}

#### Spreadsheet-Klasse {#spreadsheet-class}

- getCell
- getCells
- isCell
- setSheetId

#### SpreadsheetCell {#spreadsheetcell}

<table>
<tr>
    <td>calculate</td>
    <td>getCoords</td>
    <td>setBgColor</td>
</tr>
<tr>
    <td>exists</td>
    <td>getValidator</td>
    <td>setBold</td>
</tr>
<tr>
    <td>getAlign</td>
    <td>isBold</td>
    <td>setColor</td>
</tr>
<tr>
    <td>getBgColor</td>
    <td>isIncorrect</td>
    <td>setItalic</td>
</tr>
<tr>
    <td>getCalculatedValue</td>
    <td>isItalic</td>
    <td>setLocked</td>
</tr>
<tr>
    <td>getColIndex</td>
    <td>parseStyle</td>
    <td>setValidator</td>
</tr>
<tr>
    <td>getColName</td>
    <td>serializeStyle</td>
    <td></td>
</tr>
<tr>
    <td>getColor</td>
    <td>setAlign</td>
    <td></td>
</tr>
</table>
