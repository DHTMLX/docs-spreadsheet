---
sidebar_label: showRows()
title: Метод showRows
description: Покажите скрытые строки в DHTMLX Spreadsheet с помощью метода showRows() по строке переданной или выбранной ячейки.
---

# showRows()

### Описание {#description}

@short: Показывает скрытые строки

### Использование {#usage}

~~~jsx
showRows(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора строки. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Похожее API:** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через API](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
