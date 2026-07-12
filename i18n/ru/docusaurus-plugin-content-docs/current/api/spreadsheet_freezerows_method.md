---
sidebar_label: freezeRows() 
title: Метод freezeRows
description: Вы можете узнать о методе freezeRows в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# freezeRows()

### Описание {#description}

@short: Фиксирует ("замораживает") строки

### Использование {#usage}

~~~jsx
freezeRows(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора строки. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.freezeRows("B2"); // строки до строки "2" будут зафиксированы
spreadsheet.freezeRows("sheet2!B2"); // строки до строки "2" в "sheet2" будут зафиксированы
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Похожее API:** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

**Связанный пример:** [Spreadsheet. Фиксация столбцов и строк через API](https://snippet.dhtmlx.com/a12xd1mn)

**Журнал изменений:** 
Добавлено в v5.2
