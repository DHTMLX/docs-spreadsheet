---
sidebar_label: redo()
title: метод redo
description: Повторно примените отменённое действие в DHTMLX Spreadsheet с помощью метода redo().
---

# redo()

### Описание {#description}

@short: Повторно применяет отменённое действие

### Использование {#usage}

~~~jsx
redo(): void;
~~~

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// повторно применяет отменённое действие
spreadsheet.redo();
~~~
