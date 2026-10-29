---
sidebar_label: Conformance report (VPAT)
title: Accessibility Conformance Report
description: DHTMLX Spreadsheet Accessibility Conformance Report, based on VPAT 2.5 - conformance with WCAG 2.2 AA, Section 508, and EN 301 549.
---

# Accessibility Conformance Report

This report documents how DHTMLX Spreadsheet conforms to the major accessibility standards. It follows the **VPAT® 2.5 (International Edition)** structure. For a task-oriented overview of the accessibility features and how to configure them, see the [Accessibility](accessibility.md) guide.

**Name of Product/Version:** DHTMLX Spreadsheet v6.0.4

**Report Date:** October 2026

**Product Description:** DHTMLX Spreadsheet is a JavaScript spreadsheet component for web applications. Its interface consists of a menu bar, a toolbar, a formula bar, a cell grid with row and column headers, and sheet tabs. Its features include formulas, cell formatting, merged cells, frozen rows and columns, sorting, filtering, search, data validation, cell links, and Excel import and export. It is embedded by a host web application.

**Contact Information:** [info@dhtmlx.com](mailto:info@dhtmlx.com)

## Notes

- This report evaluates DHTMLX Spreadsheet in its **recommended accessibility configuration**: the default configuration, where the WAI-ARIA output and the keyboard navigation are always on, with the `contrast-light` or `contrast-dark` theme set through `dhx.setTheme()` or the `data-dhx-theme` attribute. The Remarks state where a conformance level depends on this configuration. See the [Accessibility](accessibility.md) guide for the setup.
- DHTMLX Spreadsheet is **web content** rendered by a host application. Page-level responsibilities (the page title, `<html lang>`, skip/bypass mechanisms, and site-wide navigation) belong to the host application and are reported as *Not Applicable* with an explanation.
- In the WCAG tables, only the **Web** response is populated. The *Electronic Docs*, *Software*, *Closed*, and *Authoring Tool* rows are *Not Applicable*: the product is not standalone (non-web) software, closed functionality, an authoring tool, or a piece of electronic documentation.
- Colors that an author applies to cells through cell styles are part of the document data and are not evaluated as part of the product.

**Evaluation Methods Used:**

- Automated testing: axe-core in the `light`, `dark`, `contrast-light` and `contrast-dark` themes, with the search bar, the list editor, the dialogs and an alert open.
- Manual code review of the component source and stylesheets: the roles and ARIA attributes of each part of the widget, the keyboard handlers and focus regions, the accessible names and their locale keys, and the theme color tokens, with contrast ratios computed for the four themes.
- Assistive-technology testing: manual passes with **NVDA + Firefox** and **JAWS + Chrome** on Windows and **VoiceOver + Safari** on macOS.
- Browser overrides: 200% / 400% zoom, reflow at 320 CSS px, and WCAG text-spacing overrides.

## Applicable standards / guidelines

| Standard / Guideline | Included in report |
|---|---|
| Web Content Accessibility Guidelines 2.0 | Level A (No) · Level AA (No) · Level AAA (No) |
| Web Content Accessibility Guidelines 2.1 | Level A (No) · Level AA (No) · Level AAA (No) |
| Web Content Accessibility Guidelines 2.2 | Level A (**Yes**) · Level AA (**Yes**) · Level AAA (No) |
| Revised Section 508 standards (published Jan 18, 2017; corrected Jan 22, 2018) | (**Yes**) |
| EN 301 549 - V3.1.1 (2019-11) and V3.2.1 (2021-03) | (**Yes**) |

*WCAG 2.0 and 2.1 are not reported separately. Criteria that WCAG marks "2.1 and 2.2" are answered because
they are part of WCAG 2.2 and are referenced by EN 301 549.*

## Terms

- **Supports:** The functionality of the product has at least one method that meets the criterion without
  known defects, or meets with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.

## WCAG 2.x report

DHTMLX Spreadsheet is web content, so only the **Web** response is populated below. "Requires an AA-conformant
theme" is a configuration dependency, not a defect. Criterion 4.1.1 Parsing is removed in WCAG 2.2 and is not reported.

