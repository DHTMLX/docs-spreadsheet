---
sidebar_label: deleteRow()
title: Метод deleteRow
description: Вы можете узнать о методе deleteRow в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# deleteRow()

### Описание {#description}

@short: Удаляет строку из таблицы

:::info
Метод находит указанную ячейку, выделяет её, удаляет строку, в которой она расположена, и сдвигает строку ниже на её место.
:::

### Использование {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, содержащей идентификатор строки, которую следует удалить

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// удаляет вторую строку
spreadsheet.deleteRow("G2");
~~~

:::note
Можно удалить несколько строк, передав диапазон идентификаторов ячеек в качестве параметра метода, например: "A1:C3".
:::

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
