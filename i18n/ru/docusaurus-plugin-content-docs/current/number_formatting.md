---
sidebar_label: Форматирование чисел
title: Форматирование чисел
description: Вы можете изучить руководство разработчика по форматированию чисел в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник API, ознакомьтесь с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Форматирование чисел {#number-formatting}

DHTMLX Spreadsheet поддерживает форматирование чисел, которое можно применять к числовым значениям в ячейках.

![Выпадающий список форматов чисел в DHTMLX Spreadsheet с вариантами Common, Number, Currency, Percent, Date, Time и Text](/img/number_format_options.png)

:::note
[Руководство пользователя](number_formatting_guide.md) поможет вашим пользователям легко работать со Spreadsheet.
:::

## Форматы чисел по умолчанию {#default-number-formats}

Формат числа — это объект, включающий набор свойств:

- `id` — идентификатор формата, используемый для задания формата ячейки методом [`setFormat()`](api/spreadsheet_setformat_method.md)
- `mask` — маска числового формата. Список доступных в маске символов приведён [ниже](#the-structure-of-a-mask)
- `name` — название формата, отображаемое в выпадающих списках панели инструментов и меню
- `example` — пример того, как выглядит отформатированное число. По умолчанию для примеров форматов используется число 2702.31

Форматы чисел по умолчанию:

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // depending on the localization.timeFormat config
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" },
    { name: "Scientific", id: "scientific", mask: "0.00E+00", example: "1.50E+03" }
];
~~~

Вот как выглядит таблица с данными в различных числовых форматах:

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Формат даты {#date-format}

Формат отображения дат в таблице можно задать с помощью опции `dateFormat` свойства [`localization`](api/spreadsheet_localization_config.md). Формат по умолчанию — `"%d/%m/%Y"`.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        dateFormat: "%D/%M/%Y",
    }
});

spreadsheet.parse({
    styles: {
        // a set of styles
    },
    data: [
        {cell: "B1", value: "03/10/2022", format: "date"},
        {cell: "B2", value: new Date(), format: "date"},
    ]
});
~~~

Ознакомьтесь с [полным списком доступных символов для создания форматов](api/spreadsheet_localization_config.md#characters-for-setting-date-format).

## Формат времени {#time-format}

Чтобы задать формат отображения времени в ячейках таблицы, используйте опцию `timeFormat` свойства [`localization`](api/spreadsheet_localization_config.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        timeFormat: 24,
    }
});

spreadsheet.parse({
    styles: {
        // a set of styles
    },
    data: [
        { cell: "A1", value: "18:30", format: "time" },
        { cell: "A2", value: 44550.5625, format: "time" },
        { cell: "A3", value: new Date(), format: "time" },
    ]
});
~~~

## Локализация числа, даты, времени, валюты {#number-date-time-currency-localization}

С помощью параметров конфигурации Spreadsheet можно локализовать время и дату, указать нужный знак валюты, а также задать желаемые разделители десятичной части и тысяч. Все эти настройки доступны в свойстве [`localization`](api/spreadsheet_localization_config.md). Это объект со следующими свойствами:

- `decimal` — (необязательный) символ, используемый в качестве десятичного разделителя, по умолчанию `"."` (точка)<br>Возможные значения: `"." | ","`
- `thousands` — (необязательный) символ, используемый в качестве разделителя тысяч, по умолчанию `","` (запятая)<br>Возможные значения: `"." | "," | " " | ""`
- `currency` — (необязательный) знак валюты, по умолчанию `"$"` 
- `dateFormat` — (необязательный) формат отображения дат в виде строки, по умолчанию `"%d/%m/%Y"`. Подробнее на странице API [`localization`](api/spreadsheet_localization_config.md)
- `timeFormat` — (необязательный) формат отображения времени: `12` или `24`, по умолчанию `12`

Например, настройки локализации по умолчанию можно изменить следующим образом:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    localization: {
        decimal: ",", 
        thousands: " ", 
        currency: "¥",  
        dateFormat: "%D/%M/%Y",
        timeFormat: 24
    }
});

spreadsheet.parse(dataset);
~~~

Вот результат настройки объекта `localization` для Spreadsheet:

<iframe src="https://snippet.dhtmlx.com/xislsb3c?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Научный числовой формат {#scientific-number-format}

