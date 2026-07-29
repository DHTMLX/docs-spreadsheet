---
sidebar_label: Работа с ячейками
title: Работа с ячейками
description: В документации вы можете узнать о работе с ячейками в библиотеке DHTMLX JavaScript Spreadsheet. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Работа с ячейками {#work-with-cells}

## Установка значения ячейки {#setting-cell-value}

### Установка значений {#set-values}

Чтобы задать значение ячейки через API, используйте метод [](api/spreadsheet_setvalue_method.md). Передайте в него следующие параметры:

- `cells` - (*string*) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `value` - (*string/number/array*) значение для установки в ячейку(и)

~~~jsx
// установка значения для одной ячейки
spreadsheet.setValue("A1",5);
// установка одинакового значения для диапазона ячеек
spreadsheet.setValue("A1:D1",5);
// установка одинакового значения для разных ячеек
spreadsheet.setValue("B6,A1:D1",5);
// установка значений из массива для ячеек в диапазоне поочерёдно
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

:::note
Обратите внимание, что метод устанавливает одинаковые (повторяющиеся) значения для указанных ячеек. Если вы хотите добавить разные значения в ячейки таблицы, используйте метод [`parse()`](api/spreadsheet_parse_method.md).
:::


### Получение значений {#get-values}

Вы также можете получить значение(я), установленное в ячейке(ях), передав *идентификатор(ы) нужной(ых) ячейки(ек) или диапазон ячеек* в метод [](api/spreadsheet_getvalue_method.md).

Метод возвращает значение(я) в виде строки, числа или массива:

~~~jsx
// получение значения одной ячейки
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// получение значений диапазона ячеек
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// получение значений разных ячеек
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## Проверка данных в ячейках {#validating-cells}

Начиная с версии v4.3, вы можете применять проверку данных к ячейкам, добавляя выпадающие списки вариантов. Для этого используйте метод [](api/spreadsheet_setvalidation_method.md):

~~~jsx
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

Выпадающий список ограничивает выбор пользователя. При вводе неожиданного значения в ячейку отображается сообщение *Недопустимое значение*.

:::info
Метод [`setValidation()`](api/spreadsheet_setvalidation_method.md) также может удалять проверку с указанных ячеек. [Подробнее](api/spreadsheet_setvalidation_method.md#details).
:::

## Вставка гиперссылки в ячейку {#inserting-a-hyperlink-into-a-cell}

Для вставки гиперссылки в ячейку используйте метод [`insertLink()`](api/spreadsheet_insertlink_method.md). Метод также позволяет добавить текст, отображаемый с гиперссылкой:

~~~jsx
// вставка ссылки в ячейку "A2"
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

Если нужно удалить ссылку из ячейки, передайте только идентификатор ячейки в метод:

~~~jsx
// удаление ссылки из ячейки "A2"
spreadsheet.insertLink("A2");
~~~

## Стилизация ячеек {#styling-cells}

### Установка стилей {#set-styles}

Вы можете применить стили к ячейке или диапазону ячеек с помощью метода [](api/spreadsheet_setstyle_method.md). Он принимает два параметра:

- `cells` - (*string*) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `styles` - (*object/array*) стили для применения к ячейкам

~~~jsx
// установка стиля для одной ячейки
spreadsheet.setStyle("A1", {background: "red"});
// установка одинакового стиля для диапазона ячеек
spreadsheet.setStyle("A1:D1", {color: "blue"});
// установка одинакового стиля для разных ячеек
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// установка стилей из массива для ячеек в диапазоне поочерёдно
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

:::note
Метод устанавливает одинаковый стиль для указанных ячеек. Если вы хотите применить разные стили к ячейкам таблицы, используйте метод [`parse()`](api/spreadsheet_parse_method.md).
:::

### Получение стилей {#get-styles}

Чтобы получить стили, применённые к ячейке(ям), используйте метод [](api/spreadsheet_getstyle_method.md). Передайте в него *идентификатор(ы) ячейки(ек) или диапазон ячеек*:

~~~jsx
// получение стиля одной ячейки
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// получение стилей диапазона ячеек
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> см. подробности
 
// получение стилей разных ячеек
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

Для нескольких ячеек метод возвращает массив объектов со стилями, применёнными к ячейке:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

## Редактирование ячейки {#editing-a-cell}

### Включение редактора ячейки {#enable-cell-editor}

Вы можете добавить поле ввода в ячейку, вызвав метод [](api/spreadsheet_startedit_method.md):

~~~jsx
spreadsheet.startEdit();
~~~

Метод принимает два необязательных параметра:

- `cell` - (*string*) необязательный, идентификатор ячейки
- `value` - (*string*) необязательный, значение ячейки

Если идентификатор ячейки не передан, поле ввода добавляется в текущую выбранную ячейку.

### Отключение редактора ячейки {#disable-cell-editor}

Чтобы завершить редактирование ячейки, используйте метод [](api/spreadsheet_endedit_method.md), который закрывает редактор и сохраняет введённое значение.

~~~jsx
spreadsheet.endEdit();
~~~

## Блокировка ячеек {#locking-cells}

### Блокировка ячеек {#lock-cells}

Вы можете программно заблокировать ячейку или несколько ячеек, чтобы сделать их доступными для пользователей только для чтения. Для этого используйте метод [](api/spreadsheet_lock_method.md). Метод принимает в качестве параметра *идентификатор(ы) ячейки(ек)* или *диапазон ячеек* для блокировки.

~~~jsx
// блокировка ячейки
spreadsheet.lock("A1");

// блокировка диапазона ячеек
spreadsheet.lock("A1:C1");

// блокировка указанных ячеек
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**Связанный пример**: [Spreadsheet. Заблокированные ячейки](https://snippet.dhtmlx.com/czeyiuf8)

### Разблокировка ячеек {#unlock-cells}

Чтобы разблокировать заблокированную(ые) ячейку(и), используйте метод [](api/spreadsheet_unlock_method.md). Передайте в него *идентификатор(ы) ячейки(ек)* или *диапазон, содержащий заблокированные ячейки*, в качестве параметра:

~~~jsx
// разблокировка ячейки
spreadsheet.unlock("A1");
 
// разблокировка диапазона ячеек
spreadsheet.unlock("A1:C1");
 
// разблокировка указанных ячеек
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### Проверка блокировки ячейки {#check-whether-a-cell-is-locked}

Чтобы проверить, заблокирована ли ячейка или несколько ячеек, используйте метод [](api/spreadsheet_islocked_method.md) и передайте в него *идентификатор(ы) ячейки(ек)* или *диапазон ячеек*:

~~~jsx
// проверка блокировки ячейки
var cellLocked = spreadsheet.isLocked("A1"); 

// проверка блокировки нескольких ячеек
var rangeLocked = spreadsheet.isLocked("A1:C1");

// проверка блокировки разрозненных ячеек
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

Метод возвращает `true` или `false` в зависимости от состояния ячейки. Если проверяется несколько ячеек одновременно, метод возвращает `true`, если среди указанных ячеек есть хотя бы одна заблокированная.

## Объединение ячеек {#merging-cells}

### Объединение ячеек {#merge-cells}

Вы можете объединить две или более ячеек в одну, передав диапазон ячеек, которые нужно объединить, в метод [`mergeCells()`](api/spreadsheet_mergecells_method.md):

~~~jsx
// объединение ячеек A6, A7 и A8
spreadsheet.mergeCells("A6:A8");

// объединение ячеек B2, C2 и D2
spreadsheet.mergeCells("B2:D2");
~~~

### Разъединение ячеек {#split-cells}

Вы также можете разъединить объединённые ячейки с помощью метода [`mergeCells()`](api/spreadsheet_mergecells_method.md). В дополнение к диапазону ячеек передайте `true` в качестве второго параметра, чтобы разъединить указанные ячейки:

~~~jsx
// разъединение ячеек B2, C2 и D2
spreadsheet.mergeCells("B2:D2", true);
~~~

## Выделение ячеек {#selecting-cells}

### Выделение ячеек {#select-cells}

Spreadsheet позволяет задать выделение ячеек с помощью API объекта `Selection`.

Вы можете выделить ячейку(и), передав её/их идентификатор(ы) в метод [](api/selection_setselectedcell_method.md):

~~~jsx
// выделение ячейки
spreadsheet.selection.setSelectedCell("B5");
// выделение диапазона ячеек
spreadsheet.selection.setSelectedCell("B1:B5");
// выделение разрозненных ячеек
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

Также можно получить идентификатор(ы) выбранной(ых) ячейки(ек) через метод [](api/selection_getselectedcell_method.md):

~~~jsx
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

### Снятие выделения с ячеек {#unselect-cells}

Чтобы снять выделение с ячейки(ек), передайте её/их идентификатор(ы) в метод [](api/selection_removeselectedcell_method.md):

~~~jsx
// устанавливает выделение
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// снимает выделение
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**Связанный пример:** [Spreadsheet. Снятие выделения](https://snippet.dhtmlx.com/u4j76cuh)

## Установка фокуса на ячейке {#setting-focus-on-a-cell}

Объект `Selection` позволяет устанавливать фокус на ячейке таблицы и получать идентификатор ячейки в фокусе. Для этого используйте соответствующие методы:

- [](api/selection_setfocusedcell_method.md)

~~~jsx
// передайте идентификатор ячейки для установки фокуса
spreadsheet.selection.setFocusedCell("D4");
~~~

- [](api/selection_getfocusedcell_method.md)

~~~jsx
// получение ячейки в фокусе
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~
