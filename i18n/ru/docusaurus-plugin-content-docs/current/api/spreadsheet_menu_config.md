---
sidebar_label: menu
title: конфигурация menu
description: Покажите или скройте меню DHTMLX Spreadsheet с помощью свойства menu.
---

# menu

### Описание {#description}

@short: Необязательный. Показывает/скрывает меню

### Использование {#usage}

~~~jsx
menu?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
menu: true
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
  menu: false,
  // other config parameters
});
~~~

**Полезная статья:** [Конфигурация](configuration.md#menu)

**Связанный пример:** [Spreadsheet. Menu](https://snippet.dhtmlx.com/uulux27v)
