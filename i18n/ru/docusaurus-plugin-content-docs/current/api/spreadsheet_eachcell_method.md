---
sidebar_label: eachCell()
title: Метод eachCell
description: Вы можете узнать о методе eachcell в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
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
