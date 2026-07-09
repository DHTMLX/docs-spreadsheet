---
sidebar_label: 커스터마이징
title: 커스터마이징
description: DHTMLX JavaScript Spreadsheet 라이브러리의 커스터마이징에 대해 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX Spreadsheet의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 커스터마이징 {#customization}

툴바, 메뉴, 컨텍스트 메뉴의 모양, 구조, 기능을 커스터마이징하고 Spreadsheet에 대한 사용자 정의 읽기 전용 동작을 정의할 수 있습니다.

## 기본 아이콘과 사용자 정의 아이콘 {#default-and-custom-icons}

DHTMLX Spreadsheet는 기본적으로 [Material Design](https://pictogrammers.com/library/mdi/?welcome) 기반 아이콘을 사용합니다. 그러나 필요한 경우 다른 아이콘 폰트 팩을 사용할 수 있습니다. 이를 위해 원하는 아이콘 폰트를 페이지에 포함하고 스프레드시트의 모든 부분(툴바 컨트롤, 메뉴 및 컨텍스트 메뉴 항목)에 아이콘을 적용합니다.

예를 들어, DHTMLX Spreadsheet 소스 파일 다음에 [CDN 링크](https://docs.fontawesome.com/web/setup/get-started)를 포함하여 [Font Awesome](https://fontawesome.com/) 아이콘 팩을 사용할 수 있습니다:

~~~html
<script type="text/javascript" src="../../codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="../../codebase/spreadsheet.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

그런 다음 툴바, 메뉴 또는 컨텍스트 메뉴의 컨트롤 파라미터 객체에서 `icon` 속성 값으로 아이콘 이름을 사용할 수 있습니다. 자세한 내용은 아래를 참조하세요.

## 컨트롤 유형 및 작업 {#controls-types-and-operations}

### 유형 {#types}

`button`, `menuItem`, `separator`, `spacer` 유형의 컨트롤을 추가할 수 있습니다.

`button` 객체에는 다음 속성이 있습니다:

- `type` - 버튼 유형, "button"으로 설정
- `id` - 버튼의 id
- `icon` - 사용 중인 아이콘 폰트의 아이콘 이름
- `hotkey` - 버튼의 단축키 이름
- `value` - 버튼의 값
- `tooltip` - 버튼의 툴팁
- `twoState` - 버튼을 두 가지 상태로 사용할 수 있는지 여부를 정의하는 플래그
- `active` - 버튼 상태: `true` - 활성, `false` - 비활성

`menuItem` 객체에는 다음 속성이 있습니다:

- `type` - 메뉴 항목 유형, "menuItem"으로 설정
- `id` - 메뉴 항목의 id
- `icon` - 사용 중인 아이콘 폰트의 아이콘 이름
- `hotkey` - 메뉴 항목의 단축키 이름
- `value` - 메뉴 항목의 값
- `childs` - 자식 컨트롤 배열 (모든 자식은 `menuItem` 유형이어야 함)

**toolbar**, **menu**, **context menu**의 데이터 컬렉션 API를 통해 컨트롤을 관리할 수 있습니다: 사용자 정의 컨트롤 추가, 불필요한 컨트롤 제거, 또는 아이콘 변경 등의 업데이트를 수행할 수 있습니다.

### 컨트롤 추가 {#adding-controls}

새 컨트롤을 추가하려면 `spreadsheet.{name}.data.add()` 메서드를 사용합니다. 다음 파라미터를 받습니다:

- `config` - (*object*) 컨트롤 구성이 담긴 객체
- `index` - (*number*) 컨트롤을 배치할 위치의 인덱스
- `parent` - (*string*) 부모 컨트롤의 id (`menuItem` 유형에 해당)

버튼의 경우:

~~~jsx 
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "button", // "menuItem"
    id: "button-id",
    tooltip: "Some tooltip",
    icon: "icon-name"
}, 2);
~~~

menuItem의 경우:

~~~jsx
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "menuitem-id", 
    value: "Some value",
}, -1, "parent-id");
~~~

### 컨트롤 업데이트 {#updating-controls}

`spreadsheet.{name}.data.update()` 메서드를 통해 컨트롤의 아이콘 및 기타 구성 옵션을 변경할 수 있습니다. 두 가지 파라미터를 받습니다:

- 컨트롤의 id
- 컨트롤의 새 구성이 담긴 객체

~~~jsx
// spreadsheet.menu.data.update / spreadsheet.contextMenu.data.update
spreadsheet.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

### 컨트롤 삭제 {#deleting-controls}

컨트롤을 제거하려면 `spreadsheet.{name}.data.remove()` 메서드를 사용합니다. 제거할 컨트롤의 id를 메서드에 전달합니다:

