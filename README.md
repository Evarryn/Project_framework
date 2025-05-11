# 统一前端框架 (Unified Frontend Framework)

这是一个基于 Vue 3 和 Vite 构建的，旨在帮助团队统一前端开发风格（包括代码和美术层面）的框架雏形。
它集成了 SCSS 变量系统、通用的 UI 组件、路由管理 (Vue Router)、状态管理 (Pinia)，以及代码规范工具 (ESLint, Prettier)。

## 项目特色

- **风格统一**: 
  - 通过 `src/styles/variables.scss` 定义全局 CSS 变量，涵盖颜色、字体、间距、美术素材路径等，方便全局调用和统一修改。
  - `src/styles/index.scss` 提供基础 Reset 和全局样式。
  - `src/styles/page-common.scss` 提供页面通用布局样式。
- **组件化**: 
  - 在 `src/components/common/` 目录下提供了如 `StyledButton.vue`, `BaseCard.vue`, `BaseInput.vue` 等可复用的基础组件，均使用全局样式变量。
  - 预留 `src/components/layout/` 目录用于全局布局组件。
- **现代化技术栈**: Vue 3 (Composition API, `<script setup>`), Vite, Pinia, Vue Router。
- **代码规范**: 集成 ESLint 和 Prettier，并提供了推荐配置，确保代码质量和风格一致性。
- **合理的目录结构**: 清晰的目录划分，便于模块化开发和维护。
  - `src/assets/`: 存放美术素材和静态资源。
  - `src/router/`: 路由配置。
  - `src/store/`: Pinia 状态管理。
  - `src/views/`: 页面级组件。
  - `src/utils/`: 工具函数。
  - `src/composables/`: 可复用的 Composition API 函数。

## 项目结构概览

```
. 
├── public/                     # 静态资源，不会被 Vite 处理 (如 index.html, favicon)
├── src/
│   ├── assets/                 # 美术素材、字体等 (会被 Vite 处理)
│   │   ├── logo-placeholder.svg
│   │   └── ... (其他美术资源)
│   ├── components/
│   │   ├── common/             # 通用基础组件 (按钮、卡片、输入框等)
│   │   │   ├── StyledButton.vue
│   │   │   ├── BaseCard.vue
│   │   │   └── BaseInput.vue
│   │   └── layout/             # 全局布局组件 (页头、页脚、侧边栏等)
│   │       └── .gitkeep
│   ├── composables/            # Vue Composition API 可复用逻辑
│   │   └── .gitkeep
│   ├── router/                 # Vue Router 配置
│   │   └── index.js
│   ├── store/                  # Pinia store 模块
│   │   └── index.js
│   ├── styles/                 # 样式文件
│   │   ├── variables.scss      # 全局 SCSS 变量 (核心！)
│   │   ├── index.scss          # 全局样式入口 (Reset, body 样式等)
│   │   └── page-common.scss    # 页面通用布局样式
│   ├── utils/                  # 工具函数
│   │   └── .gitkeep
│   ├── views/                  # 页面级组件
│   │   ├── HomePage.vue
│   │   ├── AboutPage.vue
│   │   └── NotFoundPage.vue
│   ├── App.vue                 # 根组件
│   └── main.js                 # 应用入口
├── .eslintrc.cjs               # ESLint 配置文件
├── .gitignore                  # Git 忽略文件配置
├── .prettierrc.json            # Prettier 配置文件
├── .prettierignore             # Prettier 忽略文件配置
├── index.html                  # Vite 开发服务器的入口 HTML (实际在 public/index.html)
├── package.json
├── README.md                   # 就是你现在看到的这个文件
└── vite.config.js              # Vite 配置文件
```

## 如何开始

1.  **确保你已安装 Node.js (建议 LTS 版本) 和 npm/yarn/pnpm。**

2.  **克隆/下载项目到本地。**

3.  **安装依赖:**
    ```bash
    npm install 
    # 或者
    # yarn install
    # 或者
    # pnpm install
    ```

4.  **运行开发服务器:**
    ```bash
    npm run dev
    # 或者
    # yarn dev
    # 或者
    # pnpm dev
    ```
    这会在本地启动一个开发服务器 (通常是 `http://localhost:5173`)，并支持热模块替换 (HMR)。

