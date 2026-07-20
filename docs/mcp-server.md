---
sidebar_label: DHTMLX MCP server
title: DHTMLX Spreadsheet MCP server for AI assistants
description: Live DHTMLX Spreadsheet documentation reaches AI assistants through the MCP server, spanning formulas, cell formatting, data loading, and sheet management.
---

# DHTMLX Spreadsheet MCP server: live docs for AI assistants

[DHTMLX Spreadsheet](/) applications depend on getting [formulas](/functions/), [cell formatting](/data_formatting/), [data loading](/loading_data/), and [sheet management](/working_with_sheets/) exactly right. AI coding assistants trained on older data often get this wrong, producing invalid formula syntax, calling API methods that no longer exist, or applying configuration options that have since changed.

The DHTMLX MCP server fixes this by putting the live Spreadsheet reference one query away, wherever the assistant is working. Point it at [number formats](/number_formatting/), the [Sheet Manager API](/api/overview/sheetmanager_overview/), or [data loading](/loading_data/), and it checks the current documentation before generating a single line of code.

**MCP endpoint**

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Spreadsheet. The same endpoint and configuration instructions work regardless of which DHTMLX component you are building with.
:::

## MCP server coverage for Spreadsheet

Every page of the DHTMLX Spreadsheet documentation is searchable through the MCP server. Typical use cases:

- Looking up the current API for spreadsheet [methods](/api/overview/methods_overview/), [events](/api/overview/events_overview/), and [properties](/api/overview/properties_overview/), including signatures and return types.
- Generating ready-to-run Spreadsheet [initialization](/initialization/) and [configuration](/configuration/) code based on a description of what you need.
- Exploring [number formats](/number_formatting/) (common, number, percent, currency, date, time, and others) and understanding how to define custom format masks.
- Working with [formulas and functions](/functions/): finding supported functions, understanding formula syntax, and using the calculation API.
- Configuring [columns and rows](/work_with_rows_cols/), including setting widths, hiding, and freezing.
- Applying cell and range [formatting](/data_formatting/) and styles, including text color, alignment, borders, and background colors.
- Handling [Spreadsheet events](/handling_events/) to respond to value changes, cell selection, editor actions, and sheet-level interactions.
- Exploring [multi-sheet support](/working_with_sheets/), [data loading and export](/loading_data/) (JSON and Excel), and integration with frameworks such as [React](/react/), [Vue](/vuejs_integration/), [Angular](/angular_integration/), and [Svelte](/svelte_integration/).

## What happens when the assistant queries the MCP server

Two technologies power this: a Retrieval-Augmented Generation (RAG) index and the Model Context Protocol (MCP), which together let an assistant fetch live Spreadsheet reference material mid-conversation rather than relying on what it memorized in training. The server exposes this through two workflows, Search and Inference. Search hands back the matching reference pages as context, leaving the assistant to write the answer; Inference reads those pages itself and returns the finished answer, so the assistant only has to pass it on.

For example, when you ask *"How do I define a custom number format mask for currency values in DHTMLX Spreadsheet?"*, the assistant sends the prompt via the MCP endpoint. The Search workflow matches it against the number formatting documentation, retrieves the relevant reference pages, and returns them as context; the assistant then generates code based on the current API rather than a training snapshot. Inference can also take that same kind of query and skip straight to an answer: it reads the reference pages itself and hands the assistant a finished response instead of raw material to work from.

## Wiring the MCP server into your AI tool

Spreadsheet projects tend to live inside whichever AI-assisted editor a team already uses, so the server needs to reach that same tool. Most AI development tools let you add MCP endpoints through a CLI command or a JSON configuration file, and in either case the underlying step is registering the server URL.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Below are setup instructions for commonly used tools.

### Claude Code

