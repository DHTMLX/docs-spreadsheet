---
sidebar_label: 새로운 기능
title: DHTMLX Spreadsheet의 새로운 기능
description: DHTMLX JavaScript Spreadsheet 라이브러리의 새로운 기능에 대한 내용을 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 새로운 기능 {#whats-new}

이전 버전에서 Spreadsheet를 업그레이드하는 경우 [최신 버전으로 마이그레이션](migration.md)에서 자세한 내용을 확인하세요.

## 버전 6.0.2 {#version-602}

2026년 7월 1일 출시

### 수정 사항 {#fixes}

- "Excel에서 복사 → Spreadsheet에 붙여넣기 → 내보내기/가져오기" 사이클 후 셀 테두리가 사라지는 문제
- 마지막 행 아래에 붙여넣은 데이터가 표시되지 않는 문제 — 그리드가 데이터에 맞게 새 행을 추가하지 않았기 때문

## 버전 6.0 {#version-60}

2026년 5월 20일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/meet-dhtmlx-spreadsheet-6-0/)

### 주요 변경 사항 {#breaking-changes}

새 릴리스에서는 Spreadsheet API에 중요한 변경 사항이 도입되었습니다: 더 이상 사용되지 않는 메서드, 속성 및 이벤트 세트가 있습니다. 최신 버전을 유지하려면 [마이그레이션 가이드](migration.md#52---60)를 확인하세요.

### 새로운 기능 {#new-functionality}

- [React Spreadsheet 래퍼](react.md)가 도입되었습니다. [GitHub 데모 리포지토리](https://github.com/DHTMLX/react-spreadsheet-examples)의 관련 예제를 확인하세요.
- [`SheetManager`](api/overview/sheetmanager_overview.md) 모듈이 도입되었습니다. Spreadsheet의 시트를 관리하는 중앙화된 API로, `spreadsheet.sheets` 속성을 통해 접근할 수 있으며 루트 Spreadsheet 인스턴스에 있던 [더 이상 사용되지 않는 시트 관련 메서드](migration.md#deprecated-methods)를 대체합니다.
    - 새 메서드: [`sheets.add()`](api/sheetmanager_add_method.md), [`sheets.remove()`](api/sheetmanager_remove_method.md), [`sheets.getAll()`](api/sheetmanager_getall_method.md), [`sheets.getActive()`](api/sheetmanager_getactive_method.md), [`sheets.setActive()`](api/sheetmanager_setactive_method.md), [`sheets.clear()`](api/sheetmanager_clear_method.md), [`sheets.get()`](api/sheetmanager_get_method.md)
- 새로운 [`addFormula()`](api/spreadsheet_addformula_method.md) 메서드를 통해 [사용자 정의(user-defined) 수식](functions.md#custom-formulas)을 지정하는 기능
- [과학적(지수) 표기법](number_formatting.md#scientific-number-format)으로 숫자를 표시하는 기능

### 업데이트 {#updates}

- 셀 내용의 글꼴 크기를 조정하는 기능:
    - [내장 툴바 컨트롤](customization.md#default-controls)을 통해 기본 글꼴 크기 옵션 설정
    - 툴바 컨트롤에 [사용자 정의 글꼴 크기](customization.md#custom-font-size) 설정
- 새로운 조건부 집계 함수가 [수식 엔진](functions.md#math-functions)에 추가되었습니다: `COUNTIF`, `COUNTIFS`, `SUMIF`, `SUMIFS`, `AVERAGEIF`, `AVERAGEIFS`, `MAXIFS`, `MINIFS`
- 새로운 동적 배열 함수가 [수식 엔진](functions.md#array-functions)에 추가되었습니다: `CHOOSECOLS`, `CHOOSEROWS`, `DROP`, `EXPAND`, `RANDARRAY`, `SEQUENCE`, `SORT`, `SORTBY`, `TAKE`, `TEXTSPLIT`, `TOCOL`, `TOROW`, `UNIQUE`, `WRAPCOLS`, `WRAPROWS`
- Spreadsheet의 렌더링 프로세스를 감지하고 컴포넌트 렌더링 완료 후 원하는 코드를 실행하기 위한 [`awaitRedraw()`](awaitredraw.md) 헬퍼가 추가되었습니다.
- 인라인 API 설명, 파라미터 타입, 코드 예제를 IDE에서 직접 제공하는 [JSDoc 어노테이션](using_typescript.md#jsdoc-hints)이 타입 정의에 추가되었습니다.

### 수정 사항 {#fixes-60}

- API를 통해 활성 시트를 전환한 후 포커스가 사라지는 문제
- 전치 모드에서 변경된 셀 배열 반환 문제
- 붙여넣기 후 의존 수식이 재계산되지 않는 문제
- 붙여넣기 작업 중 잠긴 셀에 수식이 덮어쓰이는 문제
- 잠긴 셀에서 수학 수식을 실행할 때의 문제
- 셀 참조와 유사하거나, 숫자로 시작하거나, 특수 문자가 포함된 시트 이름 이스케이프 처리 문제
- 셀 id가 0(첫 번째 시트의 첫 번째 셀)일 때 동적 배열 관련 문제

## 버전 5.2.9 {#version-529}

2026년 1월 8일 출시

### 수정 사항 {#fixes-529}

- 열린 편집기에서 타이핑 시 편집기 드롭다운 필터링이 이제 `includes` 대신 `startsWith`를 사용합니다.
- Excel 셀 테두리가 내보내기 및 가져오기 후에도 유지됩니다.
- 외부 테이블에서 붙여넣기 시 글꼴 크기가 재정의되는 문제를 방지합니다.

## 버전 5.2.8 {#version-528}

2025년 12월 15일 출시

### 수정 사항 {#fixes-528}

- 수식 편집 중 다른 셀을 선택할 때 포커스가 사라지는 문제
- 키보드 탐색 관련 문제

## 버전 5.2.7 {#version-527}

2025년 12월 9일 출시

### 수정 사항 {#fixes-527}

- 시트에 데이터 유효성 검사 목록이 포함된 셀이 있을 때 Excel로 내보내기가 실패하는 문제
- 초기 셀 값이 `%`일 때 데이터 유효성 검사 목록이 있는 드롭다운이 작동하지 않는 문제
- 수식 표시줄에 포커스를 설정한 후 `INDEX/MATCH` 수식이 깨지는 문제

## 버전 5.2.6 {#version-526}

2025년 11월 19일 출시

### 수정 사항 {#fixes-526}

- 텍스트가 줄바꿈된 셀이 포함된 .xlsx 파일을 가져올 때 추가 DOM 요소가 나타나는 문제
- 열 관리 중 열 컨텍스트 메뉴에서 열/행 레이블이 잘못 표시되는 문제
- 병합된 셀이 포함된 범위를 고정할 때 시트 구조가 깨지는 문제
- 병합된 셀이 있는 시트에서 키보드 탐색이 개선되었습니다.

## 버전 5.2.5 {#version-525}

2025년 10월 23일 출시

### 수정 사항 {#fixes-525}

- 열 너비에 맞는 내용에 "줄바꿈" 옵션을 적용할 때 행 높이가 줄어드는 문제

## 버전 5.2.4 {#version-524}

2025년 9월 24일 출시

### 수정 사항 {#fixes-524}

- 다중 행 셀에 대한 내보내기/가져오기 지원이 추가되었습니다.

## 버전 5.2.3 {#version-523}

2025년 9월 10일 출시

### 수정 사항 {#fixes-523}

- 배열을 삽입할 때 셀 내 숫자 정렬이 잘못되는 문제
- 아시아 언어 입력이 개선되었습니다.

## 버전 5.2.2 {#version-522}

2025년 8월 18일 출시

### 업데이트 {#updates-522}

- 내장 드롭다운 편집기에서 타입-어헤드 필터링을 위한 `setValidation()` 기능이 향상되었습니다.
- .xlsx 파일에서 숨겨진/고정된 열/행, 데이터 유효성 검사 선택 상자 및 Excel 링크에 대한 내보내기/가져오기 지원이 추가되었습니다.

### 수정 사항 {#fixes-522}

- 고정된 열/행에서 병합된 셀을 분리할 때의 문제
- 내장 테마 적용 관련 문제
- 중국어 입력 관련 문제
- MacOS에서 일본어 입력 관련 문제: 자동완성 확인 시 편집기가 닫히는 문제
- `spreadsheet.d.ts` 파일 컴파일 관련 문제

## 버전 5.2.1 {#version-521}

2025년 6월 30일 출시

### 업데이트 {#updates-521}

- 컨텍스트 메뉴를 통해 한 번에 여러 열/행을 제거하는 기능

### 수정 사항 {#fixes-521}

- 복사/붙여넣기 스크립트 오류
- 시트에서 마지막 두 개 이상의 행이 선택된 상태에서 행을 삭제할 때 발생하는 오류
- 툴바 사용자 정의 시 경고가 표시되는 문제
- 날짜 선택기 현지화가 누락되는 문제
- 툴바에서 세로 스크롤이 불필요하게 표시되는 문제
- 수식의 올바른 계산을 위한 수학 수정

## 버전 5.2 {#version-52}

2025년 5월 20일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-2/)

### 주요 변경 사항 {#breaking-changes-52}

새 릴리스에서는 열과 행의 고정/해제 기능에 일부 변경 사항이 도입되었습니다. 최신 버전을 유지하려면 [마이그레이션 가이드](migration.md#51---52)를 확인하세요.

### 더 이상 사용되지 않는 항목 {#deprecated}

- `leftSplit` 및 `topSplit` 구성 속성이 제거되었습니다.

### 새로운 기능 {#new-functionality-52}

- 셀 편집:
    - [UI를 통해 셀 그룹에 스타일이 적용된 테두리를 생성하는 기능](data_formatting.md#styled-borders-for-cells)
- 열/행 고정/해제:
    - [UI](work_with_rows_cols.md#freezingunfreezing-rows-and-columns)를 통해 열과 행을 고정/해제하는 기능
    - [API](working_with_ssheet.md#freezingunfreezing-rows-and-columns)를 통해 열과 행을 고정/해제하는 기능
        - 새 메서드: [`freezeCols()`](api/spreadsheet_freezecols_method.md), [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md), [`freezeRows()`](api/spreadsheet_freezerows_method.md), [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)
        - 새 액션: [`toggleFreeze`](api/overview/actions_overview.md#list-of-actions)
        - [`parse()`](api/spreadsheet_parse_method.md) 메서드의 *sheets* 객체에 새로운 `freeze` 속성 추가
- 열/행 숨기기/표시:
    - [UI](work_with_rows_cols.md#hidingshowing-rows-and-columns)를 통해 열과 행을 숨기거나 표시하는 기능
    - [API](working_with_ssheet.md#hidingshowing-rows-and-columns)를 통해 열과 행을 숨기거나 표시하는 기능
        - 새 메서드: [`hideCols()`](api/spreadsheet_hidecols_method.md), [`showCols()`](api/spreadsheet_showcols_method.md), [`hideRows()`](api/spreadsheet_hiderows_method.md), [`showRows()`](api/spreadsheet_showrows_method.md)
        - 새 액션: [`toggleVisibility`](api/overview/actions_overview.md#list-of-actions)
        - [`parse()`](api/spreadsheet_parse_method.md) 메서드의 *sheets* 객체 내 *cols* 및 *rows* 구성에 새로운 `hidden` 속성 추가
- 수식 작업:
    - [수식에 대한 설명 팝업](functions.md#popup-with-formula-description)이 추가되었습니다.
    - 새로운 로케일: [`formulas`](localization.md#default-locale-for-formulas)가 추가되었습니다.
- 파일 가져오기:
    - Spreadsheet로의 데이터 로딩 완료를 나타내는 새로운 [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md) 이벤트가 추가되었습니다.

### 수정 사항 {#fixes-52}

- 정렬 관련 문제
- 필터가 새 열로 이동하는 문제
- "addSheet" 액션으로 시트 추가를 차단할 때 발생하는 오류
- 빈 셀 필터링 관련 문제
- 크게 병합된 테이블 편집 관련 문제
- 셀에서 동작을 취소할 때 발생하는 오류
- IF 수식이 있는 셀을 입력/편집할 때 발생하는 오류
- 링크를 잘라내어 붙여넣은 후 발생하는 스크립트 오류
- .xlsx 파일 내보내기/가져오기 시 텍스트 정렬이 변경되는 문제
- 일부 동작 후 Spreadsheet 포커스가 사라지는 문제
- 성능 개선

## 버전 5.1.8 {#version-518}

2024년 12월 10일 출시

### 수정 사항 {#fixes-518}

- 프레임워크로 가져올 때 로컬 평가판 패키지 관련 문제

## 버전 5.1.7 {#version-517}

2024년 11월 27일 출시

### 수정 사항 {#fixes-517}

- "항목을 찾을 수 없음" 경고가 제거되었습니다.
- 파싱 최적화
- 열린 셀 편집기가 (Shift)+Tab 단축키로 인접한 셀로 이동해도 닫히지 않습니다.

## 버전 5.1.6 {#version-516}

2024년 7월 25일 출시

### 수정 사항 {#fixes-516}

- 삽입된 행/열이 데이터를 로드할 때 직렬화된 데이터에서 누락되는 문제
- 빈 날짜 셀이 날짜 선택기와 시간 선택기에 마지막으로 선택한 날짜를 표시하는 문제
- 숫자 현지화 및 셀의 빈 문자열 값 관련 문제
- 셀 편집 중 검색이 포커스를 받지 못하는 문제
- Spreadsheet 컨테이너에 `ngIf/ngFor`를 사용하면 컴포넌트가 중단되는 문제

## 버전 5.1.5 {#version-515}

2024년 2월 13일 출시

### 수정 사항 {#fixes-515}

- 0이 포함된 셀을 붙여넣으면 빈 셀이 생성되는 문제
- 빈 셀을 복사한 후 붙여넣으면 오류가 발생하는 문제
- 공통 형식에 대한 `setValue()` 기능 수정
- 직렬화 중 시트 id를 저장하고 `afterAction` 이벤트로 반환하는 문제 수정
- UI를 통한 크로스 시트 수식 사용 수정
- Ctrl+F 검색 수정

## 버전 5.1.4 {#version-514}

2024년 1월 31일 출시

### 수정 사항 {#fixes-514}

- 병합된 셀을 잘못 붙여넣는 문제

## 버전 5.1.3 {#version-513}

2024년 1월 29일 출시

### 수정 사항 {#fixes-513}

- "common" 형식에서 숫자 값을 잘못 파싱하는 문제
- Spreadsheet를 Suite와 함께 사용할 때 현지화 i18n 관련 문제
- 많은 수의 병합 영역이 포함된 테이블을 로드할 때의 성능 문제
- 병합된 셀을 잘못 붙여넣는 문제

## 버전 5.1.2 {#version-512}

2024년 1월 16일 출시

### 수정 사항 {#fixes-512}

- Excel에서 Spreadsheet로 날짜가 포함된 셀을 복사하여 붙여넣으면 문자열로 표시되는 문제 수정
- "common" 형식의 숫자 값이 숫자로 형식화되는 문제 수정
- 초기 데이터 세트를 변경하는 데이터 파싱 관련 문제 수정
- 병합된 셀 붙여넣기 관련 문제 수정

## 버전 5.1.1 {#version-511}

2023년 12월 14일 출시

### 수정 사항 {#fixes-511}

- `fixColumn()` 메서드가 선택 편집기의 화살표 아이콘을 무시하는 문제 수정
- 셀 스타일이 범위 스타일보다 우선하는 문제 수정
- 스타일이 적용된 셀의 내용을 복사/붙여넣기하고 실행 취소 기능을 사용할 때의 문제 수정
- 다른 셀에 붙여넣는 동안 링크가 변경되는 문제 수정
- 병합된 셀 복사/붙여넣기 관련 문제 수정
- 스타일 직렬화 관련 문제 수정
- `setSelectedCell()` 또는 `setFocusedCell()` 메서드를 호출할 때 해당 셀로 스크롤하는 문제 수정

## 버전 5.1 {#version-51}

2023년 12월 7일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-1/)

### 새로운 기능 {#new-functionality-51}

- [새로운 테마 지원](/themes/): 다크, 라이트 고대비, 다크 고대비
- [숫자, 날짜, 시간 및 통화 형식 현지화 지원 확장](number_formatting.md#number-date-time-currency-localization)
- [Svelte 프레임워크 통합](svelte_integration.md)
- [내보낸 .xlsx 파일에 사용자 정의 이름 제공](loading_data.md#how-to-set-a-custom-name-for-an-exported-file)하는 기능
- 데이터 세트에서 ["잠긴" 셀 상태를 저장](loading_data.md#setting-the-locked-state-for-a-cell)하고 [셀에 링크를 지정](loading_data.md#adding-a-link-into-a-cell)하는 기능

### 업데이트 {#updates-51}

- [React, Angular 및 Vue.js 통합 갱신](/integrations/)
- 수식에서 소문자를 대문자로 자동 [변환](functions.md)
- 수식 자동 닫기

### 수정 사항 {#fixes-51}

- 셀에 설정된 값에 실행 취소를 적용할 때의 문제 수정
- 붙여넣을 수 있는 행 수 제한 수정
- 편집 줄의 수식에서 공백이 `&nbsp;` 기호로 대체되는 문제 수정
- 날짜 형식의 값이 있는 Excel 가져오기가 잘못 작동하는 문제 수정
- 셀 블록 편집이 잘못 작동하는 문제 수정
- 필터링 중 `getExcelDate()`를 호출할 때 나타나는 스크립트 오류 수정
- 셀 내용을 붙여넣을 때 텍스트 값이 숫자로 변환되는 문제 수정
- 열 너비가 수정된 Excel 파일에서 데이터를 붙여넣을 때 잘못 붙여넣어지는 문제 수정

## 버전 5.0.10 {#version-5010}

2023년 11월 27일 출시

### 수정 사항 {#fixes-5010}

- 타입 관련 문제 수정

## 버전 5.0.9 {#version-509}

2023년 10월 24일 출시

### 수정 사항 {#fixes-509}

- before/afterSelectionSet 이벤트를 트리거하는 setStyle() 메서드의 잘못된 호출 수정
- 잘못된 내용 줄바꿈 수정
- 타입 관련 문제 수정

## 버전 5.0.7 {#version-507}

2023년 9월 21일 출시

### 수정 사항 {#fixes-507}

- Excel로 수식을 내보낼 때의 문제 수정
- 실행 취소 버튼을 클릭할 때 잘라낸 셀 내용이 복원되지 않는 문제 수정

## 버전 5.0.6 {#version-506}

2023년 9월 18일 출시

### 수정 사항 {#fixes-506}

- 0을 렌더링할 때의 문제 수정
- 문자열 값으로 설정된 색상 스타일을 적용할 때의 문제 수정
- XSS 취약점 관련 문제 수정
- 비활성 시트에서 값을 변경하면 활성 시트의 값이 수정되는 문제 수정

## 버전 5.0.5 {#version-505}

2023년 8월 10일 출시

### 수정 사항 {#fixes-505}

- XSS 취약점 관련 문제 수정
- 셀 병합 영역이 포함된 데이터를 잘못 붙여넣는 문제 수정

## 버전 5.0.4 {#version-504}

2023년 6월 5일 출시

### 수정 사항 {#fixes-504}

- 읽기 전용 모드에서 블록 선택 또는 컨텍스트 메뉴 호출 시 오류 수정
- 읽기 전용 모드에서 편집 메뉴가 표시되는 문제 수정
- 숫자 반올림이 잘못되는 문제 수정
- 셀 병합 후 편집 줄에서 수식이 결과로 대체되는 문제 수정

## 버전 5.0.3 {#version-503}

2023년 4월 26일 출시

### 수정 사항 {#fixes-503}

- 병합할 마지막 셀 계산이 잘못되는 문제 수정
- Excel 가져오기/내보내기 관련 문제 수정
- 데이터 유효성 검사를 적용한 후 데이터가 바뀌는 문제 수정
- ":" 기호가 포함된 텍스트가 링크로 해석되는 문제 수정
- 여러 줄 데이터를 로드하는 문제 수정. 이제 [`styles`](api/spreadsheet_parse_method.md#parsing-styled-data) 객체에 `multiline: "wrap"` 속성을 설정할 수 있습니다.
- [`multiSheets`](api/spreadsheet_multisheets_config.md)가 `false`로 설정된 경우 Spreadsheet 초기화 시 셀 병합 관련 문제 수정
- 테이블 헤더의 열 간 크기 조정 커서를 더블 클릭한 후 스크롤 위치가 재설정되는 문제 수정

## 버전 5.0.2 {#version-502}

2023년 2월 14일 출시

### 수정 사항 {#fixes-502}

- 셀 값을 복사하여 붙여넣은 후 셀 정렬이 저장되지 않는 문제 수정
- 데이터를 정렬한 후 필터링 결과가 변경되는 문제 수정
- 시간 선택기에서 12시간 형식 표시 관련 문제 수정
- 셀이 자동 채우기된 후 링크 스타일이 제거되는 문제 수정
- 이제 날짜에 [여러 사용자 정의 형식](number_formatting.md#formats-customization)을 추가할 수 있습니다.
- 이제 [제한된 열과 행](configuration.md#number-of-rows-and-columns)에 속하더라도 열과 행을 제거할 수 있습니다.

## 버전 5.0.1 {#version-501}

2023년 1월 19일 출시

### 수정 사항 {#fixes-501}

- 통화 형식의 셀에 입력된 값이 숫자가 아닌 문자열로 저장되는 문제 수정
- 이전에 검색된 셀의 선택이 지워지지 않는 문제 수정
- 스프레드시트로 파싱한 후 데이터 표시 관련 문제 수정
- 열을 제거한 후 그리드 다시 그리기 관련 문제 수정
- 빈 값 정렬 관련 문제 수정
- 드롭다운 목록 사용 시 숫자 값 유효성 검사 관련 문제 수정
- 영숫자 값이 포함된 셀의 자동 채우기 기능 작동 수정
- 숫자 형식 마스크 작업 개선
- 이제 셀의 모든 숫자 값이 기본적으로 오른쪽 정렬됩니다.

## 버전 5.0 {#version-50}

2022년 11월 21일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-0/)

### 주요 변경 사항 {#breaking-changes-50}

새 릴리스에서는 [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 속성에 일부 변경 사항이 도입되었습니다. 최신 버전을 유지하려면 [마이그레이션 문서](migration.md#43---50)를 확인하세요.

### 새로운 기능 {#new-functionality-50}

- 데이터 검색:
    - [UI](data_search.md)를 통해 데이터를 검색하는 기능
    - [API](working_with_ssheet.md#searching-for-data)를 통해 데이터를 검색하는 기능:
        - 새 메서드: [`search()`](api/spreadsheet_search_method.md) 및 [`hideSearch()`](api/spreadsheet_hidesearch_method.md)
- 데이터 필터링:
    - [UI](filtering_data.md)를 통해 데이터를 필터링하는 기능
    - [API](working_with_ssheet.md#filtering-data)를 통해 데이터를 필터링하는 기능:
        - 새 메서드: [`setFilter()`](api/spreadsheet_setfilter_method.md) 및 [`getFilter()`](api/spreadsheet_getfilter_method.md)
        - 새 액션: [`filter`](api/overview/actions_overview.md#list-of-actions)
- 셀 병합/분리:
    - [UI](merge_cells.md)를 통해 셀을 병합/분리하는 기능
    - [API](working_with_cells.md#merging-cells)를 통해 셀을 병합/분리하는 기능:
        - 시트 객체의 새 속성: [`merged`](api/spreadsheet_parse_method.md)
        - 새 메서드: [`mergeCells()`](api/spreadsheet_mergecells_method.md)
        - 새 액션: [`merge`](api/overview/actions_overview.md#list-of-actions) 및 [`unmerge`](api/overview/actions_overview.md#list-of-actions)
- 열 너비 자동 맞춤:
    - [UI](work_with_rows_cols.md#autofit-column-width)를 통해 열 너비를 자동으로 맞추는 기능
    - [API](working_with_ssheet.md#autofit-column-width)를 통해 열 너비를 자동으로 맞추는 기능:
        - 새 메서드: [`fitColumn()`](api/spreadsheet_fitcolumn_method.md)
        - 새 액션: [`fitColumn`](api/overview/actions_overview.md#list-of-actions)
- 하이퍼링크 삽입:
    - [UI](work_with_cells.md#inserting-a-hyperlink-into-a-cell)를 통해 셀에 하이퍼링크를 삽입하는 기능
    - [API](working_with_cells.md#inserting-a-hyperlink-into-a-cell)를 통해 셀에 하이퍼링크를 삽입하는 기능:
        - 새 메서드: [`insertLink()`](api/spreadsheet_insertlink_method.md)
        - 새 액션: [`insertLink`](api/overview/actions_overview.md#list-of-actions)
- [데이터 취소선 형식](data_formatting.md#color-and-style)

### 업데이트 {#updates-50}

- [로케일 옵션 확장 목록](localization.md#default-locale)
- [단축키 조합 확장 목록](hotkeys.md):
    - 데이터 검색용
        - `Ctrl (Cmd) + F`
        - `Ctrl (Cmd) + G`
        - `Ctrl (Cmd) + Shift + G`
    - 전체 열/행 선택용
        - `Ctrl (Cmd) + Space`
        - `Shift + Space`
    - 셀 내용 왼쪽/오른쪽/가운데 정렬용
        - `Ctrl (Cmd) + Shift + L`
        - `Ctrl (Cmd) + Shift + R`
        - `Ctrl (Cmd) + Shift + E`
    - 셀 내용에 취소선 적용용
        - `Alt + Shift + 5 (Cmd + Shift + X)`
    - 새 시트 추가 및 시트 간 전환용
        - `Shift + F11`
        - `Alt + Arrow Up/ Arrow Down`
    - 셀에 하이퍼링크 삽입용
        - `Ctrl (Cmd) + K`

## 버전 4.3 {#version-43}

2022년 5월 23일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-3/)

### 주요 변경 사항 {#breaking-changes-43}

버전 4.3은 주요 변경 사항을 도입하지 않지만 스프레드시트에서 수행된 작업을 처리하는 새로운 방법을 소개합니다. 자세한 내용은 [마이그레이션 문서](migration.md#42---43)에서 확인하세요.

### 새로운 기능 {#new-functionality-43}

- [`setValidation()`](api/spreadsheet_setvalidation_method.md) 메서드 또는 [UI](work_with_cells.md#using-drop-down-lists-in-cells)를 통해 셀에 드롭다운 옵션 목록을 추가하는 기능
- `topSplit` 속성을 통해 스프레드시트 상단에 행을 고정하는 기능
- [`sortCells()`](api/spreadsheet_sortcells_method.md) 메서드 또는 [UI](sorting_data.md)를 통해 데이터를 정렬하는 기능
- [긴 텍스트를 여러 줄로 분할하는 기능](data_formatting.md#wrap-text-in-a-cell) (*텍스트 줄바꿈* 버튼이 툴바에 추가됨)
- 지원되는 [날짜, 금융, 수학, 문자열 함수](functions.md#information-functions)의 목록이 크게 확장되었습니다 (*v4.3에 추가됨* 레이블로 표시됨)
- [조회 함수](functions.md#lookup-functions) 지원
- [시간 형식](number_formatting.md#default-number-formats)이 추가되었습니다.
- [`timeFormat`](api/spreadsheet_localization_config.md) 속성을 통해 스프레드시트 셀의 시간 형식을 정의하는 기능
- 시간 선택기를 통해 셀에 시간을 입력하는 기능
- [JSON으로 내보내기](api/export_json_method.md)
- [JSON에서 가져오기](api/spreadsheet_load_method.md#loading-json-files)
- 새 이벤트 추가: [beforeAction](api/spreadsheet_beforeaction_event.md) 및 [afterAction](api/spreadsheet_afteraction_event.md)
- 새 [액션 시스템](api/overview/actions_overview.md)

### 업데이트 {#updates-43}

- [`parse()`](api/spreadsheet_parse_method.md) 메서드가 업데이트되었습니다. 셀 객체의 새로운 **editor** 속성이 추가되었습니다.

## 버전 4.2 {#version-42}

2021년 11월 29일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-2-with130-new-functions-boolean-operators-date-format-row-resizing-much/)

### 새로운 기능 {#new-functionality-42}

- [날짜](functions.md#date-functions), [금융](functions.md#financial-functions), [정보](functions.md#information-functions), [정규식](functions.md#regex-functions) 및 [기타](functions.md#other-functions) 함수 지원
- [불리언 연산자](functions.md#boolean-operators) 지원
- UI에서 행 크기 조정 기능
- 툴바에 새로운 [세로 정렬](data_formatting.md#alignment) 버튼이 추가되었습니다.
- `setActiveSheet()` 메서드를 통해 활성 시트를 설정하는 기능
- Selection 객체의 [`removeSelectedCell()`](api/selection_removeselectedcell_method.md) 메서드를 통해 지정된 셀에서 선택을 제거하는 기능
- [`clear()`](api/spreadsheet_clear_method.md) 또는 `clearSheet()` 메서드를 통해 스프레드시트 또는 해당 시트를 지우는 기능
- 새 이벤트 추가: [`beforeClear`](api/spreadsheet_beforeclear_event.md), [`afterClear`](api/spreadsheet_afterclear_event.md), `beforeSheetClear`, `afterSheetClear`
- [`dateFormat`](api/spreadsheet_localization_config.md) 속성을 통해 스프레드시트에서 날짜 형식을 정의하는 기능
- [기본 숫자 형식에 날짜 형식이 추가되었습니다](number_formatting.md#default-number-formats)

### 업데이트 {#updates-42}

- [로케일 옵션](localization.md) 확장 목록
- [수학](functions.md#math-functions) 및 [문자열](functions.md#string-functions) 함수 확장 목록
- Spreadsheet 툴바의 정렬 블록이 업데이트되었습니다. 자세한 내용은 [마이그레이션 문서](migration.md#41---42)에서 확인하세요.
- [`parse()`](api/spreadsheet_parse_method.md) 및 [`serialize()`](api/spreadsheet_serialize_method.md) 메서드가 업데이트되었습니다. 시트 객체의 새로운 **rows** 및 **cols** 속성을 통해 각 시트의 행 높이와 열 너비 상태를 저장할 수 있습니다.

### 수정 사항 {#fixes-42}

- CTRL-X 단축키 관련 문제
- [편집 표시줄](api/spreadsheet_editline_config.md)이 숨겨진 스프레드시트에서 셀을 편집할 때 스크립트 오류가 발생하는 문제

## 버전 4.1.3 {#version-413}

2021년 8월 31일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-6-scheduler-5-3-12-suite-7-2-1/)

### 수정 사항 {#fixes-413}

- 행/열을 제거한 후 되돌릴 때 실행 취소 작업이 잘못 동작하는 문제 수정
- 숫자 형식 객체에 지정된 "mask" 속성이 잘못 작동하는 문제 수정
- Excel에서 스프레드시트로 데이터를 붙여넣을 때 선택 범위 상단의 빈 셀/행이 잘려지는 문제 수정
- 절대 수식이 참조하는 셀이 표시되지 않는 문제 수정
- 셀 범위를 선택한 후 "afterSelectionSet" 이벤트가 두 번 발생하는 문제 수정
- TypeScript 정의 관련 문제 수정
- "text" 숫자 형식 관련 문제 수정

## 버전 4.1.2 {#version-412}

2021년 6월 3일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/maintenance-release-suite-7-1-9-spreadsheet-4-1-2/)

### 수정 사항 {#fixes-412}

- 여러 열에 자동 채우기를 적용할 때 수학 함수가 포함된 셀이 잘못 자동 채워지는 문제 수정
- "Ctrl + Click"으로 셀을 클릭한 후 선택된 셀이 선택 해제되지 않는 문제 수정
- 키 탐색을 사용하여 수식을 선택한 후 셀에 수식을 적용할 때의 문제 수정
- "Ctrl + Click"으로 셀을 선택할 때 셀 잠금/해제 관련 문제 수정
- "0" 값이 직렬화되지 않는 "serialize()" 메서드 관련 문제 수정
- 테이블 헤더의 열 간 경계를 클릭할 때 열 너비 자동 조정 관련 문제 수정
- 편집 줄에서 0 값이 표시되지 않는 문제 수정
- 긴 셀 내용 편집 관련 문제 수정
- 스프레드시트를 Excel 파일로 내보낼 때의 문제 수정
- 많은 열이 포함된 스프레드시트에서 가로 스크롤바와 열 표시가 잘못 동작하는 문제 수정
- 빈 스프레드시트에서 키 탐색 사용 시 스크립트 오류 수정

## 버전 4.1.1 {#version-411}

2021년 4월 14일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-2-suite-7-1-5-spreadsheet-4-1-1/)

### 수정 사항 {#fixes-411}

- TypeScript 정의 관련 문제 수정
- 절대 참조 관련 문제 수정
- ".xlsx" 확장자를 가진 파일에서 로드된 데이터로 작업할 때 발생하는 문제 수정
- Excel 파일에서 복사한 데이터를 잘못 붙여넣는 문제 수정
- 부동 소수점 숫자를 합산할 때 잘못된 결과가 반환되는 문제 수정

## 버전 4.1 {#version-41}

2021년 3월 24일 출시

[블로그에서 릴리스 리뷰 보기](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-1-multiple-sheets/)

### 새로운 기능 {#new-functionality-41}

- 새로운 [multiSheets](api/spreadsheet_multisheets_config.md) 구성 옵션이 추가되었습니다.
- 스프레드시트에서 [여러 시트로 작업](work_with_sheets.md)하는 기능
- [여러 시트에서 상호 참조](work_with_sheets.md#cross-references-between-sheets) 사용 기능
- 스프레드시트에 [여러 시트를 한 번에 로드](working_with_sheets.md#loading-multiple-sheets)하는 기능
- [여러 시트](working_with_sheets.md)로 작업하기 위한 새 메서드가 추가되었습니다: `addSheet()`, `removeSheet()`, `getActiveSheet()`, `getSheets()`
- 새 이벤트가 추가되었습니다: `BeforeSheetAdd`, `AfterSheetAdd`, [`BeforeSheetChange`](api/spreadsheet_beforesheetchange_event.md), [`AfterSheetChange`](api/spreadsheet_aftersheetchange_event.md), `BeforeSheetRemove`, `AfterSheetRemove`, `BeforeSheetRename`, `AfterSheetRename`
- [getFormula()](api/spreadsheet_getformula_method.md) 메서드를 통해 셀의 수식을 가져오는 기능

### 업데이트 {#updates-41}

- [getValue()](api/spreadsheet_getvalue_method.md), [setValue()](api/spreadsheet_setvalue_method.md), [getStyle()](api/spreadsheet_getstyle_method.md), [setStyle()](api/spreadsheet_setstyle_method.md), [getFormat()](api/spreadsheet_getformat_method.md), [setFormat()](api/spreadsheet_setformat_method.md), [isLocked()](api/spreadsheet_islocked_method.md), [lock()](api/spreadsheet_lock_method.md), [unlock()](api/spreadsheet_unlock_method.md) 메서드의 "cell" 파라미터 형식이 업데이트되었습니다. 이제 셀 또는 셀 범위에 대한 참조에 탭 이름을 포함할 수 있습니다.

## 버전 4.0.5 {#version-405}

2021년 2월 3일 출시

### 수정 사항 {#fixes-405}

- 성능 문제 수정
- 사용자가 셀에서 마지막 동작을 되돌릴 때 발생하는 스크립트 오류 수정
- 소멸자를 호출한 후 발생하는 스크립트 오류 수정
- 단일 셀에 붙여넣을 때 셀 범위의 값이 잘리는 문제 수정
- 셀을 잘라내어 두 번째로 붙여넣은 후 셀 형식이 인식되지 않는 문제 수정

## 버전 4.0.4 {#version-404}

2021년 1월 12일 출시

### 수정 사항 {#fixes-404}

- 2개 이상의 숫자로 작업할 때 "SUM" 함수가 잘못 작동하는 문제 수정
- "destructor()"를 호출한 후 스프레드시트 초기화 관련 문제 수정
- 타입 관련 문제 수정

## 버전 4.0.3 {#version-403}

2020년 12월 28일 출시

### 수정 사항 {#fixes-403}

- 데이터 세트 내 셀 값의 형식을 설정할 때의 문제 수정
- 스프레드시트를 레이아웃에 연결할 때 발생하는 오류 수정
- 결과가 계산된 후 셀에 설정된 수식이 편집되지 않는 문제 수정
- [setFocusedCell()](api/selection_setfocusedcell_method.md) 메서드가 잘못 작동하는 문제 수정
- 수식으로 작업할 때 포커스의 잘못된 동작 수정
- "ctrl" 키를 사용하여 셀 범위를 선택할 때의 문제 수정
- 수식이 있는 셀에 "ctrl+click"으로 셀 범위를 추가할 때의 문제 수정
- 수학 함수가 잘못 작동하는 문제 수정
- 팝업과 마우스 클릭으로 SUM() 수식을 선택할 때의 문제 수정

## 버전 4.0.2 {#version-402}

2020년 12월 21일 출시

### 수정 사항 {#fixes-402}

- 페이지에 2개 이상의 스프레드시트 객체를 생성할 때 키 탐색이 잘못 동작하는 문제 수정
- types.d.ts 파일에서 오류가 발생하는 문제 수정
- 셀 범위를 복사하고 붙여넣을 때의 문제 수정

## 버전 4.0.1 {#version-401}

2020년 12월 2일 출시

### 수정 사항 {#fixes-401}

- 툴바에서 실행 취소/다시 실행 버튼 위에 마우스를 올릴 때 툴팁이 잘못 표시되는 문제
- 스프레드시트 크기보다 큰 데이터를 가져온 후 마지막 열을 제거할 때 발생하는 문제
- 선택된 셀의 수식이 수식 표시줄에 표시되지 않는 [setSelectedCell()](api/selection_setselectedcell_method.md) 메서드 관련 문제
- TypeScript 정의 생성 관련 문제
- 셀 내용 정렬의 시각적 문제
- 빈 셀 또는 0 값을 가진 셀을 직렬화할 때의 문제

## 버전 4.0 {#version-40}

2020년 10월 19일 출시

### 새로운 기능 {#new-functionality-40}

- [수학 함수](functions.md)
- [TypeScript 지원](using_typescript.md)
- `leftSplit` 구성 속성을 통해 스프레드시트 왼쪽에 열을 고정하는 기능
- [셀 내용을 텍스트로 표시하는 텍스트 형식이 기본 숫자 형식에 추가되었습니다](number_formatting.md#default-number-formats)
- ["Ctrl+Shift+Left Click"](hotkeys.md#selection) 조합을 사용하여 여러 흩어진 셀 범위를 선택하는 기능

### 수정 사항 {#fixes-40}

- 셀 범위에 배경색을 적용할 때 색상 선택기가 잘못 작동하는 문제 수정
- Excel 파일을 가져올 때 숫자가 잘못 파싱되는 문제 수정
- Google 또는 Excel 테이블에서 복사한 모든 데이터가 스프레드시트의 하나의 셀에 삽입되는 문제 수정
- 편집 작업이 콘솔 오류로 완료되는 [editLine:false](api/spreadsheet_editline_config.md) 속성이 잘못 작동하는 문제 수정
- `AfterValueChange` 이벤트가 두 번 호출되는 문제 수정

## 버전 3.1.4 {#version-314}

2019년 9월 19일 출시

### 수정 사항 {#fixes-314}

- 스타일 수정

## 버전 3.1.3 {#version-313}

2019년 9월 19일 출시

### 수정 사항 {#fixes-313}

- Spreadsheet가 레이아웃에 연결될 때 셀 포커스 관련 문제

## 버전 3.1.2 {#version-312}

2019년 3월 25일 출시

### 수정 사항 {#fixes-312}

- Excel 내보내기에서 텍스트 스타일 관련 문제
- 오른쪽 정렬된 텍스트의 밑줄 관련 문제

## 버전 3.1.1 {#version-311}

2019년 3월 25일 출시

### 수정 사항 {#fixes-311}

- Excel로 내보내기 관련 문제

## 버전 3.1 {#version-31}

2019년 3월 21일 출시

### 새로운 기능 {#new-functionality-31}

- [Excel에서 가져오기](loading_data.md#loading-excel-file-xlsx)
- [Excel로 내보내기](loading_data.md#exporting-data)
- [숫자 형식](number_formatting.md)
- [셀 자동 채우기](work_with_cells.md#auto-filling-cells-with-content)

### 업데이트 {#updates-31}

- [셀 범위에서의 단축키 동작](hotkeys.md)

### 수정 사항 {#fixes-31}

- 활성 셀에서의 단축키 관련 문제

## 버전 3.0.3 {#version-303}

2018년 12월 13일 출시

### 수정 사항 {#fixes-303}

- 사용자 정의 읽기 전용 모드에서 잘못된 동작
- 열/행 제거 메서드 관련 문제
- 편집 줄에서 포커스가 사라지는 문제
- 활성 셀에서의 단축키 관련 문제

## 버전 3.0.2 {#version-302}

2018년 12월 6일 출시

### 수정 사항 {#fixes-302}

- 단축키 동작 관련 문제
- 선택 핸들 위치 관련 문제
- 활성 셀에서 포커스가 사라지는 문제
- 활성 셀에서 선택이 잘못 동작하는 문제
- 활성 셀에서 단축키가 잘못 동작하는 문제
- 화살표 키로 스크롤이 잘못 동작하는 문제

## 버전 3.0.1 {#version-301}

2018년 11월 8일 출시

### 수정 사항 {#fixes-301}

- 실행 취소 작업이 잘못 동작하는 문제
- 셀 그룹에서 잘라내기-붙여넣기 작업이 잘못 동작하는 문제

## 버전 3.0 {#version-30}

2018년 10월 25일 출시

### 주요 변경 사항 {#breaking-change}

{{note 버전 3.0의 API는 API v2.1과 호환되지 않습니다.}}

이전 PHP 기반 버전과 비교하여 버전 3.0의 DHTMLX Spreadsheet는 완전한 클라이언트 측 JavaScript 컴포넌트입니다.

새 API 사용에 대한 자세한 내용은 [마이그레이션](migration.md#21---30) 문서를 확인하세요.

### 새로운 기능 {#new-functionality-30}

Spreadsheet의 API가 변경되어 더욱 편리하게 사용할 수 있게 되었습니다. 또 다른 중요한 업데이트는 컴포넌트의 전체 재설계로 Spreadsheet 인터페이스에 모던한 외관을 제공합니다. 새로운 외관과 함께 DHTMLX Spreadsheet의 사용성이 크게 향상되었습니다.

- [Spreadsheet 개요](/)
- [완전히 사용자 정의 가능한 구조와 조정 가능한 외관](customization.md)
- [완전히 새로워진 API](api/api_overview.md)
