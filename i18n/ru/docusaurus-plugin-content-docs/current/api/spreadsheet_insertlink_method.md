---
sidebar_label: insertLink()
title: Метод insertLink
description: Вы можете узнать о методе insertLink в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# insertLink()

### Описание {#description}

@short: Вставляет/удаляет гиперссылку в ячейке

### Использование {#usage}

~~~jsx
insertLink( 
    cell: string,
    link? : {
        text?: string, 
        href: string
    }
): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки
- `link` - (необязательный) объект с конфигурацией ссылки:
    - `text` - (необязательный) текст, отображаемый для гиперссылки
    - `href` - (обязательный) URL страницы, на которую ведёт гиперссылка

:::info
Чтобы удалить гиперссылку, но сохранить текст, вызовите метод без параметра `link`.
:::

### Пример {#example}

~~~jsx {5-7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// вставить ссылку в ячейку "A2"
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});

// удалить ссылку из ячейки "A2"
spreadsheet.insertLink("A2");
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с таблицей](working_with_cells.md#inserting-a-hyperlink-into-a-cell)
