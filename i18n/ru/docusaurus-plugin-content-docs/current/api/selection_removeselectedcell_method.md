---
sidebar_label: removeSelectedCell() 
title: Метод removeSelectedCell объекта selection
description: Снимите выделение с указанных ячеек или диапазонов ячеек в DHTMLX Spreadsheet с помощью метода selection.removeSelectedCell().
---

# removeSelectedCell()

### Описание {#description}

@short: Снимает выделение с указанной(ых) ячейки(ек)

### Использование {#usage}

~~~jsx
removeSelectedCell(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) или диапазон выбранной(ых) ячейки(ек)

### Пример {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});
spreadsheet.parse(data);

// выбор разрозненных ячеек
spreadsheet.selection.setSelectedCell("A1:A9,C2,B4,D6");

// снимает выделение с указанных ячеек
spreadsheet.selection.removeSelectedCell("A3:A6,C2");
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Работа со Spreadsheet](working_with_ssheet.md)

**Связанный пример:** [Spreadsheet. Снятие выделения](https://snippet.dhtmlx.com/u4j76cuh)
