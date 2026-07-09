---
sidebar_label: Фильтрация данных
title: Фильтрация данных
description: Вы можете узнать о фильтрации данных в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Фильтрация данных {#filtering-data}

Вы можете фильтровать данные в таблице, чтобы отображать только записи, соответствующие заданным критериям.

Чтобы активировать фильтрацию, воспользуйтесь одним из двух способов:

- Установите фокус на ячейку или выберите диапазон ячеек и нажмите кнопку **Filter** в панели инструментов

![DHTMLX Spreadsheet toolbar with the Filter button to enable data filtering](/img/filter_button.png)

- Установите фокус на ячейку или выберите диапазон ячеек и перейдите в меню: *Data -> Filter*

![DHTMLX Spreadsheet Data menu with the Filter option for activating column filters](/img/filter_menu.png)

После этого справа от каждого заголовка столбца в диапазоне появится значок **фильтра**.

## Фильтрация по условию {#filtering-by-condition}

- Нажмите значок **фильтра** нужного столбца

- Выберите один из встроенных операторов сравнения, например **Greater than**

- Укажите критерий фильтрации и нажмите **Apply**

![DHTMLX Spreadsheet column filter dropdown with comparison operators such as Greater than](/img/filter_by_condition.png)

### Сброс фильтра {#clearing-a-filter}

Чтобы сбросить фильтр, нажмите значок **фильтра** в заголовке столбца, выберите _By condition: **None**_ и нажмите **Apply**.

![DHTMLX Spreadsheet filter dialog with the By condition None option for clearing filters](/img/clear_filter_bycondition.png)

## Фильтрация по значениям {#filtering-by-values}

- Нажмите значок **фильтра** нужного столбца

- Нажмите кнопку **Unselect all**

![DHTMLX Spreadsheet column filter with the Unselect all button and value checkboxes](/img/unselect_all_button.png)

- Отметьте флажками значения, которые нужно отобразить, и нажмите **Apply**

### Сброс фильтра {#clearing-a-filter-1}

Чтобы сбросить фильтр, нажмите значок **фильтра** в заголовке столбца, нажмите кнопку **Select all** и затем **Apply**.

![DHTMLX Spreadsheet column filter dialog with the Select all button for clearing value filters](/img/clear_filter_by_values.png)

## Отключение фильтрации {#removing-filters}

Чтобы отключить фильтрацию, выполните одно из следующих действий:

- нажмите кнопку **Filter** в панели инструментов
- или перейдите в меню: *Data -> Filter*

Значки **фильтра** исчезнут из заголовков столбцов, а все скрытые записи снова появятся.
