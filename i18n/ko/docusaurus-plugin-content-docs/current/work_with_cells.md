---
sidebar_label: 셀 편집
title: 셀 편집
description: DHTMLX Spreadsheet에서 셀을 편집합니다. 내용 입력, 하이퍼링크 삽입, 드롭다운 목록 사용, 여러 셀 채우기, Excel과 셀 복사 및 셀 잠금을 다룹니다.
---

# 셀 편집 {#editing-cells}

## 셀에 내용 입력 {#entering-content-in-a-cell}

### 수동으로 데이터 입력 {#entering-data-manually}

- 시트에서 원하는 셀을 클릭하세요.
- 텍스트, 숫자, 날짜 또는 시간을 입력하고 **Enter**를 누르세요.

### 수식 입력 {#entering-a-formula}

- 수식 결과를 표시할 셀을 클릭하세요.
- `=` 기호를 입력하세요.
- 수식을 작성하세요. 다음을 사용할 수 있습니다:
    - 상수와 계산 연산자, 예: `=3-2*5+12`
    - 셀 참조와 계산 연산자, 예: `=A1/A2`
    - [내장 함수](functions.md), 예: `=MAX(C46;D46)`
- **Enter**를 누르세요.

:::note
수식에서 소문자는 자동으로 대문자로 변환됩니다.
:::

## 셀에 하이퍼링크 삽입 {#inserting-a-hyperlink-into-a-cell}

### 링크 추가 {#adding-a-link}

셀에 하이퍼링크를 삽입하려면 아래에 설명된 방법 중 하나를 사용하세요.

#### 컨텍스트 메뉴 사용 {#using-context-menu}

- 셀을 마우스 오른쪽 버튼으로 클릭하고 *링크 삽입*을 선택하세요.

![링크 삽입 옵션이 강조 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/link/via_context_menu.png)

- 나타나는 창에서 텍스트와 링크를 입력하고 *저장*을 클릭하세요.

![텍스트 및 링크 입력 필드가 있는 DHTMLX Spreadsheet 링크 삽입 대화 상자](/img/link/popup_window.png)

#### 툴바 버튼 사용 {#using-toolbar-button}

- 셀을 선택하고 툴바에서 **링크 삽입** 버튼을 클릭하세요.

![링크 삽입 버튼이 강조 표시된 DHTMLX Spreadsheet 툴바](/img/link/via_toolbar.png)

- 나타나는 창에서 텍스트와 링크를 입력하고 *저장*을 클릭하세요.

#### 메뉴 사용 {#using-menu}

- 셀을 선택하고 메뉴에서 *삽입 -> 링크 삽입*으로 이동하세요.

![링크 삽입 옵션이 있는 DHTMLX Spreadsheet 삽입 메뉴](/img/link/via_menu.png)

- 나타나는 창에서 텍스트와 링크를 입력하고 *저장*을 클릭하세요.

### 링크 복사 {#copying-a-link}

- 복사할 링크가 포함된 셀을 선택하세요.
- 나타나는 팝업에서 **복사** 아이콘을 클릭하세요.

![복사 아이콘이 강조 표시된 DHTMLX Spreadsheet 링크 팝업](/img/link/copy_link.png)

### 링크 편집 {#editing-a-link}

- 편집할 링크가 포함된 셀을 선택하세요.
- 나타나는 팝업에서 **편집** 아이콘을 클릭하세요.

![편집 아이콘이 강조 표시된 DHTMLX Spreadsheet 링크 팝업](/img/link/edit.png)

### 링크 제거 {#removing-a-link}

- 제거할 링크가 포함된 셀을 선택하세요.
- 나타나는 팝업에서 **링크 제거** 아이콘을 클릭하세요.

![링크 제거 아이콘이 강조 표시된 DHTMLX Spreadsheet 링크 팝업](/img/link/remove_link.png)

## 셀에서 드롭다운 목록 사용 {#using-drop-down-lists-in-cells}

셀에 드롭다운 목록을 만들어 사용자가 목록에서 필요한 항목을 선택할 수 있도록 할 수 있습니다.

### 직접 입력으로 드롭다운 목록 만들기 {#creating-a-drop-down-list-by-typing-it-manually}

- 목록을 만들 셀 또는 셀 범위를 선택하세요.

- 메뉴에서 *데이터 -> 데이터 유효성 검사*로 이동하세요.

- *항목 목록* 기준을 선택하세요.

- 드롭다운 목록에 표시할 항목을 입력하세요.

- **저장** 버튼을 누르세요.

![항목 목록에서 드롭다운 목록을 만드는 DHTMLX Spreadsheet 데이터 유효성 검사 대화 상자](/img/data_validation.gif)

### 범위를 사용하여 드롭다운 목록 만들기 {#creating-a-drop-down-list-by-using-a-range}

- 드롭다운 목록에 표시할 항목을 입력하세요.

- 목록을 만들 셀 또는 셀 범위를 선택하세요.

- 메뉴에서 *데이터 -> 데이터 유효성 검사*로 이동하세요.

- *범위의 목록* 기준을 선택하세요.

- 목록 범위를 선택하세요.

- **저장** 버튼을 누르세요.

![셀 범위에서 드롭다운 목록을 만드는 DHTMLX Spreadsheet 데이터 유효성 검사 대화 상자](/img/data_validation_range.gif)

### 셀에서 유효성 검사 제거 {#removing-validation-from-a-cell}

