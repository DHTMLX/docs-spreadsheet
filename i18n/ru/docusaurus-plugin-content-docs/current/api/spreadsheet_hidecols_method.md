---
sidebar_label: hideCols()
title: Метод hideCols
description: Скройте один или несколько столбцов в DHTMLX Spreadsheet с помощью метода hideCols() по id ячейки, диапазону ячеек или выделенной ячейке.
---

# hideCols()

### Описание {#description}

@short: Скрывает столбцы

### Использование {#usage}

~~~jsx
hideCols(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора столбца. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.hideCols("B2"); // столбец "B" будет скрыт
spreadsheet.hideCols("sheet2!B2"); // столбец "B" в "sheet2" будет скрыт
spreadsheet.hideCols("B2:C2"); // столбцы "B" и "C" будут скрыты
~~~


**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Похожее API:** [`showCols()`](api/spreadsheet_showcols_method.md)

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через API](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
