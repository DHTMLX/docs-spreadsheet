---
sidebar_label: json()
title: json 내보내기 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 json 내보내기 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# json()

### 설명 {#description}

@short: 스프레드시트의 데이터를 JSON 파일로 내보냅니다

### 사용법 {#usage}

~~~jsx
json(): void;
~~~

### 예제 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**변경 로그:** v4.3에서 추가되었습니다

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md)

**관련 샘플:** [Spreadsheet. JSON 내보내기/가져오기](https://snippet.dhtmlx.com/e3xct53l)
