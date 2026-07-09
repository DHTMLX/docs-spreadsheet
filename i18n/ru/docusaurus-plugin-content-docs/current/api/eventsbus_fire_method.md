---
sidebar_label: fire()
title: Метод fire
description: Вы можете узнать о Event Bus методе fire в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# fire()

### Описание {#description}

@short: Инициирует внутреннее событие

:::info
Как правило, события вызываются автоматически, и использовать этот метод не требуется.
:::

### Использование {#usage}

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### Параметры {#parameters}

- `name` - (обязательный) имя события, без учёта регистра
- `arguments` - (обязательный) массив данных, связанных с событием

### Возвращаемое значение {#returns}

Метод возвращает `false`, если хотя бы один из обработчиков события вернул `false`. В противном случае возвращает `true`

### Пример {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("CustomEvent", function(param1, param2){
    return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
