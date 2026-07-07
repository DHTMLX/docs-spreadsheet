---
sidebar_label: unfreezeCols() 
title: метод unfreezeCols
description: Вы можете узнать о методе unfreezeCols в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# unfreezeCols()

### Описание {#description}

@short: Размораживает зафиксированные ("замороженные") столбцы

### Использование {#usage}

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки, используемый для определения идентификатора столбца. Если идентификатор ячейки не передан, используется текущая выбранная ячейка

### Пример {#example}

~~~jsx 
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Связанный АПИ:** [`freezeCols()`](api/spreadsheet_freezecols_method.md)

**Связанный пример:** [Spreadsheet. Заморозка столбцов и строк через АПИ](https://snippet.dhtmlx.com/a12xd1mn)

**Журнал изменений:** 
Добавлено в v5.2
