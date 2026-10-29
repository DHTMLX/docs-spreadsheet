---
sidebar_label: Excel 가져오기/내보내기
title: Excel 가져오기 및 내보내기
description: Excel 파일의 데이터를 DHTMLX Spreadsheet로 가져오고 툴바 또는 파일 메뉴에서 .xlsx로 내보냅니다.
---

# Excel 가져오기/내보내기 {#excel-importexport}

## Excel에서 가져오기 {#import-from-excel}

Excel 파일에서 Spreadsheet로 데이터를 불러올 수 있습니다. 방법은 다음과 같습니다:

1\.  툴바에서 **가져오기** 버튼을 클릭하고 *Microsoft Excel (.xlsx)*를 선택합니다

![Microsoft Excel XLSX 파일을 위한 가져오기 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/import_xlsx.png)

또는:

메뉴에서 *파일 -> 다음으로 가져오기... -> Microsoft Excel (.xlsx)*로 이동합니다

![Microsoft Excel XLSX 파일의 다음으로 가져오기 옵션이 있는 DHTMLX Spreadsheet 파일 메뉴](/img/file_import.png)

2\. 컴퓨터에서 Excel 파일을 선택하면 해당 내용이 열려 있는 시트에 가져와집니다.

## Excel로 내보내기 {#export-to-excel}

Spreadsheet에 입력한 데이터를 Excel 파일로 내보낼 수 있습니다. 다음 단계를 완료합니다:

1\. 툴바에서 **내보내기** 버튼을 클릭합니다:

![Microsoft Excel XLSX로 저장하기 위한 내보내기 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/export_xlsx.png)

또는:

메뉴에서 *파일 -> 다음으로 다운로드... -> Microsoft Excel (.xlsx)*로 이동합니다

![Microsoft Excel XLSX 내보내기를 위한 다음으로 다운로드 옵션이 있는 DHTMLX Spreadsheet 파일 메뉴](/img/file_export.png)

2\. 다운로드 디렉터리에서 Spreadsheet의 데이터가 포함된 Excel 파일을 확인합니다.

스크린 리더는 가져오기와 내보내기의 시작과 끝을 안내합니다.

:::note
Excel 파일의 가져오기와 내보내기는 WebAssembly를 사용합니다. 브라우저가 WebAssembly를 지원하지 않으면 Import 및 Export 명령이 `wasmNotSupported` [로케일](localization.md#default-locale) 키의 텍스트로 메시지를 표시합니다. `"xlsx"` 유형의 [`load()`](api/spreadsheet_load_method.md) 메서드와 [`export.xlsx()`](api/export_xlsx_method.md) 메서드는 같은 텍스트의 `Error`를 발생시키며, 코드에서 이를 잡아 처리할 수 있습니다.
:::
