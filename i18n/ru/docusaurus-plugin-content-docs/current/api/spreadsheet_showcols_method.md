---
sidebar_label: showCols()
title: Метод showCols
description: Вы можете узнать о методе showCols в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# showCols()

### Описание {#description}

@short: Показывает скрытые столбцы

### Использование {#usage}

~~~jsx
showCols(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора столбца. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx
spreadsheet.showCols("B2"); // the "B" column will become visible again
spreadsheet.showCols("sheet2!B2"); // the "B" column in "sheet2" will become visible again
spreadsheet.showCols("B2:C2"); // the "B" and "C" columns will become visible again
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Похожее API:** [`hideCols()`](api/spreadsheet_hidecols_method.md)

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через АПИ](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
