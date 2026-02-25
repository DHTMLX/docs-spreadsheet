---
sidebar_label: Filtering data
title: Filtering data
description: You can learn about data filtering in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Filtering data

You may filter data in the spreadsheet to show only the records that meet the criteria you specify.

To activate the filtering functionality, you can use either of two ways:

- Set focus on a cell or select a range of cells and click the **Filter** button in the toolbar

![Filter via toolbar](/assets/filter_button.png)

- Set focus on a cell or select a range of cells and go to: *Data -> Filter* in the menu

![Filter via menu](/assets/filter_menu.png)

After that, a **filter** icon appears on the right side of the header of each column in the range. 

## Filtering by condition

- Click the **filter** icon of the necessary column

- Select one of the built-in comparison operators, for example, **Greater than**

- Specify the filter criterion and click **Apply**

![Filter by condition](/assets/filter_by_condition.png)

### Clearing a filter

To clear a filter, click the **filter** icon in the column header, select _By condition: **None**_, and then click **Apply**.

![Clear filter](/assets/clear_filter_bycondition.png)

## Filtering by values

- Click the **filter** icon of the necessary column

- Click the **Unselect all** button

![Filter by values](/assets/unselect_all_button.png)

- Select the check boxes for the values you want to show and click **Apply**

### Clearing a filter

To clear a filter, click the **filter** icon in the column header, click the **Select all** button, and then click **Apply**.

![Clear filter](/assets/clear_filter_by_values.png)

## Removing filters

To disable the filtering functionality, do one of the following:

- click the **Filter** button in the toolbar 
- or go to: *Data -> Filter* in the menu

The **filter** icons will disappear from the column headers and all hidden records will be displayed.