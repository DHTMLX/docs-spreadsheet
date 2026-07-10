---
sidebar_label: setValue()
title: Метод setValue
description: Вы можете узнать о методе setValue в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# setValue()

### Описание {#description}

@short: Устанавливает значение для ячейки

:::info
Метод устанавливает одинаковое (повторяющееся) значение(я) для указанных ячеек. Если вы хотите добавить разные значения в ячейки таблицы, используйте метод [](api/spreadsheet_parse_method.md).
:::

### Использование {#usage}

~~~jsx
setValue(cell: string, value: string | number | array): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `value` - (обязательный) значение(я), устанавливаемые для ячеек

### Пример {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// setting value for one cell
spreadsheet.setValue("A1",5);

// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);

// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);

// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

**Связанный пример:** [Spreadsheet. Инициализация с несколькими листами](https://snippet.dhtmlx.com/ihtkdcoc)

:::info
Начиная с v4.1, ссылку на ячейку или диапазон ячеек можно указывать в следующем формате:

~~~jsx
spreadsheet.setValue("sheet1!A1",5);
~~~

где `sheet1` — название вкладки.

Если название вкладки не указано, метод устанавливает значение(я) для ячейки(ек) активной вкладки.
:::
