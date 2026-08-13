---
sidebar_label: DHTMLX MCP 서버
title: 수식과 서식을 위한 DHTMLX Spreadsheet MCP 서버
description: 실시간 DHTMLX Spreadsheet 문서는 MCP 서버를 통해 AI 어시스턴트에게 전달되며, 수식, 셀 서식, 데이터 로딩, 시트 관리를 아우릅니다.
---

# DHTMLX Spreadsheet MCP 서버: 수식, 서식, 시트 API {#dhtmlx-spreadsheet-mcp-server-formulas-formatting-and-sheet-apis}

[DHTMLX Spreadsheet](/) 애플리케이션은 [수식](/functions/), [셀 서식](/data_formatting/), [데이터 로딩](/loading_data/), [시트 관리](/working_with_sheets/)를 정확하게 처리하는 데 달려 있습니다. 이는 암기된 학습 데이터로는 해결할 수 없습니다. 최신 수식 구문, Spreadsheet가 현재 제공하는 API 메서드, 그리고 그 이후로 변경되지 않은 구성 옵션이 필요합니다.

DHTMLX MCP 서버는 어시스턴트가 작업하는 곳이 어디든 실시간 Spreadsheet 참조 문서에 직접 접근할 수 있도록 하여 이 문제를 해결합니다. [숫자 서식](/number_formatting/), [Sheet Manager API](/api/overview/sheetmanager_overview/), [데이터 로딩](/loading_data/) 중 어느 것을 가리키든, 코드를 한 줄이라도 생성하기 전에 최신 문서를 확인합니다.

### MCP endpoint {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 서버는 DHTMLX Spreadsheet뿐만 아니라 모든 주요 DHTMLX 제품을 다룹니다. 어떤 DHTMLX 컴포넌트로 개발하든 동일한 엔드포인트와 구성 방법을 그대로 사용할 수 있습니다.
:::

## MCP server coverage for Spreadsheet {#mcp-server-coverage-for-spreadsheet}

DHTMLX Spreadsheet 문서의 모든 페이지는 MCP 서버를 통해 검색할 수 있습니다. 일반적인 사용 사례는 다음과 같습니다.

- 스프레드시트 [메서드](/api/overview/methods_overview/), [이벤트](/api/overview/events_overview/), [속성](/api/overview/properties_overview/)의 최신 API를 시그니처와 반환 타입까지 포함하여 조회합니다.
- 필요한 내용을 설명하는 것만으로 바로 실행 가능한 Spreadsheet [초기화](/initialization/) 및 [구성](/configuration/) 코드를 생성합니다.
- [숫자 서식](/number_formatting/)(일반, 숫자, 백분율, 통화, 날짜, 시간 등)을 살펴보고 사용자 지정 서식 마스크를 정의하는 방법을 파악합니다.
- [수식과 함수](/functions/) 작업: 지원되는 함수를 찾고, 수식 구문을 이해하고, 계산 API를 사용합니다.
- 너비 설정, 숨기기, 고정을 포함하여 [열과 행](/work_with_rows_cols/)을 구성합니다.
- 텍스트 색상, 정렬, 테두리, 배경색을 포함하여 셀과 범위에 [서식](/data_formatting/)과 스타일을 적용합니다.
- 값 변경, 셀 선택, 에디터 동작, 시트 수준 상호작용에 대응하기 위해 [Spreadsheet 이벤트](/handling_events/)를 처리합니다.
- [다중 시트 지원](/working_with_sheets/), [데이터 로딩 및 내보내기](/loading_data/)(JSON 및 Excel), 그리고 [React](/react/), [Vue](/vuejs_integration/), [Angular](/angular_integration/), [Svelte](/svelte_integration/)와 같은 프레임워크와의 통합을 살펴봅니다.

## How the assistant queries the MCP server {#how-the-assistant-queries-the-mcp-server}

DHTMLX MCP 서버로 전달되는 모든 쿼리는 Model Context Protocol(MCP) 기반의 Retrieval-Augmented Generation(RAG) 파이프라인을 거칩니다. 요청 내용에 따라 서버는 두 워크플로 중 하나로 처리를 넘깁니다. 어시스턴트가 참고할 수 있도록 일치하는 참조 페이지를 제공하는 *Search*, 또는 그 페이지를 읽고 직접 답변하는 *Inference*입니다. 그에 앞서 어시스턴트는 요청 중 어느 부분에 문서 조회가 필요한지 먼저 판단하고, 나머지는 스스로 처리합니다.

