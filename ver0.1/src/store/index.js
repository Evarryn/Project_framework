// src/store/index.js
import { defineStore } from 'pinia'

// 你可以创建多个 store 模块，每个模块管理应用中一部分特定的状态。
// 例如：用户认证、应用设置、购物车等。

// 这是一个示例 store，用于管理应用级别的状态或通用状态
export const useAppStore = defineStore('app', {
  // State: 定义状态的地方 (类似组件的 data)
  state: () => ({
    appName: '统一前端框架',
    appVersion: '0.1.0',
    isLoading: false, // 全局加载状态示例
    theme: 'light', // 主题示例: light / dark
    // 可以根据项目需要添加更多全局状态
    // userInfo: null, // 例如用户信息
  }),

  // Getters: 计算属性 (类似组件的 computed properties)
  getters: {
    fullAppName: (state) => {
      return `${state.appName} v${state.appVersion}`;
    },
    isDarkTheme: (state) => state.theme === 'dark',
  },

  // Actions: 方法 (类似组件的 methods)，可以包含异步操作
  actions: {
    setLoading(isLoading) {
      this.isLoading = isLoading;
    },

    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      // 实际项目中，切换主题可能还需要更新 <html> 或 <body> 元素的 class，
      // 或者动态修改 CSS 变量的值。
      // 例如：document.documentElement.setAttribute('data-theme', this.theme);
      console.log(`主题已切换为: ${this.theme}`);
    },

    // 示例：异步 action
    // async fetchUserData(userId) {
    //   this.setLoading(true);
    //   try {
    //     const response = await fetch(`/api/users/${userId}`);
    //     if (!response.ok) throw new Error('获取用户信息失败');
    //     const data = await response.json();
    //     this.userInfo = data;
    //   } catch (error) {
    //     console.error('获取用户信息错误:', error);
    //     this.userInfo = null;
    //   } finally {
    //     this.setLoading(false);
    //   }
    // },
  },
});

// 可以在此文件中导出所有 store 模块，或者在需要的地方单独导入
// export { useUserStore } from './userStore'; // 假设有 userStore.js 