셀에서 드롭다운 목록 사용을 중단할 수 있습니다. 이를 위해:

- 드롭다운 목록을 제거할 셀 또는 셀 범위를 선택하세요.
- 메뉴에서 *데이터 -> 데이터 유효성 검사*로 이동하세요.
- *유효성 검사 제거* 옵션을 선택하세요.

![데이터 유효성 검사 및 유효성 검사 제거 옵션이 있는 DHTMLX Spreadsheet 데이터 메뉴](/img/remove_validation.png)

## 여러 셀에 동일한 데이터 입력 {#entering-the-same-data-in-several-cells}

**채우기 핸들**을 사용하여 워크시트 셀에 데이터를 자동으로 채울 수 있습니다. 아래 내용을 참고하세요.

### 셀 자동 채우기 {#auto-filling-cells-with-content}

셀에 데이터를 자동으로 채울 수 있습니다. 작동 방식은 다음과 같습니다:

1\. 더 많은 셀을 채우는 데 사용할 데이터가 있는 셀을 선택하세요.

2\. 선택한 셀에 데이터를 입력하세요. 자동 채우기는 여러 가지 방법으로 작동합니다:

- 값 복사

예를 들어 4,4,4,4... 시리즈를 만들려면 첫 번째 셀에만 4를 입력하세요.

- 패턴 따르기
    - 1, 2, 3, 4, 5, ... 시리즈를 만들려면 처음 두 셀에 1과 2를 입력하세요.
    - 1, 3, 5, 7, 9, ... 시리즈를 만들려면 처음 두 셀에 1과 3을 입력하세요.
    - 2, 4, 6, 8, 10, ... 시리즈를 만들려면 처음 두 셀에 2와 4를 입력하세요.
    - 숫자 외에도 패턴에 문자를 사용할 수 있습니다. 예를 들어 1, a, 2, b, 3, a, 4, b, ... 같은 시리즈를 만들려면 처음 네 셀에 1, a, 2, b를 입력하세요.
    - 텍스트 끝의 숫자를 이어가려면 처음 값을 입력하세요. 예를 들어 item1, item2, item3, ... 시리즈를 만들려면 처음 두 셀에 item1과 item2를 입력하세요.
    - 날짜 시리즈를 만들려면 첫 번째 셀에 날짜를 입력하세요. 이후 각 셀은 다음 날짜로 채워집니다.
- 텍스트 반복

예를 들어 North, South, North, South, ... 시리즈를 만들려면 처음 두 셀에 North와 South를 입력하세요. *텍스트* 형식의 셀에 있는 숫자도 같은 방식으로 반복됩니다.

3\. **채우기 핸들**을 드래그하세요.

![셀 데이터를 복제하기 위해 채우기 핸들을 드래그하는 DHTMLX Spreadsheet 자동 채우기](/img/autofill.gif)

## Excel과 셀 복사 {#copying-cells-to-and-from-excel}

**Ctrl (Cmd) + C**로 셀을 복사하고 **Ctrl (Cmd) + V**로 붙여넣을 수 있습니다. Spreadsheet 내에서, 그리고 Spreadsheet와 Microsoft Excel 간에 사용할 수 있습니다:

- Spreadsheet 내에서는 셀이 값, 수식, 스타일, 숫자 형식, 링크를 유지합니다. 수식의 셀 참조는 새 위치에 맞게 이동합니다
- Excel에서는 붙여넣은 셀이 값(수식이 아닌 수식의 결과), 스타일(글꼴 크기 포함), 병합된 셀, 링크를 가집니다. 필터로 숨겨진 행은 건너뜁니다
- Excel에서 복사한 셀을 Spreadsheet에 붙여넣으면 값, 스타일(글꼴 크기 포함), 숫자 형식, 병합된 셀, 링크가 유지됩니다

## 셀 잠금 {#locking-cells}

셀을 잠가 값이 변경되지 않도록 보호할 수 있습니다. 셀을 잠그면 오른쪽 상단 모서리에 회색 "열쇠" 아이콘이 표시됩니다. 잠긴 셀은 편집 시도에 응답하지 않습니다. 스크린 리더는 거부된 편집을 안내합니다. 단일 셀에는 "The cell is locked", 선택한 범위에 잠긴 셀이 포함된 경우에는 "Locked cells were not changed"라고 안내합니다.

![오른쪽 상단 모서리에 회색 열쇠 아이콘으로 표시된 DHTMLX Spreadsheet 잠긴 셀](/img/lockedcells.png)

셀을 잠그거나 잠금 해제하려면 아래에 설명된 방법 중 하나를 사용하세요:

### 툴바 버튼으로 셀 잠금 {#lock-cells-via-the-toolbar-button}

- 잠그거나 잠금 해제할 셀을 선택하세요 (인접할 필요는 없습니다).
- 툴바에서 **셀 잠금** 버튼을 클릭하세요.

![셀 잠금 버튼이 강조 표시된 DHTMLX Spreadsheet 툴바](/img/lock.png)

### 컨텍스트 메뉴로 셀 잠금 {#lock-cells-via-the-context-menu}

- 잠그거나 잠금 해제할 셀 또는 셀 범위를 마우스 오른쪽 버튼으로 클릭하세요.
- 나타나는 컨텍스트 메뉴에서 셀 잠금/잠금 해제 옵션을 선택하세요.

![셀 잠금/잠금 해제 옵션이 강조 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/unlock.png)
