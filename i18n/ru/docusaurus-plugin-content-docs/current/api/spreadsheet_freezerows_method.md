---
sidebar_label: freezeRows() 
title: Метод freezeRows
description: Закрепите строки в DHTMLX Spreadsheet с помощью метода freezeRows(), который фиксирует строки до указанной или выбранной ячейки на текущем или другом листе.
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