5.  **代码检查和格式化:**
    -   检查代码规范 (ESLint):
        ```bash
        npm run lint
        ```
    -   自动格式化代码 (Prettier - 通常在保存时由编辑器插件完成，或通过命令行):
        ```bash
        npx prettier --write .  # 格式化所有支持的文件
        ```
        建议在你的代码编辑器中安装 ESLint 和 Prettier 插件，并配置保存时自动格式化。

6.  **构建生产版本:**
    ```bash
    npm run build
    # 或者
    # yarn build
    # 或者
    # pnpm build
    ```
    构建产物会输出到 `dist/` 目录。

7.  **预览生产版本:**
    ```bash
    npm run preview
    # 或者
    # yarn preview
    # 或者
    # pnpm preview
    ```
    这会在本地启动一个服务器来预览 `dist/` 目录中的构建成果。

## 主要使用方法 (针对团队成员，特别是负责对应前端模块的后端开发者)

本框架的核心目的是帮助所有团队成员（无论前端经验如何）都能方便地构建出风格统一的界面。以下是如何利用本框架进行开发的关键点：

### 1. 统一美术风格：修改 `src/assets/` 和 `src/styles/variables.scss`

这是**首要步骤**，以确保应用的视觉元素（Logo、图标、主题色等）符合你们的品牌和设计规范。

- **替换美术素材**: 

  1.  将你们团队的 Logo 文件 (如 `logo.svg` 或 `logo.png`) 放入 `src/assets/` 目录。
  2.  将你们的网站图标 (如 `favicon.ico` 或 `favicon.png`) 放入 `public/` 目录，并更新 `public/index.html` 中 `<link rel="icon" ...>` 的 `href` 路径。
  3.  将其他通用美术资源（如默认用户头像、图片占位符、特定的小图标等）也放入 `src/assets/` 目录，可以按子目录组织 (例如 `src/assets/icons/`, `src/assets/images/`)。

- **更新CSS变量中的素材路径**: 
  打开 `src/styles/variables.scss` 文件。找到靠近文件末尾的 `// 8. 美术素材路径 (Art Assets Paths)` 部分。
  修改 `--asset-*` 变量的 `url()` 值，使其指向您刚刚放入 `src/assets/` 目录中的实际文件路径。例如：

  ```scss
  // 示例 (请根据实际情况替换)
  --asset-logo-main: url('@/assets/my-company-logo.svg');      // 替换为您公司 Logo 的路径
  --asset-default-user-avatar: url('@/assets/images/default-avatar.png'); // 替换为默认头像路径
  // ... 其他美术素材路径
  ```

  这里的 `@` 是 Vite 配置的路径别名，指向 `src` 目录。

### 2. 统一颜色、字体和布局：使用 `src/styles/variables.scss` 中的CSS变量

在您编写 Vue 组件的 `<style lang="scss" scoped>` 部分或独立的 `.scss` 文件时，**强烈建议优先使用** `variables.scss` 中已经定义好的 CSS 变量来设置样式，而不是硬编码颜色值、字体大小、间距等。

- **如何使用变量**: `var(--variable-name)`，例如：

  ```scss
  .my-component {
    background-color: var(--primary-color); // 使用主色调作为背景
    color: var(--text-color-primary);       // 使用主要文字颜色
    padding: var(--spacing-md);               // 使用中等间距作为内边距
    font-size: var(--font-size-base);         // 使用基础字号
    border-radius: var(--border-radius-base); // 使用基础圆角
    box-shadow: var(--shadow-light);          // 使用浅色阴影
  }
  ```

- **可用的变量**: `variables.scss` 文件中已经按照类别（颜色、字体、间距、边框、阴影等）定义了大量常用的变量。请熟悉这些变量，并在开发中加以利用。

- **自定义主题色**: 如果需要更改应用的主题色，只需修改 `variables.scss` 中 `--primary-color` 及相关的派生色变量即可，所有使用这些变量的组件颜色会自动更新。

### 3. 使用通用组件：`src/components/common/`

框架提供了一些预设的通用组件，如按钮 (`StyledButton.vue`)、卡片 (`BaseCard.vue`)、输入框 (`BaseInput.vue`)。这些组件已经按照统一的样式规范进行了设计。

- **如何引入和使用**: 在您的页面组件 (`src/views/YourPage.vue`) 的 `<script setup>` 中导入，然后在 `<template>` 中使用。

  ```vue
  <script setup>
  import StyledButton from '@/components/common/StyledButton.vue';
  import BaseCard from '@/components/common/BaseCard.vue';
  </script>
  
  <template>
    <BaseCard title="我的卡片">
      <p>一些内容...</p>
      <StyledButton variant="primary" @click="doSomething">主要操作</StyledButton>
      <StyledButton variant="secondary" style="margin-left: 8px;">次要操作</StyledButton>
    </BaseCard>
  </template>
  ```

