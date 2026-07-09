---
sidebar_label: hideRows()
title: Метод hideRows
description: Вы можете узнать о методе hideRows в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# hideRows()

### Описание {#description}

@short: Скрывает строки

### Использование {#usage}

~~~jsx
hideRows(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора строки. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.hideRows("B2"); // строка "2" будет скрыта
spreadsheet.hideRows("sheet2!B2"); // строка "2" в "sheet2" будет скрыта
spreadsheet.hideRows("B2:C4"); // строки с "2" по "4" будут скрыты
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Похожее API:** [`showRows()`](api/spreadsheet_showrows_method.md)

**Связанный пример:** [Spreadsheet. Скрытие столбцов и строк через АПИ](https://snippet.dhtmlx.com/zere1ote)

**Журнал изменений:** Добавлено в v5.2
