---
sidebar_label: readonly
title: readonly 설정
description: DHTMLX Spreadsheet에서 readonly 속성으로 읽기 전용 모드를 켭니다. 데이터 변경은 차단하지만 키보드 탐색, 선택, 복사 및 검색은 유지됩니다.
---

# readonly

### 설명 {#description}

@short: 선택 사항. 읽기 전용 모드를 활성화하거나 비활성화합니다

### 사용법 {#usage}

~~~jsx
readonly?: boolean;
~~~

### 기본값 {#default-config}

~~~jsx
readonly: false
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // 다른 설정 매개변수
});
~~~

### 상세 정보 {#details}

읽기 전용 모드에서는 툴바, 메뉴, 수식 입력줄이 숨겨지고 컨텍스트 메뉴와 열 메뉴 아이콘을 사용할 수 없습니다. 시트 탭은 유지되지만 시트 추가 버튼, 시트 컨텍스트 메뉴, 더블 클릭으로 이름 바꾸기는 제공되지 않습니다.

사용자는 여전히 데이터를 읽고 복사할 수 있습니다:

- 데이터가 로드된 후 A1 셀이 활성 상태가 됩니다
- 키보드로 셀을 탐색하고 마우스로 선택할 수 있으며, 이러한 동작 시 선택 이벤트가 발생합니다
- `Ctrl (Cmd) + C`로 셀을 복사하고 `Ctrl (Cmd) + F`로 검색할 수 있습니다
- 시트 탭과 키보드로 시트를 전환할 수 있습니다
- 셀의 링크를 열 수 있지만, 링크 팝업에서 링크를 편집하고 제거하는 버튼은 비활성화됩니다

데이터 변경은 거부됩니다:

- 입력, 편집 키, 잘라내기와 붙여넣기, 실행 취소와 다시 실행, 셀 서식 지정·링크 삽입·시트 추가·숨겨진 행과 열 표시 단축키는 무시되며, 스크린 리더는 "The sheet is read-only"라고 안내합니다
- [`setValue()`](api/spreadsheet_setvalue_method.md), [`setStyle()`](api/spreadsheet_setstyle_method.md), [`deleteRow()`](api/spreadsheet_deleterow_method.md) 등 데이터를 편집하는 메서드와 [`startEdit()`](api/spreadsheet_startedit_method.md) 메서드는 무시됩니다. [`parse()`](api/spreadsheet_parse_method.md) 및 [`load()`](api/spreadsheet_load_method.md) 메서드는 계속 데이터를 로드합니다
- 채우기 핸들이 숨겨집니다
- 열과 행의 경계를 드래그하여 크기를 조정할 수 없으며, 열 경계를 더블 클릭해도 열 너비가 데이터에 맞춰지지 않습니다

키보드 탐색과 선택도 끄려면 [`selection`](api/spreadsheet_selection_config.md) 옵션을 `false`로 설정하세요. 이 경우 Spreadsheet에는 활성 셀이 없으며, 마우스, 키보드 또는 API로 셀을 선택할 수 없습니다:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  selection: false,
  // other config parameters
});
~~~

**변경 로그:** 읽기 전용 모드에서의 키보드 탐색, 선택, 복사 및 검색이 v6.0.4에서 추가됨

**관련 문서:**
- [접근성: 읽기 전용 설정](accessibility.md#read-only-setup)
- [구성](configuration.md#read-only-mode)
- [커스터마이징](customization.md#custom-read-only-mode)

**관련 샘플:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)