- **查看组件 Props**: 每个通用组件都定义了一系列 `props` (属性) 来控制其外观和行为 (例如按钮的 `variant`, `size`, `disabled`; 卡片的 `title`, `shadow`等)。您可以直接查看这些组件的源代码 (`<script setup>` 部分的 `defineProps`) 来了解可用的 props 及其作用。

- **利用插槽 (Slots)**: 通用组件通常会提供插槽 (`<slot>`)，允许您嵌入自定义内容。例如，`BaseCard` 有用于头部、底部和主要内容的插槽。

### 4. 创建新页面和路由

- **创建页面组件**: 在 `src/views/` 目录下创建新的 `.vue` 文件作为您的页面 (例如 `MyNewPage.vue`)。

- **配置路由**: 打开 `src/router/index.js` 文件。

  1. 导入您的新页面组件 (推荐使用懒加载)：

     ```javascript
     const MyNewPage = () => import('@/views/MyNewPage.vue');
     ```

  2. 在 `routes` 数组中添加新的路由配置对象：

     ```javascript
     {
       path: '/my-new-page', // 访问路径
       name: 'MyNewPage',    // 路由名称 (可选，但推荐)
       component: MyNewPage,  // 对应的组件
       meta: { title: '我的新页面' } // 页面标题 (可选)
     }
     ```

- **导航到新页面**: 可以在其他组件中使用 `<router-link to="/my-new-page">跳转到新页面</router-link>` 或编程式导航 `router.push({ name: 'MyNewPage' })`。

### 5. 状态管理 (可选，针对复杂场景)

如果页面或模块间有复杂的状态共享需求，可以使用 Pinia 进行状态管理。

- **使用现有 Store**: `src/store/index.js` 中有一个 `useAppStore` 示例，可以用来存放应用级的全局状态。在组件中：

  ```vue
  <script setup>
  import { useAppStore } from '@/store';
  const appStore = useAppStore();
  // 读取状态: appStore.theme
  // 调用 action: appStore.toggleTheme()
  </script>
  ```

- **创建新的 Store**: 如果您的模块有独立的状态，可以在 `src/store/` 目录下创建新的 store 文件 (例如 `myModuleStore.js`)，参照 `index.js` 中 `useAppStore` 的写法。

### 6. 编写页面特定样式

-   **Scoped SCSS**: 在页面组件 (`.vue` 文件) 的 `<style lang="scss" scoped>` 块中编写该页面特有的样式。
-   **利用通用页面样式**: 对于页面的整体布局结构（如容器、页头、内容区、页脚），可以使用 `src/styles/page-common.scss` 中定义的类。在页面组件的 `<style>` 块顶部通过 `@import '@/styles/page-common.scss';` 引入。
-   **优先使用 CSS 变量**: 再次强调，尽可能使用 `var(--variable-name)` 来定义颜色、字体、间距等。

### 7. 前后端协作与部署模式 (面向后端开发者的新手指南)

本前端框架设计为与后端API分离，可以灵活适应多种部署模式。以下是两种主要模式的详细步骤和说明：

#### a. 现代Web应用模式：前后端分离部署 (生产环境推荐)

**核心思想**：前端项目和后端项目是两个独立的应用，分别部署，通过API进行数据交互。

**步骤与关注点：**

1. **前端构建 (由前端执行，后端了解即可)**：

   * 前端开发者完成功能开发后，在项目根目录执行构建命令：

     ```bash
     npm run build
     ```

   * 此命令会调用 Vite 将所有前端代码 (Vue组件, SCSS, 图片等) 优化、压缩并打包成一套纯静态文件。

   * 生成的内容会存放在项目根目录下的 `dist` 文件夹中。这个文件夹里通常包含 `index.html`、若干 `.js` 文件 (JavaScript代码) 和 `.css` 文件 (样式表) 以及图片等静态资源。

   * **后端开发者通常不需要关心 `dist` 目录的具体内容，只需要知道这个目录是前端应用的最终产物。**