~~~jsx
// spreadsheet.menu.data.remove / spreadsheet.contextMenu.data.remove
spreadsheet.toolbar.data.remove("control-id");
~~~

## 툴바 {#toolbar}

### 기본 컨트롤 {#default-controls}

[기본 툴바](/#toolbar)에는 다음 컨트롤 블록이 포함됩니다:

- **실행 취소** 블록
  - *실행 취소* 버튼 (id: "undo")
  - *다시 실행* 버튼 (id: "redo")
- **색상** 블록
  - *텍스트 색상* 버튼 (id: "color")
  - *배경 색상* 버튼 (id: "background")
- **글꼴** 블록
  - *글꼴 크기* 콤보박스 (id: "font-size")
- **꾸밈** 블록
  - *굵게* 버튼 (id: "font-weight-bold")
  - *기울임꼴* 버튼 (id: "font-style-italic")
  - *밑줄* 버튼 (id: "text-decoration-underline")
  - *취소선* 버튼 (id: "text-decoration-line-through")
- **정렬** 블록
  - **가로 정렬** 서브 블록
    - *왼쪽* 버튼 (id: "halign-left")
    - *가운데* 버튼 (id: "halign-center")
    - *오른쪽* 버튼 (id: "halign-right")
  - **세로 정렬** 서브 블록
    - *위* 버튼 (id: "valign-top")
    - *가운데* 버튼 (id: "valign-center")
    - *아래* 버튼 (id: "valign-bottom")
  - **텍스트 줄 바꿈** 서브 블록
    - *잘라내기* 버튼 (id: "multiline-clip")
    - *줄 바꿈* 버튼 (id: "multiline-wrap")
- **셀** 블록
  - *테두리* 버튼 (id: "border")
  - *병합/병합 해제* 버튼 (id: "merge")
- **형식** 블록
  - *형식* menuItem (id: "format")
- **작업** 블록
  - *필터* 버튼 (id: "filter")
  - *링크 삽입* 버튼 (id: "link")

다음 블록도 추가할 수 있습니다:

- **잠금** 블록
    - *잠금* 버튼 (id: "lock")
- **지우기** 블록
  - *지우기 그룹* menuItem (id: "clear-group")
    - *값 지우기* menuItem (id: "clear-value")
    - *스타일 지우기* menuItem (id: "clear-styles")
    - *모두 지우기* menuItem (id: "clear-all")
- **행** 블록
  - *행 추가* 버튼 (id: "add-row")
  - *행 제거* 버튼 (id: "remove-row")
  - *행 고정 해제* 버튼 (id: "unfreeze-rows")
  - *[id]행까지 고정* (id: "freeze-rows")
  - *행 숨기기 [id]* (id: "hide-rows")
- **열** 블록
  - *열 추가* 버튼 (id: "add-col")
  - *열 제거* 버튼 (id: "remove-col")
  - *열 고정 해제* 버튼 (id: "unfreeze-cols")
  - *[id]열까지 고정* (id: "freeze-cols")
  - *열 숨기기 [id]* (id: "hide-cols")
- **파일** 블록
  - *내보내기* menuItem (id: "export")
    - *"Microsoft Excel(.xlsx)"* menuItem (id: "export-xlsx")
  - *가져오기* menuItem (id: "import")
    - *"Microsoft Excel(.xlsx)"* menuItem (id: "import-xlsx")
- **도움말** 블록
  - *도움말* 버튼 (id: "help")

### 컨트롤 추가 {#adding-controls-1}

아래 예제에서는 툴바에 새 버튼을 추가합니다:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "button",
    icon: "dxi dxi-delete",
    tooltip: "Remove all",
    id: "remove-all"
});
~~~

![커스터마이징을 통해 사용자 정의 모두 제거 버튼이 추가된 DHTMLX Spreadsheet 툴바](/img/custom_toolbar_button.png)

**관련 샘플**: [Spreadsheet. 사용자 정의 툴바 버튼](https://snippet.dhtmlx.com/qopk6lta)

아래 예제에서는 "clear-group" 컨트롤에 새 menuItem 옵션을 추가합니다:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2"
}, -1, "clear-group");
~~~

새 항목의 정확한 위치가 필요하지 않은 경우 menuItem을 추가하는 간략한 표기법이 있습니다:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2", 
    parent: "clear-group"   
});
~~~

### 컨트롤 업데이트 {#updating-controls-1}

아래 예제에서는 툴바 실행 취소/다시 실행 버튼의 기본 아이콘을 Font Awesome 아이콘으로 변경합니다:

~~~jsx
spreadsheet.toolbar.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.toolbar.data.update("redo", { icon: "fa fa-redo" });
~~~

![Font Awesome의 사용자 정의 실행 취소 및 다시 실행 아이콘이 적용된 DHTMLX Spreadsheet 툴바](/img/custom_toolbar_icons.png)

