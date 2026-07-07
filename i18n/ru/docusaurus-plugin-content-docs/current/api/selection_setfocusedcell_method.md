---
sidebar_label: setFocusedCell() 
title: Метод setFocusedCell объекта selection
description: Вы можете узнать о методе setFocusedCell объекта selection в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник по АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# setFocusedCell()

### Описание {#description}

@short: Устанавливает фокус на указанную ячейку

### Использование {#usage}

~~~jsx
setFocusedCell(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, на которую нужно установить фокус

### Пример {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

**Связанные статьи:** [Работа со Spreadsheet](working_with_ssheet.md)
