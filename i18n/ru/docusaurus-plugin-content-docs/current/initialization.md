---
sidebar_label: Инициализация
title: Инициализация
description: Вы можете узнать об инициализации библиотеки DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Инициализация {#initialization}

Это руководство описывает, как создать DHTMLX Spreadsheet на странице и добавить полнофункциональный рабочий лист в ваше приложение. Выполните следующие шаги, чтобы получить готовый к использованию компонент:

1. [Подключите исходные файлы DHTMLX Spreadsheet на страницу](#including-source-files).
2. [Создайте контейнер для DHTMLX Spreadsheet](#creating-container).
3. [Инициализируйте DHTMLX Spreadsheet с помощью конструктора объекта](#initializing-dhtmlx-spreadsheet).

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Подключение исходных файлов {#including-source-files}

[Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) и распакуйте его в папку вашего проекта.

Для создания DHTMLX Spreadsheet необходимо подключить 2 исходных файла на странице:

- spreadsheet.js
- spreadsheet.css

Убедитесь, что вы указываете правильные относительные пути к этим файлам:

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

Структура пакета Spreadsheet следующая:

- *sources* — исходные файлы библиотеки; они легко читаемы и в основном предназначены для отладки;
- *codebase* — обфусцированные файлы библиотеки; они значительно меньше по размеру и предназначены для использования в производственной среде. **Включайте эти файлы в свои приложения при их готовности**;
- *samples* — примеры кода;
- *docs* — полная документация компонента.

## Создание контейнера {#creating-container}

Добавьте контейнер для Spreadsheet и задайте ему идентификатор, например "spreadsheet":

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## Инициализация DHTMLX Spreadsheet {#initializing-dhtmlx-spreadsheet}

Инициализируйте DHTMLX Spreadsheet с помощью конструктора объекта `dhx.Spreadsheet`. Конструктор имеет два параметра:

- HTML-контейнер для Spreadsheet,
- объект со свойствами конфигурации. [См. полный список ниже](#configuration-properties).

~~~jsx title="index.js"
// creating DHTMLX Spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config options
});
~~~

### Свойства конфигурации {#configuration-properties}

Ознакомьтесь с полным списком [свойств](api/api_overview.md#spreadsheet-properties), которые можно указать в объекте конфигурации Spreadsheet.

Параметры конфигурации можно задавать при инициализации в виде второго параметра конструктора:

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
