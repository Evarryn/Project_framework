<template>
  <div id="app-container">
    <!-- 可以在这里添加全局布局组件，比如头部、侧边栏等 -->
    <!-- <GlobalHeader /> -->
    <router-view /> <!-- 路由内容将在这里显示 -->
    <!-- <GlobalFooter /> -->
  </div>
</template>

<script setup>
// 如果需要，可以在这里导入和注册全局布局组件
// import GlobalHeader from '@/components/layout/GlobalHeader.vue'
// import GlobalFooter from '@/components/layout/GlobalFooter.vue'

// 可以在这里执行一些全局初始化逻辑
import { onMounted } from 'vue';

onMounted(() => {
  console.log('应用根组件 App.vue 已挂载。');
  // 示例：动态设置 CSS 变量
  // document.documentElement.style.setProperty('--primary-color', 'blue');
});

</script>

<style lang="scss" scoped>
#app-container {
  font-family: var(--font-family-base);
  color: var(--text-color-primary);
  background-color: var(--background-color-base);
  min-height: 100vh; // 确保应用占满全屏
  // 可以添加更多全局性的应用容器样式
}
</style> 