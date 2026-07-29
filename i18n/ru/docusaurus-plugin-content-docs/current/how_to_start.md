---
sidebar_label: Как начать
title: Как начать работу с DHTMLX Spreadsheet
description: Вы можете узнать, как начать работу с библиотекой DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Как начать {#how-to-start}

Это руководство проведёт вас по шагам для создания полностью функциональной DHTMLX Spreadsheet на странице. Компонент особенно эффективен для работы с большими объёмами данных, когда нужно сохранять результаты вычислений и воспроизводить их.

![DHTMLX Spreadsheet, инициализированная с примером таблицы данных в окне браузера](/img/how_to_start.png)

## Шаг 1. Подключение исходных файлов {#step-1-including-source-files}

Начните с создания HTML-файла с именем *index.html*. Затем подключите исходные файлы Spreadsheet. [Подробное описание пакета DHTMLX Spreadsheet приведено здесь](initialization.md#including-source-files).

Необходимы два файла:

- *JS*-файл DHTMLX Spreadsheet
- *CSS*-файл DHTMLX Spreadsheet

и

- ссылка на исходный файл Google Fonts для корректного отображения шрифтов.

~~~html {5-8} title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   

    <link href="codebase/spreadsheet.css" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <script>
    // your code will be here
    </script>
</body>
</html>
~~~

### Установка Spreadsheet через npm или yarn {#installing-spreadsheet-via-npm-or-yarn}

Вы можете импортировать JavaScript Spreadsheet в свой проект с помощью менеджера пакетов `yarn` или `npm`.

#### Установка пробной версии Spreadsheet через npm или yarn {#installing-trial-spreadsheet-via-npm-or-yarn}

:::info
Если вы хотите использовать пробную версию Spreadsheet, скачайте [**пробный пакет Spreadsheet**](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) и следуйте инструкциям в файле *README*. Обратите внимание, что пробная версия Spreadsheet доступна только в течение 30 дней.
:::

#### Установка PRO-версии Spreadsheet через npm или yarn {#installing-pro-spreadsheet-via-npm-or-yarn}

:::info
Вы можете получить доступ к закрытому **npm**-репозиторию DHTMLX напрямую из [Кабинета клиента](https://dhtmlx.com/clients/), сгенерировав логин и пароль для **npm**. Подробное руководство по установке также доступно там. Обратите внимание, что доступ к закрытому **npm** возможен только при наличии активной лицензии на Spreadsheet.
:::

## Шаг 2. Создание Spreadsheet {#step-2-creating-spreadsheet}

Теперь вы готовы добавить Spreadsheet на страницу. Сначала создайте DIV-контейнер и поместите в него DHTMLX Spreadsheet. Ваши действия:

- указать DIV-контейнер в файле *index.html*
- инициализировать DHTMLX Spreadsheet с помощью конструктора `dhx.Spreadsheet`

В качестве параметров конструктор принимает HTML-контейнер для размещения Spreadsheet и объект конфигурации Spreadsheet.

~~~html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   
   
    <link href="codebase/spreadsheet.css" rel="stylesheet">  
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <div id="spreadsheet_container"></div>
    <script>
        const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
            //config options
        });
    </script>
</body>
</html>
~~~

## Шаг 3. Настройка конфигурации Spreadsheet {#step-3-setting-spreadsheet-configuration}

Далее вы можете задать дополнительные параметры конфигурации, которые компонент Spreadsheet должен иметь при инициализации помимо значений по умолчанию.

Вы можете настроить внешний вид Spreadsheet с помощью нескольких параметров, например: `toolbarBlocks`, `rowsCount` и `colsCount`. [Подробности](configuration.md).

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    toolbarBlocks: ["columns", "rows", "clear"],
    rowsCount: 10,
    colsCount: 10
});
~~~

Конфигурация DHTMLX Spreadsheet весьма гибкая, поэтому вы можете изменять её в любое время. [Прочитайте соответствующее руководство](configuration.md), чтобы освоить основы настройки Spreadsheet.

## Шаг 4. Загрузка данных в Spreadsheet {#step-4-loading-data-into-spreadsheet}

Последний шаг — заполнить Spreadsheet данными. DHTMLX Spreadsheet принимает данные в формате JSON. Помимо данных, в наборе данных можно передавать необходимые стили. При загрузке встроенных данных нужно использовать метод `parse()` и передать ему объект с данными, как в примере ниже:

~~~jsx title="data.json"
const data = [
    { "cell": "a1", "value": "Country" },
    { "cell": "b1", "value": "Product" },
    { "cell": "c1", "value": "Price" },
    { "cell": "d1", "value": "Amount" },
    { "cell": "e1", "value": "Total Price" },

    { "cell": "a2", "value": "Ecuador" },
    { "cell": "b2", "value": "Banana" },
    { "cell": "c2", "value": 6.68 },
    { "cell": "d2", "value": 430 },
    { "cell": "e2", "value": 2872.4 },

    { "cell": "a3", "value": "Belarus" },
    { "cell": "b3", "value": "Apple" },
    { "cell": "c3", "value": 3.75 },
    { "cell": "d3", "value": 600 },
    { "cell": "e3", "value": 2250 }
]

// initializing spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    //config
});
// loading data into spreadsheet
spreadsheet.parse(data);
~~~

**Связанный пример**: [Spreadsheet. Настраиваемое количество ячеек](https://snippet.dhtmlx.com/vc3mstsw)

## Что дальше {#whats-next}

Вот и всё. За четыре шага вы получаете удобный инструмент для работы с табличными данными. Теперь вы можете начать работу с данными или продолжить изучение DHTMLX Spreadsheet.

- [Обзор Spreadsheet](/)
- [](guides.md)
- [](api/api_overview.md)
