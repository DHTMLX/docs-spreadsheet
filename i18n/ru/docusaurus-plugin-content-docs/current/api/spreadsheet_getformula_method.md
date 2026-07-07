---
sidebar_label: getFormula()
title: Метод getFormula
description: Вы можете узнать о методе getFormula в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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

### Возвращает {#returns}

Метод возвращает формулу ячейки

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
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

**Журнал изменений:** Добавлен в v4.1
