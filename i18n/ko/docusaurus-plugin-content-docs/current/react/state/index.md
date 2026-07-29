---
sidebar_label: "데이터 & 상태"
title: "데이터 & 상태 관리"
description: "React 상태 또는 상태 관리 라이브러리에서 DHTMLX Spreadsheet 데이터를 관리하기 위한 패턴입니다."
---

# 데이터 & 상태 관리 {#data--state-management}

이 섹션에서는 기본 React `useState`부터 상태 관리 라이브러리까지, 스프레드시트 데이터를 애플리케이션 상태와 동기화하여 관리하는 패턴을 다룹니다.

## 시작하기 {#start-here}

- [상태 관리 기초](react/state/state-management-basics.md) - 핵심 패턴: 제어 props, 이벤트 콜백, ref 탈출구, 그리고 성능 팁

## 상태 라이브러리 가이드 {#state-library-guides}

- [Redux Toolkit](react/state/redux-toolkit.md) - Redux Toolkit을 사용한 단계별 연동 방법

## 핵심 개념 {#key-concept}

`sheets` prop은 모든 스프레드시트 데이터의 **단일 정보 출처(single source of truth)**입니다. [`SheetData`](react/types.md#sheetdata) 객체 배열을 전달하면 래퍼가 데이터를 현재 위젯 상태와 비교하여 변경 사항만 적용합니다. React가 변경 사항을 효율적으로 감지할 수 있도록 불변 업데이트(spread 연산자, 함수형 `setState` updater)를 사용하십시오.
