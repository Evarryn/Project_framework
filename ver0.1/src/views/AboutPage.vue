<template>
  <div class="page-container about-page">
    <header class="page-header">
      <h1>{{ pageTitle }}</h1>
    </header>
    
    <main class="page-content">
      <p>
        这是 "关于我们" 页面。
        我们致力于构建高效、美观且易于维护的前端应用。
        这个框架旨在帮助团队统一开发风格，提升协作效率。
      </p>
      
      <section class="team-info">
        <h2>核心理念</h2>
        <ul>
          <li><strong>风格统一:</strong> 通过共享的样式变量和组件库，确保视觉和代码的一致性。</li>
          <li><strong>组件化开发:</strong> 提倡高内聚、低耦合的组件设计，方便复用和测试。</li>
          <li><strong>最新技术栈:</strong> 基于 Vue 3, Vite, Pinia 等现代前端技术。</li>
          <li><strong>开发效率:</strong> 提供合理的项目结构和工具，让开发者专注于业务逻辑。</li>
        </ul>
      </section>

      <p class="app-version-info">
        当前框架版本: {{ appStore.appVersion }}
      </p>

      <StyledButton @click="goBack" variant="secondary">
        返回首页
      </StyledButton>
    </main>

    <footer class="page-footer">
      <p>了解更多关于 {{ appStore.appName }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store';
import StyledButton from '@/components/common/StyledButton.vue';

const router = useRouter();
const appStore = useAppStore();

const pageTitle = ref('关于我们');

const goBack = () => {
  router.push({ name: 'Home' }); // 通过路由名称跳转
};
</script>

<style lang="scss" scoped>
@import '@/styles/page-common.scss'; // 引入通用的页面样式

.about-page {
  // 特有的关于页面样式
  // 例如，如果 .page-content 在此页需要不同的背景色或 padding，可以在这里覆盖
  // .page-content {
  //   background-color: var(--fill-color-lighter);
  // }
}

.page-header h1 {
  color: var(--success-color); // 关于页面的标题用辅助色
}

.team-info {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: var(--fill-color-lighter);
  border-radius: var(--border-radius-base);

  h2 {
    font-size: var(--font-size-large);
    color: var(--text-color-primary);
    margin-bottom: var(--spacing-sm);
  }

  ul {
    list-style-type: none; // 覆盖 page-common.scss 中可能为 ul 设置的 list-style-type
    padding-left: 0; // 覆盖 page-common.scss 中可能为 ul 设置的 padding-left
    li {
      // margin-bottom 已在 page-common.scss 的 li 中定义
      color: var(--text-color-regular);
      strong {
        color: var(--text-color-primary);
        font-weight: var(--font-weight-primary);
      }
    }
  }
}

.app-version-info {
  margin-top: var(--spacing-md);
  color: var(--text-color-secondary);
  font-size: var(--font-size-small);
  text-align: center;
}

// 通用页面布局样式 (.page-container, .page-header, .page-content, .page-footer)
// 已被提取到 src/styles/page-common.scss 并通过 @import 引入。
</style> 