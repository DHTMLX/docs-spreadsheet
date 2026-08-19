---
sidebar_label: DHTMLX MCP 服务器
title: 用于公式和格式设置的 DHTMLX Spreadsheet MCP 服务器
description: DHTMLX Spreadsheet 的实时文档通过 MCP 服务器触达 AI 助手，涵盖公式、单元格格式、数据加载和工作表管理。
---

# DHTMLX Spreadsheet MCP 服务器：公式、格式和工作表 API {#dhtmlx-spreadsheet-mcp-server-formulas-formatting-and-sheet-apis}

[DHTMLX Spreadsheet](/) 应用程序的成功，取决于能否准确处理[公式](/functions/)、[单元格格式](/data_formatting/)、[数据加载](/loading_data/)和[工作表管理](/working_with_sheets/)。这些都无法仅凭记忆化的训练数据获得：需要的是当前的公式语法、Spreadsheet 目前提供的 API 方法，以及尚未变化的配置选项。

DHTMLX MCP 服务器通过让助手在其工作的任何地方直接访问最新的 Spreadsheet 参考文档，解决了这一问题。将其指向[数字格式](/number_formatting/)、[Sheet Manager API](/api/overview/sheetmanager_overview/)或[数据加载](/loading_data/)，它会在生成任何代码之前先查阅当前文档。

### MCP 端点 {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 服务器涵盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX Spreadsheet。无论你使用哪个 DHTMLX 组件进行开发，相同的端点和配置说明都同样适用。
:::

## Spreadsheet 的 MCP 服务器覆盖范围 {#mcp-server-coverage-for-spreadsheet}

DHTMLX Spreadsheet 文档的每一页都可以通过 MCP 服务器进行搜索。典型用例包括：

- 查询 Spreadsheet 当前的[方法](/api/overview/methods_overview/)、[事件](/api/overview/events_overview/)和[属性](/api/overview/properties_overview/) API，包括签名和返回类型。
- 根据你的需求描述，生成可直接运行的 Spreadsheet [初始化](/initialization/)和[配置](/configuration/)代码。
- 探索[数字格式](/number_formatting/)（常规、数字、百分比、货币、日期、时间等），并了解如何定义自定义格式掩码。
- 使用[公式和函数](/functions/)：查找支持的函数、理解公式语法，以及使用计算 API。
- 配置[列和行](/work_with_rows_cols/)，包括设置宽度、隐藏和冻结。
- 为单元格和区域应用[格式](/data_formatting/)和样式，包括文本颜色、对齐方式、边框和背景颜色。
- 处理 [Spreadsheet 事件](/handling_events/)，以响应值变化、单元格选择、编辑器操作和工作表级别的交互。
- 探索[多工作表支持](/working_with_sheets/)、[数据加载与导出](/loading_data/)（JSON 和 Excel），以及与 [React](/react/)、[Vue](/vuejs_integration/)、[Angular](/angular_integration/)、[Svelte](/svelte_integration/) 等框架的集成。

## 助手如何查询 MCP 服务器 {#how-the-assistant-queries-the-mcp-server}

每一次对 DHTMLX MCP 服务器的查询，都会经过基于 Model Context Protocol（MCP）构建的检索增强生成（RAG）流程。根据所提出问题的不同，服务器会将其交给两种工作流程之一：*Search*，为助手提供可供参考的匹配文档页面；或 *Inference*，直接阅读这些页面并自行给出答案。在此之前，助手会先判断请求中哪一部分需要查阅文档，其余部分则自行处理。

以这样一个提示为例：*“如何设置 DHTMLX Spreadsheet，使其从我公司的市场数据源中提取实时股票价格，并将其格式化为货币？”*

1. 需要查阅文档的部分：如何为一个单元格区域应用货币数字格式掩码。
2. 服务器定位到与之匹配的数字格式文档。
3. 由于该请求需要生成代码，*Search* 会处理它（如果是范围更窄的事实性问题，则会交给 *Inference* 处理）。
4. *Search* 从当前 Spreadsheet 文档的向量索引中检索匹配的页面。
5. 这些页面作为上下文返回给助手。
6. 助手利用该上下文应用格式掩码，然后凭借自身知识编写市场数据获取逻辑，而不是去猜测 Spreadsheet 的 API。

最终结果：Spreadsheet 代码生成始终锚定在当前的公式和格式化 API 之上。

## 将 MCP 服务器接入你的 AI 工具 {#wiring-the-mcp-server-into-your-ai-tool}

注册 MCP 服务器对每个工具来说都只需进行一次，具体使用 CLI 命令还是 JSON 配置片段取决于所用的工具。无论哪种方式，都需要将你的工具指向以下 URL：

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

此后，在该工具中打开的每个 Spreadsheet 项目都可以访问最新文档。

下面列出了各主流工具各自的设置步骤。

### Claude Code {#claude-code}

