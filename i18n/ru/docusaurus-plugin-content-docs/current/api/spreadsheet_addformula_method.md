---
sidebar_label: addFormula()
title: метод addFormula
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе addFormula. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# addFormula()

### Описание {#description}

@short: Регистрирует пользовательскую функцию формулы, которую можно использовать в формулах ячеек

После регистрации формула доступна в любой ячейке по её имени в верхнем регистре (например, `=MYFUNC(A1, B2)`).

### Использование {#usage}

~~~ts
type cellValue = string | number | boolean
type mathArgument = cellValue | cellValue[];
type mathFunction = (...x: mathArgument[]) => cellValue;

addFormula: (name: string, handler: mathFunction) => void;
~~~

### Параметры {#parameters}

- `name` - (`string`) обязательный, имя формулы (без учёта регистра, хранится в верхнем регистре)
- `handler` - (`function`) обязательный, колбэк-функция, обрабатывающая входные аргументы (строки, числа, булевы значения или их массивы) и возвращающая единственное значение

:::note
Колбэк-функция `handler` должна быть синхронной. Использование `Promise` или `fetch` внутри функции не допускается.
:::

### Пример {#example}

~~~jsx {4-6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

// добавляет пользовательскую формулу, которая удваивает значение
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});

// теперь можно использовать в ячейках: =DOUBLE(A1)
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

**Журнал изменений:** Добавлен в v6.0

**Связанный пример:** [Spreadsheet. Добавление пользовательской формулы](https://snippet.dhtmlx.com/wvxdlahp)

**Связанные статьи:** [Формулы и функции](functions.md#custom-formulas)
