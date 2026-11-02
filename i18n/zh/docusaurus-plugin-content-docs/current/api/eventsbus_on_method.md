---
sidebar_label: on()
title: on events bus 方法
description: 使用 events.on() 方法为 DHTMLX Spreadsheet 的内部事件绑定处理函数，例如在单元格样式更改时作出响应。
---

# on()

### 描述 {#description}

@short: 为 Spreadsheet 的内部事件附加一个处理器

### 用法 {#usage}

~~~jsx
on(name: string, callback: function): void;
~~~

### 参数 {#parameters}

- `name` - （必填）事件名称，不区分大小写
- `callback` - （必填）处理器函数

### 示例 {#example}

~~~jsx {6-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});
~~~

:::info
Spreadsheet 事件的完整列表请参见[此处](api/api_overview.md#spreadsheet-events)。

您可以为同一事件附加多个处理器，它们都将被执行。如果某些处理器返回 `false`，则相关操作将被阻止。事件处理器按附加顺序依次执行。
:::

**相关文章：** [事件处理](handling_events.md)

**相关示例：** [Spreadsheet. 事件](https://snippet.dhtmlx.com/2vkjyvsi)