:::info
Claude Code 在其[官方文档](https://code.claude.com/docs/en/mcp)中记录了所有 MCP 连接选项。
:::

要通过命令行注册服务器，请运行：

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

如需手动设置，请将以下配置添加到你的 `.mcp.json` 文件中：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info
Cursor 在其[官方文档](https://cursor.com/en-US/docs/mcp)中详细介绍了其 MCP 设置方法。
:::

要添加服务器，请执行以下操作：

1. 打开 Settings（Mac 上按 `Cmd+Shift+J`，Windows/Linux 上按 `Ctrl+Shift+J`）
2. 进入 **Tools & MCP**
3. 点击 **Add Custom MCP**
4. 粘贴以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
有关 Antigravity 中 MCP 服务器集成的全部内容，请参阅[官方文档](https://antigravity.google/docs/mcp)。
:::

要将 DHTMLX MCP 服务器与 Google Antigravity 连接，需要完成以下步骤：

1. 打开命令面板
2. 输入“mcp add”
3. 选择“HTTP”
4. 提供以下值：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
如果你正在从 Gemini CLI 迁移到 Antigravity CLI，请参阅[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)。
:::

要将 DHTMLX MCP 服务器连接到 Antigravity CLI，请在以下位置之一创建 `mcp_config.json`：

- 全局：`~/.gemini/config/mcp_config.json`
- 工作区：`.agents/mcp_config.json`

添加以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

然后在终端中运行 `agy`。

### ChatGPT {#chatgpt}

:::info
有关 ChatGPT 中完整的 MCP 连接器设置，请参阅[官方文档](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)。
:::

配置连接器的步骤：

1. 进入 **Settings** → **Apps & Connectors**
2. 点击 **Advanced settings**
3. 启用 **Developer mode**
4. 返回 **Apps & Connectors**，然后点击“Create”
5. 填写连接器详情：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication：`No authentication`
6. 点击 **Create**

创建连接器后，ChatGPT 会在对话过程中从 MCP 服务器提取文档。

:::info
对于高强度的编码工作流，其他支持 MCP 的工具可能更适合。
:::

### 其他工具 {#other-tools}

在任何其他 AI 编码工具的设置中查找“Model Context Protocol”或“Context Sources”，并在其中将 `https://docs.dhtmlx.com/mcp` 添加为自定义来源。

## 数据隐私说明 {#data-privacy-notes}

MCP 服务器作为托管服务运行。它不会在本地运行，不会读取你环境中的文件，也不会存储用户的个人信息。

出于调试和服务改进的目的，查询可能会被记录。

需要更严格隐私控制的组织，可以申请禁用查询日志的商业部署方案。如需咨询，请联系 `info@dhtmlx.com`。

## 构建 Spreadsheet 的示例提示 {#sample-prompts-for-building-spreadsheets}

提示中的目标越具体，助手就越能精准定位到 Spreadsheet API 的正确部分。下面的提示按任务类别分组，可以直接复制并根据你的数据进行调整。

**加载和导出数据**

~~~
我想将 JSON 文件中的数据加载到 DHTMLX Spreadsheet 中，应该怎么做？
~~~
~~~
如何将 DHTMLX Spreadsheet 导出为 Excel 文件？应该调用哪个方法？
~~~
~~~
DHTMLX Spreadsheet 处理 JSON 数据的 load() 方法和 parse() 方法有什么区别？
~~~

**处理单元格和区域**

~~~
如何在 DHTMLX Spreadsheet 中为单元格添加带下拉列表的数据验证？请查阅文档。
~~~
~~~
如何使用 setStyle() 为 DHTMLX Spreadsheet 中的单元格区域应用背景颜色和文本格式？
~~~
~~~
如何在 DHTMLX Spreadsheet 中合并单元格并为特定区域设置对齐方式？
~~~

**公式和数据验证**

~~~
DHTMLX Spreadsheet 中有哪些可用的公式函数？如何使用自定义公式？
~~~
~~~
如何在 DHTMLX Spreadsheet 中为某一列设置下拉列表单元格类型？
~~~

**列、行和工作表**

~~~
如何在 DHTMLX Spreadsheet 中冻结指定的行和列？
~~~
~~~
如何通过编程方式在 DHTMLX Spreadsheet 中添加工作表并在工作表之间切换？
~~~
~~~
如何处理 afterEditEnd 事件并获取更新后的单元格值？
~~~

## Spreadsheet 工作的提示技巧 {#prompting-tips-for-spreadsheet-work}

- **明确目标对象。** 区分 spreadsheet 实例、特定工作表、单元格和区域。例如：“针对 spreadsheet 实例”“针对特定单元格区域”“针对工作表 2”之间的区别。目标越明确，服务器就越能检索到正确的参考页面。
- **注明单元格类型或数据格式。** 相比笼统地提到“单元格”，像“日期数字格式”或“保留两位小数的数字格式”这样的提示能检索到更精确的文档。在配置列或应用格式时，请注明具体类型。
- **在提示中加入“请查阅文档”。** 这句话会向助手表明，它应该触发一次 MCP 查询，而不是仅凭训练数据作答。在处理公式或验证等训练数据最容易过时的场景中，这一点尤其有用。
- **明确操作的作用范围。** Spreadsheet 操作可以针对单个单元格、一个区域、整列或整行，也可以针对整个工作表。请明确说明范围（例如“对整个 B 列”或“跨所有工作表”），以便助手选择正确的方法重载或 API 路径。
