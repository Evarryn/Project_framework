import { createRouter, createWebHistory } from 'vue-router'
// 导入页面组件
// import HomePage from '@/views/HomePage.vue'
// import AboutPage from '@/views/AboutPage.vue'

// 建议：为了更好的代码分割和懒加载，可以使用动态导入组件：
const HomePage = () => import('@/views/HomePage.vue')
const AboutPage = () => import('@/views/AboutPage.vue') // 示例，后续可以创建此文件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: '首页' } // 路由元信息，例如页面标题
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: '关于我们' }
  },
  // 可以在这里添加更多的路由规则
  // 例如：
  // {
  //   path: '/user/:id',
  //   name: 'UserProfile',
  //   component: () => import('@/views/UserProfile.vue'),
  //   props: true, // 将路由参数作为 props 传递给组件
  //   meta: { requiresAuth: true } // 示例：需要登录才可访问
  // }
  {
    path: '/:catchAll(.*)*', // 捕获所有未匹配的路由
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'), // 指向一个404页面
    meta: { title: '页面未找到' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用 HTML5 History 模式
  routes, // 上面定义的路由规则数组
  scrollBehavior(to, from, savedPosition) {
    // 路由切换时，页面滚动行为
    if (savedPosition) {
      return savedPosition // 如果有保存的位置（例如浏览器前进/后退），则恢复
    } else {
      return { top: 0, left: 0 } // 否则滚动到页面顶部
    }
  }
})

// 全局前置守卫 (Optional)
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} - 统一前端框架`; // 可以将 '统一前端框架' 替换为你的项目名
  } else {
    document.title = '统一前端框架';
  }

  // 可以在这里添加路由权限控制逻辑
  // 例如: 检查用户是否登录，如果目标路由需要认证 (to.meta.requiresAuth)
  // const isAuthenticated = store.getters['auth/isAuthenticated']; // 假设你有 Pinia store
  // if (to.meta.requiresAuth && !isAuthenticated) {
  //   next({ name: 'Login' }); // 跳转到登录页
  // } else {
  //   next(); // 继续访问
  // }
  next();
});

// 全局后置钩子 (Optional)
// router.afterEach((to, from) => {
//   // 可以在这里执行一些路由切换后的操作，例如发送分析数据
//   console.log(`Navigated from ${from.fullPath} to ${to.fullPath}`);
// });

export default router 