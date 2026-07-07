---
sidebar_label: Миграция на новые версии
title: Миграция
description: Вы можете узнать о миграции в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Миграция на новые версии {#migration-to-newer-versions}

## 5.2 -> 6.0 {#52---60}

### Устаревшие свойства {#deprecated-properties}

Следующие свойства `ISpreadsheetConfig` объявлены устаревшими и удалены. Актуальное использование приведено ниже:

- свойство конфигурации `dateFormat`. Задайте его в объекте конфигурации [`localization`](api/spreadsheet_localization_config.md):
    - `{ localization: { dateFormat: "%d/%m/%Y" } }` 
- свойство конфигурации `timeFormat`. Задайте его в объекте конфигурации [`localization`](api/spreadsheet_localization_config.md):
    - `{ localization: { timeFormat: 12 } }` 

### Устаревшие методы {#deprecated-methods}

Следующие методы экземпляра `ISpreadsheet` объявлены устаревшими и удалены.

Используйте вместо них новый [АПИ модуля `sheets` (Sheet Manager)](api/overview/sheetmanager_overview.md):

<div className="overflow-table">

| Устаревший метод | Сигнатура | Новое использование | Новая сигнатура |
| --- | --- | --- | --- |
| `clearSheet(id?)` | `(id?: string) => void` | [`sheets.clear(id?)`](api/sheetmanager_clear_method.md) | `(id?: Id) => void` |
| `removeSheet(id)` | `(id: string) => void` | [`sheets.remove(id)`](api/sheetmanager_remove_method.md) | `(id: Id) => void` |
| `addSheet(name?)` | `(name?: string) => string` | [`sheets.add(name?)`](api/sheetmanager_add_method.md) | `(name?: string) => Id` |
| `getSheets()` | `() => ISheet[]` | [`sheets.getAll()`](api/sheetmanager_getall_method.md) | `() => ISheet[]` |
| `getActiveSheet()` | `() => ISheet` | [`sheets.getActive()`](api/sheetmanager_getactive_method.md) | `() => ISheet` |
| `setActiveSheet(id)` | `(id: Id) => void` | [`sheets.setActive(id)`](api/sheetmanager_setactive_method.md) | `(id: Id) => void` |

</div>

### Устаревшие события {#deprecated-events}

Следующие события объявлены устаревшими и удалены. Вместо них используйте пару универсальных событий [`beforeAction`](api/spreadsheet_beforeaction_event.md) / [`afterAction`](api/spreadsheet_afteraction_event.md).

<div className="deprecated-events-table">

| Устаревшее событие | Сигнатура колбэка | Новое использование |
| --- | --- | --- |
| `beforeValueChange` | `(cell: string, value: string) => void \| boolean` | `beforeAction` с действием `"setCellValue"` |
| `afterValueChange` | `(cell: string, value: string) => void` | `afterAction` с действием `"setCellValue"` |
| `beforeStyleChange` | `(cell: string, style: ...) => void \| boolean` | `beforeAction` с действием `"setCellStyle"` |
| `afterStyleChange` | `(cell: string, style: ...) => void` | `afterAction` с действием `"setCellStyle"` |
| `beforeFormatChange` | `(cell: string, format: string) => void \| boolean` | `beforeAction` с действием `"setCellFormat"` |
| `afterFormatChange` | `(cell: string, format: string) => void` | `afterAction` с действием `"setCellFormat"` |
| `beforeRowAdd` | `(cell: string) => void \| boolean` | `beforeAction` с действием `"addRow"` |
| `afterRowAdd` | `(cell: string) => void` | `afterAction` с действием `"addRow"` |
| `beforeRowDelete` | `(cell: string) => void \| boolean` | `beforeAction` с действием `"deleteRow"` |
| `afterRowDelete` | `(cell: string) => void` | `afterAction` с действием `"deleteRow"` |
| `beforeColumnAdd` | `(cell: string) => void \| boolean` | `beforeAction` с действием `"addColumn"` |
| `afterColumnAdd` | `(cell: string) => void` | `afterAction` с действием `"addColumn"` |
| `beforeColumnDelete` | `(cell: string) => void \| boolean` | `beforeAction` с действием `"deleteColumn"` |
| `afterColumnDelete` | `(cell: string) => void` | `afterAction` с действием `"deleteColumn"` |
| `beforeSheetAdd` | `(name: string) => void \| boolean` | `beforeAction` с действием `"addSheet"` |
| `afterSheetAdd` | `(sheet: ISheet) => void` | `afterAction` с действием `"addSheet"` |
| `beforeSheetRemove` | `(sheet: ISheet) => void \| boolean` | `beforeAction` с действием `"deleteSheet"` |
| `afterSheetRemove` | `(sheet: ISheet) => void` | `afterAction` с действием `"deleteSheet"` |
| `beforeSheetRename` | `(sheet: ISheet, value: string) => void \| boolean` | `beforeAction` с действием `"renameSheet"` |
| `afterSheetRename` | `(sheet: ISheet) => void` | `afterAction` с действием `"renameSheet"` |
| `beforeSheetClear` | `(sheet: ISheet) => void \| boolean` | `beforeAction` с действием `"clearSheet"` |
| `afterSheetClear` | `() => void` | `afterAction` с действием `"clearSheet"` |

</div>

## 5.1 -> 5.2 {#51---52}

### Функциональность заморозки/разморозки {#freezingunfreezing-functionality}

В версии 5.2 изменён способ заморозки/разморозки столбцов и строк:

- свойства конфигурации `leftSplit` и `topSplit`, использовавшиеся для фиксации столбцов и строк, объявлены устаревшими и удалены

~~~jsx title="До v5.2"
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    topSplit: 1, // the number of row to "freeze"
    leftSplit: 1 // the number of columns to "freeze"
});
~~~

