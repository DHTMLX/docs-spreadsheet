---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "공식 선언형 래퍼를 사용하여 React에서 DHTMLX Spreadsheet를 설치, 구성 및 사용하는 방법."
---

# React Spreadsheet {#react-spreadsheet}

DHTMLX Spreadsheet의 공식 선언형 React 래퍼입니다. 컴포넌트 기반 API로 스프레드시트 UI를 구축하십시오. 데이터를 props로 전달하고, 이벤트 콜백을 통해 변경 사항에 응답하며, 필요한 경우 ref를 통해 기본 위젯에 접근할 수 있습니다.

## 시작하기 {#get-started}

- [설치](react/installation.md) - 평가판 또는 상용 패키지 설치
- [빠른 시작](react/quick-start.md) - 단계별로 첫 번째 스프레드시트 앱 만들기
- [온라인 예시](https://dhtmlx.com/react/demos/spreadsheet/) - React Spreadsheet 기능의 라이브 데모 확인

:::info
완전한 동작 예시는 [GitHub 데모 저장소](https://github.com/DHTMLX/react-spreadsheet-examples)를 참조하십시오.
:::

## API 참조 {#api-reference}

- [Props 레퍼런스](react/props.md) - 타입과 기본값이 포함된 모든 컴포넌트 props
- [Events 레퍼런스](react/events.md) - 카테고리별로 분류된 이벤트 콜백 props
- [Types 레퍼런스](react/types.md) - TypeScript 인터페이스, 열거형, 타입 별칭

## 데이터 모델 {#data-model}

[`sheets`](react/props.md#data-props) prop은 모든 스프레드시트 데이터의 단일 정보 소스입니다. 각 시트는 셀, 행/열 구성, 병합 범위, 고정 창, 필터, 정렬을 포함하는 [`SheetData`](react/types.md#sheetdata) 객체입니다.

## 상태 관리 {#state-management}

스프레드시트 데이터와 애플리케이션 상태를 동기화하는 방법을 알아보십시오.

- [상태 관리 기초](react/state/state-management-basics.md) - 제어된 props, 이벤트 콜백, ref 탈출구
- [Redux toolkit](react/state/redux-toolkit.md) - 단계별 통합 가이드

## 프레임워크 통합 {#framework-integrations}

- [Next.js](react/nextjs.md) - Next.js App Router에서 React Spreadsheet 사용

## 테마 및 로컬라이제이션 {#theming-and-localization}

- [테마](react/themes.md) - 내장 테마 및 사용자 정의 CSS 재정의
- [로컬라이제이션](react/localization.md) - UI 번역 및 숫자/날짜 형식 지정
