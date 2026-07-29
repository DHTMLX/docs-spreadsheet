---
sidebar_label: Localization
title: React Spreadsheet 本地化
description: "在 React Spreadsheet 中本地化 UI 标签、公式名称以及数字/日期格式。"
---

# React Spreadsheet 本地化 {#react-spreadsheet-localization}

React Spreadsheet 针对 UI 的不同方面提供了两套独立的本地化机制。

## 两种本地化机制 {#two-localization-mechanisms}

| 机制 | Prop | 控制范围 |
|-----------|------|-----------------|
| UI 本地化 | `spreadsheetLocale` | 菜单标签、工具栏提示、对话框文字及本地化公式名称 |
| 数字/日期格式化 | `localization` | 小数分隔符、货币符号、日期/时间显示格式 |

这两个 props 相互独立，可单独使用，也可同时使用。

## UI 本地化（spreadsheetLocale） {#ui-localization-spreadsheetlocale}

`spreadsheetLocale` prop 接受一个 [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) 对象，该对象包含两个属性：

- `locale` - `Record<string, string>` 类型，用于覆盖 UI 字符串
- `formulas` - `Record<string, [string, string?][]>` 类型，按类别分组的本地化公式名称

~~~tsx
const locale: SpreadsheetLocale = {
    locale: {
        "File": "Datei",
        "Edit": "Bearbeiten",
        "Insert": "Einfügen",
        "Undo": "Rückgängig",
        "Redo": "Wiederherstellen",
        // ... 更多 UI 字符串
    },
    formulas: {
        "MATCH": [
            ["Suchwert", "Erforderlich. Der Wert, der im Sucharray abgeglichen werden soll."],
            ["Sucharray", "Erforderlich. Ein Zellbereich oder ein Array-Bezug."],
        ],
        // ... 更多公式类别
    },
};

<ReactSpreadsheet sheets={sheets} spreadsheetLocale={locale} />
~~~

:::warning
`spreadsheetLocale` 是仅初始化 prop。在初次渲染后修改该值会导致 widget 被销毁并重新创建，撤销/重做历史记录及 UI 状态（选区、滚动位置）将被重置。
:::

## 数字/日期格式化（localization） {#numberdate-formatting-localization}

`localization` prop 控制数字和日期的显示方式，包括小数分隔符、货币符号和日期格式。其格式与 DHTMLX Spreadsheet 的 [`localization`](api/spreadsheet_localization_config.md) 配置属性相同。

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    localization={{
        decimal: ",",
        thousands: " ",
        currency: "€",
    }}
/>
~~~

:::warning
`localization` 同样是仅初始化 prop。修改该值会触发完整的销毁/重建周期。
:::

## 相关 API 和指南 {#related-api-and-guides}

- [本地化](localization.md) - DHTMLX Spreadsheet 本地化指南
- [SpreadsheetLocale 类型](react/types.md#spreadsheetlocale) - TypeScript 接口参考