*"회사의 시장 데이터 피드에서 실시간 주가를 가져와 통화로 서식을 지정하도록 DHTMLX Spreadsheet를 설정하려면 어떻게 해야 하나요?"*라는 프롬프트를 예로 들어 보겠습니다.

1. 문서 조회가 필요한 부분: 셀 범위에 통화 숫자 서식 마스크를 적용하는 방법.
2. 서버는 이에 해당하는 숫자 서식 문서를 찾아냅니다.
3. 요청이 코드 생성을 필요로 하므로 *Search*가 이를 처리합니다(더 좁은 범위의 사실 확인 질문이었다면 대신 *Inference*로 전달되었을 것입니다).
4. *Search*는 최신 Spreadsheet 문서의 벡터 인덱스에서 일치하는 페이지를 검색합니다.
5. 해당 페이지는 컨텍스트로 어시스턴트에 반환됩니다.
6. 어시스턴트는 그 컨텍스트를 사용해 서식 마스크를 적용한 다음, Spreadsheet API를 추측하는 대신 자체 지식을 바탕으로 시장 데이터 조회 로직을 작성합니다.

결과적으로 Spreadsheet 코드 생성은 오늘날의 수식 및 서식 API에 근거하여 이루어집니다.

## Wiring the MCP server into your AI tool {#wiring-the-mcp-server-into-your-ai-tool}

MCP 서버 등록은 도구별로 한 번만 수행하면 되며, 도구에 따라 CLI 명령이나 JSON 구성 스니펫을 사용합니다. 어느 방식이든 도구가 다음 URL을 가리키도록 설정하세요.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

이후에는 해당 도구에서 여는 모든 Spreadsheet 프로젝트가 실시간 문서에 접근할 수 있습니다.

아래에서 널리 사용되는 도구별로 각각의 설정 단계를 안내합니다.

### Claude Code {#claude-code}

