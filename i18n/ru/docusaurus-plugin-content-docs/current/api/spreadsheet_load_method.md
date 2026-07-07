---
sidebar_label: load()
title: Метод load
description: Вы можете узнать о методе load в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# load()

### Описание {#description}

@short: Загружает данные из внешнего файла

### Использование {#usage}

~~~jsx
load(url: string, type?: string): promise;
~~~

### Параметры {#parameters}

- `url` - (обязательный) URL внешнего файла
- `type` - (необязательный) тип загружаемых данных: "json" (по умолчанию), "csv", "xlsx"

### Возвращает {#returns}

Метод возвращает промис загрузки данных

### Пример {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// загрузка данных в формате JSON (по умолчанию)
spreadsheet.load("../common/data.json");

// загрузка данных в формате CSV
spreadsheet.load("../common/data.csv", "csv");

// загрузка данных в формате Excel (только .xlsx)
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

**Связанные примеры:**
- [Spreadsheet. Загрузка данных](https://snippet.dhtmlx.com/ih9zmc3e)

- [Spreadsheet. Загрузка CSV](https://snippet.dhtmlx.com/1f87y71v)

- [Spreadsheet. Импорт Xlsx](https://snippet.dhtmlx.com/cqlpy828)

:::info
Компонент выполняет AJAX-запрос и ожидает, что удалённый URL вернёт корректные данные.

Загрузка данных асинхронна, поэтому любой код, выполняемый после загрузки, необходимо оборачивать в промис:

~~~jsx
spreadsheet.load("../some/data.json").then(function(){
    spreadsheet.selection.add(123);
});
~~~
:::

### Загрузка данных из Excel {#loading-excel-data}

:::note
Компонент поддерживает импорт только из файлов Excel с расширением `.xlsx`.
:::

DHTMLX Spreadsheet использует библиотеку [Excel2Json](https://github.com/dhtmlx/excel2json) на основе WebAssembly для импорта данных из Excel. [Подробнее](loading_data.md#loading-excel-file-xlsx).

### Загрузка JSON-файлов {#loading-json-files}

Вы можете позволить пользователям загружать JSON-файл в таблицу через файловый менеджер. Для этого:

- Укажите кнопку для открытия файлового менеджера, в котором можно выбрать файлы ".json":

~~~html
<section class="dhx_sample-controls">
    <button class="dhx_sample-btn dhx_sample-btn--flat" onclick="json()">Import json</button>
</section>
~~~


- Вызовите метод `load()` с двумя параметрами: пустой строкой в качестве URL и типом загружаемых данных ("json"):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
});

spreadsheet.parse(dataset);

function json() {
    spreadsheet.load("", "json"); // загружает данные из файла .json
}
~~~

Смотрите [пример](https://snippet.dhtmlx.com/e3xct53l).

**Журнал изменений:** Возможность загрузки JSON-файла через файловый менеджер добавлена в v4.3

**Связанные статьи:** [Загрузка данных и экспорт](loading_data.md)
