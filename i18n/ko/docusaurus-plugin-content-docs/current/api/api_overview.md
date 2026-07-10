---
sidebar_label: API 개요
title: API 개요
description: DHTMLX JavaScript Spreadsheet 라이브러리의 API 개요를 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# API 개요 {#api-overview}

## 생성자 {#constructor}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    rowsCount: 20,
    colsCount: 20
});
~~~

매개변수:

- HTML 컨테이너 (또는 HTML 컨테이너의 ID)
- 구성 옵션의 해시 (아래 참조)

## Spreadsheet 메서드 {#spreadsheet-methods}

| 이름                                         | 설명                                                |
| :------------------------------------------- | :-------------------------------------------------- |
| [](api/spreadsheet_addcolumn_method.md)      | @getshort(api/spreadsheet_addcolumn_method.md)      |
| [](api/spreadsheet_addformula_method.md)     | @getshort(api/spreadsheet_addformula_method.md)     |
| [](api/spreadsheet_addrow_method.md)         | @getshort(api/spreadsheet_addrow_method.md)         |
| [](api/spreadsheet_clear_method.md)          | @getshort(api/spreadsheet_clear_method.md)          |
| [](api/spreadsheet_deletecolumn_method.md)   | @getshort(api/spreadsheet_deletecolumn_method.md)   |
| [](api/spreadsheet_deleterow_method.md)      | @getshort(api/spreadsheet_deleterow_method.md)      |
| [](api/spreadsheet_eachcell_method.md)       | @getshort(api/spreadsheet_eachcell_method.md)       |
| [](api/spreadsheet_endedit_method.md)        | @getshort(api/spreadsheet_endedit_method.md)        |
| [](api/spreadsheet_fitcolumn_method.md)      | @getshort(api/spreadsheet_fitcolumn_method.md)      |
| [](api/spreadsheet_freezecols_method.md)     | @getshort(api/spreadsheet_freezecols_method.md)     |
| [](api/spreadsheet_freezerows_method.md)     | @getshort(api/spreadsheet_freezerows_method.md)     |
| [](api/spreadsheet_getfilter_method.md)      | @getshort(api/spreadsheet_getfilter_method.md)      |
| [](api/spreadsheet_getformat_method.md)      | @getshort(api/spreadsheet_getformat_method.md)      |
| [](api/spreadsheet_getformula_method.md)     | @getshort(api/spreadsheet_getformula_method.md)     |
| [](api/spreadsheet_getstyle_method.md)       | @getshort(api/spreadsheet_getstyle_method.md)       |
| [](api/spreadsheet_getvalue_method.md)       | @getshort(api/spreadsheet_getvalue_method.md)       |
| [](api/spreadsheet_hidecols_method.md)       | @getshort(api/spreadsheet_hidecols_method.md)       |
| [](api/spreadsheet_hiderows_method.md)       | @getshort(api/spreadsheet_hiderows_method.md)       |
| [](api/spreadsheet_hidesearch_method.md)     | @getshort(api/spreadsheet_hidesearch_method.md)     |
| [](api/spreadsheet_insertlink_method.md)     | @getshort(api/spreadsheet_insertlink_method.md)     |
| [](api/spreadsheet_islocked_method.md)       | @getshort(api/spreadsheet_islocked_method.md)       |
| [](api/spreadsheet_load_method.md)           | @getshort(api/spreadsheet_load_method.md)           |
| [](api/spreadsheet_lock_method.md)           | @getshort(api/spreadsheet_lock_method.md)           |
| [](api/spreadsheet_mergecells_method.md)     | @getshort(api/spreadsheet_mergecells_method.md)     |
| [](api/spreadsheet_parse_method.md)          | @getshort(api/spreadsheet_parse_method.md)          |
| [](api/spreadsheet_redo_method.md)           | @getshort(api/spreadsheet_redo_method.md)           |
| [](api/spreadsheet_serialize_method.md)      | @getshort(api/spreadsheet_serialize_method.md)      |
| [](api/spreadsheet_search_method.md)         | @getshort(api/spreadsheet_search_method.md)         |
| [](api/spreadsheet_setfilter_method.md)      | @getshort(api/spreadsheet_setfilter_method.md)      |
| [](api/spreadsheet_setformat_method.md)      | @getshort(api/spreadsheet_setformat_method.md)      |
| [](api/spreadsheet_setstyle_method.md)       | @getshort(api/spreadsheet_setstyle_method.md)       |
| [](api/spreadsheet_setvalidation_method.md)  | @getshort(api/spreadsheet_setvalidation_method.md)  |
| [](api/spreadsheet_setvalue_method.md)       | @getshort(api/spreadsheet_setvalue_method.md)       |
| [](api/spreadsheet_showcols_method.md)       | @getshort(api/spreadsheet_showcols_method.md)       |
| [](api/spreadsheet_showrows_method.md)       | @getshort(api/spreadsheet_showrows_method.md)       |
| [](api/spreadsheet_startedit_method.md)      | @getshort(api/spreadsheet_startedit_method.md)      |
| [](api/spreadsheet_undo_method.md)           | @getshort(api/spreadsheet_undo_method.md)           |
| [](api/spreadsheet_unfreezecols_method.md)   | @getshort(api/spreadsheet_unfreezecols_method.md)   |
| [](api/spreadsheet_unfreezerows_method.md)   | @getshort(api/spreadsheet_unfreezerows_method.md)   |
| [](api/spreadsheet_unlock_method.md)         | @getshort(api/spreadsheet_unlock_method.md)         |

