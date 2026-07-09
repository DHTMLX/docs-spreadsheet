---
sidebar_label: beforeAction
title: Событие beforeAction
description: Вы можете узнать о событии beforeAction в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# beforeAction

### Описание {#description}

@short: Вызывается перед выполнением действия

### Использование {#usage}

~~~jsx
beforeAction: (action: string, config: object) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `action` - (обязательный) имя действия. Полный список доступных действий см. [здесь](api/overview/actions_overview.md#list-of-actions)
- `config` - (обязательный) объект с параметрами действия

### Возвращаемое значение {#returns}

Верните `false`, чтобы предотвратить выполнение действия; в противном случае верните `true`

### Пример {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(dataset);

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return false;
    }
});
~~~

**Журнал изменений:** Добавлено в v4.3

**Полезные статьи:** 
- [Действия Spreadsheet](api/overview/actions_overview.md) 
- [Обработка событий](handling_events.md) 