### Table 1: Success Criteria, Level A

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| **1.1.1** Non-text Content | Supports | Icons are font glyphs. Icon-only controls take their accessible name from the locale or from their tooltip, for example "Add sheet", "Close search" and "Select all". The color buttons carry the name of the color, for example "Text color: dark gray". Decorative icons (lock, filter, column menu, hidden-line markers), the selection layer and the cells covered by a merged cell are hidden with `aria-hidden="true"`; the state they show is carried by text in the cell, such as "locked" and "Filter applied". |
| **1.2.1** Audio-only and Video-only (Prerecorded) | Not Applicable | The product contains no audio or video content. |
| **1.2.2** Captions (Prerecorded) | Not Applicable | No prerecorded multimedia. |
| **1.2.3** Audio Description or Media Alternative (Prerecorded) | Not Applicable | No prerecorded multimedia. |
| **1.3.1** Info and Relationships | Supports | The cells are a `grid` named "Spreadsheet" with `row`, `columnheader`, `rowheader` and `gridcell` roles. Position is exposed with `aria-rowindex`/`aria-colindex` against `aria-rowcount`/`aria-colcount`; the extent of a merged cell with `aria-colspan`/`aria-rowspan`; editability with `aria-readonly`; selection with `aria-selected` and `aria-multiselectable`. The toolbar, the menu bar and the sheet tabs are `toolbar` and `menubar` elements with names; the formatting toggles have `aria-pressed` on the toolbar and are `menuitemcheckbox` in the menu bar, and exclusive formatting options are `menuitemradio` with `aria-checked`. |
| **1.3.2** Meaningful Sequence | Supports | DOM and reading order follow the visual order: the menu bar, the toolbar, the formula bar, the cells and the sheet tabs. The cells carry their position in the sheet through `aria-rowindex`/`aria-colindex`, so the sequence is preserved when rows and columns are scrolled out of the DOM. |
| **1.3.3** Sensory Characteristics | Supports | No instruction or label relies solely on shape, size, or spatial location; interactive elements carry text or an ARIA name. |
| **1.4.1** Use of Color | Supports | Each state shown by color also has a border, a fill, a marker or text: the active cell, the selected range, search matches, the copied range and invalid cells, together with `aria-selected` or text in the cell. Rows hidden by a filter leave a gap in the row numbers. The color buttons carry the color name in their accessible name. |
| **1.4.2** Audio Control | Not Applicable | The product produces no auto-playing audio. |
| **2.1.1** Keyboard | Supports | Every command on the cells has a key, listed in the [Hot keys list](hotkeys.md); `Shift`+`F10` or the Menu key opens the context menu. `Ctrl`+`F6` moves the focus between the menu, the toolbar, the sheet and the sheet tabs. The bars, their dropdowns and popups, and the list editor work with the arrow keys, `Home`, `End`, `Enter` and `Esc`. The column width, the row height and the column filter have context menu commands. |
| **2.1.2** No Keyboard Trap | Supports | `Tab` on the last cell and `Shift`+`Tab` on the first cell of the sheet move the focus out of the cells to the next or the previous part of the page, and `Ctrl`+`F6` moves it between the parts of the Spreadsheet. In the list editor `Tab` ends the edit and `Esc` cancels it, also after the arrow keys were used. `Esc` and `Tab` close the toolbar popups and return the focus to their buttons. |
| **2.1.4** Character Key Shortcuts | Supports | Every shortcut uses a modifier key (`Ctrl`, `Alt`, `Shift`) or a non-character key (`F2`, `F6`, `F10`, `F11`, `Enter`, `Esc`, `Delete`, arrows). Typing a character on a cell enters it into the cell, which is the purpose of the cell, and doesn't run a command. |
| **2.2.1** Timing Adjustable | Not Applicable | The product sets no time limits. |
| **2.2.2** Pause, Stop, Hide | Supports | There is no auto-updating, moving, blinking or scrolling content. No animation lasts more than 5 seconds. |
| **2.3.1** Three Flashes or Below Threshold | Supports | The product contains no flashing content. |
| **2.4.1** Bypass Blocks | Not Applicable | Applies at page level; bypass mechanisms belong to the host application. |
| **2.4.2** Page Titled | Not Applicable | Page titles are the host application's responsibility. |
| **2.4.3** Focus Order | Supports | The cells are one tab stop on the active cell, and the toolbar, the menu bar and the sheet tabs are one tab stop each, in visual order. `Tab` leaves the sheet at the last and the first cell. Dialogs take the focus, keep `Tab` inside, and return the focus to the active cell when they close; menus, context menus and popups return the focus to the control that opened them, and after a text or background color is applied, the focus returns to the active cell. The active cell is scrolled into view when it receives the focus. |
| **2.4.4** Link Purpose (In Context) | Supports | A link in a cell is rendered as an `<a href>` element whose text is the link text set by the author, or the address. The cell text adds "link" when the cell is selected, and `Alt`+`Enter` opens it. |
| **2.5.1** Pointer Gestures | Supports | No operation requires a multipoint or path-based gesture; every drag operation has a non-drag alternative (see 2.5.7). |
| **2.5.2** Pointer Cancellation | Supports | Column and row resizing and the fill handle apply on release, and one undo reverts each of them. Commands of the toolbar, the menus and the sheet tabs run on `click`. |
| **2.5.3** Label in Name | Supports | Controls with visible text take that text as their accessible name: the menu items, the context menu commands, the sheet tabs and the dialog buttons. Icon buttons are named by their tooltip, and the color buttons by their tooltip followed by the color name. |
| **2.5.4** Motion Actuation | Not Applicable | No functionality is operated by device motion or user motion. |
| **3.1.1** Language of Page | Not Applicable | The document language (`<html lang>`) is set by the host application. |
| **3.2.1** On Focus | Supports | Receiving focus never changes context. A click on a column letter, a row number or the corner selects the lines and keeps the focus on the active cell. |
| **3.2.2** On Input | Supports | Changing a value does not change context. Editing a cell, choosing a value from a list or typing in the search bar updates the sheet in place, which is the documented purpose of those controls. |
| **3.2.6** Consistent Help (2.2 only) | Not Applicable | The widget provides no help mechanism; this is a page-level concern. |
| **3.3.1** Error Identification | Supports | Formula errors and invalid list values are described in the cell content, for example "Reference error. Check the cell references" and "Invalid value. Choose a value from the list". New formula errors and invalid values caused by an edit are announced through the live region, and the editor of an invalid value has `aria-invalid="true"`. |
| **3.3.2** Labels or Instructions | Supports | The cell editor is named "Cell editor, B7" and the formula bar "Formula bar, B7", with the address of the edited cell. The dialog fields are labelled, for example "Width in pixels", and the search bar buttons are named "Previous match", "Next match" and "Close search". |
| **3.3.7** Redundant Entry (2.2 only) | Supports | The product contains no multi-step process that asks for information already entered. |
| **4.1.2** Name, Role, Value | Supports | Each part exposes a role, its states and a name from the locale: the cells (`grid`, `row`, `gridcell`, `columnheader`, `rowheader`, `aria-selected`, `aria-readonly`), the toolbars and the menu bar (`toolbar`, `menubar`), the formatting, Lock and Filter buttons and the sheet tabs (`aria-pressed`), the formatting items of the menu bar (`menuitemcheckbox`, `aria-checked`), and the exclusive formats (`menuitemradio`, `aria-checked`). Alerts are `alertdialog` with `aria-modal="true"`. The list editor is a `combobox` that controls a `listbox`, with `aria-expanded` and `aria-activedescendant`. |

