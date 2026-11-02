---
sidebar_label: 단축키 목록
title: 단축키
description: 편집, 서식 지정, 탐색, 선택, 검색, 시트·행·열 작업, 팝업과 대화 상자에 사용하는 DHTMLX Spreadsheet 단축키입니다.
---

# 단축키 목록 {#hot-keys-list}

다음은 DHTMLX Spreadsheet 사용 시 활용할 수 있는 단축키 목록입니다.

:::note
셀 단축키는 포커스가 셀 또는 수식 입력줄에 있을 때 작동합니다. 서식 지정, 실행 취소, 검색, 링크, 시트 추가 단축키는 포커스가 툴바에 있을 때도 작동합니다. 포커스가 툴바, 메뉴 바 또는 시트 탭에 있을 때는 화살표 키, **Home**, **End**, **Enter**, **Space**가 해당 바 내에서 작동합니다([포커스 이동](#moving-the-focus) 참조).

[읽기 전용 모드](api/spreadsheet_readonly_config.md)에서는 탐색, 선택, 복사, 검색 단축키가 작동합니다. **Ctrl (Cmd) + Shift + 9**, **Ctrl (Cmd) + Shift + 0**, **Shift + F11**을 포함하여 시트를 변경하는 단축키는 거부되며, 스크린 리더는 "The sheet is read-only"를 안내합니다. 컨텍스트 메뉴는 사용할 수 없으므로 **Shift + F10**과 Menu 키는 작동하지 않습니다.

키보드 탐색이 스크린 리더와 함께 작동하는 방식은 [접근성](accessibility.md#keyboard-navigation) 가이드를 참조하십시오.
:::

## 편집 {#editing}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>셀의 편집기를 활성화합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Enter</b></td>
            <td>셀 편집을 중지하고 해당 셀에 선택 상태를 유지합니다</td>
        </tr>
        <tr>
            <td><b>F2</b></td>
            <td>선택된 셀에서 편집기를 엽니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>변경 사항을 저장하지 않고 셀 편집기를 닫습니다</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Enter</b></td>
            <td>활성 셀의 링크를 새 탭에서 엽니다</td>
        </tr>
    </tbody>
</table>

## 셀 서식 지정 {#formatting-cells}

<table> 
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + C</b></td>
            <td>셀의 값을 복사합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + V</b></td>
            <td>선택된 내용을 대체하여 셀에 값을 붙여넣습니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + X</b></td>
            <td>셀의 값을 잘라냅니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Z</b></td>
            <td>시트에서 마지막 작업을 실행 취소합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Y</b></td>
            <td>시트에서 마지막 작업을 반복합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Z</b></td>
            <td>시트에서 마지막 작업을 반복합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + B</b></td>
            <td>셀의 값을 굵게 표시합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + I</b></td>
            <td>셀의 값을 기울임꼴로 표시합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + U</b></td>
            <td>셀의 값에 밑줄을 표시합니다</td>
        </tr>
        <tr>
            <td><b>Alt + Shift + 5 (Cmd + Shift + X)</b></td>
            <td>셀의 값에 취소선을 표시합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + E</b></td>
            <td>셀의 값을 가로 방향으로 가운데 정렬합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + R</b></td>
            <td>셀의 값을 오른쪽 정렬합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + L</b></td>
            <td>셀의 값을 왼쪽 정렬합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + K</b></td>
            <td>셀에 하이퍼링크를 삽입합니다</td>
        </tr>
        <tr>
            <td><b>Delete</b></td>
            <td>적용된 스타일을 유지한 채 셀 내용을 삭제합니다</td>
        </tr>
        <tr>
            <td><b>Backspace</b></td>
            <td>적용된 스타일을 유지한 채 셀 내용을 삭제합니다</td>
        </tr>
    </tbody>
</table>

## 탐색 {#navigation}

{{note 탐색은 셀이 편집 중이지 않은 경우에만 작동합니다.}}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>셀의 편집기를 활성화합니다. 편집기를 닫고 선택을 한 셀 아래로 이동합니다(열 방향). 셀 범위가 선택된 경우 범위 내에서 한 셀 아래로 이동합니다.</td>
        </tr>
        <tr>
            <td><b>Shift + Enter</b></td>
            <td>선택을 한 셀 위로 이동합니다(열 방향). 셀 범위가 선택된 경우 범위 내에서 한 셀 위로 이동합니다.</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>선택을 한 셀 오른쪽으로 이동합니다(행 방향). 가장 오른쪽 셀에서는 같은 행의 첫 번째 셀로 이동합니다. 셀 범위가 선택된 경우 범위 내에서 한 셀 오른쪽으로 이동합니다. 시트의 마지막 셀에서는 편집한 값을 저장하고 포커스를 셀 밖의 페이지 다음 부분(예: 시트 탭)으로 이동합니다.</td>
        </tr>
        <tr>
            <td><b>Tab + Shift</b></td>
            <td>선택을 한 셀 왼쪽으로 이동합니다(행 방향). 가장 왼쪽 셀에서는 같은 행의 마지막 셀로 이동합니다. 셀 범위가 선택된 경우 범위 내에서 한 셀 왼쪽으로 이동합니다. 시트의 첫 번째 셀에서는 편집한 값을 저장하고 포커스를 셀 밖의 페이지 이전 부분(예: 수식 입력줄)으로 이동합니다.</td>
        </tr>
        <tr>
            <td><b>화살표 키</b></td>
            <td>시트의 셀 간 탐색을 제공합니다. 첫 번째와 마지막 표시 행 및 열에서 멈춥니다. 셀 범위가 선택된 경우 시트의 가장자리에서 화살표 키를 누르면 범위가 활성 셀로 축소됩니다</td>
        </tr>
        <tr>
            <td><b>Home</b></td>
            <td>선택을 행의 첫 번째 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>End</b></td>
            <td>선택을 행의 마지막 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 왼쪽 화살표 키</b></td>
            <td>선택을 행의 첫 번째 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 오른쪽 화살표 키</b></td>
            <td>선택을 행의 마지막 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 위쪽 화살표 키</b></td>
            <td>선택을 열의 첫 번째 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 아래쪽 화살표 키</b></td>
            <td>선택을 열의 마지막 표시 셀로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Home</b></td>
            <td>선택을 시트의 시작 부분(왼쪽 상단 셀)으로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + End</b></td>
            <td>선택을 시트의 끝 부분(오른쪽 하단 셀)으로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Shift + 위쪽/아래쪽/왼쪽/오른쪽 화살표 키</b></td>
            <td>선택된 셀에서 선택 영역을 확장합니다</td>
        </tr>
        <tr>
            <td><b>Page Up</b></td>
            <td>시트를 한 화면 위로 스크롤합니다</td>
        </tr>
        <tr>
            <td><b>Page Down</b></td>
            <td>시트를 한 화면 아래로 스크롤합니다</td>
        </tr>
    </tbody>
</table>

## 포커스 이동 {#moving-the-focus}

툴바, 메뉴 바, 시트 탭은 각각 하나의 탭 정지점입니다. <b>Tab</b>은 포커스를 바 안으로 이동하거나 바 밖으로 이동하며, 포커스는 마지막으로 사용한 컨트롤에 놓입니다.

<table>
    <tbody>
        <tr>
            <td><b>Ctrl + F6</b></td>
            <td>포커스를 Spreadsheet의 다음 부분으로 이동합니다. 순서는 메뉴, 툴바, 시트(활성 셀), 시트 탭이며, 이후 다시 메뉴로 돌아갑니다. 수식 입력줄과 숨겨진 부분은 건너뜁니다. 먼저 편집 중인 셀의 값을 저장합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl + Shift + F6</b></td>
            <td>포커스를 Spreadsheet의 이전 부분으로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Left Arrow/Right Arrow Key</b></td>
            <td>포커스를 툴바, 메뉴 바 또는 시트 탭의 이전/다음 컨트롤로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>포커스를 바의 첫 번째/마지막 컨트롤로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Enter/Space</b></td>
            <td>포커스된 컨트롤을 누릅니다. 명령을 실행하거나, 드롭다운을 열거나, 포커스된 탭의 시트로 전환합니다</td>
        </tr>
        <tr>
            <td><b>Down Arrow Key</b></td>
            <td>포커스된 컨트롤의 드롭다운을 열고 포커스를 첫 번째 항목으로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>열린 드롭다운 또는 메뉴의 항목 간에 포커스를 이동합니다</td>
        </tr>
        <tr>
            <td><b>Right Arrow Key</b></td>
            <td>포커스된 메뉴 항목의 하위 메뉴를 엽니다</td>
        </tr>
        <tr>
            <td><b>Left Arrow Key</b></td>
            <td>하위 메뉴를 닫습니다. 드롭다운의 첫 번째 수준에서는 드롭다운을 닫고 포커스를 해당 컨트롤로 되돌립니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>드롭다운 또는 메뉴를 닫고 포커스를 이를 연 컨트롤로 되돌립니다. 툴바 컨트롤의 툴팁을 닫습니다. <b>Esc</b>를 누르지 않으면 포인터가 툴팁 위에 있는 동안 툴팁이 열린 상태로 유지됩니다</td>
        </tr>
        <tr>
            <td><b>Shift + F10 or Menu key</b></td>
            <td>활성 셀 또는 포커스된 시트 탭의 컨텍스트 메뉴를 열고 포커스를 메뉴로 이동합니다. <b>Ctrl (Cmd) + Space</b>를 누른 후에는 셀의 컨텍스트 메뉴에 열에 대한 명령이 표시됩니다. <b>Esc</b>는 컨텍스트 메뉴를 닫고 포커스를 셀로 되돌립니다</td>
        </tr>
    </tbody>
</table>

## 검색 {#search}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + F</b></td>
            <td>스프레드시트 오른쪽 상단에 검색 상자를 엽니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + G</b></td>
            <td>다음 검색 결과를 강조 표시합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + G</b></td>
            <td>이전 검색 결과를 강조 표시합니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>검색 상자를 닫고 포커스를 활성 셀로 되돌립니다</td>
        </tr>
    </tbody>
</table>

## 선택 {#selection}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + A</b></td>
            <td>시트의 모든 셀을 선택합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + 왼쪽 클릭</b></td>
            <td>여러 셀을 분산 선택할 수 있습니다</td>
        </tr>
        <tr>
            <td><b>왼쪽 Shift + 왼쪽 클릭</b></td>
            <td>선택된 셀을 범위의 첫 번째 셀, 클릭한 셀을 범위의 마지막 셀로 하여 셀 범위를 선택할 수 있습니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 왼쪽 클릭</b></td>
            <td>여러 분산된 셀 범위를 선택할 수 있습니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Space</b></td>
            <td>열 전체를 선택합니다</td>
        </tr>
        <tr>
            <td><b>Shift + Space</b></td>
            <td>행 전체를 선택합니다</td>
        </tr>
    </tbody>
</table>

## 시트 작업 {#work-with-sheets}

<table>
    <tbody>
        <tr>
            <td><b>Shift + F11</b></td>
            <td>스프레드시트에 새 시트를 추가합니다</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Up</b></td>
            <td>다음 시트로 전환합니다. 마지막 시트에서는 첫 번째 시트로 전환합니다</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Arrow Down</b></td>
            <td>이전 시트로 전환합니다. 첫 번째 시트에서는 마지막 시트로 전환합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Down</b></td>
            <td>다음 시트로 전환합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Up</b></td>
            <td>이전 시트로 전환합니다</td>
        </tr>
    </tbody>
</table>

## 행 및 열 작업 {#work-with-rows-and-columns}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 9</b></td>
            <td>선택한 범위 내의 숨겨진 행을 표시합니다</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 0</b></td>
            <td>선택한 범위 내의 숨겨진 열을 표시합니다</td>
        </tr>
    </tbody>
</table>

## 툴바 팝업 {#toolbar-popups}

아래 키는 툴바의 *Text color*, *Background color*, *Border* 컨트롤 팝업에서 작동합니다. 팝업은 열릴 때 포커스를 받습니다.

<table>
    <tbody>
        <tr>
            <td><b>Arrow keys</b></td>
            <td>팔레트의 색상 간 또는 Border 팝업의 컨트롤 간에 포커스를 이동합니다</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>포커스를 팔레트의 첫 번째/마지막 색상으로 이동합니다</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>포커스된 색상 또는 테두리를 적용합니다. 텍스트 색상 또는 배경색을 적용한 후 포커스는 활성 셀로 돌아갑니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>사용자 지정 색상 모드에서 팔레트로 돌아갑니다. Border 팝업 위에 열린 색상 또는 스타일 팝업에서는 해당 팝업을 닫고 포커스를 Border 팝업의 버튼으로 되돌립니다. 그 외에는 팝업을 닫고 포커스를 해당 툴바 컨트롤로 되돌립니다</td>
        </tr>
        <tr>
            <td><b>Tab/Tab + Shift</b></td>
            <td>팝업을 닫고 포커스를 해당 툴바 컨트롤로 되돌립니다. Border 팝업과 그 위에 열린 팝업에서는 모두 닫고 포커스를 Border 컨트롤로 되돌립니다. 사용자 지정 색상 모드에서는 색상 선택기의 컨트롤 간에 포커스를 이동합니다</td>
        </tr>
    </tbody>
</table>

## 목록 편집기 {#list-editor}

아래 키는 [값 목록](api/spreadsheet_setvalidation_method.md)이 있는 셀의 편집기에서 작동합니다.

<table>
    <tbody>
        <tr>
            <td><b>Up Arrow/Down Arrow Key</b></td>
            <td>값 목록을 따라 이동합니다</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>값을 선택하고 편집기를 닫습니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>변경 사항을 저장하지 않고 편집기를 닫습니다</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>값을 저장하고 선택을 한 셀 오른쪽으로 이동합니다</td>
        </tr>
    </tbody>
</table>

## 필터 및 대화 상자 {#filter-and-dialogs}

아래 키는 [필터](filtering_data.md#opening-a-filter-with-the-keyboard) 팝업과 [열 너비 및 행 높이](work_with_rows_cols.md#setting-column-width-and-row-height) 대화 상자에서 작동합니다.

<table>
    <tbody>
        <tr>
            <td><b>Esc</b></td>
            <td>필터 팝업을 닫고 포커스를 셀로 되돌립니다</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>열 너비 및 행 높이 대화 상자에서 크기를 적용합니다</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>변경 없이 열 너비 및 행 높이 대화 상자를 닫습니다</td>
        </tr>
    </tbody>
</table>
