---
sidebar_label: 행과 열 작업
title: 행과 열 작업
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 행과 열 작업에 대한 내용을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 행과 열 작업 {#work-with-rows-and-columns}

DHTMLX Spreadsheet를 사용하면 툴바 버튼, 메뉴 옵션, 셀 컨텍스트 메뉴 옵션을 통해 열과 행을 추가 및 제거하고, 열 너비를 내용에 자동으로 맞추고, 열과 행을 고정/해제하고, 열과 행을 숨기거나 표시할 수 있습니다.

## 행과 열 추가/제거 {#addingremoving-rows-and-columns}

### 행 추가 {#adding-rows}

새 행을 추가하려면 다음 단계를 따르세요:

1\. 행 헤더를 클릭하거나 해당 행의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **행** 버튼을 클릭하고 *위에 행 추가* 옵션을 선택하세요.

![위에 행 추가 옵션이 강조 표시된 DHTMLX Spreadsheet 행 툴바 버튼](/img/add_row_button.png)

- **삽입** 메뉴 옵션을 선택하고 *행 -> 위에 행 추가*를 선택하세요.

![행 및 위에 행 추가 옵션이 표시된 DHTMLX Spreadsheet 삽입 메뉴](/img/add_row_menu.png)

- 행 또는 행의 셀을 마우스 오른쪽 버튼으로 클릭하고 *행 -> 위에 행 추가*를 선택하세요.

![위에 행 추가 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/add_row_context_menu.png)

### 행 제거 {#removing-rows}

행을 제거하려면 다음 단계를 따르세요:

1\. 행 헤더를 클릭하거나 행의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **행** 버튼을 클릭하고 *행 제거* 옵션을 선택하세요.

![행 제거 옵션이 강조 표시된 DHTMLX Spreadsheet 행 툴바 버튼](/img/remove_row_button.png)

- **삽입** 메뉴 옵션을 선택하고 *행 -> 행 제거*를 선택하세요.

![행 및 행 제거 옵션이 표시된 DHTMLX Spreadsheet 삽입 메뉴](/img/remove_row_menu.png)

- 행 또는 행의 셀을 마우스 오른쪽 버튼으로 클릭하고 *행 -> 행 제거*를 선택하세요.

![행 제거 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/remove_row_context_menu.png)

:::note
여러 행을 한 번에 제거하려면 행들을 선택하고, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *행 -> 행 제거 [ids]*를 선택하세요.
:::

### 열 추가 {#adding-columns}

새 열을 추가하려면 다음 단계를 따르세요:

1\. 열 헤더를 클릭하거나 해당 열의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **열** 버튼을 클릭하고 *왼쪽에 열 추가* 옵션을 선택하세요.

![왼쪽에 열 추가 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/add_column_button.png)

- **삽입** 메뉴 옵션을 선택하고 *열 -> 왼쪽에 열 추가*를 선택하세요.

![열 및 왼쪽에 열 추가 옵션이 표시된 DHTMLX Spreadsheet 삽입 메뉴](/img/add_column_menu.png)

- 열 또는 열의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> 왼쪽에 열 추가*를 선택하세요.

![열 추가 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/add_column_context_menu.png)

### 열 제거 {#removing-columns}

열을 제거하려면 다음 단계를 따르세요:

1\. 열 헤더를 클릭하거나 열의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **열** 버튼을 클릭하고 *열 제거* 옵션을 선택하세요.

![열 제거 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/remove_column_button.png)

- **삽입** 메뉴 옵션을 선택하고 *열 -> 열 제거*를 선택하세요.

![열 및 열 제거 옵션이 표시된 DHTMLX Spreadsheet 삽입 메뉴](/img/remove_column_menu.png)

- 열 또는 열의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> 열 제거*를 선택하세요.

![열 제거 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/remove_column_context_menu.png)

:::note
여러 열을 한 번에 제거하려면 열들을 선택하고, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *열 -> 열 제거 [ids]*를 선택하세요.
:::

## 열 너비 자동 맞춤 {#autofit-column-width}

열 너비를 열의 가장 긴 내용에 자동으로 맞추려면 다음 방법 중 하나를 사용할 수 있습니다:

- 테이블 헤더에서 열의 크기 조정 커서를 더블 클릭하세요.

![열 너비 자동 맞춤을 위한 크기 조정 커서가 있는 DHTMLX Spreadsheet 열 헤더](/img/resize_cursor.png)

- 또는 다음 단계를 따르세요:

1\. 열의 점 3개 아이콘을 왼쪽 클릭하세요.

![점 3개 아이콘에서 열린 DHTMLX Spreadsheet 열 컨텍스트 메뉴](/img/column_context_menu.png)

2\. *열 -> 데이터에 맞춤*을 선택하세요.

![열 너비 자동 맞춤을 위한 데이터에 맞춤 옵션이 있는 DHTMLX Spreadsheet 열 하위 메뉴](/img/column_autofit.png)

## 행과 열 고정/해제 {#freezingunfreezing-rows-and-columns}

### 행 고정 {#freezing-rows}

특정 행까지 행을 고정하려면 다음 단계를 따르세요:

1\. 행 헤더를 클릭하거나 해당 행의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **행** 버튼을 클릭하고 *[id]행까지 고정* 옵션을 선택하세요.

![행까지 고정 옵션이 강조 표시된 DHTMLX Spreadsheet 행 툴바 버튼](/img/freeze_rows_toolbar.png)

- **편집** 메뉴 옵션을 선택하고 *고정 -> [id]행까지 고정*을 선택하세요.

![행까지 고정 옵션이 있는 고정 하위 메뉴가 표시된 DHTMLX Spreadsheet 편집 메뉴](/img/freeze_rows_menu.png)

- 행 또는 행의 셀을 마우스 오른쪽 버튼으로 클릭하고 *행 -> [id]행까지 고정*을 선택하세요.

![행까지 고정 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/freeze_rows_context_menu.png)

### 행 고정 해제 {#unfreezing-rows}

(*아래 이미지에서 행은 5행까지 고정되어 있습니다*)

행 고정을 해제하려면 다음 단계 중 하나를 따르세요:

- 툴바에서 **행** 버튼을 클릭하고 *행 고정 해제* 옵션을 선택하세요.

![행 고정 해제 옵션이 강조 표시된 DHTMLX Spreadsheet 행 툴바 버튼](/img/unfreeze_rows_toolbar.png)

- **편집** 메뉴 옵션을 선택하고 *고정 -> 행 고정 해제*를 선택하세요.

![행 고정 해제 옵션이 있는 고정 하위 메뉴가 표시된 DHTMLX Spreadsheet 편집 메뉴](/img/unfreeze_rows_menu.png)

- 임의의 셀을 마우스 오른쪽 버튼으로 클릭하고 *행 -> 행 고정 해제*를 선택하세요.

![행 고정 해제 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/unfreeze_rows_context_menu.png)

### 열 고정 {#freezing-columns}

특정 열까지 열을 고정하려면 다음 단계를 따르세요:

1\. 열 헤더를 클릭하거나 해당 열의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **열** 버튼을 클릭하고 *[id]열까지 고정* 옵션을 선택하세요.

![열까지 고정 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/freeze_columns_toolbar.png)

- **편집** 메뉴 옵션을 선택하고 *고정 -> [id]열까지 고정*을 선택하세요.

![열까지 고정 옵션이 있는 고정 하위 메뉴가 표시된 DHTMLX Spreadsheet 편집 메뉴](/img/freeze_columns_menu.png)

- 열 또는 열의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> [id]열까지 고정*을 선택하세요.

![열까지 고정 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/freeze_columns_context_menu.png)

### 열 고정 해제 {#unfreezing-columns}

(*아래 이미지에서 열은 D열까지 고정되어 있습니다*)

열 고정을 해제하려면 다음 단계 중 하나를 따르세요:

- 툴바에서 **열** 버튼을 클릭하고 *열 고정 해제* 옵션을 선택하세요.

![열 고정 해제 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/unfreeze_columns_toolbar.png)

- **편집** 메뉴 옵션을 선택하고 *고정 -> 열 고정 해제*를 선택하세요.

![열 고정 해제 옵션이 있는 고정 하위 메뉴가 표시된 DHTMLX Spreadsheet 편집 메뉴](/img/unfreeze_columns_menu.png)

- 임의의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> 열 고정 해제*를 선택하세요.

![열 고정 해제 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/unfreeze_columns_context_menu.png)

## 행과 열 숨기기/표시 {#hidingshowing-rows-and-columns}

### 행 숨기기 {#hiding-rows}

행을 숨기려면 다음 단계를 따르세요:

1\. 행 헤더를 클릭하거나 해당 행의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **행** 버튼을 클릭하고 *행 숨기기 [id]* 옵션을 선택하세요.

![행 숨기기 옵션이 강조 표시된 DHTMLX Spreadsheet 행 툴바 버튼](/img/hide_rows_toolbar.png)

- 행 또는 행의 셀을 마우스 오른쪽 버튼으로 클릭하고 *행 -> 행 숨기기 [id]*를 선택하세요.

![행 숨기기 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/hide_row_context_menu.png)

### 행 표시 {#showing-rows}

숨겨진 행을 표시하려면 다음 단계 중 하나를 따르세요:

- 숨겨진 행/행들 대신 행 헤더에 나타나는 "화살표" 아이콘을 클릭하세요.

(*아래 이미지에서 8행과 11행이 숨겨져 있습니다*)

![숨겨진 행을 나타내는 화살표 아이콘이 있는 DHTMLX Spreadsheet 행 헤더](/img/show_rows.png)

- 행이나 여러 셀을 선택하여 숨겨진 행이 선택 범위에 포함되도록 한 후, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *행 -> 행 표시*를 선택하세요.

(*아래 이미지에서 8행이 숨겨져 있습니다*)

![행 표시 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/show_rows_context_menu.png)

### 열 숨기기 {#hiding-columns}

열을 숨기려면 다음 단계를 따르세요:

1\. 열 헤더를 클릭하거나 해당 열의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **열** 버튼을 클릭하고 *열 숨기기 [id]* 옵션을 선택하세요.

![열 숨기기 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/hide_columns_toolbar.png)

- 열 또는 열의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> 열 숨기기 [id]*를 선택하세요.

![열 숨기기 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/hide_columns_context_menu.png)

### 열 표시 {#showing-columns}

숨겨진 열을 표시하려면 다음 단계 중 하나를 따르세요:

- 숨겨진 열/열들 대신 열 헤더에 나타나는 "화살표" 아이콘을 클릭하세요.

(*아래 이미지에서 C열과 E열이 숨겨져 있습니다*)

![숨겨진 열을 나타내는 화살표 아이콘이 있는 DHTMLX Spreadsheet 열 헤더](/img/show_columns.png)

- 열이나 여러 셀을 선택하여 숨겨진 열이 선택 범위에 포함되도록 한 후, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *열 -> 열 표시*를 선택하세요.

(*아래 이미지에서 C열이 숨겨져 있습니다*)

![열 표시 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/show_columns_context_menu.png)
