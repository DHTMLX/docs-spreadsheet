---
sidebar_label: detach()
title: Метод detach шины событий
description: Вы можете узнать о методе detach шины событий в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# detach()

### Описание {#description}

@short: Отсоединяет обработчик от события (ранее привязанный методом `on()`)

### Использование {#usage}

~~~jsx
detach(name: string): void;
~~~

### Параметры {#parameters}

- `name` - (обязательный) имя события, от которого нужно отсоединить обработчик

### Пример {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");
~~~

:::info
По умолчанию `detach()` удаляет все обработчики целевого события. Можно отсоединить конкретные обработчики с помощью маркера контекста.
:::

~~~jsx
const marker = "any"; // you can use any string|object value

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// the next command will delete only handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

**Связанные статьи:** [Обработка событий](handling_events.md)
