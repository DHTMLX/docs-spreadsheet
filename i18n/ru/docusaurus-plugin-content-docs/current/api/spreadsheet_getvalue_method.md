---
sidebar_label: getValue()
title: Метод getValue
description: Получите значение ячейки или значения диапазона ячеек в DHTMLX Spreadsheet с помощью метода getValue().
---

# getValue()

### Описание {#description}

@short: Возвращает значение(я) ячейки(ек)

### Использование {#usage}

~~~jsx
getValue(cell: string): any | array;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек

### Возвращаемое значение {#returns}

Метод возвращает значения ячеек

### Пример {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// возвращает значение одной ячейки
const cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// возвращает значения диапазона ячеек
const rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// возвращает значения отдельных ячеек
const values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

:::info
Начиная с версии v4.1, ссылку на ячейку или диапазон ячеек можно задавать в следующем формате:

~~~jsx
const cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

где `sheet1` — название вкладки.

Если название вкладки не указано, метод возвращает значение(я) ячейки(ек) из активной вкладки.
:::
