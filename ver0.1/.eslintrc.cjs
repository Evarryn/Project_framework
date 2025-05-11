module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 启用 defineProps, defineEmits 等宏
  },
  extends: [
    'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐规则
    'eslint:recommended', // ESLint 推荐的基本规则
    'prettier' // Prettier 配置，确保它覆盖 ESLint 的格式化规则
    // 如果您在 package.json 中也安装了 eslint-config-prettier，这里可以写成 'plugin:prettier/recommended'
    // 但通常 'prettier' 已经足够，因为它会关闭与 Prettier 冲突的 ESLint 规则。
    // 'eslint-config-prettier' // 确保这个在最后，以覆盖其他配置中的格式规则
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue', // Vue 插件
    'prettier' // Prettier 插件
  ],
  rules: {
    // Prettier 规则: 将 Prettier 的问题作为 ESLint 错误报告
    'prettier/prettier': 'error',
    
    // Vue 相关规则 (可以根据团队偏好调整)
    'vue/html-indent': ['error', 2], // HTML 缩进2个空格
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': 1
    }],
    'vue/multi-word-component-names': 'off', // 允许单个单词的组件名 (例如 App.vue, HomePage.vue)
    'vue/no-unused-vars': 'warn', // 未使用的变量给出警告
    'vue/require-default-prop': 'warn', // props 最好有默认值
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // 组件名用帕斯卡命名法

    // JavaScript 相关规则 (可以根据团队偏好调整)
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用 debugger
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // 未使用的变量（忽略以下划线开头的参数）
    'eqeqeq': ['error', 'always'], // 必须使用 === 和 !==
    // 'semi': ['error', 'always'], // 要求分号 (如果Prettier不强制，可以在这里配置)
    // 'quotes': ['error', 'single'], // 要求单引号 (如果Prettier不强制)

    // 可以在这里添加更多自定义规则
  },
  globals: {
    // 如果有全局变量 (例如通过 <script setup> 自动导入的)
    // defineProps: 'readonly',
    // defineEmits: 'readonly',
    // defineExpose: 'readonly',
    // withDefaults: 'readonly'
  }
}; 