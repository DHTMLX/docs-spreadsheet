---
sidebar_label: beforeClear
title: Событие beforeClear
description: Запретите очистку DHTMLX Spreadsheet с помощью устаревшего события beforeClear или с помощью заменяющих его события beforeAction и действия clear.
---

# beforeClear

:::caution
Событие `beforeClear` устарело начиная с v4.3. Оно продолжает работать, однако рекомендуется использовать новый подход:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
        return false;
    }
});
~~~

Подробнее о новой концепции см. **[Действия Spreadsheet](api/overview/actions_overview.md)**. 
:::

### Описание {#description}

@short: Вызывается перед очисткой таблицы

### Использование {#usage}

~~~jsx
beforeClear: () => void | boolean;
~~~

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить очистку таблицы; в противном случае `true`.

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "beforeClear"
spreadsheet.events.on("beforeClear", function(){
    console.log("A spreadsheet will be cleared");
    return false;
});
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Обработка событий](handling_events.md)
