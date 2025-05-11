<template>
  <div class="page-container not-found-page">
    <div class="content-wrapper">
      <div class="status-code">404</div>
      <h1>页面未找到</h1>
      <p>抱歉，您访问的页面不存在或已被移除。</p>
      <p class="suggestion">
        您可以尝试：
      </p>
      <ul>
        <li>检查您输入的网址是否正确。</li>
        <li>返回<router-link to="/">首页</router-link>。</li>
      </ul>
      <StyledButton @click="goHome" variant="primary" class="home-button">
        返回首页
      </StyledButton>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import StyledButton from '@/components/common/StyledButton.vue';

const router = useRouter();

const goHome = () => {
  router.push({ name: 'Home' });
};
</script>

<style lang="scss" scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; // 占据大部分视窗高度
  text-align: center;
  padding: var(--spacing-lg);
  background-color: var(--fill-color-light); // 使用浅色背景
}

.content-wrapper {
  max-width: 600px;
  padding: var(--spacing-xl);
  background-color: var(--fill-color-base);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-base);
}

.status-code {
  font-size: 8rem; // 非常大的字号
  font-weight: var(--font-weight-bold);
  color: var(--primary-color-light-1);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

h1 {
  font-size: var(--font-size-extra-large);
  color: var(--text-color-primary);
  margin-bottom: var(--spacing-md);
}

p {
  font-size: var(--font-size-base);
  color: var(--text-color-regular);
  line-height: 1.7;
  margin-bottom: var(--spacing-sm);
}

.suggestion {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-xs);
  color: var(--text-color-secondary);
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
  li {
    margin-bottom: var(--spacing-xs);
    a {
      color: var(--primary-color);
      text-decoration: underline;
      &:hover {
        color: var(--primary-color-dark-1);
      }
    }
  }
}

.home-button {
  margin-top: var(--spacing-md);
}
</style> 