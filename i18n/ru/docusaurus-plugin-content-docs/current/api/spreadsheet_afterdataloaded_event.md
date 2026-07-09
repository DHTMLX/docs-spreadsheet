---
sidebar_label: afterDataLoaded
title: Событие afterDataLoaded
description: Вы можете узнать о событии afterDataLoaded в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
