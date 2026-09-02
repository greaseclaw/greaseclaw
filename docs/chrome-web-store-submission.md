# Chrome Web Store submission copy

This document contains reviewer-facing text for GreaseClaw `0.0.108`. The English sections are intended to be pasted into the Chrome Web Store Developer Dashboard. Chinese notes are included for the publisher's reference.

## Permission changes in 0.0.108

Compared with `0.0.103`, this release adds:

- the `userScripts` permission;
- the `notifications` permission;
- required host access for Greasy Fork, OpenUserJS, and Sleazy Fork domains, used by the Userscript installation flow.

The existing `storage`, `debugger`, `tabs`, `sidePanel`, `alarms`, FreeAPIs hosts, `raw.githubusercontent.com`, and optional HTTP/HTTPS host permissions are not new in this release.

## Single purpose

Paste into **Privacy practices → Single purpose description**:

> GreaseClaw is an AI-powered browser automation assistant. It lets users ask an agent to understand and operate webpages, save repeatable automations as scheduled tasks or Userscripts, and manage those automations from the browser. Its chat, browser tools, Userscript editor, and task runner all serve this single purpose of user-directed browser automation.

中文说明：将对话、浏览器操作、定时任务和 Userscript 统一描述为“用户主动控制的浏览器自动化”，不要把它们写成互不相关的多个产品。

## Permission justifications

### `userScripts`

> GreaseClaw includes a user-facing Userscript manager and editor. This permission is required to register and execute scripts that the user explicitly creates, imports, reviews, installs, or enables. AI-generated scripts are shown in the editor and remain under the user's control before installation. Scripts run only on URLs allowed by their metadata and by Chrome site permissions. GreaseClaw uses the documented `chrome.userScripts` API and does not execute these scripts in the extension's privileged context.

中文说明：该权限用于安装和运行用户创建、导入或经 AI 生成并确认的 Userscript。脚本只会在元数据匹配且 Chrome 已授权的网站运行。

### `notifications`

> This permission implements the standard `GM_notification` Userscript capability. A notification is created only when an installed and enabled user script explicitly requests one, so scripts can report the result of a user-configured background action. GreaseClaw does not use notifications for advertising or unsolicited promotional messages.

中文说明：新增该权限是为了兼容 Userscript 的 `GM_notification`，仅在已安装脚本主动调用时显示通知，不用于广告。

### Required host permissions for Userscript catalogs

Domains:

- `openuserjs.org` and `www.openuserjs.org`
- `greasyfork.org`, `www.greasyfork.org`, `greasyfork.cc`, and `www.greasyfork.cc`
- `sleazyfork.org`, `www.sleazyfork.org`, `sleazyfork.cc`, and `www.sleazyfork.cc`

> These are established Userscript catalog domains linked from GreaseClaw's Userscript interface. Host access is used only to detect a user click on a recognized Userscript install link and redirect that link to GreaseClaw's review and installation screen. The small content script does not read page content, collect browsing data, modify catalog listings, or install anything without a user action.

中文说明：固定脚本站点权限只用于拦截用户点击的安装链接，防止 Chrome 把 `.user.js` 当作普通 JavaScript 文件拒绝安装，然后转到 GreaseClaw 的审阅界面。

### Optional host permissions: `http://*/*` and `https://*/*`

> GreaseClaw cannot know in advance which websites a user will choose to automate or target with a Userscript. These origins are optional and are not granted at installation. GreaseClaw requests the narrowest applicable origin at runtime after a user starts an automation, imports a URL, or installs a script whose `@match`, `@include`, or `@connect` metadata requires access. Broad access is requested only when the user explicitly chooses a script with broad matching rules. If access is denied, the script or automation does not run on that site.

中文说明：全站权限是可选权限，不会在安装扩展时直接取得。通常按具体域名动态申请；只有用户选择的脚本本身声明全站或无法缩小范围的规则时，才会出现全站授权请求。

## Existing permission justifications

Keep these available in case the dashboard asks for every Manifest permission again.

### `storage`

> Stores user settings, configured model providers, conversation metadata, scheduled tasks, installed Userscripts, script values, and editor sessions so the extension can preserve the user's workspace across browser restarts.

### `tabs`

> Identifies and manages the active tabs selected by the user for browser automation, opens requested pages, switches task context, redirects recognized Userscript install links to the review screen, and shows the number of enabled scripts matching the current page.

### `sidePanel`

> Displays GreaseClaw's chat and agent interface next to the webpage the user is viewing.

### `alarms`

> Triggers scheduled browser tasks at the times and intervals configured by the user.

### `debugger`

> Connects Chrome DevTools Protocol to tabs selected for user-directed browser automation. It enables the agent to inspect page structure and state, interact with elements, capture debugging information, and complete multi-step tasks. It is activated only as part of an explicit user task and is not used for background surveillance.

