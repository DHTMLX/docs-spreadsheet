---
sidebar_label: setFormat()
title: Метод setFormat
description: Примените числовой формат к значению ячейки или диапазона ячеек в DHTMLX Spreadsheet с помощью метода setFormat().
---

# setFormat()

### Описание {#description}

@short: Устанавливает заданный формат для значения ячейки

### Использование {#usage}

~~~jsx
setFormat(cell: string, format: string | array): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `format` - (обязательный) название(я) числового формата, применяемого к значению ячейки

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// applies the currency format to the cell A1
spreadsheet.setFormat("A1","currency");
~~~

:::info
Начиная с v4.1, ссылку на ячейку можно указывать в следующем формате:

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

где `sheet1` — название вкладки.

Если название вкладки не указано, метод устанавливает формат для значения ячейки активной вкладки.
:::

**Полезная статья:** [Форматирование чисел](number_formatting.md)
