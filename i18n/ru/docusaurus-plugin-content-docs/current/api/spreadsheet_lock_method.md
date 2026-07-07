---
sidebar_label: lock()
title: метод lock
description: Вы можете узнать о методе lock в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
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
