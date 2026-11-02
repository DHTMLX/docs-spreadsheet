---
sidebar_label: getSelectedCell() 
title: Метод getSelectedCell объекта selection
description: Получите идентификаторы или диапазоны выделенных ячеек в DHTMLX Spreadsheet с помощью метода selection.getSelectedCell().
---

# getSelectedCell()

### Описание {#description}

@short: Возвращает идентификатор(ы) выбранной(ых) ячейки(ек)

### Использование {#usage}

~~~jsx
getSelectedCell(): string;
~~~

### Возвращаемое значение {#returns}

Метод возвращает идентификатор(ы) или диапазон выбранной(ых) ячейки(ек)

### Пример {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// получает выбранные ячейки
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Полезная статья:** [Работа со Spreadsheet](working_with_ssheet.md)
