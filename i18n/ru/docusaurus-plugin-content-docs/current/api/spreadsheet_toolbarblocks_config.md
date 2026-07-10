---
sidebar_label: toolbarBlocks
title: Конфигурация toolbarBlocks
description: Вы можете узнать о конфигурации toolbarBlocks в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# toolbarBlocks

### Описание {#description}

@short: Необязательный. Задаёт блоки кнопок, отображаемые на панели инструментов таблицы

### Использование {#usage}

~~~jsx
toolbarBlocks?: array;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
toolbarBlocks: ["undo", "colors", "font", "decoration", "align", "cell", "format", "actions"]
~~~

### Пример {#example}

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // full toolbar
    toolbarBlocks: [
        "undo",
        "colors",
        "font",
        "decoration",
        "align",
        "cell",
        "format",
        "actions", 
        "lock",
        "clear",
        "columns",
        "rows",
        "file",
        "help"
    ]
});
~~~

### Подробности {#details}

Вы можете задать собственную структуру панели инструментов, перечислив необходимые элементы в массиве `toolbarBlocks` в нужном порядке, например:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Ознакомьтесь с тем, как можно [настроить панель инструментов](customization.md#toolbar).

**Журнал изменений:**

- Блок `"font"` добавлен в v6.0
- Блок `"cell"` добавлен в v5.2
- Блок `"actions"` добавлен в v5.0

**Полезные статьи:**
- [Конфигурация](configuration.md#toolbar)
- [Кастомизация](customization.md)

**Связанный пример:** [Spreadsheet. Полная панель инструментов](https://snippet.dhtmlx.com/kpm017nx)
