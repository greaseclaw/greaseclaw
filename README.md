# GreaseClaw

GreaseClaw 是一个运行在 Chrome 和 Edge 中的 AI 浏览器助手。它把大模型对话、浏览器自动化、Userscript 管理与 AI 编程、定时任务和云端执行整合在同一个扩展中，让用户可以用自然语言读取网页、操作页面、编写脚本并自动完成重复工作。

> 当前版本：`0.0.108` · 要求 Chrome 120 或更高版本

## 主要功能

### 浏览器 AI 智能体

- 使用自然语言让智能体打开网页、切换标签页、点击、输入、滚动和读取页面内容。
- 支持页面总结、信息提取、表单填写和多步骤浏览器任务。
- 在浏览器侧栏中边浏览边对话，无需在网页和独立聊天页面之间反复切换。
- 对话与工具执行过程实时展示，并保存会话历史，方便继续之前的任务。
- 支持页面上下文、截图和语音输入等交互方式。

### Userscript 管理与 AI 编程

GreaseClaw 内置了类似 Violentmonkey 的 Userscript 工作区：

- 新建、导入、编辑、安装、启用、停用和删除 Userscript。
- 支持从本地文件或 URL 导入，也可前往 [Greasy Fork](https://greasyfork.org/scripts) 和 [OpenUserJS](https://openuserjs.org/) 查找脚本。
- 在兼容的脚本网站点击安装时，可直接进入 GreaseClaw 的安装界面。
- 扩展菜单会显示当前页面实际生效的脚本数量。
- 内置代码编辑器、元数据解析和语法验证，支持常见的 `@match`、`@include`、`@exclude`、`@grant`、`@connect`、`@require`、`@resource` 与 `@run-at` 规则。
- 编辑已经安装并启用的脚本时会先自动停用，避免未完成的代码继续在页面上运行。

Userscript 工作区还提供专门的 AI 编程能力。它与普通聊天使用同一套智能体，只额外暴露读取当前脚本、写入草稿和验证代码等工具。用户既可以要求 AI 从零编写脚本，也可以让它分析、解释、修改或仅验证当前代码；智能体只在任务需要时调用编程工具，不会强制改写脚本。

- 可选择 AI Provider 和具体模型。
- 支持连续对话、流式模型输出和随时停止生成。
- 每个编程 Session 独立保存聊天记录及最新代码快照。
- 代码写入与代码验证是独立能力，便于形成“读取 → 修改 → 验证”的迭代流程。
- AI 生成后仍可在中央编辑器中手动微调，再进行安装。

### 定时任务与云端任务

- 创建一次性、每天执行或按分钟/小时循环的浏览器任务。
- 每个任务可单独选择 Provider、模型和本地/云端执行方式。
- 本地任务在当前浏览器中执行；云端任务可在浏览器关闭后继续运行。
- 支持启用、停用、测试、重试以及查看每次运行的状态和结果。
- 云端任务页面实时展示排队、执行、完成或失败状态以及操作进度。

### 模型与服务商

- 可使用 GreaseClaw Provider，通过 FreeAPIs 统一选择可用模型并查看额度。
- 支持配置 OpenAI、Anthropic、Google、OpenRouter、Azure OpenAI、Amazon Bedrock、Ollama、LM Studio 及 OpenAI-compatible 服务。
- 支持按对话、Userscript 编程和定时任务选择不同模型。
- API Key 等自定义 Provider 配置保存在扩展本地存储中。

### MCP、应用连接与开发工作流

- 通过 MCP 连接外部应用，让智能体处理邮件、日历和其他服务中的任务。
- 浏览器能力可提供给兼容 MCP 的编程智能体，用于读取页面、操作界面、查看控制台和完成 Web 调试。
- 支持本地与云端桥接，使 Userscript 编程工具在两种执行模式下保持一致。
- 提供 Skills 管理、使用额度、账户资料、中英文界面及亮色/暗色主题。

## 本地能力与云端能力

GreaseClaw 的脚本管理、代码编辑和自定义 Provider 可以直接在扩展中工作。以下功能需要登录 FreeAPIs：

- GreaseClaw Provider 及其模型额度；
- 云端任务与云端浏览器；
- 账户资料、用量和账单信息；
- 需要服务端授权的应用连接与数据同步。

使用 Userscript 或浏览器智能体操作网站时，扩展会按实际目标域名申请站点访问权限。未授权的网站不会被脚本或智能体静默访问。

## 安装发布版

从 [GitHub Releases](https://github.com/greaseclaw/greaseclaw/releases/latest) 下载对应浏览器的 ZIP：

1. 解压下载的文件。
2. 打开 `chrome://extensions`；Edge 使用 `edge://extensions`。
3. 开启“开发者模式”。
4. 选择“加载已解压的扩展程序”，然后选择解压后的目录。
5. 固定 GreaseClaw 图标，点击图标即可打开侧栏、Userscript、定时任务和设置等入口。

Chrome 的 `userScripts` API 需要浏览器开发者模式。若 Userscript 无法注册，请先确认开发者模式已开启，并在扩展详情页授予脚本目标网站的访问权限。

## 开发

### 环境要求

- [Bun](https://bun.sh/) 1.3.6 或更高版本
- Chrome 120 或更高版本

### 初始化

```bash
cp .env.development.example .env.development
bun install
```

开发环境默认连接 `https://freeapis.xyz`。如需连接其他 Controller 或 API 服务，请修改 `.env.development` 中对应的地址。

### 启动开发环境

```bash
bun run dev
```

当前 `scripts/dev.ts` 会启动 WXT 文件监听，并使用系统稳定版 Chrome `/opt/google/chrome/chrome`、用户数据目录 `/home/wangyi/.config/google-chrome-debug` 和其中的 `Profile 1`。该 Profile 应预先从以下目录安装开发扩展：

```text
apps/app/dist/chrome-mv3-dev
```

启动脚本不会使用 `--load-extension` 临时加载另一个扩展实例，因此登录状态、权限与扩展 ID 可以在开发过程中保持稳定。

### 检查与构建

```bash
bun run typecheck
bun run lint
bun run --filter @greaseclaw/app test
bun run build
```

开发构建输出到：

```text
apps/app/dist/chrome-mv3
```

### 生成发布包

```bash
cd apps/app
bun run release
bun run release:edge
```

Chrome 和 Edge ZIP 最终会复制到仓库根目录的 `releases/` 中。

## 项目结构

```text
greaseclaw/
├── apps/
│   ├── app/                 # 扩展页面、后台服务、侧栏、弹窗与业务 UI
│   └── local-browser-mcp/   # 本地 Browser MCP 入口
├── packages/
│   ├── browser-core/        # 浏览器会话与执行基础能力
│   ├── browser-mcp/         # 暴露给智能体的浏览器工具
│   ├── cdp-protocol/        # Chrome DevTools Protocol 类型
│   ├── server/              # 浏览器内智能体共享的提示词与运行契约
│   └── shared/              # 公共常量、类型与 Schema
├── scripts/dev.ts           # 开发监听与 Chrome 启动入口
└── releases/                # Chrome / Edge 发布包
```

GreaseClaw 使用 Bun workspace 管理多包工程，扩展基于 React、TypeScript、WXT 和 Chrome Manifest V3 构建。

## 权限说明

GreaseClaw 只申请实现核心功能所需的浏览器权限：

- `storage`：保存设置、会话、Provider 和 Userscript。
- `tabs`、`sidePanel`：读取当前标签页状态并显示侧栏。
- `debugger`：为获得用户授权的浏览器自动化与调试任务提供 CDP 能力。
- `alarms`：调度本地定时任务。
- `userScripts`：安全注册和运行已启用的 Userscript。
- `notifications`：通知后台或定时任务的执行结果。
- 可选网站权限：仅在 Userscript 元数据或具体任务需要访问某个网站时请求。

## 发布

- [最新版本与历史版本](https://github.com/greaseclaw/greaseclaw/releases)
- [项目主页](https://github.com/greaseclaw/greaseclaw)
