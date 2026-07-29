---
sidebar_label: setStyle()
title: Метод setStyle
description: Вы можете узнать о методе setStyle в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# setStyle()

### Описание {#description}

@short: Устанавливает стиль для ячейки(ек)

:::info
Метод устанавливает одинаковый стиль для указанных ячеек. Если вы хотите применить разные стили к ячейкам таблицы, используйте метод [](api/spreadsheet_parse_method.md).
:::

### Использование {#usage}

~~~jsx
setStyle(cell: string, styles: array | object): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `styles` - (обязательный) стили, применяемые к ячейкам. [Ознакомьтесь со списком свойств для стилизации ячеек](api/spreadsheet_parse_method.md#list-of-properties)

### Пример {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// setting style for one cell
spreadsheet.setStyle("A1", {background: "red"});

// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1", {color: "blue"});

// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1", {color:"blue"});

// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

**Связанный пример**: [Spreadsheet. Стилизованные данные](https://snippet.dhtmlx.com/abnh7glb)

:::info
Начиная с v4.1, ссылку на ячейку или диапазон ячеек можно указывать в следующем формате:

~~~jsx
spreadsheet.setStyle("sheet1!A2", {background: "red"}); 
~~~

где `sheet1` — название вкладки.

Если название вкладки не указано, метод применяет стиль к ячейке(ам) активной вкладки.
:::