### Table 2: Success Criteria, Level AA

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| **1.2.4** Captions (Live) | Not Applicable | No live multimedia. |
| **1.2.5** Audio Description (Prerecorded) | Not Applicable | No prerecorded video. |
| **1.3.4** Orientation | Supports | Content is not restricted to a single display orientation. |
| **1.3.5** Identify Input Purpose | Not Applicable | The product's editors collect document data, not the user's own personal information covered by the WCAG input-purpose list. |
| **1.4.3** Contrast (Minimum) | Supports | The `contrast-light` and `contrast-dark` themes meet AA: no product text is below 4.5:1 in either theme, with the search bar, the list editor, the column width dialog and an alert open. The formula reference colors are 4.59:1 to 7.04:1 in the light and `contrast-light` themes, and 7.62:1 to 12.26:1 in the dark themes. In the default light theme, secondary text such as dialog field labels and alert text is about 3.95:1. Meeting the criterion requires selecting one of the contrast themes, and one supported method meets it. |
| **1.4.4** Resize Text | Supports | Text can be resized to 200% without loss of content or functionality; the toolbar, the formula bar, the sheet tabs and the dialogs remain usable. |
| **1.4.5** Images of Text | Supports | All text is rendered as real text. Icons are font glyphs; the product uses no raster images. |
| **1.4.10** Reflow | Supports | The cells are two-dimensional content, which the criterion exempts from reflow, and scroll both horizontally and vertically. The toolbar, the menu bar and the sheet tabs fit a width of 320 CSS px. |
| **1.4.11** Non-text Contrast | Supports | The focus indicators of the cells, the formula bar and the bar controls are 2px wide and drawn in theme colors; the ratios below are given for the default light, `contrast-light`, dark and `contrast-dark` themes. The active cell is marked by a 2px solid border in `--dhx-color-primary`: about 3.9:1, 7.7:1, 3.4:1 and 5.3:1 against the cell background. The cell and the cell editor that have the keyboard focus get a 2px outline in the same color, with the same ratios, and about 3.3:1, 6.0:1, 3.1:1 and 4.2:1 inside a selected range. The formula bar gets a 2px outline in `--dhx-spreadsheet-focus-color`: about 3.9:1, 7.7:1, 5.3:1 and 6.5:1 against its background. The controls of the toolbar, the menu bar and the sheet tabs get the same outline: about 3.7:1, 7.2:1, 3.9:1 and 4.9:1 against the bar background. All values are above the 3:1 requirement. |
| **1.4.12** Text Spacing | Supports | With the WCAG text-spacing overrides applied, no control label is cut; the sheet tab bar scrolls when the tabs grow. |
| **1.4.13** Content on Hover or Focus | Supports | Toolbar tooltips stay open while hovered and are dismissed with `Esc` without moving the pointer or the focus. The invalid-value tooltip reports an input error, stays while the cell is active, and is removed with `Esc`. |
| **2.4.5** Multiple Ways | Not Applicable | Applies to locating pages within a set of web pages; out of scope for a single embedded component (host-application concern). |
| **2.4.6** Headings and Labels | Supports | The main parts take their accessible names from the locale: "Spreadsheet" (grid), "Formatting" (toolbar), "Borders", "Search" and "Link" (the toolbars of the Border popup, the search bar and the link popup), "Main" (menu bar), "Cell" and "Sheet" (context menus of the cells and the sheet tabs), "Sheets" (sheet tab bar), "Formula bar, B7" (formula bar) and "Cell editor, B7" (cell editor). The select-all corner is named "Select all", the search bar is named "Search" and its buttons "Previous match", "Next match" and "Close search", the button that adds a sheet is named "Add sheet", and the other dialogs are named by their titles. |
| **2.4.7** Focus Visible | Supports | The keyboard focus location is visible at all times. The active cell always has a 2px solid border, and the focused cell or cell editor has a 2px outline, both in the primary color of the theme. The formula bar and the controls of the toolbar, the menu bar, the sheet tabs, the Border popup, the link popup and the search bar show a 2px focus ring in the `--dhx-spreadsheet-focus-color` color. In the color palette, the border style list, the dropdowns of the toolbar and the menu bar, and the context menus, the focused item has a 1px dashed outline. In the list editor, the focused item is highlighted with a background color. The focus indicator is shown in every built-in theme. |
| **2.4.11** Focus Not Obscured (Minimum) (2.2 only) | Supports | The active cell is scrolled into view next to the frozen rows and columns, so it is never left behind a frozen area. |
| **2.5.7** Dragging Movements (2.2 only) | Supports | Range selection has `Shift`+arrows and `Ctrl`+`Space`/`Shift`+`Space`. Column width and row height are set with the *Column width* and *Row height* commands of the context menu, with undo. Hidden rows and columns are shown with `Ctrl`+`Shift`+`9`/`0` and the *Show rows*/*Show columns* commands. Filling cells is available through the [`groupFill`](api/spreadsheet_groupfill_event.md) event, which can be bound to a context menu command. |
| **2.5.8** Target Size (Minimum) (2.2 only) | Partially Supports | The fill handle is 12 x 12 CSS px. The column and row resizers have equivalent controls, the *Column width* and *Row height* commands. The select-all corner is the 40 x 32 CSS px corner header cell, and the toolbar and menu controls are larger than 24 x 24 CSS px. |
| **3.1.2** Language of Parts | Not Applicable | The widget does not mix languages within its content; language is host-owned. |
| **3.2.3** Consistent Navigation | Not Applicable | Applies across a set of web pages; host-application concern. |
| **3.2.4** Consistent Identification | Supports | Commands with the same function have the same names and icons in the toolbar, the menu bar and the context menu, and the same keys. |
| **3.3.3** Error Suggestion | Supports | Error descriptions suggest a fix: "Check the cell references" for a reference error and "Choose a value from the list" for an invalid list value. |
| **3.3.4** Error Prevention (Legal, Financial, Data) | Supports | Every change of the data can be reverted with undo (`Ctrl`+`Z`) and repeated with redo. The host application can additionally cancel any action through the [`beforeAction`](api/spreadsheet_beforeaction_event.md) event. |
| **3.3.8** Accessible Authentication (Minimum) (2.2 only) | Not Applicable | The product performs no authentication. |
| **4.1.3** Status Messages | Supports | Status changes are announced without moving focus through a visually hidden live region outside the grid (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`). It reports the selected range, new formula errors and invalid values, refused edits of locked cells or a read-only sheet, search results, the start and end of import and export, new column widths and row heights, and a selection with no hidden rows or columns to show. The same region is available to the host application through the public [`announce()`](api/spreadsheet_announce_method.md) method, and every built-in message is localizable through the `aria_*` locale keys. |

## Revised Section 508 report

WCAG-mapped provisions are answered in the WCAG 2.x report above and referenced here. Chapter 4 (Hardware)
is Not Applicable, because DHTMLX Spreadsheet is a software component with no hardware or physical controls.

### Chapter 3: Functional Performance Criteria

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 302.1 Without Vision | Supports | Operable with a screen reader through the `grid` model with column and row headers, the cell address and descriptions read with each cell, the named toolbars and menus, the live region, and the keyboard model. See WCAG 1.3.1, 2.1.1, 4.1.2, 4.1.3. |
| 302.2 With Limited Vision | Supports | Zoom, text resize and reflow are supported, the focus is visible in every theme, and AA contrast is met by the `contrast-light` / `contrast-dark` themes. See WCAG 1.4.3, 1.4.4, 1.4.10, 1.4.11, 2.4.7. |
| 302.3 Without Perception of Color | Supports | No information is conveyed by color alone: the active cell, the selection, search matches and invalid values each carry a border, a marker or text in the cell alongside the color, and the color buttons name the color. See WCAG 1.4.1. |
| 302.4 Without Hearing | Supports | No information is conveyed by sound. |
| 302.5 With Limited Hearing | Supports | No information is conveyed by sound. |
| 302.6 Without Speech | Supports | No speech input is required to operate the product. |
| 302.7 With Limited Manipulation | Supports | Every function works from the keyboard; no path-based gesture is required, and every drag operation has a keyboard or command alternative. See WCAG 2.1.1, 2.5.1, 2.5.7, 2.5.8. |
| 302.8 With Limited Reach and Strength | Supports | Operable by keyboard; no physical reach, force or timing requirements. |
| 302.9 With Limited Language, Cognitive, and Learning Abilities | Supports | Commands have the same names in the toolbar, the menus and the context menu, formula errors are described with a way to correct them, and every change can be reverted with undo. See WCAG 3.2.4, 3.3.3, 3.3.4. |

### Chapter 5: Software

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 501.1 Scope - Incorporation of WCAG 2.0 AA | See WCAG 2.x section | See the WCAG 2.x report above. |
| 502 Interoperability with Assistive Technology | Not Applicable | Applies to non-web (platform) software. DHTMLX Spreadsheet is web content that exposes standard DOM and ARIA to the browser accessibility tree; interoperability is covered by the WCAG results (Clause 9 / 501.1). |
| 503 Applications | Not Applicable | Applies to non-web platform software; the product is web content. |
| 504 Authoring Tools | Not Applicable | DHTMLX Spreadsheet is not an authoring tool for web content: it edits spreadsheet data, not accessibility-relevant web content. |

### Chapter 6: Support Documentation and Services

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 602.2 Accessibility and Compatibility Features | Supports | The documentation describes the product's accessibility features: the [Accessibility](accessibility.md) guide covers the WAI-ARIA model, the keyboard model, the read-only mode and the selection option, the themes and the focus indicator, the [`announce()`](api/spreadsheet_announce_method.md) API and the [localizable `aria_*` strings](accessibility.md#localization); the [Hot keys list](hotkeys.md) lists every shortcut. |
| 602.3 Electronic Support Documentation | Supports (see WCAG 2.x section) | The documentation site is delivered as web content and is maintained to meet WCAG 2.2 AA. |
| 602.4 Alternate Formats for Non-Electronic Support Documentation | Not Applicable | Documentation is delivered electronically only; there are no non-electronic (print) support documents. |
| 603.2 Information on Accessibility and Compatibility Features | Supports | The product's accessibility features are documented publicly in the [Accessibility](accessibility.md) guide and can be provided by the support channel on request. |
| 603.3 Accommodation of Communication Needs | Supports | Support is provided over a text-based email channel; users interact through their own assistive technology. |

## EN 301 549 report

Clause 9 (Web) maps directly to the WCAG 2.x report above and is the substantive assessment for this web
product. Telephony, video, and hardware clauses (Clauses 6, 7, 8, 13) are Not Applicable.

### Clause 4: Functional Performance Statements

These mirror the Section 508 Chapter 3 results (same conclusions).

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 4.2.1 Usage without vision | Supports | See 508 302.1 (screen-reader operable through the grid model, the cell descriptions, the named controls, the live region and the keyboard model). |
| 4.2.2 Usage with limited vision | Supports | See 508 302.2 (AA contrast through the contrast themes, a visible focus in every theme; zoom and reflow supported). |
| 4.2.3 Usage without perception of colour | Supports | See 508 302.3 (a border, a marker or text accompanies every color cue). |
| 4.2.4 Usage without hearing | Supports | No information conveyed by sound. |
| 4.2.5 Usage with limited hearing | Supports | No information conveyed by sound. |
| 4.2.6 Usage with no or limited vocal capability | Supports | No speech input required. |
| 4.2.7 Usage with limited manipulation or strength | Supports | See 508 302.7 (keyboard-operable, no gestures, alternatives for every drag operation). |
| 4.2.8 Usage with limited reach | Supports | No physical reach requirements (software component). |
| 4.2.9 Minimize photosensitive seizure triggers | Supports | No flashing content (see WCAG 2.3.1). |
| 4.2.10 Usage with limited cognition, language or learning | Supports | See 508 302.9 (consistent command names, described errors, reversible changes). |
| 4.2.11 Privacy | Supports | Accessibility features use the same interface as everyone else; there is no separate, less-private mode. |

### Clause 5: Generic Requirements

**Mostly Not Applicable.** Clause 5 addresses closed functionality and hardware-style requirements. DHTMLX
Spreadsheet is open web software that works with the platform and browser assistive technology, so the
closed-functionality sub-clauses, biometrics (5.3), operable parts (5.5), and locking/toggle-control status
(5.6) are Not Applicable. Where a generic requirement is met through normal assistive-technology support, it
is covered by Clause 9 (Web) and the WCAG results.

### Clause 9: Web

**See the WCAG 2.x section.** Clauses 9.1.1.1-9.4.1.3 map to the WCAG 2.2 Level A/AA results in Tables 1
and 2 above.

### Clause 11: Software

**Not Applicable (assessed under Clause 9).** DHTMLX Spreadsheet is web content evaluated under Clause 9 (Web);
it is not non-web software. The WCAG-mapped software provisions (11.1.1.1-11.4.1.3) are covered by the WCAG
2.x results. 11.8 (Authoring tools) is Not Applicable, because the product is not an authoring tool.

### Clause 12: Documentation and Support Services

| Criteria | Conformance level | Remarks and explanations |
|---|---|---|
| 12.1.1 Accessibility and compatibility features | Supports | The [Accessibility](accessibility.md) guide documents the product's accessibility features: the WAI-ARIA model, the keyboard model, the read-only mode and the selection option, the themes, the focus indicator, the [`announce()`](api/spreadsheet_announce_method.md) API and the [localizable `aria_*` strings](accessibility.md#localization). |
| 12.1.2 Accessible documentation | Supports (see WCAG 2.x section) | The documentation site is delivered as web content and is maintained to meet WCAG 2.2 AA. |
| 12.2.2 Information on accessibility and compatibility features | Supports | Accessibility features are documented publicly and can be surfaced by support on request. |
| 12.2.3 Effective communication | Supports | Support is provided over a text-based email channel; users interact through their own assistive technology. |
| 12.2.4 Accessible documentation | Supports (see WCAG 2.x section) | Same basis as 12.1.2: the documentation site is maintained to meet WCAG 2.2 AA. |

## Legal disclaimer

This report is provided for informational purposes only and describes the accessibility of the named
product version as of the report date. It is provided "as is", without warranty of any kind, and does not
constitute a contractual commitment or guarantee. Accessibility support may change in subsequent releases,
and results apply to the evaluated configuration. "VPAT" and "Voluntary Product Accessibility Template" are
registered service marks of the Information Technology Industry Council (ITI).
