---
sidebar_label: Installation
title: React Spreadsheet 설치
description: "npm을 통해 DHTMLX React Spreadsheet의 평가판 또는 상용 버전을 설치하는 방법."
---

# React Spreadsheet 설치 {#react-spreadsheet-installation}

React Spreadsheet는 세 가지 변형의 npm 패키지로 배포됩니다. 공개 평가판 빌드, 비공개 평가판 빌드, 그리고 상용 버전입니다. 이 페이지에서는 각 변형의 설치 방법, 필수 CSS 스타일시트 가져오기, TypeScript 지원 설정 방법을 설명합니다.

:::info 사전 요구 사항
- [Node.js](https://nodejs.org/en/) (LTS 버전 권장)
- React 18 이상
:::

## 평가판 (공개 npm) {#evaluation-version-public-npm}

평가판 패키지는 추가 구성 없이 공개 npm 레지스트리에서 사용할 수 있습니다. 30일 무료 평가판이 포함되어 있습니다.

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

또는 yarn 사용 시:

~~~bash
yarn add @dhtmlx/trial-react-spreadsheet
~~~

## 평가판 (비공개 npm) {#evaluation-version-private-npm}

평가판은 DHTMLX 비공개 레지스트리에 있습니다. 먼저 프로젝트를 구성하십시오.

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

그런 다음 설치하십시오.

~~~bash
npm install @dhx/trial-react-spreadsheet
~~~

## 상용 버전 (비공개 npm) {#commercial-version-private-npm}

상용 버전은 동일한 비공개 레지스트리를 사용합니다. 자격 증명을 얻으려면 [고객 영역](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses)에서 계정에 로그인하십시오.

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

~~~bash
npm install @dhx/react-spreadsheet
~~~

## 패키지 변형 {#package-variants}

| 변형 | 패키지 이름 | 레지스트리 |
|---------|-------------|----------|
| 평가판 (공개 npm) | `@dhtmlx/trial-react-spreadsheet` | npmjs.org (공개) |
| 평가판 (비공개 npm) | `@dhx/trial-react-spreadsheet` | npm.dhtmlx.com (비공개) |
| 상용 | `@dhx/react-spreadsheet` | npm.dhtmlx.com (비공개) |

## CSS 가져오기 {#css-import}

애플리케이션 진입점 또는 컴포넌트에서 스타일시트를 가져오십시오.

~~~tsx
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

상용 버전의 경우:

~~~tsx
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

## TypeScript {#typescript}

TypeScript 타입 정의가 패키지에 포함되어 있습니다. 별도의 `@types/` 패키지가 필요하지 않습니다.

## 다음 단계 {#next-steps}

- [빠른 시작](react/quick-start.md) - 단계별로 첫 번째 스프레드시트 앱 만들기
