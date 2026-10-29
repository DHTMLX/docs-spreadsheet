---
sidebar_label: getFocusedCell() 
title: Метод getFocusedCell объекта selection
description: Получите идентификатор ячейки в фокусе (активной ячейки) в DHTMLX Spreadsheet с помощью метода selection.getFocusedCell().
---

# getFocusedCell()

### Описание {#description}

@short: Возвращает идентификатор ячейки, находящейся в фокусе

### Использование {#usage}

~~~jsx
getFocusedCell(): string;
~~~

### Возвращаемое значение {#returns}

Метод возвращает идентификатор ячейки, находящейся в фокусе

### Пример {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});
spreadsheet.parse(data);

// установка фокуса на ячейку
spreadsheet.selection.setFocusedCell("D4");

// получение ячейки в фокусе
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Полезная статья:** [Работа со Spreadsheet](working_with_ssheet.md)
