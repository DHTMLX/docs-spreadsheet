---
sidebar_label: getFormat()
title: Метод getFormat
description: Получите числовой формат, применённый к значению ячейки или диапазона ячеек в DHTMLX Spreadsheet, с помощью метода getFormat().
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

### Возвращаемое значение {#returns}

Метод возвращает формат(ы), применённый к значению ячейки(ек)

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
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

**Полезная статья:** [Числовое форматирование](number_formatting.md)
