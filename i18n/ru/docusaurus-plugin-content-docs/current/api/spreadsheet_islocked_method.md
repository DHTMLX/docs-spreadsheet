---
sidebar_label: isLocked()
title: Метод isLocked
description: Проверьте, заблокирована ли ячейка или хотя бы одна ячейка диапазона в DHTMLX Spreadsheet, с помощью метода isLocked().
---

# isLocked()

### Описание {#description}

@short: Проверяет, заблокирована ли ячейка(и)

### Использование {#usage}

~~~jsx
isLocked(cell: string): boolean;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек

### Возвращаемое значение {#returns}

Метод возвращает `true`, если ячейка заблокирована, и `false`, если она разблокирована

### Пример {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// проверяет, заблокирована ли ячейка
const cellLocked = spreadsheet.isLocked("A1");

// проверяет, заблокированы ли несколько ячеек
const rangeLocked = spreadsheet.isLocked("A1:C1");

// проверяет, заблокированы ли разрозненные ячейки
const cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

:::info
Если одновременно проверяется несколько ячеек, метод возвращает `true`, если среди указанных ячеек есть хотя бы одна заблокированная.
:::

:::info
Начиная с версии v4.1, ссылку на ячейку или диапазон ячеек можно задавать в следующем формате:

~~~jsx
const cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

где `sheet1` — название вкладки.

Если название вкладки не указано, метод проверяет ячейку(и) активной вкладки.
:::
