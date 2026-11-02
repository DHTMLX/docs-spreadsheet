---
sidebar_label: afterClear
title: Событие afterClear
description: Обработайте событие afterClear, которое вызывается после очистки DHTMLX Spreadsheet (устарело с версии v4.3, используйте вместо него событие afterAction).
---

# afterClear

:::caution
Событие `afterClear` устарело начиная с v4.3. Оно продолжает работать, однако рекомендуется использовать новый подход:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
    }
});
~~~

Подробнее о новой концепции см. **[Действия Spreadsheet](api/overview/actions_overview.md)**. 
:::

### Описание {#description}

@short: Вызывается после очистки таблицы

### Использование {#usage}

~~~jsx
afterClear: () => void;
~~~

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterClear"
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Обработка событий](handling_events.md)
