---
sidebar_label: multiSheets
title: конфигурация multiSheets
description: Вы можете узнать о конфигурации multiSheets в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    multiSheets: false,
    // other config parameters
});
~~~

:::info
Установка свойства в `false` скрывает нижнюю панель с вкладками листов.
:::

**Журнал изменений:** Добавлено в v4.1
