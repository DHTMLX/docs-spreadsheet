---
sidebar_label: afterAction
title: событие afterAction
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о событии afterAction. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# afterAction

### Описание {#description}

@short: Срабатывает после выполнения действия

### Использование {#usage}

~~~jsx
afterAction: (
    action: string,
    config: {
        action?: string,
        cell?: string,
        row?: number,
        col?: number,
        val?: any,
        prev?: any,
        groupAction?: string,
        pageId?: string | number,
        pageName?: string,
        // other properties of the action
    } | object[]
) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `action` - (обязательный) имя действия. Полный список доступных действий смотрите [здесь](api/overview/actions_overview.md#list-of-actions)
- `config` - (обязательный) объект с параметрами действия. Набор свойств зависит от действия. Объект может содержать:
    - `action` - (необязательный) имя действия
    - `cell` - (необязательный) идентификатор ячейки или диапазона ячеек, к которым применяется действие, например, `"A1"` или `"B2:D5"`
    - `row` - (необязательный) индекс строки ячейки, начиная с нуля
    - `col` - (необязательный) индекс столбца ячейки, начиная с нуля
    - `val` - (необязательный) новое значение, которое применяет действие, например, значение ячейки, стиль или размер
    - `prev` - (необязательный) предыдущее значение
    - `groupAction` - (необязательный) имя действия, которое выполняется вместо `action`, когда `cell` является диапазоном ячеек, например, `"groupAction"`, `"groupRowAction"` или `"resizeCol"`
    - `pageId` - (необязательный) идентификатор листа
    - `pageName` - (необязательный) имя листа

    Когда несколько действий выполняются вместе, например, при вставке, параметр `action` равен `"groupAction"`, а `config` - массив таких объектов.

### Пример {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**Журнал изменений:** Добавлено в v4.3

**Полезные статьи:** 
- [Действия таблицы](api/overview/actions_overview.md)
- [Обработка событий](handling_events.md)