2. **前端部署 (通常由运维或前端执行，后端了解即可)**：

   *   将上一步生成的 `dist` 文件夹内的**所有内容**，部署到一个静态文件服务器。
   *   常见的静态文件服务器有：
       *   Nginx (非常流行，高性能)
       *   Apache HTTP Server
       *   云服务商的对象存储服务 (如 AWS S3, Google Cloud Storage, 阿里云 OSS) 通常可以配置为静态网站托管，并配合CDN加速。
       *   专门的静态托管平台 (如 Netlify, Vercel, GitHub Pages)。
   *   部署后，前端应用会有一个独立的访问URL，例如 `https://www.your-app.com` 或 `https://app.your-service.com`。

3. **后端部署 (后端开发者核心工作)**：

   *   您的后端API服务 (例如用Python Django/Flask, Java Spring Boot, Node.js Express 等开发的) 按照您熟悉的方式独立部署到您的服务器上。
   *   后端服务会有自己独立的API访问基地址，例如 `https://api.your-app.com/v1/` 或 `https://service-api.your-company.com/`。

4. **前后端通信：API调用 (前端实现，后端定义)**：

   * 前端应用加载到用户浏览器后，会通过 JavaScript (通常使用 `fetch` API 或 `axios` 库) 向您后端部署的API地址发送HTTP/HTTPS请求来获取或提交数据。

   * **示例 (前端代码中的API调用，后端开发者了解即可)**：
     假设后端有一个获取用户列表的API `https://api.your-app.com/v1/users`，前端可能会这样调用：

     ```javascript
     // 在某个 Vue 组件的方法中
     async function fetchUsers() {
       try {
         const response = await fetch('https://api.your-app.com/v1/users', {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             // 如果需要认证，可能会在这里添加 Authorization 头，例如 Bearer Token
             // 'Authorization': 'Bearer your_jwt_token_here'
           }
         });
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         console.log(data); // 获取到的用户数据
         // ...后续处理数据的逻辑
       } catch (error) {
         console.error("获取用户数据失败:", error);
       }
     }
     ```

5. **后端API的关键职责 (后端开发者核心工作)**：

   *   **清晰的API接口**：设计和实现RESTful或GraphQL等风格的API接口。确保接口路径、请求方法 (GET, POST, PUT, DELETE等)、请求参数、响应数据结构都清晰、一致且稳定。
   *   **API文档**：提供详细的API文档。这是前后端协作的桥梁。推荐使用工具如 Swagger (OpenAPI)、ApiDoc、Postman Documentation等。文档应至少包含：
       *   接口URL和HTTP方法
       *   请求参数 (路径参数、查询参数、请求体格式和字段说明)
       *   响应数据格式 (JSON结构和字段说明)
       *   可能的HTTP状态码及其含义
       *   认证和授权方式
   *   **CORS配置 (非常重要！)**：由于前端应用和后端API部署在不同的域名或端口，浏览器会实行"同源策略"限制跨域请求。您的后端API服务器**必须**正确配置CORS (Cross-Origin Resource Sharing)。
       *   **什么是CORS？** 它是一种机制，允许服务器声明哪些源站 (origin，即协议+域名+端口) 有权限访问其资源。
       *   **如何配置？** 具体配置方式取决于您的后端框架。通常需要在API的HTTP响应头中添加以下头部信息：
           *   `Access-Control-Allow-Origin`: 指定允许访问的源。例如，设置为 `https://www.your-app.com` (前端应用的域名)。在开发初期或不确定时，有时会用 `*` (允许任何源)，但**生产环境强烈不推荐使用 `*`**，应指定具体的前端域名以保证安全。
           *   `Access-Control-Allow-Methods`: 指定允许的HTTP方法，例如 `GET, POST, PUT, DELETE, OPTIONS`。
           *   `Access-Control-Allow-Headers`: 指定允许的请求头，例如 `Content-Type, Authorization`。
           *   `Access-Control-Allow-Credentials` (可选): 如果前端请求需要携带凭证 (如Cookies)，则设为 `true`，同时 `Access-Control-Allow-Origin` 不能为 `*`。
           *   `Access-Control-Max-Age` (可选): 指定预检请求 (OPTIONS请求) 的结果可以被缓存多久。
       *   **注意 `OPTIONS` 请求**：对于非简单请求 (例如带自定义头的POST请求)，浏览器会先发送一个HTTP `OPTIONS` 方法的"预检请求"到API服务器，以确认实际请求是否安全。您的后端API服务器必须能正确响应该 `OPTIONS` 请求，并返回上述CORS头部。
   *   **认证与授权**：实现用户登录、会话管理、接口权限控制等。前端会在请求头中携带认证信息 (如JWT)。
   *   **数据校验与错误处理**：对前端提交的数据进行严格校验，并返回规范的错误信息和HTTP状态码。

