---
sidebar_label: showRows()
title: Метод showRows
description: Вы можете узнать о методе showRows в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# showRows()

### Описание {#description}

@short: Показывает скрытые строки

### Использование {#usage}

~~~jsx
showRows(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора строки. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Связанный АПИ:** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через АПИ](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
