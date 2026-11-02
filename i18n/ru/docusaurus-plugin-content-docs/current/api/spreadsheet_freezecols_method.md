---
sidebar_label: freezeCols() 
title: Метод freezeCols
description: Закрепите столбцы в DHTMLX Spreadsheet с помощью метода freezeCols(), который фиксирует столбцы до указанной или выбранной ячейки на текущем или другом листе.
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

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Похожее API:** [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)

**Связанный пример:** [Spreadsheet. Фиксация столбцов и строк через API](https://snippet.dhtmlx.com/a12xd1mn)

**Журнал изменений:** 
Добавлено в v5.2
