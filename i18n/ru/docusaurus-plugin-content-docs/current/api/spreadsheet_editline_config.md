---
sidebar_label: editLine
title: Конфигурация editLine
description: Покажите или скройте строку редактирования DHTMLX Spreadsheet с помощью свойства editLine, которое включено по умолчанию.
---

# editLine

### Описание {#description}

@short: Необязательный. Показывает/скрывает строку редактирования

### Использование {#usage}

~~~jsx
editLine?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
editLine: true
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    editLine: true,
    // другие параметры конфигурации
});
~~~

**Полезная статья:** [Конфигурация](configuration.md#editing-bar)

**Связанный пример:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
