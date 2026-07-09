---
sidebar_label: hideCols()
title: Метод hideCols
description: Вы можете узнать о методе hideCols в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через АПИ](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
