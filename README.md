# GreaseClaw

English | [简体中文](README.zh-CN.md)

GreaseClaw is an AI browser assistant for Chrome and Edge. It brings LLM chat, browser automation, Userscript management and AI coding, scheduled tasks, and cloud execution into one extension—so you can read pages, operate websites, write scripts, and automate repetitive work using natural language.

> Current version: `0.0.108` · Requires Chrome 120 or later

## Features

### Browser AI agent

- Ask the agent to open pages, switch tabs, click, type, scroll, and read page content using natural language.
- Summarize pages, extract structured information, fill forms, and complete multi-step browser tasks.
- Chat alongside any website in the browser side panel without repeatedly switching tabs.
- See model output and tool activity as they happen, with conversation history saved for later.
- Use page context, screenshots, and voice input in your conversations.

### Userscript management and AI coding

GreaseClaw includes a Userscript workspace inspired by Violentmonkey:

- Create, import, edit, install, enable, disable, and remove Userscripts.
- Import from a local file or URL, or discover scripts on [Greasy Fork](https://greasyfork.org/scripts) and [OpenUserJS](https://openuserjs.org/).
- Open compatible install links from Userscript sites directly in GreaseClaw.
- See how many enabled scripts match the current page in the extension menu.
- Edit code with built-in metadata parsing and syntax validation for common rules including `@match`, `@include`, `@exclude`, `@grant`, `@connect`, `@require`, `@resource`, and `@run-at`.
- Automatically disable an installed script before editing it, so unfinished changes cannot keep running on the page.

The Userscript workspace uses the same agent as regular chat, augmented with dedicated tools for reading the current script, writing a draft, and validating code. You can ask the AI to create a script from scratch, modify an existing script, explain or analyze it, or only validate it. Coding tools are called only when the task requires them.

- Choose an AI provider and a specific model.
- Continue a conversation with streaming model output and stop generation at any time.
- Keep independent coding sessions, each with its chat history and latest code snapshot.
- Use separate write and validation tools in an iterative read → edit → validate workflow.
- Manually fine-tune generated code in the central editor before installation.

### Scheduled and cloud tasks

- Create one-time, daily, or minute/hour interval browser tasks.
- Select a provider, model, and local or cloud execution mode for each task.
- Run local tasks in the current browser or let cloud tasks continue while it is closed.
- Enable, disable, test, retry, and inspect the status and result of each run.
- Follow queued, running, completed, and failed cloud tasks with action-level progress.

### Models and providers

- Use the GreaseClaw provider to select models and monitor your FreeAPIs balance.
- Configure OpenAI, Anthropic, Google, OpenRouter, Azure OpenAI, Amazon Bedrock, Ollama, LM Studio, and OpenAI-compatible services.
- Select different models for chat, Userscript coding, and scheduled tasks.
- Keep custom provider settings such as API keys in extension-local storage.

### MCP, app connections, and development workflows

- Connect external applications through MCP so the agent can work with email, calendars, and other services.
- Expose browser capabilities to compatible MCP coding agents for page inspection, UI interaction, console access, and web debugging.
- Bridge local and cloud execution while keeping the Userscript coding toolset consistent in both modes.
- Manage Skills, usage and billing, account details, language, and light/dark themes.

## Local and cloud capabilities

Userscript management, code editing, and custom providers can work directly in the extension. The following features require a FreeAPIs account:

- the GreaseClaw provider and its model balance;
- cloud tasks and cloud browser execution;
- account profile, usage, and billing information;
- app connections and synchronization that require server authorization.

When a Userscript or browser task needs access to a website, GreaseClaw requests permission for the relevant origin. Scripts and agents cannot silently access sites that have not been authorized.

## Install a release

Download the ZIP for your browser from [GitHub Releases](https://github.com/greaseclaw/greaseclaw/releases/latest):

1. Extract the downloaded ZIP.
2. Open `chrome://extensions`; use `edge://extensions` in Edge.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the extracted directory.
5. Pin GreaseClaw to reach the side panel, Userscripts, scheduled tasks, and settings quickly.

Chrome's `userScripts` API requires Developer mode. If a Userscript cannot be registered, confirm that Developer mode is enabled and grant GreaseClaw access to the script's target sites from the extension details page.

## Development

### Requirements

- [Bun](https://bun.sh/) 1.3.6 or later
- Chrome 120 or later

### Setup

```bash
cp .env.development.example .env.development
bun install
```

The development environment connects to `https://freeapis.xyz` by default. Edit the corresponding addresses in `.env.development` to use another Controller or API service.

### Start development

```bash
bun run dev
```

The current development script starts the WXT watcher and stable Chrome at `/opt/google/chrome/chrome`, using `/home/wangyi/.config/google-chrome-debug` and its existing `Profile 1`. Install the development extension in that profile from:

```text
apps/app/dist/chrome-mv3-dev
```

The launcher intentionally does not use `--load-extension`, so the extension ID, sign-in state, and permissions remain stable between development runs.

### Check and build

```bash
bun run typecheck
bun run lint
bun run --filter @greaseclaw/app test
bun run build
```

The development build is written to `apps/app/dist/chrome-mv3`.

### Create release archives

```bash
cd apps/app
bun run release
bun run release:edge
```

The Chrome and Edge ZIP files are copied to the repository-level `releases/` directory.

## Repository structure

```text
greaseclaw/
├── apps/
│   ├── app/                 # Extension pages, background worker, side panel, popup, and UI
│   └── local-browser-mcp/   # Local Browser MCP entry point
├── packages/
│   ├── browser-core/        # Browser session and execution primitives
│   ├── browser-mcp/         # Browser tools exposed to agents
│   ├── cdp-protocol/        # Chrome DevTools Protocol types
│   ├── server/              # Shared prompts and runtime contracts for the in-browser agent
│   └── shared/              # Shared constants, types, and schemas
├── scripts/dev.ts           # Development watcher and Chrome launcher
└── releases/                # Chrome and Edge release archives
```

GreaseClaw is a Bun workspace. The extension is built with React, TypeScript, WXT, and Chrome Manifest V3.

## Permissions

- `storage`: stores settings, sessions, providers, and Userscripts.
- `tabs` and `sidePanel`: reads current-tab state and presents the assistant alongside pages.
- `debugger`: provides CDP capabilities for browser automation and debugging initiated by the user.
- `alarms`: schedules local tasks.
- `userScripts`: registers and runs enabled Userscripts.
- `notifications`: reports results from background and scheduled tasks.
- Optional site access: requested only when Userscript metadata or a specific task needs an origin.

## Links

- [Releases](https://github.com/greaseclaw/greaseclaw/releases)
- [GitHub repository](https://github.com/greaseclaw/greaseclaw)
