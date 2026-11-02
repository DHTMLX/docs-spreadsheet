---
sidebar_label: hideSearch()
title: Метод hideSearch
description: Скройте панель поиска DHTMLX Spreadsheet с помощью метода hideSearch(), например после поиска, открытого методом search().
---

# hideSearch()

### Описание {#description}

@short: Скрывает панель поиска

### Использование {#usage}

~~~jsx
hideSearch(): void;
~~~

### Пример {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// открывает панель поиска и подсвечивает найденные ячейки
spreadsheet.search("min", true);

// скрывает панель поиска
spreadsheet.hideSearch(); 
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#searching-for-data)
