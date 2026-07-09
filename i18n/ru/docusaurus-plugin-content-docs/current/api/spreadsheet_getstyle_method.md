---
sidebar_label: getStyle()
title: Метод getStyle
description: Вы можете узнать о методе getStyle в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getStyle()

### Описание {#description}

@short: Возвращает стили, применённые к ячейке(ам)

### Использование {#usage}

~~~jsx
getStyle(cell: string): any;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек

### Возвращаемое значение {#returns}

Метод возвращает стили, заданные для ячеек

### Пример {#example}

~~~jsx {5,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// получение стиля одной ячейки
const style = spreadsheet.getStyle("A1");
// -> {background: "#8DE9E1", color: "#03A9F4"}

// получение стилей диапазона ячеек
const rangeStyles = spreadsheet.getStyle("A1:D1"); // -> см. подробности

// получение стилей различных ячеек
const values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

:::info
Для нескольких ячеек метод возвращает массив объектов со стилями, применёнными к каждой ячейке:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~
:::

:::info
Начиная с v4.1, ссылка на ячейку или диапазон ячеек может быть указана в следующем формате:

~~~jsx
const style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

где `sheet1` — имя вкладки.

Если имя вкладки не указано, метод возвращает стиль(и) ячейки(ек) из активной вкладки.
:::
