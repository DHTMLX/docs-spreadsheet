---
sidebar_label: clear()
title: Метод clear
description: Вы можете узнать о методе clear в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// очищает таблицу
spreadsheet.clear();
~~~

**Журнал изменений:** Добавлено в v4.2

**Полезная статья:** [Очистка таблицы](working_with_ssheet.md#clearing-spreadsheet)

**Связанный пример:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
