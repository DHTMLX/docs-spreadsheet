---
sidebar_label: getFocusedCell() 
title: Метод getFocusedCell объекта selection
description: Вы можете узнать о методе getFocusedCell объекта selection в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник по АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getFocusedCell()

### Описание {#description}

@short: Возвращает идентификатор ячейки, находящейся в фокусе

### Использование {#usage}

~~~jsx
getFocusedCell(): string;
~~~

### Возвращает {#returns}

Метод возвращает идентификатор ячейки, находящейся в фокусе

### Пример {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(data);

// установка фокуса на ячейку
spreadsheet.selection.setFocusedCell("D4");

// получение ячейки в фокусе
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Связанные статьи:** [Работа со Spreadsheet](working_with_ssheet.md)
