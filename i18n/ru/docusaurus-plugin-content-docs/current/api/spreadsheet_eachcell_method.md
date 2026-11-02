---
sidebar_label: eachCell()
title: Метод eachCell
description: Переберите диапазон ячеек или выделенные ячейки в DHTMLX Spreadsheet с помощью метода eachCell(), который вызывает функцию с именем и значением каждой ячейки.
---

# eachCell()

### Описание {#description}

@short: Перебирает ячейки в таблице

:::info
Если диапазон ячеек не указан, метод перебирает выделенные ячейки.
:::

### Использование {#usage}

~~~jsx
eachCell(
    cb: (cellName: string, cellValue: any) => any, 
    range?: string
): void;
~~~ 

### Параметры {#parameters}

- `callback` - (обязательный) функция-колбэк
- `range` - (необязательный) диапазон ячеек для перебора

### Пример {#example}

~~~jsx {21-27}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});

spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    items: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});

function checkValue(check) {
    spreadsheet.eachCell(function (cell, value) {
        if (!check(value)) {
            spreadsheet.setStyle(cell, { background: "#e57373" });
        } else {
            spreadsheet.setStyle(cell, { background: "" });
        }
    }, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
    switch (id) {
        case "isNumber":
            checkValue(function (value) { return !isNaN(value) });
            break;
        case "isEven":
            checkValue(function (value) { return value % 2 === 0 });
            break;
    }
});
~~~

**Полезная статья:** [Кастомизация](customization.md#menu)

**Связанный пример**: [Spreadsheet. Menu](https://snippet.dhtmlx.com/2mlv2qaz)
