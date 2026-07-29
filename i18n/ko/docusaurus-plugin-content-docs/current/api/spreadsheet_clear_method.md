---
sidebar_label: clear()
title: clear 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 문서에서 clear 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# clear()

### 설명 {#description}

@short: 스프레드시트를 초기화합니다

### 사용법 {#usage}

~~~jsx
clear(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 스프레드시트를 초기화합니다
spreadsheet.clear();
~~~

**변경 로그:** v4.2에서 추가됨

**관련 문서:** [스프레드시트 초기화](working_with_ssheet.md#clearing-spreadsheet)

**관련 샘플:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
