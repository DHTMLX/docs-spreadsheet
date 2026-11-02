---
sidebar_label: setFormat()
title: setFormat-Methode
description: Wenden Sie mit der Methode setFormat() ein Zahlenformat auf den Wert einer Zelle oder eines Zellbereichs in DHTMLX Spreadsheet an.
---

# setFormat()

### Beschreibung {#description}

@short: Legt ein bestimmtes Format für den Wert einer Zelle fest

### Verwendung {#usage}

~~~jsx
setFormat(cell: string, format: string | array): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle oder eines Zellbereichs
- `format` - (erforderlich) der/die Name(n) des Zahlenformats, das auf den Zellwert angewendet werden soll

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// wendet das Währungsformat auf die Zelle A1 an
spreadsheet.setFormat("A1","currency");
~~~

:::info
Ab v4.1 kann der Verweis auf eine Zelle im folgenden Format angegeben werden:

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, setzt die Methode das Format für den Wert einer Zelle des aktiven Reiters.
:::

**Verwandter Artikel:** [Zahlenformatierung](number_formatting.md)
