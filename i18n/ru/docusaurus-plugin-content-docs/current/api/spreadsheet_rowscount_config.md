---
sidebar_label: rowsCount
title: конфигурация rowsCount
description: Задайте количество строк, которое DHTMLX Spreadsheet показывает при инициализации, с помощью свойства rowsCount.
---

# rowsCount

### Описание {#description}

@short: Необязательный. Задаёт количество строк в таблице при инициализации

### Использование {#usage}

~~~jsx
rowsCount?: number;
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Полезная статья:** [Конфигурация](configuration.md#number-of-rows-and-columns)

**Связанный пример:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
