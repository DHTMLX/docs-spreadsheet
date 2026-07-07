---
sidebar_label: afterAction
title: событие afterAction
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о событии afterAction. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# afterAction

### Описание {#description}

@short: Срабатывает после выполнения действия

### Использование {#usage}

~~~jsx
afterAction: (action: string, config: object) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `action` - (обязательный) имя действия. Полный список доступных действий смотрите [здесь](api/overview/actions_overview.md#list-of-actions)
- `config` - (обязательный) объект с параметрами действия

### Пример {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**Журнал изменений:** Добавлен в v4.3

**Связанные статьи:** 
- [Действия таблицы](api/overview/actions_overview.md)
- [Обработка событий](handling_events.md)
