---
sidebar_label: afterClear
title: Событие afterClear
description: Вы можете узнать о событии afterClear в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterClear"
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Обработка событий](handling_events.md)
