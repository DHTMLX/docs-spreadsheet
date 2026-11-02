---
sidebar_label: clear()
title: Метод clear
description: Удалите все данные из DHTMLX Spreadsheet с помощью метода clear().
---

# clear()

### Описание {#description}

@short: Очищает таблицу

### Использование {#usage}

~~~jsx
clear(): void;
~~~

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// очищает таблицу
spreadsheet.clear();
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Очистка таблицы](working_with_ssheet.md#clearing-spreadsheet)

**Связанный пример:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
