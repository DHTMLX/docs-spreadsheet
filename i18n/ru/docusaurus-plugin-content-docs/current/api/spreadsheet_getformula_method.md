---
sidebar_label: getFormula()
title: Метод getFormula
description: Получите формулу ячейки в DHTMLX Spreadsheet с помощью метода getFormula(), в том числе ячейки на другом листе.
---

# getFormula()

### Описание {#description}

@short: Возвращает формулу ячейки

### Использование {#usage}

~~~jsx 
getFormula(cell: string): string | array;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки

### Возвращаемое значение {#returns}

Метод возвращает формулу ячейки

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// возвращает "ABS(C2)"
const formula = spreadsheet.getFormula("B2");
~~~

:::info
Ссылка на ячейку может быть указана в следующем формате:

~~~jsx
// возвращает "ABS(C2)"
const formula = spreadsheet.getFormula("sheet1!B2"); 
~~~

где `sheet1` — имя вкладки.

Если имя вкладки не указано, метод возвращает формулу ячейки из активной вкладки.
:::

**Журнал изменений:** Добавлено в v4.1