### `freeapis.xyz` and `*.freeapis.xyz`

> Connects to GreaseClaw's FreeAPIs backend for user-requested sign-in, model access, usage balance, cloud tasks, account profile, and synchronized service data. All connections use HTTPS or WSS.

### `raw.githubusercontent.com`

> Downloads the public text files for Skills that a user chooses to browse or install from the built-in Skills catalog. The downloaded content is presented and stored as skill instructions; it is not loaded as privileged extension JavaScript.

## Remote code declaration

Select **Yes, I am using remote code**, then paste:

> GreaseClaw executes code supplied or selected by the user, including scripts imported from a URL and scripts generated from the user's request by an AI model. It executes this code only through Chrome's documented `chrome.userScripts` API, the Manifest V3 API specifically provided for user-supplied scripts and permitted by the Chrome Web Store MV3 policy. Code is displayed in an editable review screen and must be explicitly installed or enabled by the user. Chrome host permissions and script metadata separately control target-site access. Scripts run in the `USER_SCRIPT` world and use only a limited compatibility bridge for values, tabs, notifications, and metadata-authorized requests. GreaseClaw does not load remote JavaScript into extension pages or its service worker, and does not use `eval`, remote `<script>` tags, or a custom interpreter in the privileged extension context.

中文说明：必须选择 Yes。Manifest V3 政策明确把 Debugger API 和 User Scripts API 列为允许执行外部逻辑的两种 API，但仍然需要如实声明用途和边界。

## Reviewer test instructions

Paste into **Test instructions** and adjust the account paragraph if reviewer credentials are supplied separately:

> Userscript functionality can be tested without a GreaseClaw account.
>
> 1. Install the extension and open its details page. On Chrome 138 or later, enable **Allow User Scripts**. On Chrome 120–137, enable Chrome's **Developer mode** if required by the browser.
> 2. Click the GreaseClaw toolbar icon and choose **Userscripts**.
> 3. Click the **+** menu, create a new script, and replace the editor content with the sample below.
> 4. Click **Install**. Chrome requests access only to `https://example.com/*`; approve it.
> 5. Open `https://example.com/`. A green “GreaseClaw Userscript active” badge appears in the upper-right corner.
> 6. Return to **Userscripts** to disable, edit, or remove the script. The badge disappears after the script is disabled and the page is refreshed.
> 7. To test catalog installation, open Greasy Fork from the **+** menu and click a script's Install button. GreaseClaw opens its review screen; it does not install the script until the reviewer confirms.
>
> AI chat, the GreaseClaw model provider, account usage, and cloud tasks require a FreeAPIs account. If those features need review, use the credentials supplied in the separate reviewer credentials field. Custom providers may be tested with the reviewer's own API endpoint and key.

Sample script:

```javascript
// ==UserScript==
// @name         GreaseClaw review test
// @namespace    https://greaseclaw.com/review
// @version      1.0.0
// @description  Displays a visible badge on example.com
// @match        https://example.com/*
// @grant        none
// ==/UserScript==

(() => {
  const badge = document.createElement('div')
  badge.textContent = 'GreaseClaw Userscript active'
  Object.assign(badge.style, {
    position: 'fixed',
    top: '16px',
    right: '16px',
    zIndex: '2147483647',
    padding: '10px 14px',
    color: '#fff',
    background: '#16803c',
    borderRadius: '8px',
    font: '14px sans-serif',
  })
  document.documentElement.append(badge)
})()
```

## Data-use checklist

Permission explanations are not a substitute for the dashboard's data-use disclosures. Review the actual production behavior and privacy policy before submitting. Based on the current features, pay particular attention to declaring:

- account identifiers such as name, email address, or phone-based account ID;
- authentication/session information used to access FreeAPIs;
- website content sent to the selected AI provider when the user asks the agent to read or act on a page;
- browsing or interaction activity needed to carry out browser automation;
- personal communications when the user connects email, calendar, or messaging services;
- prompts, chat history, generated output, and cloud-task inputs/results synchronized to FreeAPIs.

State clearly which information remains local, which information is sent to FreeAPIs, and which information is sent directly to a user-configured third-party model provider. The store disclosure and public privacy policy must match the production implementation.

## Relevant Chrome documentation

- User Scripts API: https://developer.chrome.com/docs/extensions/reference/api/userScripts
- Manifest V3 remote-code requirements: https://developer.chrome.com/docs/webstore/program-policies/mv3-requirements
- Privacy practices fields: https://developer.chrome.com/docs/webstore/cws-dashboard-privacy
- User data policy: https://developer.chrome.com/docs/webstore/program-policies/user-data-faq
