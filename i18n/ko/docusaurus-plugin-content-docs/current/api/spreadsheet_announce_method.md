---
sidebar_label: announce()
title: announce 메서드
description: DHTMLX Spreadsheet에서 announce() 메서드로 스크린 리더 사용자에게 상태 메시지를 전달할 수 있습니다. 예를 들어 사용자 정의 툴바 또는 메뉴 명령의 실행 결과를 알릴 때 사용합니다.
---

# announce()

### 설명 {#description}

@short: 스크린 리더 사용자에게 메시지를 알립니다

### 사용법 {#usage}

~~~jsx
announce(message: string): void;
~~~

### 매개변수 {#parameters}

- `message` - (필수) 알릴 텍스트. 빈 문자열을 전달하면 메시지가 지워집니다

### 예제 {#example}

아래 예제에서는 사용자 정의 메뉴 명령이 선택한 범위의 빈 셀 개수를 세고 그 결과를 알립니다.

~~~jsx {18}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.menu.data.add({
    id: "count-empty",
    value: "Count empty cells"
});

spreadsheet.menu.events.on("click", function (id) {
    if (id === "count-empty") {
        let count = 0;
        spreadsheet.eachCell(function (cell, value) {
            if (value === "" || value === undefined || value === null) count++;
        }, spreadsheet.selection.getSelectedCell());
        spreadsheet.announce(count + " empty cells in the selection");
    }
});
~~~

### 상세 설명 {#details}

사용자 정의 툴바 또는 메뉴 명령처럼 화면에 표시되는 요소가 따로 없는 동작의 결과를 스크린 리더 사용자에게 알려야 할 때 이 메서드를 사용합니다.

메시지는 그리드 요소 바로 뒤에 있는 시각적으로 숨겨진 라이브 영역(`role="status"`, `aria-live="polite"`, `aria-atomic="true"`)으로 전달됩니다. 스크린 리더는 현재 읽고 있는 음성이 끝난 뒤에 이 메시지를 읽으며, 키보드 포커스는 이동하지 않습니다.

Spreadsheet도 같은 영역을 통해 자체 메시지를 알립니다. 선택한 범위, 새로 발생한 수식 오류와 잘못된 값, 거부된 편집, 검색 결과, 가져오기와 내보내기의 시작 및 종료, 새 열 너비와 행 높이가 이에 해당합니다([상태 알림 목록](accessibility.md#status-announcements) 참조). 이 영역은 한 번에 하나의 메시지만 유지하므로, 나중에 전달된 메시지는 직접 보낸 메시지이든 기본 제공 메시지이든 이전 메시지를 대체합니다.

영역에 현재 들어 있는 텍스트와 같은 텍스트를 전달하면 스크린 리더가 해당 텍스트를 다시 읽습니다.

이 메서드는 [읽기 전용 모드](api/spreadsheet_readonly_config.md)에서도, [선택](api/spreadsheet_selection_config.md) 기능이 꺼져 있는 동안에도 동작합니다. Spreadsheet가 페이지에 연결되기 전이나 `destructor()` 메서드가 호출된 후에는 아무 동작도 하지 않습니다.

**변경 로그:** v6.0.4에서 추가됨

**관련 문서:**
- [상태 알림](accessibility.md#status-announcements)
- [사용자 정의 명령 알리기](accessibility.md#announcing-a-custom-command)
- [메뉴 커스터마이징](customization.md#menu)
