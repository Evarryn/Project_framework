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
