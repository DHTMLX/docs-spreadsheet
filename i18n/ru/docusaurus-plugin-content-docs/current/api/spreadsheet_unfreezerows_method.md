---
sidebar_label: unfreezeRows() 
title: метод unfreezeRows
description: Открепите закреплённые строки в DHTMLX Spreadsheet с помощью метода unfreezeRows(), чтобы они прокручивались вместе с остальной сеткой.
---

# unfreezeRows()

### Описание {#description}

@short: Размораживает зафиксированные ("замороженные") строки

### Использование {#usage}

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора строки. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Похожее API:** [`freezeRows()`](api/spreadsheet_freezerows_method.md)

**Связанный пример:** [Spreadsheet. Заморозка столбцов и строк через API](https://snippet.dhtmlx.com/a12xd1mn)

**Журнал изменений:** 
Добавлено в v5.2