**관련 샘플**: [Spreadsheet. 사용자 정의 툴바 아이콘](https://snippet.dhtmlx.com/mvnx43o0)

### 컨트롤 삭제 {#deleting-controls-1}

아래 예제에서는 툴바에서 실행 취소 버튼을 제거합니다:

~~~jsx
spreadsheet.toolbar.data.remove("undo");
~~~

### 사용자 정의 글꼴 크기 {#custom-font-size}

**글꼴** 툴바 블록에서 사용 가능한 글꼴 크기 목록을 재정의하려면 `"font-size"` 콤보박스에서 기존 항목을 제거하고 새 항목을 추가합니다:

~~~jsx
const FONT_SIZES = [8, 10, 12, 14, 16, 20];

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 구성 옵션
});

spreadsheet.toolbar.data.removeAll("font-size");
spreadsheet.toolbar.data.add(
    FONT_SIZES.map(size => ({ value: size, id: `font-size-${size}` })),
    -1,
    "font-size"
);

spreadsheet.parse(dataset);
~~~

**관련 샘플:** [Spreadsheet. 사용자 정의 글꼴 크기 설정](https://snippet.dhtmlx.com/tffbf11g)

## 메뉴 {#menu}

### 기본 컨트롤 {#default-controls-1}

[기본 메뉴](/#menu)의 구조는 다음과 같습니다:

- **파일** menuItem (id: "edit")
  - *다음으로 가져오기...* menuItem (id: "import")
    - *"Microsoft Excel(.xlsx)"* menuItem (id: "import-xlsx")
  - *다음으로 다운로드...* menuItem (id: "download")
    - *"Microsoft Excel(.xlsx)"* menuItem (id: "export-xlsx")
- **편집** menuItem (id: "edit")
  - *실행 취소* menuItem (id: "undo")
  - *다시 실행* menuItem (id: "redo")
  - 구분선
  - *고정* menuItem (id: "freeze")
    - *열 고정 해제* menuItem (id: "unfreeze-cols")
    - *[id]열까지 고정* (id: "freeze-cols")
    - 구분선 (id: "freeze-sep")
    - *행 고정 해제* menuItem (id: "unfreeze-rows")
    - *[id]행까지 고정* (id: "freeze-rows")
  - *잠금* menuItem (id: "lock")
  - 구분선
  - *지우기* menuItem (id: "clear")
    - *값 지우기* menuItem (id: "clear-value")
    - *스타일 지우기* menuItem (id: "clear-styles")
    - *모두 지우기* menuItem (id: "clear-all")
- **삽입** menuItem (id: "insert")
  - *열* menuItem (id: "columns")
    - *열 추가* menuItem (id: "add-col")
    - *열 제거* menuItem (id: "remove-col")
  - *행* menuItem (id: "rows")
    - *행 추가* menuItem (id: "add-row")
    - *행 제거* menuItem (id: "remove-row")
  - *링크 삽입* menuItem (id: "link")
- **형식** menuItem (id: "configuration")
  - *굵게* menuItem (id: "font-weight-bold")
  - *기울임꼴* menuItem (id: "font-style-italic")
  - *밑줄* menuItem (id: "text-decoration-underline")
  - *취소선* menuItem (id: "text-decoration-line-through")
  - 구분선
  - *가로 정렬* menuItem (id: "halign")
    - *왼쪽* menuItem (id: "halign-left")
    - *가운데* menuItem (id: "halign-center")
    - *오른쪽* menuItem (id: "halign-right")
  - *세로 정렬* menuItem (id: "valign")
    - *위* menuItem (id: "valign-top")
    - *가운데* menuItem (id: "valign-center")
    - *아래* menuItem (id: "valign-bottom")
  - *텍스트 줄 바꿈* menuItem (id: "multiline")
    - *잘라내기* menuItem (id: "multiline-clip")
    - *줄 바꿈* menuItem (id: "multiline-wrap")
  - *형식* menuItem (id: "format")
  - *병합/병합 해제* menuItem (id: "merge")
- **데이터** menuItem (id: "data")
  - *데이터 유효성 검사* menuItem (id: "validation")
  - *검색* menuItem (id: "search")
  - *필터* menuItem (id: "filter")
  - *정렬* menuItem (id: "sort")
    - *A에서 Z로 정렬* menuItem (id: "asc-sort")
    - *Z에서 A로 정렬* menuItem (id: "desc-sort")
- **도움말** menuItem (id: "help")

### 컨트롤 추가 {#adding-controls-2}

아래 예제에서는 메뉴에 새 menuItem을 추가합니다:

~~~jsx
spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    childs: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});
~~~

