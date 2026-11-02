---
sidebar_label: setSelectedCell() 
title: Метод setSelectedCell объекта selection
description: Выделите ячейку, несколько ячеек или диапазон ячеек в DHTMLX Spreadsheet с помощью метода selection.setSelectedCell(), при необходимости прокрутив к ним таблицу.
---

# setSelectedCell()

### Описание {#description}

@short: Выбирает указанную(ые) ячейку(и)

### Использование {#usage}

~~~jsx
setSelectedCell(cell: string, scroll?: boolean): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) или диапазон выбранной(ых) ячейки(ек)
- `scroll` - (необязательный) определяет, нужно ли прокручивать Spreadsheet к ячейке, по умолчанию `true`

### Пример {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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
