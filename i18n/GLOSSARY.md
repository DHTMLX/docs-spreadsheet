# Translation Glossary — All documentation template phrases

Purpose: a single reference for translations of recurring template phrases in the documentation
([../docs/](../docs/)). Consult it when translating new articles and when reviewing localizations —
the wording and markdown markup (`**...**`, `### ...`, full-width `：` for zh/ko) must match verbatim.

The **canonical** (most frequent) variant is given.

---

## 1. Section labels (bold lead before a list)

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `**Related articles:**` | `**Полезные статьи:**` | `**Verwandte Artikel:**` | `**관련 문서:**` | `**相关文章：**` |
| `**Related article:**` | `**Полезная статья:**` | `**Verwandter Artikel:**` | `**관련 문서:**` | `**相关文章：**` |
| `**Related sample:**` | `**Связанный пример:**` | `**Verwandtes Beispiel:**` | `**관련 샘플:**` | `**相关示例：**` |
| `**Related samples:**` | `**Связанные примеры:**` | `**Verwandte Beispiele:**` | `**관련 예제:**` | `**相关示例：**` |
| `**Related API:**` | `**Похожее API:**` | `**Verwandte API:**` | `**관련 API:**` | `**相关 API：**` |
| `**Change log:**` | `**Журнал изменений:**` | `**Changelog:**` | `**변경 로그:**` | `**更新日志：**` |
| `**Example:**` | `**Пример:**` | `**Beispiel:**` | `**예제:**` | `**示例：**` |
| `**Example on GitHub**` | `**Пример на GitHub**` | `**Beispiel auf GitHub**` | `**GitHub 예제**` | `**GitHub 示例**` |

## 2. Section headings (API-page template)

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `### Description` | `### Описание` | `### Beschreibung` | `### 설명` | `### 描述` |
| `### Usage` | `### Использование` | `### Verwendung` | `### 사용법` | `### 用法` |
| `### Example` | `### Пример` | `### Beispiel` | `### 예제` | `### 示例` |
| `### Parameters` | `### Параметры` | `### Parameter` | `### 매개변수` | `### 参数` |
| `### Returns` | `### Возвращаемое значение` | `### Rückgabewert` | `### 반환값` | `### 返回值` |
| `### Fixes` | `### Исправления` | `### Fehlerbehebungen` | `### 수정 사항` | `### 修复` |
| `### New functionality` | `### Новый функционал` | `### Neue Funktionalität` | `### 새로운 기능` | `### 新功能` |
| `### Updates` | `### Обновления` | `### Aktualisierungen` | `### 업데이트` | `### 更新` |
| `### Default config` | `### Конфигурация по умолчанию` | `### Standardkonfiguration` | `### 기본 설정` | `### 默认配置` |
| `### Breaking changes` | `### Критические изменения` | `### Breaking Changes` | `### 주요 변경 사항` | `### 重大变更` |
| `## Related API and guides` | `## Связанные API и гайды` | `## Verwandte API und Anleitungen` | `## 관련 API 및 가이드` | `## 相关 API 和指南` |
| `## What's next` | `## Что дальше` | `## Wie geht es weiter` | `## 다음 단계` | `## 下一步` |
| `## API reference` | `## Справочник API` | `## API-Referenz` | `## API 참조` | `## API 参考` |

## 3. Version notes (inside `**Change log:**`)

Format `<Action> in vX.X` — the "action" word is translated, the version number stays as is.

The forms below are verified against actual occurrences in the locales (e.g. `Добавлено в v5.2`,
`v5.2에서 추가`, `v5.2 中新增`). The version number is not translated.

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `Added in vX.X` | `Добавлено в vX.X` | `Hinzugefügt in vX.X` | `vX.X에서 추가` | `vX.X 中新增` |
| `Updated in vX.X` | `Обновлено в vX.X` | `Aktualisiert in vX.X` | `vX.X에서 업데이트` | `vX.X 中更新` |
| `Deprecated in vX.X` | `Устарело в vX.X` | `Veraltet in vX.X` | `vX.X에서 지원 중단` | `vX.X 中弃用` |
| `Removed in vX.X` | `Удалено в vX.X` | `Entfernt in vX.X` | `vX.X에서 제거` | `vX.X 中移除` |
| `Starting from vX.X, …` | `Начиная с vX.X, …` | `Ab vX.X …` | `vX.X부터 …` | `从 vX.X 起，…` |

## 4. Admonition block titles (`:::note`, `:::tip` …)

The titles of these blocks come **not from markdown**, but from the `theme.admonition.*` keys in
`i18n/<locale>/code.json` (in EN — Docusaurus built-in defaults). In `.md` the block type (`:::note`,
`:::tip`, …) is not translated — only the `message` in `code.json` changes.

The Docusaurus theme renders the title with `text-transform: uppercase`, so for ru/de the visible
title is always UPPERCASE, while ko/zh have no letter case. Canon: **capitalized first letter**, with
words distinct between types (no `caution`/`warning` duplicates).

| Type | ru | de | ko | zh |
|---|---|---|---|---|
| `:::note` | `Примечание` | `Hinweis` | `노트` | `备注` |
| `:::tip` | `Подсказка` | `Tipp` | `팁` | `提示` |
| `:::info` | `К сведению` | `Info` | `정보` | `信息` |
| `:::warning` | `Предупреждение` | `Warnung` | `경고` | `警告` |
| `:::caution` | `Осторожно` | `Vorsicht` | `주의` | `注意` |
| `:::danger` | `Опасно` | `Gefahr` | `위험` | `危险` |

## 5. Do not translate

Keep these terms in English across all locales (verified: identical counts in ru/de/ko/zh).

**Product & modules:**
- `Spreadsheet` — the widget/product name. *The generic concept* "spreadsheet" may be localized
  (e.g. zh `电子表格`), but the product name stays `Spreadsheet`.
- `DHTMLX`, `dhx` (the `dhx.*` code namespace)
- `Sheet Manager`, `Event Bus`

**Frameworks & libraries:**
- `React`, `Vue`, `Svelte`, `Angular`
- `Node.js`, `Vite`
- `Redux`, `Redux Toolkit`

**Languages & tooling:**
- `JavaScript`, `TypeScript`
- `npm`, `yarn`, `CLI`

**Data formats:**
- `Excel`, `XLSX`, `CSV`, `JSON`

**Services:**
- `GitHub`, `CDN`

**Other:**
- `API`
- Code identifiers (method / config / event names, `dhx.*`) inside backticks are never translated.

> Not in this list — these UI concepts **are** localized (keep English only for a literal UI label):
> `Toolbar` (→ ru "панель инструментов"), `Menu` (→ "меню"), `Fill Handle` (→ "маркер заполнения"),
> `context menu`.
