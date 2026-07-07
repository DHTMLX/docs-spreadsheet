---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "Установка, настройка и использование DHTMLX Spreadsheet в React с официальной декларативной обёрткой."
---

# React Spreadsheet

Официальная декларативная React-обёртка для DHTMLX Spreadsheet. Создавайте интерфейсы таблиц с компонентным АПИ: передавайте данные через пропсы, реагируйте на изменения через колбэки событий и при необходимости обращайтесь к базовому виджету через ref.

## Начало работы {#get-started}

- [Установка](react/installation.md) - установка ознакомительного или коммерческого пакета
- [Быстрый старт](react/quick-start.md) - создание первого приложения с таблицей шаг за шагом
- [Онлайн-примеры](https://dhtmlx.com/react/demos/spreadsheet/) - просмотр живых демо функций React Spreadsheet

:::info
Вы также можете изучить [демо-репозиторий на GitHub](https://github.com/DHTMLX/react-spreadsheet-examples) с полным рабочим примером.
:::

## Справочник АПИ {#api-reference}

- [Справочник пропсов](react/props.md) - все пропсы компонента с типами и значениями по умолчанию
- [Справочник событий](react/events.md) - пропсы колбэков событий, сгруппированные по категориям
- [Справочник типов](react/types.md) - TypeScript-интерфейсы, перечисления и псевдонимы типов

## Модель данных {#data-model}

Пропс [`sheets`](react/props.md#data-props) является единственным источником истины для всех данных таблицы. Каждый лист представляет собой объект [`SheetData`](react/types.md#sheetdata), содержащий ячейки, конфигурацию строк/столбцов, объединённые диапазоны, закреплённые области, фильтры и сортировку.

## Управление состоянием {#state-management}

Узнайте, как синхронизировать данные таблицы с состоянием вашего приложения:

- [Основы управления состоянием](react/state/state-management-basics.md) - управляемые пропсы, колбэки событий, запасной выход через ref
- [Redux toolkit](react/state/redux-toolkit.md) - пошаговое руководство по интеграции

## Интеграции с фреймворками {#framework-integrations}

- [Next.js](react/nextjs.md) - использование React Spreadsheet с App Router в Next.js

## Темы и локализация {#theming-and-localization}

- [Темы](react/themes.md) - встроенные темы и переопределение CSS
- [Локализация](react/localization.md) - переводы интерфейса и форматирование чисел/дат
