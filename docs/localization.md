---
sidebar_label: Localization
title: JavaScript Spreadsheet - Localization
description: changetext
---

# Localization

You can localize labels in the interface of dhtmlxSpreadSheet and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

<img style="margin: 20px auto 20px auto; display: block;" src="ssheet_locale.png">

## Default locale

The English locale is used by default:

~~~js
var en = {
	undo: "Undo",
	redo: "Redo",
	textColor: "Text color",
	backgroundColor: "Background color",
	bold: "Bold",
	italic: "Italic",

	lockCell: "Lock cell",
	unlockCell: "Unlock cell",

	format: "Format",
	edit: "Edit",
	clear: "Clear",
	clearValue: "Clear value",
	clearStyles: "Clear styles",
	clearAll: "Clear all",

	insert: "Insert",
	columns: "Columns",
	rows: "Rows",
	addColumn: "Add column",
	removeColumn: "Remove column",
	addRow: "Add row",
	removeRow: "Remove row",

	configuration: "Configuration",
	underline: "Underline",
	align: "Align",
	left: "Left",
	right: "Right",
	center: "Center",

	help: "Help",

	common: "common",
	number: "number",
	currency: "currency",
	percent: "percent",

	downloadAs: "Download as...",
	importAs: "Import as...",

	import: "Import",
	export: "Export",
	file: "File",
	numberFormat: "Number format"
};
~~~

## Custom locale

To apply a different locale you need to:

- provide translation for all text labels in SpreadSheet, e.g. the Russian locale looks like this:

~~~js
var ru = {
	undo: "Отменить",
    redo: "Применить",
    textColor: "Цвет текста",
    backgroundColor: "Цвет фона",
    bold: "Жирный",
    italic: "Курсив",
    
    lockCell: "Блокировать ячейку",
    unlockCell: "Разблокировать ячейку",
    
    format: "Формат",
    edit: "Редактировать",
    clear: "Очистить",
    clearValue: "Очистить значение",
    clearStyles: "Очистить стили",
    clearAll: "Очистить все",
    
    insert: "Вставка",
    columns: "Столбцы",
    rows: "Строки",
    addColumn: "Добавить столбец",
    removeColumn: "Удалить столбец",
    addRow: "Добавить строку",
    removeRow: "Удалить строку",
    
    configuration: "Конфигурация",
    underline: "Подчеркнутый",
    
    align: "Выровнять",
    left: "по левому краю",
    right: "по правому краю",
    center: "по центру",
    help: "Помощь",
    
    common: "общий",
    number: "числовой",
    currency: "денежный",
    percent: "процентный",
    
    downloadAs: "Скачать как...",
    importAs: "Импортировать как...",
    
    import: "Импорт",
    export: "Экспорт",
    file: "Файл",
    
    numberFormat: "Числовой формат"
};
~~~

- apply the new locale by calling the **dhx.i18n.setLocale()** method before initializing SpreadSheet:

~~~js
dhx.i18n.setLocale("spreadsheet", ru);
var spreadsheet = new dhx.Spreadsheet("ssheet1");
~~~

{{sample 01_init/04_localization.html}}
