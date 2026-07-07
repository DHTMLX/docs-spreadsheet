---
sidebar_label: freezeCols() 
title: Метод freezeCols
description: Вы можете узнать о методе freezeCols в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# freezeCols()

### Описание {#description}

@short: Фиксирует ("замораживает") столбцы

### Использование {#usage}

~~~jsx
freezeCols(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора столбца. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.freezeCols("B2"); // столбцы до столбца "B" будут зафиксированы
spreadsheet.freezeCols("sheet2!B2"); // столбцы до столбца "B" в "sheet2" будут зафиксированы
~~~

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Связанный АПИ:** [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)

**Связанный пример:** [Spreadsheet. Фиксация столбцов и строк через АПИ](https://snippet.dhtmlx.com/a12xd1mn)

**Журнал изменений:** 
Добавлен в v5.2