- введены новые методы АПИ: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md) 

~~~jsx title="Начиная с v5.2" 
// для строк
spreadsheet.freezeRows("B2"); // the rows up to the second row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the second row in "sheet2" will be fixed
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen

// для столбцов
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

- добавлено новое действие: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions) 

~~~jsx title="Начиная с v5.2"
// использование действия `toggleFreeze` с событиями beforeAction/afterAction
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

- добавлено новое свойство `freeze` для объекта *sheets* метода [`parse()`](api/spreadsheet_parse_method.md). Оно позволяет фиксировать строки и столбцы для конкретных листов в наборе данных при разборе данных в Spreadsheet: 

~~~jsx {10-13} title="Начиная с v5.2"
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
            // more "sheet_1" settings
        }, 
        // more sheets configuration objects
    ]
};

spreadsheet.parse(data);
~~~

## 4.3 -> 5.0 {#43---50}

В версии 5.0 опция `"help"` свойства [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) переименована в `"helpers"`. Кроме того, набор опций по умолчанию теперь включает новую опцию `"actions"`.

~~~jsx title="До v5.0" {8}
// default configuration 
toolbarBlocks: [
    "undo", 
    "colors", 
    "decoration", 
    "align", 
    "format", 
    "help"
]
~~~

~~~jsx title="Начиная с v5.0" {8,9}
// default configuration
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
Версия 4.3 является последней версией с поддержкой IE
:::

Версия 4.3 вводит новый подход к отслеживанию и обработке действий, выполняемых при изменении таблицы.

Новые события [`beforeAction`](api/spreadsheet_beforeaction_event.md) и [`afterAction`](api/spreadsheet_afteraction_event.md) срабатывают непосредственно до/после выполнения действия и сообщают, какое именно действие было выполнено. Такой подход позволяет добавить необходимую логику для нескольких действий сразу, используя только эти два события. Например:

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

Этот подход сокращает объём кода, так как больше не нужно добавлять наборы парных событий [**before-** и **after-**](api/overview/events_overview.md) для каждого отдельного действия.

При этом старый подход продолжает работать как прежде. Подробнее см. [Действия Spreadsheet](api/overview/actions_overview.md).

:::info
На данный момент существует ряд событий, которые необходимо использовать по-старому, так как они не могут быть заменены действиями: *beforeEditEnd, afterEditEnd, beforeEditStart, afterEditStart, beforeFocusSet, afterFocusSet, beforeSheetChange, afterSheetChange, groupFill*.
:::

## 4.1 -> 4.2 {#41---42}

В версии 4.2 блок [Align](customization.md#default-controls) панели инструментов Spreadsheet разделён на два подблока: Horizontal align и Vertical align. Соответственно, список идентификаторов стандартных элементов управления блока Align изменён и расширен:

`До v4.2`:

Блок **Align**:

- кнопка *Align left* (id: "align-left")
- кнопка *Align center* (id: "align-center")
- кнопка *Align right* (id: "align-right")

`Начиная с v4.2`:

Подблок **Horizontal align** блока **Align**:

- кнопка *Left* (id: "halign-left")
- кнопка *Center* (id: "halign-center")
- кнопка *Right* (id: "halign-right")
  
Подблок **Vertical align** блока **Align**:
    
- кнопка *Top* (id: "valign-top")
- кнопка *Center* (id: "valign-center")
- кнопка *Bottom* (id: "valign-bottom")

### Локализация {#localization}

Обратите внимание, что [настройки локали](localization.md) для блока **Align** также обновлены:

`До v4.2`:

~~~jsx
const locale = {
    align: "Align",
    ...
}
~~~

`Начиная с v4.2`:

~~~jsx
const locale = {
    halign: "Horizontal align",
    valign: "Vertical align",
    ...
}
~~~

## 2.1 -> 3.0 {#21---30}

Этот список изменений поможет вам выполнить миграцию с версии 2.1, где DHTMLX Spreadsheet был основан на PHP, на полностью переработанную версию 3.0, написанную целиком на JavaScript. Ознакомьтесь со списком ниже, чтобы изучить все изменения.

:::info
**АПИ версии 2.1** по-прежнему доступен, но несовместим с [**АПИ начиная с версии 3.0**](api/api_overview.md). Если вам требуется документация для версии 2.1, пожалуйста, [свяжитесь с нами](https://dhtmlx.com/docs/contact.shtml), и мы её вышлем.
:::

### Изменённый АПИ {#changed-api}

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle_method.md) - возвращает стили, применённые к ячейке(ам)
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue_method.md) - возвращает объект со значением(ями) ячейки(ек)
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle_method.md) - задаёт стиль для ячейки или диапазона ячеек
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue_method.md) - задаёт значение для ячейки или диапазона ячеек
- lock -> [spreadsheet.lock](api/spreadsheet_lock_method.md) - блокирует ячейку или диапазон ячеек
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock_method.md) - разблокирует заблокированную ячейку или диапазон ячеек

### Удалённый АПИ {#removed-api}

#### Класс Spreadsheet {#spreadsheet-class}

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
