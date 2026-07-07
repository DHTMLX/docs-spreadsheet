---
sidebar_label: Installation
title: React Spreadsheet Installation
description: "So installieren Sie die Evaluierungs- oder kommerzielle Version von DHTMLX React Spreadsheet über npm."
---

# React Spreadsheet Installation {#react-spreadsheet-installation}

React Spreadsheet wird als npm-Paket in drei Varianten vertrieben: ein öffentlicher Evaluierungs-Build, ein privater Evaluierungs-Build und die kommerzielle Version. Diese Seite beschreibt, wie Sie jede Variante installieren, das erforderliche CSS-Stylesheet importieren und TypeScript-Unterstützung einrichten.

:::info Voraussetzungen
- [Node.js](https://nodejs.org/en/) (LTS-Version empfohlen)
- React 18 oder neuer
:::

## Evaluierungsversion (öffentliches npm) {#evaluation-version-public-npm}

Das Evaluierungspaket ist ohne zusätzliche Konfiguration im öffentlichen npm-Registry verfügbar. Es enthält eine kostenlose 30-Tage-Evaluierung.

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

oder mit yarn:

~~~bash
yarn add @dhtmlx/trial-react-spreadsheet
~~~

## Evaluierungsversion (privates npm) {#evaluation-version-private-npm}

Die Evaluierungsversion befindet sich im privaten DHTMLX-Registry. Konfigurieren Sie zuerst Ihr Projekt:

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

Dann installieren:

~~~bash
npm install @dhx/trial-react-spreadsheet
~~~

## Kommerzielle Version (privates npm) {#commercial-version-private-npm}

Die kommerzielle Version verwendet dasselbe private Registry. Melden Sie sich in Ihrem Konto im [Kundenbereich](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses) an, um Zugangsdaten zu erhalten.

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

~~~bash
npm install @dhx/react-spreadsheet
~~~

## Paketvarianten {#package-variants}

| Variante | Paketname | Registry |
|---------|-------------|----------|
| Evaluierung (öffentliches npm) | `@dhtmlx/trial-react-spreadsheet` | npmjs.org (öffentlich) |
| Evaluierung (privates npm) | `@dhx/trial-react-spreadsheet` | npm.dhtmlx.com (privat) |
| Kommerziell | `@dhx/react-spreadsheet` | npm.dhtmlx.com (privat) |

## CSS-Import {#css-import}

Importieren Sie das Stylesheet in Ihren Anwendungseinstiegspunkt oder Ihre Komponente:

~~~tsx
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

Für die kommerzielle Version:

~~~tsx
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

## TypeScript {#typescript}

TypeScript-Typdefinitionen sind im Paket enthalten. Es wird kein zusätzliches `@types/`-Paket benötigt.

## Nächste Schritte {#next-steps}

- [Schnellstart](react/quick-start.md) - Ihre erste Tabellenanwendung Schritt für Schritt erstellen
