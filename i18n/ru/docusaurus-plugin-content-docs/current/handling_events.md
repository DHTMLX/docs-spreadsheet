---
sidebar_label: Обработка событий
title: Обработка событий
description: Вы можете узнать об обработке событий в библиотеке DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Обработка событий {#event-handling}

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Подписка на события {#attaching-event-listeners}

Вы можете подписаться на события с помощью метода [`spreadsheet.events.on()`](api/eventsbus_on_method.md):

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## Отписка от событий {#detaching-event-listeners}

Чтобы отписаться от событий, используйте [`spreadsheet.events.detach()`](api/eventsbus_detach_method.md):

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Вызов событий {#calling-events}

Чтобы вызвать событие, используйте [`spreadsheet.events.fire()`](api/eventsbus_fire_method.md):

~~~jsx
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

Список событий доступен в [разделе API](api/api_overview.md#spreadsheet-events).

{{note Имена событий нечувствительны к регистру.}}
