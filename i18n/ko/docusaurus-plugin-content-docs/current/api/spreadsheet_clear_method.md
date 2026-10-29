---
sidebar_label: clear()
title: clear 메서드
description: DHTMLX Spreadsheet에서 clear() 메서드로 모든 데이터를 제거합니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 스프레드시트를 초기화합니다
spreadsheet.clear();
~~~

**변경 로그:** v4.2에서 추가됨

**관련 문서:** [스프레드시트 초기화](working_with_ssheet.md#clearing-spreadsheet)

**관련 샘플:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
