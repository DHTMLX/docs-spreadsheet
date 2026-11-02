---
sidebar_label: multiSheets
title: конфигурация multiSheets
description: Включите или отключите работу с несколькими листами в DHTMLX Spreadsheet с помощью свойства multiSheets, которое показывает или скрывает нижнюю панель с вкладками листов.
---

# multiSheets

### Описание {#description}

@short: Необязательный. Включает/отключает возможность работы с несколькими листами в таблице

### Использование {#usage}

~~~jsx
multiSheets?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
multiSheets: true
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: false,
    // other config parameters
});
~~~

:::info
Установка свойства в `false` скрывает нижнюю панель с вкладками листов.
:::

**Журнал изменений:** Добавлено в v4.1
