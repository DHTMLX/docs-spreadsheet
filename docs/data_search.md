---
sidebar_label: Searching for data
title: Searching for data
description: You can learn about data search in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Searching for data

To open a search bar, use one of two options:

- Set focus on any cell and press **Ctrl (Cmd) + F**
- Or go to: *Data* -> *Search*

![DHTMLX Spreadsheet search bar with a text input for finding data](/img/search_data.png)

Type the text to find in the search bar. The first cell that contains the text becomes active, and the counter shows the number of matches. To move between the matches, click the arrow buttons in the search bar.

The search results are updated after the cells are edited and after another sheet is opened. Screen readers announce the number of matches and the address of the current match, for example, "2 of 5, B7".

To close the search bar, press **Esc** or click the close button. The focus returns to the active cell.

To search for data with the API, use the [`search()`](api/spreadsheet_search_method.md) method.
