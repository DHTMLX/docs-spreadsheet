---
sidebar_label: lock()
title: метод lock
description: Заблокируйте ячейку, диапазон ячеек или несколько ячеек в DHTMLX Spreadsheet с помощью метода lock(), чтобы пользователи не могли их редактировать.
---

# lock()

### Описание {#description}

@short: Блокирует указанную ячейку

### Использование {#usage}

~~~jsx
lock(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек

### Пример {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// блокирует ячейку
spreadsheet.lock("A1");

// блокирует диапазон ячеек
spreadsheet.lock("A1:C1");

// блокирует указанные ячейки
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
Начиная с v4.1, ссылку на ячейку или диапазон ячеек можно задавать в следующем формате:

~~~jsx
spreadsheet.lock("sheet1!A2"); 
~~~

где `sheet1` — имя вкладки.

Если имя вкладки не указано, метод блокирует ячейку(и) активной вкладки.
:::

**Связанный пример**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)

**Полезная статья:** [Блокировка ячеек](working_with_cells.md#locking-cells)