**总结 (前后端分离模式下后端职责)**：您主要负责提供稳定、安全、文档清晰的API，并正确处理CORS。前端负责调用这些API并展示数据。

#### b. 本地集成开发模式：使用Vite代理 (开发阶段推荐)

**核心思想**：在本地开发时，前端开发服务器 (Vite) 充当一个代理，将前端发往特定路径的API请求转发到您本地运行的后端服务，从而避免浏览器跨域问题，简化开发流程。

**步骤与关注点：**

1. **启动您的本地后端服务 (后端开发者执行)**：

   *   像往常一样，在您的开发机器上启动后端API服务。
   *   确保它正在监听一个特定的IP地址 (通常是 `localhost` 或 `127.0.0.1`) 和端口号 (例如 `8000`, `8080`, `3000` 等，具体取决于您的后端配置)。
   *   **记录下您的后端服务访问地址**，例如 `http://localhost:8000`。

2. **启动前端开发服务器 (由负责前端模块的开发者执行，或您自己执行)**：

   * 在前端项目根目录下，执行：

     ```bash
     npm run dev
     ```

   * Vite 开发服务器会启动，通常监听 `http://localhost:5173` (如果端口被占用，Vite会自动尝试下一个可用端口，并在控制台输出实际地址)。

3. **配置Vite代理 (关键步骤，通常由前端开发者配置，但后端开发者需了解并配合)**：

   * 打开前端项目根目录下的 `vite.config.js` 文件。

   * 找到 `server` 配置块，在其中添加或修改 `proxy` 对象。

   * **目标**：我们希望前端代码中发往某个特定前缀 (例如 `/api`) 的请求，能够被Vite开发服务器拦截，并转发到您在第1步中启动的本地后端服务。

   * **`vite.config.js` 配置示例**：

     ```javascript
     import { defineConfig } from 'vite';
     import vue from '@vitejs/plugin-vue';
     import path from 'path'; // 如果用到了 path.resolve
     export default defineConfig({
       plugins: [vue()],
       resolve: {
         alias: {
           '@': path.resolve(__dirname, './src')
         }
       },
       css: {
         preprocessorOptions: {
           scss: {
             additionalData: `@import "@/styles/variables.scss";`
           }
         }
       },
       server: {
         host: 'localhost', // 或者 '0.0.0.0' 允许局域网访问
         port: 5173,      // Vite 开发服务器端口 (可自定义)
         proxy: {
           // 关键的代理配置区域
           // 规则1: 将所有以 '/api' 开头的请求代理到您的本地后端服务
           '/api': {
             target: 'http://localhost:8000', // 【重要】这里填写您本地后端服务的实际地址和端口
             changeOrigin: true, // 【重要】必须设置为 true。这会修改请求头中的 Origin 字段，使其看起来像是从代理服务器发出的，对于需要验证 Origin 的后端服务很重要。
             // 可选：路径重写 (rewrite)。如果前端请求是 /api/users，而您的后端实际接口是 /users (没有/api前缀)
             // 那么就需要重写路径，去掉 /api。
             rewrite: (pathString) => pathString.replace(/^\/api/, '')
           },
           // 规则2: (可选) 如果您有多个本地后端服务，可以配置多个代理规则
           // '/another-api': {
           //   target: 'http://localhost:8001', // 另一个后端服务
           //   changeOrigin: true,
           //   rewrite: (pathString) => pathString.replace(/^\/another-api/, '/v2') // 示例：重写到不同的路径
           // }
         }
       }
     });
     ```

   * **配置项解释**: 

     *   `'/api'`: 这是一个匹配规则。所有前端发出的、路径以 `/api` 开头的请求（例如 `/api/users`, `/api/products/1`）都会被这个代理规则捕获。这个 `/api` 前缀是任意约定的，主要是为了区分哪些请求需要被代理，哪些是前端静态资源请求。
     *   `target: 'http://localhost:8000'`: **这是最重要的配置**。它告诉Vite将捕获到的请求转发到哪个后端地址。**请务必将其修改为您本地后端服务的正确地址和端口。**
     *   `changeOrigin: true`: 这个选项非常重要。当设置为 `true` 时，Vite会将代理请求的HTTP头中的`Origin`字段值修改为`target`的源（即`http://localhost:8000`）。很多后端框架会检查`Origin`头来防止CSRF攻击或进行来源验证，所以通常需要设为`true`。
     *   `rewrite: (pathString) => pathString.replace(/^\/api/, '')`: 这是一个可选的路径重写函数。
         *   **何时需要？** 如果您的前端代码中调用API时使用了 `/api` 前缀 (例如 `fetch('/api/users')`)，但是您的后端API的实际路径是 `/users` (不包含 `/api` 前缀)，那么Vite在转发请求到后端之前，需要将路径中的 `/api` 部分去掉。这个 `rewrite` 函数就做了这个事情。
         *   **如果不需要**：如果您的后端API路径本身就包含 `/api` (例如后端接口就是 `http://localhost:8000/api/users`)，并且前端也用 `/api/users` 调用，那么就不需要 `rewrite`，或者 `rewrite` 可以是 `(path) => path`。

   * **保存 `vite.config.js` 文件后，Vite开发服务器通常会自动重启以应用新的配置。** 如果没有，您可以手动停止 (`Ctrl+C`) 再重新运行 `npm run dev`。

