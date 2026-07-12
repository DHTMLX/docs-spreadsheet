---
sidebar_label: "Daten & Status"
title: "Daten- und Zustandsverwaltung"
description: "Muster zur Verwaltung von DHTMLX Spreadsheet-Daten im React-Status oder mit State-Management-Bibliotheken."
---

# Daten- und Zustandsverwaltung {#data--state-management}

Dieser Abschnitt behandelt Muster zur Synchronisierung von Tabellendaten mit Ihrem Anwendungsstatus: von einfachem React `useState` bis hin zu State-Management-Bibliotheken.

## Einstieg {#start-here}

- [Grundlagen der Zustandsverwaltung](react/state/state-management-basics.md) - Kernmuster: kontrollierte Props, Event-Callbacks, der Ref-Escape-Hatch und Performance-Tipps

## Anleitungen zu State-Bibliotheken {#state-library-guides}

- [Redux Toolkit](react/state/redux-toolkit.md) - Schritt-fur-Schritt-Integration mit Redux Toolkit

## Kernkonzept {#key-concept}

Die `sheets`-Prop ist die **einzige Quelle der Wahrheit** fur alle Tabellendaten. Ubergeben Sie ein Array von [`SheetData`](react/types.md#sheetdata)-Objekten; der Wrapper vergleicht Ihre Daten mit dem aktuellen Widget-Status und wendet nur die Anderungen an. Verwenden Sie unveranderliche Aktualisierungen (Spread-Operatoren, funktionale `setState`-Updater), damit React Anderungen effizient erkennen kann.
