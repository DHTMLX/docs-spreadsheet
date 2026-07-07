---
sidebar_label: deleteColumn()
title: Метод deleteColumn
description: Вы можете узнать о методе deleteColumn в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# deleteColumn()

### Описание {#description}

@short: Удаляет столбец из таблицы

:::info
Метод находит указанную ячейку, выделяет её, удаляет столбец, в котором она расположена, и сдвигает столбец слева на его место.
:::

### Использование {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, содержащей имя столбца, который следует удалить

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// удаляет столбец "G"
spreadsheet.deleteColumn("G2");
~~~

:::note
Можно удалить несколько столбцов, передав диапазон идентификаторов ячеек в качестве параметра метода, например: "A1:C3".
:::

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
