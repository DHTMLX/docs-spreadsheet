---
sidebar_label: 행과 열 작업
title: 행과 열 작업
description: DHTMLX Spreadsheet에서 행과 열 작업을 수행합니다. 추가 및 제거, 열 너비 자동 맞춤, 열 너비와 행 높이 설정, 고정, 숨기기와 표시를 다룹니다.
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

:::info
선택한 셀이 병합된 셀 안에 있으면 병합된 셀의 모든 행이 제거됩니다. 자세한 내용은 [셀 병합](merge_cells.md#removing-rows-and-columns-of-merged-cells) 문서를 확인하세요.
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

:::info
선택한 셀이 병합된 셀 안에 있으면 병합된 셀의 모든 열이 제거됩니다. 자세한 내용은 [셀 병합](merge_cells.md#removing-rows-and-columns-of-merged-cells) 문서를 확인하세요.
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

## 열 너비와 행 높이 설정 {#setting-column-width-and-row-height}

### 열 너비 설정 {#setting-column-width}

열의 정확한 너비를 설정하려면 다음 단계를 따르세요:

1\. 열 또는 해당 열의 셀을 선택하세요. 여러 열을 변경하려면 해당 열에 걸친 셀 범위를 선택하세요.

2\. 선택 영역을 마우스 오른쪽 버튼으로 클릭하거나 `Shift + F10` 또는 Menu 키를 누른 다음 *열 -> 열 너비*를 선택하세요. 같은 명령을 열의 점 3개 아이콘 메뉴에서도 사용할 수 있습니다.

![열 너비가 표시된 열 하위 메뉴가 있는 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/column_width_context_menu.png)

3\. *열 너비* 대화상자에서 너비를 픽셀 단위로 입력하고 **적용**을 클릭하거나 `Enter`를 누르세요.

![픽셀 단위 너비와 취소 및 적용 버튼이 있는 DHTMLX Spreadsheet 열 너비 대화상자](/img/column_width_dialog.png)

### 행 높이 설정 {#setting-row-height}

행의 정확한 높이를 설정하려면 다음 단계를 따르세요:

1\. 행 또는 해당 행의 셀을 선택하세요. 여러 행을 변경하려면 해당 행에 걸친 셀 범위를 선택하세요.

2\. 선택 영역을 마우스 오른쪽 버튼으로 클릭하거나 `Shift + F10` 또는 Menu 키를 누른 다음 *행 -> 행 높이*를 선택하세요.

![행 높이가 표시된 행 하위 메뉴가 있는 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/row_height_context_menu.png)

3\. *행 높이* 대화상자에서 높이를 픽셀 단위로 입력하고 **적용**을 클릭하거나 `Enter`를 누르세요.

![픽셀 단위 높이와 취소 및 적용 버튼이 있는 DHTMLX Spreadsheet 행 높이 대화상자](/img/row_height_dialog.png)

### 새 크기 적용 방식 {#how-the-new-size-is-applied}

대화상자에는 선택한 범위의 첫 번째 열 또는 행의 현재 크기가 표시되며, 새 크기는 해당 범위의 모든 열 또는 행에 적용됩니다. 여러 범위를 선택한 경우 마지막으로 선택한 범위가 사용됩니다.

크기는 정수 픽셀로 반올림됩니다. 열의 최소 너비는 20px, 행의 최소 높이는 10px이며, 이보다 작은 양수 값은 최솟값으로 대체됩니다. 필드가 비어 있거나 값이 양수가 아닌 동안에는 **적용** 버튼이 비활성화됩니다.

**취소** 버튼 또는 `Esc`는 변경 없이 대화상자를 닫습니다. 스크린 리더는 새 크기를 안내합니다. 예: "Column width set to 120 pixels".

### 변경 취소 {#undoing-the-change}

새 크기는 `Ctrl (Cmd) + Z`로 취소할 수 있습니다.

코드에서 변경을 처리하려면 `resizeCol` 및 `resizeRow` [액션](api/overview/actions_overview.md#list-of-actions)을 사용하세요.

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

:::info
활성 셀이 숨겨지는 행에 있으면 활성 셀은 그 아래의 첫 번째 표시된 행으로 이동하고, 선택 영역은 이 셀로 줄어듭니다. 아래에 표시된 행이 없으면 위쪽의 마지막 표시된 행으로 이동합니다.
:::

### 행 표시 {#showing-rows}

숨겨진 행을 표시하려면 다음 단계 중 하나를 따르세요:

- 숨겨진 행/행들 대신 행 헤더에 나타나는 "화살표" 아이콘을 클릭하세요.

(*아래 이미지에서 8행과 11행이 숨겨져 있습니다*)

![숨겨진 행을 나타내는 화살표 아이콘이 있는 DHTMLX Spreadsheet 행 헤더](/img/show_rows.png)

- 행이나 여러 셀을 선택하여 숨겨진 행이 선택 범위에 포함되도록 한 후, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *행 -> 행 표시*를 선택하세요.

(*아래 이미지에서 8행이 숨겨져 있습니다*)

![행 표시 옵션이 있는 행 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/show_rows_context_menu.png)

- 또는 행이나 여러 셀을 선택하여 숨겨진 행이 선택 범위에 포함되도록 한 후 `Ctrl (Cmd) + Shift + 9`를 누르세요. 예를 들어 숨겨진 3행을 표시하려면 2-4행을 선택하세요. 선택 범위에 숨겨진 행이 없으면 스크린 리더가 "No hidden rows in the selection"이라고 안내합니다

### 열 숨기기 {#hiding-columns}

열을 숨기려면 다음 단계를 따르세요:

1\. 열 헤더를 클릭하거나 해당 열의 셀을 선택하세요.

2\. 다음 작업 중 하나를 선택하세요:

- 툴바에서 **열** 버튼을 클릭하고 *열 숨기기 [id]* 옵션을 선택하세요.

![열 숨기기 옵션이 강조 표시된 DHTMLX Spreadsheet 열 툴바 버튼](/img/hide_columns_toolbar.png)

- 열 또는 열의 셀을 마우스 오른쪽 버튼으로 클릭하고 *열 -> 열 숨기기 [id]*를 선택하세요.

![열 숨기기 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/hide_columns_context_menu.png)

:::info
활성 셀이 숨겨지는 열에 있으면 활성 셀은 그 오른쪽의 첫 번째 표시된 열로 이동하고, 선택 영역은 이 셀로 줄어듭니다. 오른쪽에 표시된 열이 없으면 왼쪽의 마지막 표시된 열로 이동합니다.
:::

### 열 표시 {#showing-columns}

숨겨진 열을 표시하려면 다음 단계 중 하나를 따르세요:

- 숨겨진 열/열들 대신 열 헤더에 나타나는 "화살표" 아이콘을 클릭하세요.

(*아래 이미지에서 C열과 E열이 숨겨져 있습니다*)

![숨겨진 열을 나타내는 화살표 아이콘이 있는 DHTMLX Spreadsheet 열 헤더](/img/show_columns.png)

- 열이나 여러 셀을 선택하여 숨겨진 열이 선택 범위에 포함되도록 한 후, 마우스 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 열고 *열 -> 열 표시*를 선택하세요.

(*아래 이미지에서 C열이 숨겨져 있습니다*)

![열 표시 옵션이 있는 열 하위 메뉴가 표시된 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/show_columns_context_menu.png)

- 또는 열이나 여러 셀을 선택하여 숨겨진 열이 선택 범위에 포함되도록 한 후 `Ctrl (Cmd) + Shift + 0`을 누르세요. 선택 범위에 숨겨진 열이 없으면 스크린 리더가 "No hidden columns in the selection"이라고 안내합니다