## Spreadsheet 이벤트 {#spreadsheet-events}

| 이름                                            | 설명                                                   |
| :---------------------------------------------- | :----------------------------------------------------- |
| [](api/spreadsheet_afteraction_event.md)        | @getshort(api/spreadsheet_afteraction_event.md)        |
| [](api/spreadsheet_afterclear_event.md)         | @getshort(api/spreadsheet_afterclear_event.md)         |
| [](api/spreadsheet_afterdataloaded_event.md)    | @getshort(api/spreadsheet_afterdataloaded_event.md)    |
| [](api/spreadsheet_aftereditend_event.md)       | @getshort(api/spreadsheet_aftereditend_event.md)       |
| [](api/spreadsheet_aftereditstart_event.md)     | @getshort(api/spreadsheet_aftereditstart_event.md)     |
| [](api/spreadsheet_afterfocusset_event.md)      | @getshort(api/spreadsheet_afterfocusset_event.md)      |
| [](api/spreadsheet_afterselectionset_event.md)  | @getshort(api/spreadsheet_afterselectionset_event.md)  |
| [](api/spreadsheet_aftersheetchange_event.md)   | @getshort(api/spreadsheet_aftersheetchange_event.md)   |
| [](api/spreadsheet_beforeaction_event.md)       | @getshort(api/spreadsheet_beforeaction_event.md)       |
| [](api/spreadsheet_beforeclear_event.md)        | @getshort(api/spreadsheet_beforeclear_event.md)        |
| [](api/spreadsheet_beforeeditend_event.md)      | @getshort(api/spreadsheet_beforeeditend_event.md)      |
| [](api/spreadsheet_beforeeditstart_event.md)    | @getshort(api/spreadsheet_beforeeditstart_event.md)    |
| [](api/spreadsheet_beforefocusset_event.md)     | @getshort(api/spreadsheet_beforefocusset_event.md)     |
| [](api/spreadsheet_beforeselectionset_event.md) | @getshort(api/spreadsheet_beforeselectionset_event.md) |
| [](api/spreadsheet_beforesheetchange_event.md)  | @getshort(api/spreadsheet_beforesheetchange_event.md)  |

## Spreadsheet 속성 {#spreadsheet-properties}

