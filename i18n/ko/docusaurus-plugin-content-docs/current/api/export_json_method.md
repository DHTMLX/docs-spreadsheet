---
sidebar_label: json()
title: json 내보내기 메서드
description: DHTMLX Spreadsheet에서 export.json() 메서드로 데이터를 JSON 파일로 내보냅니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**변경 로그:** v4.3에서 추가됨

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md)

**관련 샘플:** [Spreadsheet. JSON 내보내기/가져오기](https://snippet.dhtmlx.com/e3xct53l)
