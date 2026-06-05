---
sidebar_label: DHTMLX MCP server
title: Using DHTMLX MCP server with DHTMLX Spreadsheet
description: Connect AI coding assistants to live DHTMLX Spreadsheet documentation via the DHTMLX MCP server. Setup guides for Claude Code, Cursor, Gemini CLI, and ChatGPT.
---

# Using DHTMLX MCP server with DHTMLX Spreadsheet

Building spreadsheet applications requires precise handling of formulas, cell formatting, data loading, and sheet management. When an AI tool generates DHTMLX Spreadsheet code from outdated training data, the result is incorrect formula syntax, missing API methods, and configuration options that no longer match the current library.

The DHTMLX MCP server solves this by giving AI tools direct access to the live Spreadsheet documentation. Whether you are working with [number formats](/number_formatting/), the [Sheet Manager API](/api/overview/sheetmanager_overview/), [data loading](/loading_data/), or any other part of the library, the assistant retrieves the current reference before generating a response.

#### MCP endpoint

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Spreadsheet. The same endpoint and configuration instructions work regardless of which DHTMLX component you are building with.
:::

## Where MCP server helps with Spreadsheet

The MCP server indexes the full DHTMLX Spreadsheet documentation. Common scenarios include:

- Looking up the current API for spreadsheet [methods](/api/overview/methods_overview/), [events](/api/overview/events_overview/), and [properties](/api/overview/properties_overview/), including signatures and return types.
- Generating ready-to-run Spreadsheet [initialization](/initialization/) and [configuration](/configuration/) code based on a description of what you need.
- Exploring [number formats](/number_formatting/) (common, number, currency, date, time, and others) and understanding how to define custom format masks.
- Working with [formulas and functions](/functions/): finding supported functions, understanding formula syntax, and using the calculation API.
- Configuring [columns and rows](/work_with_rows_cols/), including setting widths, hiding, and freezing.
- Applying cell and range [formatting](/data_formatting/) and styles, including text color, alignment, borders, and background colors.
- Handling [Spreadsheet events](/handling_events/) to respond to value changes, cell selection, editor actions, and sheet-level interactions.
- Exploring [multi-sheet support](/working_with_sheets/), [data loading and export](/excel_import_export/) (JSON and Excel), and integration with frameworks such as [React](/react/), [Vue](/vuejs_integration/), [Angular](/angular_integration/), and [Svelte](/svelte_integration/).

## How DHTMLX MCP server works

The DHTMLX MCP server combines Retrieval-Augmented Generation (RAG) with the Model Context Protocol (MCP) so that AI assistants can query documentation on demand rather than relying solely on training data.

For example, when you ask *"How do I define a custom number format mask for currency values in DHTMLX Spreadsheet?"*, the assistant sends the prompt via the MCP endpoint. The server matches it against the number formatting documentation, retrieves the relevant reference pages, and returns them as context. The assistant then generates code based on the current API rather than a training snapshot.

## Connect the MCP server to your AI tool

Most AI development tools let you add MCP endpoints through a CLI command or a JSON configuration file. In either case, you register the server URL.

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

For manual setup, add the following to your `mcp.json`:

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

Steps to add the server:

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

### Gemini CLI

:::info
See the [official documentation](https://geminicli.com/docs/tools/mcp-server/) for a complete guide to using MCP servers with the Gemini CLI.
:::

To add the server through the CLI:

~~~jsx
gemini mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

For manual configuration, open `~/.gemini/settings.json` and add:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Restart Gemini CLI after saving the file.

### Antigravity (Google)

:::info
The [official documentation](https://antigravity.google/docs/mcp) explains how to connect MCP servers in Antigravity.
:::

To add the server:

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

### ChatGPT

:::info
The [official documentation](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) covers MCP connector setup for ChatGPT.
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

:::warning
For intensive coding workflows, other MCP-aware tools may be a better fit.
:::

### Other tools

Many modern AI coding tools expose MCP support under labels such as "Model Context Protocol", "Context Sources", or similar. Add `https://docs.dhtmlx.com/mcp` as a custom source in the relevant settings panel.

## Privacy and data handling

The MCP server runs as a hosted service. It does not run locally, does not read files from your environment, and does not store personal user information.

Queries may be logged for debugging and service improvement purposes.

Organizations that require stricter privacy controls can request a commercial deployment option with query logging disabled. For inquiries, contact `info@dhtmlx.com`.

## Example prompts for Spreadsheet with AI

Once you connect the MCP server, phrase your prompts around a concrete goal so the assistant knows which part of the Spreadsheet API to retrieve. The prompts below are organized by task type. Copy and adapt them as needed.

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
How do I lock specific rows and columns in DHTMLX Spreadsheet?
~~~
~~~
How do I add and switch between sheets in DHTMLX Spreadsheet programmatically?
~~~
~~~
How do I handle the afterEditEnd event and get the updated cell value?
~~~

## Tips for effective Spreadsheet prompts

- **Name the target object.** Distinguish between the spreadsheet instance, a specific sheet, a cell, and a range. For example: "on the spreadsheet instance" vs. "for a specific cell range" vs. "on sheet 2". A narrower target helps the server retrieve the right reference pages.
- **Include the cell type or data format.** Prompts like "a date number format" or "a number format with two decimal places" retrieve more precise documentation than a generic "a cell". Mention the type whenever you configure columns or apply formats.
- **Add "Use the docs"** to your prompt. This phrase signals to the assistant that it should trigger an MCP lookup instead of answering from training data alone. It is especially useful when working with formulas or validation, where training data is most likely to be stale.
- **Be specific about the scope of the operation.** Spreadsheet operations can target a single cell, a range, a full column or row, or an entire sheet. State the scope explicitly (for example, "for the entire column B" or "across all sheets") so the assistant selects the correct method overload or API path.