4. **前端进行API调用 (前端实现，后端配合)**：

   * 在配置好Vite代理后，前端代码中调用API时，应该使用**相对于Vite开发服务器的路径**，并带上约定的代理前缀 (例如 `/api`)。

   * **示例 (前端代码中的API调用，使用代理路径)**：

     ```javascript
     // 在某个 Vue 组件的方法中
     async function fetchUsersViaProxy() {
       try {
         // 注意：这里使用的是 /api/users，而不是完整的后端URL
         // Vite会将这个请求代理到 http://localhost:8000/users (假设rewrite已配置)
         const response = await fetch('/api/users', {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             // 如果需要认证，仍然在这里添加 Authorization 头
           }
         });
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         console.log(data); // 获取到的用户数据
       } catch (error) {
         console.error("通过代理获取用户数据失败:", error);
       }
     }
     ```

5. **后端API的职责 (后端开发者核心工作)**：

   *   **确保API在本地正常工作**：您的API接口 (`http://localhost:8000/users` 等) 必须在本地能够被直接访问和测试 (例如通过 Postman 或 curl)。
   *   **通常无需为 `localhost:5173` 配置CORS**：因为Vite代理服务器在中间扮演了"传话筒"的角色。浏览器发给 `http://localhost:5173/api/users` 的请求是同源的。Vite服务器接收到这个请求后，再以自己的名义（源是 `http://localhost:8000`，如果 `changeOrigin:true`）去请求您的 `http://localhost:8000/users`。因此，您的后端服务看到的是一个来自同源（或被认为是可信源）的请求，通常不需要额外的CORS头部来允许 `http://localhost:5173`。
   *   **路径协调**：与前端确认API的基础路径和代理前缀，确保Vite的 `rewrite` 配置正确无误。
   *   **认证与授权**：本地开发时，认证逻辑也需要正常工作。如果使用了基于Header的Token认证，前端在调用代理路径时依然会携带这些Header，Vite会将其原样转发给后端。

6. **验证代理是否工作**：

   *   在浏览器中打开前端应用页面，并触发调用API的操作。
   *   打开浏览器的开发者工具 (通常按 F12)，切换到"网络(Network)"面板。
   *   您应该能看到一个发往例如 `http://localhost:5173/api/users` 的请求。
   *   检查这个请求的响应状态码和内容。如果状态码是200 OK并且返回了您后端API的数据，那么代理就工作正常了。
   *   如果在Vite的控制台或后端服务的控制台看到有请求日志，并且路径正确，也是一个好迹象。

**总结 (本地集成开发模式下后端职责)**：您主要负责启动本地后端服务，并与前端协调API路径和代理配置。Vite代理大大简化了本地开发的跨域处理。

## 注意事项

-   **代码规范**: 项目已配置 ESLint 和 Prettier。建议在编辑器中安装相应插件并开启保存时自动格式化，以保持代码风格一致。
-   **分支与合并**: 请遵循团队的代码协作流程，例如使用特性分支进行开发，并通过 Pull Request (或 Merge Request) 合并到主分支。

通过遵循以上指引，即使是不非常熟悉前端具体实现的后端开发者，也能够更顺畅地参与到对应前端模块的开发中，并有效保证最终产品的风格统一性。 
