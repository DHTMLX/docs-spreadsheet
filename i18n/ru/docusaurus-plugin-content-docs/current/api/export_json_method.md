---
sidebar_label: json()
title: Метод экспорта json
description: Экспортируйте данные DHTMLX Spreadsheet в файл JSON с помощью метода export.json().
---

# json()

### Описание {#description}

@short: Экспортирует данные из таблицы в файл JSON

### Использование {#usage}

~~~jsx
json(): void;
~~~

### Пример {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Журнал изменений:** Добавлено в v4.3

**Полезная статья:** [Загрузка и экспорт данных](loading_data.md)

**Связанный пример:** [Spreadsheet. Экспорт/импорт JSON](https://snippet.dhtmlx.com/e3xct53l)
