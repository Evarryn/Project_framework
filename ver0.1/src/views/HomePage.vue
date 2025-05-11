<template>
  <div class="page-container home-page">
    <header class="page-header">
      <h1>{{ pageTitle }}</h1>
      <img :src="logoPath" alt="App Logo" class="app-logo">
    </header>
    
    <main class="page-content">
      <p>欢迎来到 {{ appStore.appName }}！这是一个统一风格的前端框架示例。</p>
      <p>当前主题: <span class="theme-highlight">{{ appStore.theme }}</span></p>
      
      <StyledButton @click="appStore.toggleTheme" variant="primary">
        切换主题 ({{ appStore.isDarkTheme ? '切换到亮色' : '切换到暗色' }})
      </StyledButton>

      <StyledButton @click="showAlert" variant="success" style="margin-left: 10px;">
        显示提示
      </StyledButton>

      <section class="info-section">
        <h2>框架特性</h2>
        <ul>
          <li>基于 Vue 3 和 Vite</li>
          <li>统一的 SCSS 样式变量系统</li>
          <li>可复用的通用组件</li>
          <li>Pinia 状态管理</li>
          <li>Vue Router 路由管理</li>
          <li>美术素材路径统一配置</li>
        </ul>
      </section>

      <section class="component-showcase">
        <h3>通用组件示例:</h3>
        <div class="component-grid">
          <BaseCard title="卡片组件示例">
            <p>这是卡片组件的内容区域。卡片组件可以用于展示块状信息。</p>
            <template #footer>
              卡片底部信息
            </template>
          </BaseCard>
          
          <BaseInput 
            v-model="inputValue" 
            placeholder="请输入文本..." 
            label="文本输入框:"
          />
          <p style="margin-top: 5px;">输入的值: {{ inputValue }}</p>
        </div>
      </section>

      <p class="navigation-links">
        <router-link to="/about">关于我们</router-link> |
        <router-link to="/non-existent-page">一个不存在的页面 (404)</router-link>
      </p>
    </main>

    <footer class="page-footer">
      <p>&copy; 2024 {{ appStore.appName }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/store'; // 导入 Pinia store
import StyledButton from '@/components/common/StyledButton.vue'; // 导入通用按钮组件
import BaseCard from '@/components/common/BaseCard.vue'; // 导入卡片组件
import BaseInput from '@/components/common/BaseInput.vue'; // 导入输入框组件

const appStore = useAppStore();

const pageTitle = ref('首页');
const inputValue = ref('');

// 从 CSS 变量获取 Logo 路径
// 注意：这种方式在 <script setup> 中直接获取 CSS 变量值相对复杂。
// 更推荐的做法是在模板中直接使用 var() 或者通过一个全局配置/服务来管理图片路径。
// 这里我们假设 logoPath 是一个已知或可配置的路径，或者直接在模板中使用 CSS 变量。
// 为了简单起见，我们直接使用在 variables.scss 中定义的 CSS 变量名，并在模板的 style 中引用它或让 css 直接处理。
// 实际使用时，如果要在 JS 中获取，可能需要 getComputedStyle(document.documentElement).getPropertyValue('--asset-logo-main').trim()
// 但这通常在 onMounted 后才能获取。 
// 此处直接在模板的 :src 中绑定一个在 data/ref 中定义的变量，该变量的值应指向实际图片路径。
// 我们将在 styles/variables.scss 中定义 --asset-logo-main: url('@/assets/logo-placeholder.svg');
// 在模板中可以直接 <img src="var(--asset-logo-main)"> 是不行的，需要 JS 处理或 CSS background-image
// 一个简单的处理方式是，如果 logo 固定，可以直接在 JS 中 import
// import logoUrlFromAssets from '@/assets/logo-placeholder.svg';
// const logoPath = ref(logoUrlFromAssets);
// 或者，如果通过CSS变量控制，则组件内部不直接处理图片src，而是通过样式应用背景图。
// 此处为了演示，我们将在组件的 style 中设置一个 css 变量供 img 的 src 使用，或直接让 css class 控制背景
const logoPath = ref('./logo-placeholder.svg'); // 这是一个简化的占位符，实际应指向 assets
// 更好的方式，如果 vite.config.js 中配置了 alias '@'，可以这样:
// import appLogo from '@/assets/logo-placeholder.svg'
// const logoPath = ref(appLogo)
// 我会假设你们会把 logo 放在 assets 并正确引用。
// 目前的 variables.scss 中是 --asset-logo-main: url('@/assets/logo-placeholder.svg');
// 我将创建一个 StyledButton 组件，它会使用 var(--asset-logo-main) 作为背景。

const showAlert = () => {
  alert('这是一个来自首页的提示！');
};

// 页面加载时，可以从路由元信息设置标题（如果路由守卫没做的话）
// import { useRoute } from 'vue-router';
// const route = useRoute();
// if (route.meta && route.meta.title) {
//   pageTitle.value = route.meta.title;
// }
</script>

<style lang="scss" scoped>
@import '@/styles/page-common.scss'; // 引入通用的页面样式

// 页面级别的特定样式可以写在这里，并使用全局变量
.home-page {
  // HomePage 特有的样式，例如调整 .page-header h1 的颜色（如果需要）
  // 或者添加 home-page 特有的子元素样式
}

.page-header {
  // 如果需要覆盖 page-common.scss 中的 .page-header 样式，可以在这里写
  // 例如，首页的 logo 可能有特殊处理
  .app-logo {
    width: 80px; 
    height: 80px;
    margin-top: var(--spacing-sm);
  }
  // h1 样式已在 page-common.scss 中定义，这里如果需要特定颜色，可以覆盖
  // h1 {
  //   color: var(--primary-color); // page-common.scss 中已是 --text-color-primary，可按需改
  // }
}

// .page-content 样式已在 page-common.scss 中定义，此处可添加 HomePage 特有的内容区样式

.theme-highlight {
  font-weight: var(--font-weight-bold);
  color: var(--success-color);
}

.info-section {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: var(--fill-color-light);
  border-left: 4px solid var(--primary-color);
  border-radius: var(--border-radius-base);

  h2 {
    font-size: var(--font-size-large);
    color: var(--text-color-primary);
    margin-bottom: var(--spacing-sm);
  }

  ul {
    list-style-type: disc; // 使用圆点列表符
    // padding-left 已在 page-common.scss 的 ul,ol 中定义
    li {
      // margin-bottom 已在 page-common.scss 的 li 中定义
      color: var(--text-color-regular);
    }
  }
}

.component-showcase {
  margin-top: var(--spacing-lg);
  h3 {
    font-size: var(--font-size-medium);
    color: var(--text-color-primary);
    margin-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--border-color-light);
    padding-bottom: var(--spacing-xs);
  }
  .component-grid {
    display: grid;
    gap: var(--spacing-md);
  }
}

.navigation-links {
  margin-top: var(--spacing-xl);
  text-align: center;
  a {
    margin: 0 var(--spacing-sm);
  }
}

// .page-footer 样式已在 page-common.scss 中定义
</style> 