---
sidebar_label: undo()
title: undo 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 undo 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# undo()

### 설명 {#description}

@short: 마지막 작업을 되돌립니다

### 사용법 {#usage}

~~~jsx
undo(): void;
~~~

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 한 단계 뒤로 되돌립니다
spreadsheet.undo();
~~~
