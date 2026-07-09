---
sidebar_label: setSelectedCell() 
title: Метод setSelectedCell объекта selection
description: Вы можете узнать о методе setSelectedCell объекта selection в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник по АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# setSelectedCell()

### Описание {#description}

@short: Выбирает указанную(ые) ячейку(и)

### Использование {#usage}

~~~jsx
setSelectedCell(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) или диапазон выбранной(ых) ячейки(ек)

### Пример {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(data);

// выбор ячейки
spreadsheet.selection.setSelectedCell("B5");

// выбор диапазона ячеек
spreadsheet.selection.setSelectedCell("B1:B5");

// выбор разрозненных ячеек
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**Полезная статья:** [Работа со Spreadsheet](working_with_ssheet.md)
