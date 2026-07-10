---
sidebar_label: redo()
title: redo 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 redo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# redo()

### 설명 {#description}

@short: 취소된 작업을 다시 적용합니다

### 사용법 {#usage}

~~~jsx
redo(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 취소된 작업을 다시 적용합니다
spreadsheet.redo();
~~~
