---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "DHTMLX Spreadsheet in React installieren, konfigurieren und verwenden - mit dem offiziellen deklarativen Wrapper."
---

# React Spreadsheet {#react-spreadsheet}

Der offizielle deklarative React-Wrapper für DHTMLX Spreadsheet. Erstellen Sie Tabellen-UIs mit einer komponentenbasierten API: Übergeben Sie Daten als Props, reagieren Sie auf Änderungen über Event-Callbacks und greifen Sie bei Bedarf über eine Ref auf das zugrundeliegende Widget zu.

## Erste Schritte {#get-started}

- [Installation](react/installation.md) - Evaluierungs- oder kommerzielles Paket installieren
- [Schnellstart](react/quick-start.md) - Ihre erste Tabellenanwendung Schritt für Schritt erstellen
- [Online-Beispiele](https://dhtmlx.com/react/demos/spreadsheet/) - Live-Demos der React Spreadsheet-Funktionen ansehen

:::info
Sie können auch das [GitHub-Demo-Repository](https://github.com/DHTMLX/react-spreadsheet-examples) für ein vollständiges funktionsfähiges Beispiel erkunden.
:::

## API-Referenz {#api-reference}

- [Props-Referenz](react/props.md) - alle Komponenten-Props mit Typen und Standardwerten
- [Events-Referenz](react/events.md) - Event-Callback-Props nach Kategorie gruppiert
- [Typen-Referenz](react/types.md) - TypeScript-Interfaces, Enums und Typ-Aliase

## Datenmodell {#data-model}

Die [`sheets`](react/props.md#data-props)-Prop ist die einzige Datenquelle für alle Tabellendaten. Jedes Tabellenblatt ist ein [`SheetData`](react/types.md#sheetdata)-Objekt, das Zellen, Zeilen-/Spaltenkonfiguration, verbundene Bereiche, fixierte Fenster, Filter und Sortierung enthält.

## Zustandsverwaltung {#state-management}

Erfahren Sie, wie Sie Tabellendaten mit Ihrem Anwendungszustand synchronisieren:

- [Grundlagen der Zustandsverwaltung](react/state/state-management-basics.md) - kontrollierte Props, Event-Callbacks, der Ref-Notausgang
- [Redux Toolkit](react/state/redux-toolkit.md) - schrittweise Integrationsanleitung

## Framework-Integrationen {#framework-integrations}

- [Next.js](react/nextjs.md) - React Spreadsheet mit dem Next.js App Router verwenden

## Theming und Lokalisierung {#theming-and-localization}

- [Themes](react/themes.md) - integrierte Themes und benutzerdefinierte CSS-Überschreibungen
- [Lokalisierung](react/localization.md) - UI-Übersetzungen und Zahlen-/Datumsformatierung
