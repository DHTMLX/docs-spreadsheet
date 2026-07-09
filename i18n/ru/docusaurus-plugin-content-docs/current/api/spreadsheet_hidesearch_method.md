---
sidebar_label: hideSearch()
title: Метод hideSearch
description: Вы можете узнать о методе hideSearch в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// открывает панель поиска и подсвечивает найденные ячейки
spreadsheet.search("min", true);

// скрывает панель поиска
spreadsheet.hideSearch(); 
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#searching-for-data)
