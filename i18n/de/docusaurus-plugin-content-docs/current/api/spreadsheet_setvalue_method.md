---
sidebar_label: setValue()
title: setValue-Methode
description: Setzen Sie mit der Methode setValue() einen Wert für eine Zelle, mehrere Zellen oder einen Zellbereich in DHTMLX Spreadsheet und übergeben Sie einen einzelnen Wert oder ein Array von Werten, das über die Zellen wiederholt wird.
---

# setValue()

### Beschreibung {#description}

@short: Setzt einen Wert für eine Zelle

:::info
Die Methode setzt denselben (wiederholten) Wert bzw. dieselben Werte für die angegebenen Zellen. Wenn Sie verschiedene Werte in Spreadsheet-Zellen einfügen möchten, verwenden Sie die Methode [](api/spreadsheet_parse_method.md).
:::

### Verwendung {#usage}

~~~jsx
setValue(cell: string, value: string | number | array): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle oder eines Zellbereichs
- `value` - (erforderlich) der/die Wert(e), der/die für die Zellen gesetzt werden soll(en)

### Beispiel {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Wert für eine einzelne Zelle setzen
spreadsheet.setValue("A1",5);

// denselben Wert für einen Zellbereich setzen
spreadsheet.setValue("A1:D1",5);

// denselben Wert für verschiedene Zellen setzen
spreadsheet.setValue("B6,A1:D1",5);

// Werte aus einem Array abwechselnd auf Zellen in einem Bereich anwenden
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

**Verwandtes Beispiel:** [Spreadsheet. Initialisierung mit mehreren Tabellenblättern](https://snippet.dhtmlx.com/ihtkdcoc)

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
spreadsheet.setValue("sheet1!A1",5);
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, setzt die Methode den/die Wert(e) für die Zelle(n) des aktiven Reiters.
:::