:::info
The [official documentation](https://code.claude.com/docs/en/mcp) covers all options for connecting Claude Code with MCP servers.
:::

To register the server from the command line, run:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

For manual setup, add the following configuration to your `mcp.json`:

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

### Cursor

:::info
The [official documentation](https://cursor.com/en-US/docs/mcp) covers all MCP configuration options for Cursor.
:::

To add the server:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste the following config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Refer to the [official documentation](https://antigravity.google/docs/mcp) for full details on MCP server integration in Antigravity.
:::

These are the steps to complete for connecting DHTMLX MCP server with Google Antigravity:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
Check the [related guide](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) to learn about migration from Gemini CLI to Antigravity CLI.
:::

To connect the DHTMLX MCP server to Antigravity CLI, create `mcp_config.json` in one of these locations:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Add the following configuration:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Then run `agy` in the terminal.

### ChatGPT

:::info
The [official documentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) covers MCP connector setup for ChatGPT.
:::

Steps to configure the connector:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to **Apps & Connectors** and click "Create"
5. Fill in the connector details:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

After you create the connector, ChatGPT pulls documentation from the MCP server during conversations.

:::info
For intensive coding workflows, other MCP-aware tools may be a better fit.
:::

### Other tools

Many modern AI coding tools expose MCP support under labels such as "Model Context Protocol", "Context Sources", or similar. Add `https://docs.dhtmlx.com/mcp` as a custom source in the relevant settings panel.

## Data privacy notes

The MCP server runs as a hosted service. It does not run locally, does not read files from your environment, and does not store personal user information.

Queries may be logged for debugging and service improvement purposes.

Organizations that require stricter privacy controls can request a commercial deployment option with query logging disabled. For inquiries, contact `info@dhtmlx.com`.

## Sample prompts for building spreadsheets with AI

The more specific the goal in your prompt, the more precisely the assistant can target the right part of the Spreadsheet API. Prompts below are grouped by task category, ready to copy and adjust to your data.

**Loading and exporting data**

~~~
I want to load data into DHTMLX Spreadsheet from a JSON file. How do I do that?
~~~
~~~
How do I export a DHTMLX Spreadsheet to an Excel file? What method should I call?
~~~
~~~
How do I load JSON data into DHTMLX Spreadsheet using the load() or parse() methods?
~~~

**Working with cells and ranges**

~~~
How do I add data validation with a drop-down list to cells in DHTMLX Spreadsheet? Use the docs.
~~~
~~~
How do I use setStyle() to apply background color and text formatting to a range of cells in DHTMLX Spreadsheet?
~~~
~~~
How do I merge cells and set alignment in a specific range in DHTMLX Spreadsheet?
~~~

**Formulas and data validation**

~~~
What formula functions are available in DHTMLX Spreadsheet, and how do I use custom formulas?
~~~
~~~
How do I set a dropdown list cell type for a column in DHTMLX Spreadsheet?
~~~

**Columns, rows, and sheets**

~~~
How do I freeze specific rows and columns in DHTMLX Spreadsheet?
~~~
~~~
How do I add and switch between sheets in DHTMLX Spreadsheet programmatically?
~~~
~~~
How do I handle the afterEditEnd event and get the updated cell value?
~~~

## Prompting tips for Spreadsheet work

- **Name the target object.** Distinguish between the spreadsheet instance, a specific sheet, a cell, and a range. For example: "on the spreadsheet instance" vs. "for a specific cell range" vs. "on sheet 2". A narrower target helps the server retrieve the right reference pages.
- **Include the cell type or data format.** Prompts like "a date number format" or "a number format with two decimal places" retrieve more precise documentation than a generic "a cell". Mention the type whenever you configure columns or apply formats.
- **Add "Use the docs"** to your prompt. This phrase signals to the assistant that it should trigger an MCP lookup instead of answering from training data alone. It is especially useful when working with formulas or validation, where training data is most likely to be stale.
- **Be specific about the scope of the operation.** Spreadsheet operations can target a single cell, a range, a full column or row, or an entire sheet. State the scope explicitly (for example, "for the entire column B" or "across all sheets") so the assistant selects the correct method overload or API path.
