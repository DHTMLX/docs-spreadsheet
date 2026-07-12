---
sidebar_label: isLocked()
title: Метод isLocked
description: Вы можете узнать о методе isLocked в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
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