![숫자 확인을 위한 사용자 정의 유효성 검사 옵션이 추가된 DHTMLX Spreadsheet 메뉴](/img/custom_menuitem.png)

**관련 샘플**: [Spreadsheet. 메뉴 데이터](https://snippet.dhtmlx.com/2mlv2qaz)

### 컨트롤 업데이트 {#updating-controls-2}

아래 예제에서는 실행 취소/다시 실행 menuItem의 기본 아이콘을 Font Awesome 아이콘으로 변경합니다:

~~~jsx
spreadsheet.menu.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.menu.data.update("redo", { icon: "fa fa-redo" });
~~~

![Font Awesome의 사용자 정의 실행 취소 및 다시 실행 아이콘이 적용된 DHTMLX Spreadsheet 메뉴](/img/custom_menu_icons.png)

### 컨트롤 삭제 {#deleting-controls-2}

아래 예제에서는 메뉴에서 실행 취소 menuItem을 제거합니다:

~~~jsx
spreadsheet.menu.data.remove("undo");
~~~

## 컨텍스트 메뉴 {#context-menu}

### 기본 컨트롤 {#default-controls-2}

[기본 컨텍스트 메뉴](/#context-menu)의 구조는 다음과 같습니다:

- **잠금** menuItem (id: "lock")
- **지우기** menuItem (id: "clear")
  - *값 지우기* menuItem (id: "clear-value")
  - *스타일 지우기* menuItem (id: "clear-styles")
  - *모두 지우기* menuItem (id: "clear-all")
- **열** menuItem (id: "columns")
  - *열 추가* menuItem (id: "add-col")
  - *열 제거* menuItem (id: "remove-col")
  - *데이터에 맞추기* menuItem (id: "fit-col")
  - 구분선
  - *열 고정 해제* menuItem (id: "unfreeze-cols")
  - *[id]열까지 고정* menuItem (id: "freeze-cols")
  - *열 표시* menuItem (id: "show-cols")
  - *열 숨기기 [id]* menuItem (id: "hide-cols")
- **행** menuItem (id: "rows")
  - *행 추가* menuItem (id: "add-row")
  - *행 제거* menuItem (id: "remove-row")
  - 구분선
  - *행 고정 해제* menuItem (id: "unfreeze-rows")
  - *[id]행까지 고정* menuItem (id: "freeze-rows")
  - *행 표시* menuItem (id: "show-rows")
  - *행 숨기기 [id]* menuItem (id: "hide-rows")
- **정렬** menuItem (id: "sort")
  - *A에서 Z로 정렬* menuItem (id: "asc-sort")
  - *Z에서 A로 정렬* menuItem (id: "desc-sort")
- **링크 삽입** menuItem (id: "link")

### 컨트롤 추가 {#adding-controls-3}

아래 예제에서는 컨텍스트 메뉴에 새 menuItem을 추가합니다:

~~~jsx
spreadsheet.contextMenu.data.add({
    icon: "mdi mdi-eyedropper-variant",
    value: "Paint format",
    id: "paint-format"
});
~~~

![사용자 정의 페인트 형식 옵션이 추가된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/custom_context_menuitem.png)

**관련 샘플**: [Spreadsheet. 컨텍스트 메뉴](https://snippet.dhtmlx.com/atl9gd4h)

### 컨트롤 업데이트 {#updating-controls-3}

아래 예제에서는 잠금 menuItem의 기본 아이콘을 Font Awesome 아이콘으로 변경합니다:

~~~jsx
spreadsheet.contextMenu.data.update("lock", { icon: "fa fa-key" });
~~~

![Font Awesome의 사용자 정의 잠금 아이콘이 적용된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/custom_context_icon.png)

### 컨트롤 삭제 {#deleting-controls-3}

아래 예제에서는 컨텍스트 메뉴에서 실행 취소 menuItem을 제거합니다:

~~~jsx
spreadsheet.contextMenu.data.remove("lock");
~~~

## 사용자 정의 읽기 전용 모드 {#custom-read-only-mode}

Spreadsheet 전체에 [읽기 전용 모드](configuration.md#read-only-mode)를 적용하는 것 외에도, `before`로 시작하는 이름을 가진 이벤트를 사용하여 특정 작업을 차단할 수 있습니다. 예를 들어:

- [](api/spreadsheet_beforeeditstart_event.md)
- [](api/spreadsheet_beforeaction_event.md)

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

spreadsheet.events.on("beforeEditStart", function(){
    return false;
});

spreadsheet.events.on("beforeAction", function(actionName){
    if (actionName === "setCellValue" || actionName === "setCellStyle") {
        return false;
    }
});

spreadsheet.parse(data);
~~~

**관련 샘플**: [Spreadsheet. 사용자 정의 읽기 전용](https://snippet.dhtmlx.com/8xcursbe)
