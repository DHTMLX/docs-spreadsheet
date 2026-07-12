---
sidebar_label: Установка
title: Установка React Spreadsheet
description: "Как установить ознакомительную или коммерческую версию DHTMLX React Spreadsheet через npm."
---

# Установка React Spreadsheet {#react-spreadsheet-installation}

React Spreadsheet распространяется как npm-пакет в трёх вариантах: публичная ознакомительная сборка, приватная ознакомительная сборка и коммерческий релиз. На этой странице описано, как установить каждый вариант, подключить необходимую CSS-таблицу стилей и настроить поддержку TypeScript.

:::info Предварительные требования
- [Node.js](https://nodejs.org/en/) (рекомендуется LTS-версия)
- React 18 или новее
:::

## Ознакомительная версия (публичный npm) {#evaluation-version-public-npm}

Ознакомительный пакет доступен в публичном реестре npm без дополнительной настройки. Включает бесплатный 30-дневный ознакомительный период.

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

или через yarn:

~~~bash
yarn add @dhtmlx/trial-react-spreadsheet
~~~

## Ознакомительная версия (приватный npm) {#evaluation-version-private-npm}

Ознакомительная версия находится в приватном реестре DHTMLX. Сначала настройте проект:

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

Затем установите:

~~~bash
npm install @dhx/trial-react-spreadsheet
~~~

## Коммерческая версия (приватный npm) {#commercial-version-private-npm}

Коммерческая версия использует тот же приватный реестр. Войдите в свой аккаунт в [Клиентской зоне](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses), чтобы получить учётные данные.

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

~~~bash
npm install @dhx/react-spreadsheet
~~~

## Варианты пакетов {#package-variants}

| Вариант | Имя пакета | Реестр |
|---------|-------------|----------|
| Ознакомительный (публичный npm) | `@dhtmlx/trial-react-spreadsheet` | npmjs.org (публичный) |
| Ознакомительный (приватный npm) | `@dhx/trial-react-spreadsheet` | npm.dhtmlx.com (приватный) |
| Коммерческий | `@dhx/react-spreadsheet` | npm.dhtmlx.com (приватный) |

## Подключение CSS {#css-import}

Подключите таблицу стилей в точке входа вашего приложения или в компоненте:

~~~tsx
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

Для коммерческой версии:

~~~tsx
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

## TypeScript {#typescript}

Определения типов TypeScript включены в пакет. Дополнительный пакет `@types/` не требуется.

## Следующие шаги {#next-steps}

- [Быстрый старт](react/quick-start.md) - создание первого приложения с таблицей шаг за шагом