:::info
Claude Code는 모든 MCP 연결 옵션을 [공식 문서](https://code.claude.com/docs/en/mcp)에 정리해 두었습니다.
:::

명령줄에서 서버를 등록하려면 다음을 실행하세요.

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

수동으로 설정하려면 `.mcp.json`에 다음 구성을 추가하세요.

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
Cursor는 MCP 설정 방법을 [공식 문서](https://cursor.com/en-US/docs/mcp)에서 자세히 다루고 있습니다.
:::

서버를 추가하려면 다음을 따르세요.

1. 설정을 엽니다(Mac에서는 `Cmd+Shift+J`, Windows/Linux에서는 `Ctrl+Shift+J`).
2. **Tools & MCP**로 이동합니다.
3. **Add Custom MCP**를 클릭합니다.
4. 다음 구성을 붙여넣습니다.

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
Antigravity에서 MCP 서버를 통합하는 방법 전반은 [공식 문서](https://antigravity.google/docs/mcp)를 참고하세요.
:::

DHTMLX MCP 서버를 Google Antigravity에 연결하려면 다음 단계를 완료하세요.

1. 명령 팔레트를 엽니다.
2. "mcp add"를 입력합니다.
3. "HTTP"를 선택합니다.
4. 다음 값을 입력합니다.
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Gemini CLI에서 Antigravity CLI로 마이그레이션하는 경우 [관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)를 참고하세요.
:::

DHTMLX MCP 서버를 Antigravity CLI에 연결하려면 다음 위치 중 한 곳에 `mcp_config.json`을 생성하세요.

- 전역: `~/.gemini/config/mcp_config.json`
- 워크스페이스: `.agents/mcp_config.json`

다음 구성을 추가하세요.

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

그런 다음 터미널에서 `agy`를 실행하세요.

### ChatGPT {#chatgpt}

:::info
ChatGPT에서 MCP 커넥터를 설정하는 전체 방법은 [공식 문서](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)를 참고하세요.
:::

커넥터를 구성하는 단계는 다음과 같습니다.

1. **Settings** → **Apps & Connectors**로 이동합니다.
2. **Advanced settings**를 클릭합니다.
3. **Developer mode**를 활성화합니다.
4. **Apps & Connectors**로 돌아가 "Create"를 클릭합니다.
5. 커넥터 세부 정보를 입력합니다.
- 이름:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- 인증: `No authentication`
6. **Create**를 클릭합니다.

커넥터를 생성하고 나면 ChatGPT는 대화 중에 MCP 서버에서 문서를 가져옵니다.

:::info
집중적인 코딩 워크플로에는 다른 MCP 지원 도구가 더 적합할 수 있습니다.
:::

### Other tools {#other-tools}

다른 AI 코딩 도구를 사용한다면 설정에서 "Model Context Protocol" 또는 "Context Sources" 항목을 찾아 `https://docs.dhtmlx.com/mcp`를 사용자 지정 소스로 추가하세요.

## Data privacy notes {#data-privacy-notes}

MCP 서버는 호스팅 서비스로 실행됩니다. 로컬에서 실행되지 않으며, 사용자 환경의 파일을 읽지 않고, 개인 사용자 정보를 저장하지 않습니다.

쿼리는 디버깅 및 서비스 개선 목적으로 기록될 수 있습니다.

더 엄격한 개인정보 보호가 필요한 조직은 쿼리 로깅을 비활성화한 상용 배포 옵션을 요청할 수 있습니다. 문의 사항은 `info@dhtmlx.com`으로 연락해 주세요.

## Sample prompts for building spreadsheets {#sample-prompts-for-building-spreadsheets}

프롬프트의 목표가 구체적일수록 어시스턴트는 Spreadsheet API의 알맞은 부분을 더 정확하게 찾아낼 수 있습니다. 아래 프롬프트는 작업 범주별로 그룹화되어 있으며, 그대로 복사해 데이터에 맞게 조정해서 사용할 수 있습니다.

**데이터 로딩 및 내보내기**

~~~
JSON 파일에서 DHTMLX Spreadsheet로 데이터를 로드하고 싶습니다. 어떻게 해야 하나요?
~~~
~~~
DHTMLX Spreadsheet를 Excel 파일로 내보내려면 어떻게 해야 하나요? 어떤 메서드를 호출해야 하나요?
~~~
~~~
JSON 데이터에 대해 DHTMLX Spreadsheet의 load() 메서드와 parse() 메서드는 어떻게 다른가요?
~~~

**셀과 범위 다루기**

~~~
DHTMLX Spreadsheet의 셀에 드롭다운 목록이 있는 데이터 검증을 추가하려면 어떻게 해야 하나요? 문서를 참고해 주세요.
~~~
~~~
DHTMLX Spreadsheet에서 setStyle()을 사용해 셀 범위에 배경색과 텍스트 서식을 적용하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Spreadsheet에서 특정 범위의 셀을 병합하고 정렬을 설정하려면 어떻게 해야 하나요?
~~~

**수식과 데이터 검증**

~~~
DHTMLX Spreadsheet에서 사용할 수 있는 수식 함수에는 어떤 것이 있으며, 사용자 지정 수식은 어떻게 사용하나요?
~~~
~~~
DHTMLX Spreadsheet에서 열에 드롭다운 목록 셀 유형을 설정하려면 어떻게 해야 하나요?
~~~

**열, 행, 시트**

~~~
DHTMLX Spreadsheet에서 특정 행과 열을 고정하려면 어떻게 해야 하나요?
~~~
~~~
DHTMLX Spreadsheet에서 프로그래밍 방식으로 시트를 추가하고 전환하려면 어떻게 해야 하나요?
~~~
~~~
afterEditEnd 이벤트를 처리하고 업데이트된 셀 값을 가져오려면 어떻게 해야 하나요?
~~~

## Prompting tips for Spreadsheet work {#prompting-tips-for-spreadsheet-work}

- **대상 객체를 명시하세요.** 스프레드시트 인스턴스, 특정 시트, 셀, 범위를 구분하세요. 예를 들어 "스프레드시트 인스턴스에서"와 "특정 셀 범위에 대해", "시트 2에서"는 서로 다릅니다. 대상을 좁게 지정할수록 서버가 알맞은 참조 페이지를 찾는 데 도움이 됩니다.
- **셀 유형이나 데이터 서식을 포함하세요.** "날짜 숫자 서식"이나 "소수점 두 자리 숫자 서식"처럼 구체적으로 표현하면 단순히 "셀"이라고만 하는 것보다 더 정확한 문서를 가져올 수 있습니다. 열을 구성하거나 서식을 적용할 때는 항상 유형을 언급하세요.
- **프롬프트에 "Use the docs"를 추가하세요.** 이 문구는 어시스턴트에게 학습 데이터만으로 답하지 않고 MCP 조회를 실행하라는 신호를 줍니다. 학습 데이터가 오래되었을 가능성이 가장 큰 수식이나 검증 작업을 할 때 특히 유용합니다.
- **작업 범위를 구체적으로 지정하세요.** Spreadsheet 작업은 단일 셀, 범위, 전체 열이나 행, 전체 시트를 대상으로 할 수 있습니다. 어시스턴트가 올바른 메서드 오버로드나 API 경로를 선택할 수 있도록 범위를 명확히 밝히세요(예: "B열 전체에 대해" 또는 "모든 시트에서").
