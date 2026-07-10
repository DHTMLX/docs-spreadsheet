---
sidebar_label: json()
title: Метод экспорта json
description: Вы можете узнать о методе экспорта json в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Журнал изменений:** Добавлено в v4.3

**Полезная статья:** [Загрузка и экспорт данных](loading_data.md)

**Связанный пример:** [Spreadsheet. Экспорт/импорт JSON](https://snippet.dhtmlx.com/e3xct53l)