Научная (экспоненциальная) запись доступна как формат по умолчанию и удобна для краткого представления очень больших или очень маленьких чисел. Встроенный формат `"scientific"` использует маску `0.00E+00`, которая отображает, например, 1500.31 как `1.50E+03`.

Чтобы применить его к ячейке, используйте метод [`setFormat()`](api/spreadsheet_setformat_method.md):

~~~jsx
spreadsheet.setFormat("A1", "scientific");
~~~

Также можно задать пользовательский научный формат с другой маской через параметр конфигурации [`formats`](api/spreadsheet_formats_config.md). Например, маска `0.###E+0` даёт более компактный результат:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    formats: [
        { id: "scientific_compact", mask: "0.###E+0", name: "Scientific (compact)", example: "1.5E+3" }
    ]
});
~~~

## Настройка форматов {#formats-customization}

Вы не ограничены [форматами чисел по умолчанию](#default-number-formats). Форматы можно настраивать двумя способами:

- изменять настройки стандартных числовых форматов
- добавлять пользовательские числовые форматы в таблицу

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

Все эти изменения выполняются с помощью параметра конфигурации [`formats`](api/spreadsheet_formats_config.md). Это массив объектов форматов, каждый из которых содержит набор свойств:

- `id` — (*string*) обязательный, идентификатор формата, используемый для задания формата ячейки методом [`setFormat()`](api/spreadsheet_setformat_method.md)
- `mask` — (*string*) обязательный, маска числового формата. Список доступных в маске символов приведён [ниже](#the-structure-of-a-mask)
- `name` — (*string*) необязательный, название формата, отображаемое в выпадающих списках панели инструментов и меню
- `example` — (*string*) необязательный, пример того, как выглядит отформатированное число

### Структура маски {#the-structure-of-a-mask}

Маска может содержать набор стандартных синтаксических символов, включая заполнители цифр, разделители, знаки процента и валюты, допустимые символы:

- **0** — цифра числа. Используется для отображения незначащих нулей, если цифр в числе меньше, чем нулей в формате. Например, чтобы отобразить 2 как 2.0, используйте формат 0.0.
- **#** — цифра числа. Используется для отображения только значащих цифр (незначащие нули будут опущены, если цифр в числе меньше, чем символов # в формате).
- **$** — форматирует числа как денежное значение в долларах. Чтобы использовать другой знак валюты, его нужно определить в маске как **[$ your_currency_sign]**#,##0.00, например, [$ €]#,##0.00.
{{note Обратите внимание, что все символы между [$ и ] будут интерпретированы как знак валюты.}}
- **.(точка)** — добавляет десятичную точку к числам.
- **,(запятая)** — добавляет разделитель тысяч к числам.
- **[символы для задания формата даты](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)** — используются для создания маски даты и времени. Например, чтобы отобразить 27.09.2023 как 27, Sep 2023, используйте формат `"%d, %M %Y"`.
- **E+ / E-** — форматирует числа в научной (экспоненциальной) записи. Цифры после `E` задают минимальное количество разрядов показателя степени. `E+` всегда показывает знак показателя; `E-` показывает его только для отрицательных показателей. Например, маска `0.00E+00` отображает 1500.31 как `1.50E+03`.

## Установка формата {#setting-format}

Чтобы применить нужный формат к числовому значению, используйте метод [`setFormat()`](api/spreadsheet_setformat_method.md). Он принимает два параметра:

- `cell` — (*string*) идентификатор ячейки, значение которой нужно отформатировать
- `format` — (*string*) название [стандартного числового формата](#default-number-formats), применяемого к значению ячейки

Например:

~~~jsx
// применяет процентный формат к ячейке A1
spreadsheet.setFormat("A1","percent");
~~~

## Получение формата {#getting-format}

Числовой формат, применённый к значению ячейки, можно получить методом [`getFormat()`](api/spreadsheet_getformat_method.md). Метод принимает идентификатор ячейки в качестве параметра.

~~~jsx
var format = spreadsheet.getFormat("A1"); 
// ->"percent"
~~~

## События {#events}

Для контроля изменений формата ячейки можно использовать пару событий:

- [`beforeAction`](api/spreadsheet_beforeaction_event.md) — срабатывает перед выполнением действия `setCellFormat`
- [`afterAction`](api/spreadsheet_afteraction_event.md) — срабатывает после выполнения действия `setCellFormat`