| 이름                                           | 설명                                                  |
| ---------------------------------------------- | ----------------------------------------------------- |
| [](api/spreadsheet_colscount_config.md)        | @getshort(api/spreadsheet_colscount_config.md)        |
| [](api/spreadsheet_editline_config.md)         | @getshort(api/spreadsheet_editline_config.md)         |
| [](api/spreadsheet_exportmodulepath_config.md) | @getshort(api/spreadsheet_exportmodulepath_config.md) |
| [](api/spreadsheet_formats_config.md)          | @getshort(api/spreadsheet_formats_config.md)          |
| [](api/spreadsheet_importmodulepath_config.md) | @getshort(api/spreadsheet_importmodulepath_config.md) |
| [](api/spreadsheet_localization_config.md)     | @getshort(api/spreadsheet_localization_config.md)     |
| [](api/spreadsheet_menu_config.md)             | @getshort(api/spreadsheet_menu_config.md)             |
| [](api/spreadsheet_multisheets_config.md)      | @getshort(api/spreadsheet_multisheets_config.md)      |
| [](api/spreadsheet_readonly_config.md)         | @getshort(api/spreadsheet_readonly_config.md)         |
| [](api/spreadsheet_rowscount_config.md)        | @getshort(api/spreadsheet_rowscount_config.md)        |
| [](api/spreadsheet_toolbarblocks_config.md)    | @getshort(api/spreadsheet_toolbarblocks_config.md)    |


## Sheet Manager 메서드 {#sheet-manager-methods}

| 이름                                      | 설명                                             |
| :---------------------------------------- | :----------------------------------------------- |
| [](api/sheetmanager_add_method.md)       | @getshort(api/sheetmanager_add_method.md)       |
| [](api/sheetmanager_clear_method.md)     | @getshort(api/sheetmanager_clear_method.md)     |
| [](api/sheetmanager_get_method.md)       | @getshort(api/sheetmanager_get_method.md)       |
| [](api/sheetmanager_getactive_method.md) | @getshort(api/sheetmanager_getactive_method.md) |
| [](api/sheetmanager_getall_method.md)    | @getshort(api/sheetmanager_getall_method.md)    |
| [](api/sheetmanager_remove_method.md)    | @getshort(api/sheetmanager_remove_method.md)    |
| [](api/sheetmanager_setactive_method.md) | @getshort(api/sheetmanager_setactive_method.md) |

## Selection 메서드 {#selection-methods}

| 이름                                           | 설명                                                  |
| :--------------------------------------------- | :---------------------------------------------------- |
| [](api/selection_getfocusedcell_method.md)     | @getshort(api/selection_getfocusedcell_method.md)     |
| [](api/selection_getselectedcell_method.md)    | @getshort(api/selection_getselectedcell_method.md)    |
| [](api/selection_removeselectedcell_method.md) | @getshort(api/selection_removeselectedcell_method.md) |
| [](api/selection_setfocusedcell_method.md)     | @getshort(api/selection_setfocusedcell_method.md)     |
| [](api/selection_setselectedcell_method.md)    | @getshort(api/selection_setselectedcell_method.md)    |

## Events Bus 메서드 {#events-bus-methods}

| 이름                               | 설명                                      |
| ---------------------------------- | ----------------------------------------- |
| [](api/eventsbus_detach_method.md) | @getshort(api/eventsbus_detach_method.md) |
| [](api/eventsbus_fire_method.md)   | @getshort(api/eventsbus_fire_method.md)   |
| [](api/eventsbus_on_method.md)     | @getshort(api/eventsbus_on_method.md)     |

## 내보내기 메서드 {#export-methods}

| 이름                          | 설명                                 |
| ----------------------------- | ------------------------------------ |
| [](api/export_json_method.md) | @getshort(api/export_json_method.md) |
| [](api/export_xlsx_method.md) | @getshort(api/export_xlsx_method.md) |
