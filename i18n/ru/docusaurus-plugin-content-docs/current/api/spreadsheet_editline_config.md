---
sidebar_label: editLine
title: Конфигурация editLine
description: Вы можете узнать о конфигурации editLine в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# editLine

### Описание {#description}

@short: Необязательный. Показывает/скрывает строку редактирования

### Использование {#usage}

~~~jsx
editLine?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
editLine: true
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    editLine: true,
    // другие параметры конфигурации
});
~~~

**Связанные статьи:** [Конфигурация](configuration.md#editing-bar)

**Связанный пример:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
