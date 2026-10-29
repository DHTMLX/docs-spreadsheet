---
sidebar_label: afterDataLoaded
title: Событие afterDataLoaded
description: Выполните код после загрузки данных в DHTMLX Spreadsheet с помощью события afterDataLoaded, например, чтобы показать сообщение о завершении загрузки.
---

# afterDataLoaded

### Описание {#description}

@short: Вызывается после завершения загрузки данных

### Использование {#usage}

~~~jsx
afterDataLoaded: () => void;
~~~

### Пример {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterDataLoaded"
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.message({
        text: "Data is successfully loaded into Spreadsheet!",
        css: "dhx_message--success",
        expire: 5000
    });
});
~~~

**Журнал изменений:** Добавлено в v5.2

**Полезная статья:** [Обработка событий](handling_events.md)

**Связанный пример:** [Spreadsheet. Событие загрузки данных](https://snippet.dhtmlx.com/vxr7amz6)
