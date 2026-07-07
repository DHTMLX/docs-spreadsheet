---
sidebar_label: getFormat()
title: Метод getFormat
description: Вы можете узнать о методе getFormat в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getFormat()

### Описание {#description}

@short: Возвращает числовой формат, применённый к значению ячейки

### Использование {#usage}

~~~jsx
getFormat(cell: string): string | array;
~~~

### Параметры {#parameters}

`cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек

### Возвращает {#returns}

Метод возвращает формат(ы), применённый к значению ячейки(ек)

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// возвращает "currency"
const format = spreadsheet.getFormat("A1");
~~~

:::info
Начиная с v4.1, ссылка на ячейку может быть указана в следующем формате:

~~~jsx
// возвращает "number"
const cellFormat = spreadsheet.getFormat("sheet1!A2"); 
~~~

где `sheet1` — имя вкладки.

Если имя вкладки не указано, метод возвращает формат, применённый к значению ячейки в текущей активной вкладке.
:::

**Связанные статьи:** [Числовое форматирование](number_formatting.md)
