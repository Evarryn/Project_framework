<template>
  <div :class="cardClasses">
    <div v-if="hasHeader" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
      <div v-if="hasExtra" class="card-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="card-body" :style="bodyStyle">
      <slot></slot> <!--默认插槽放卡片内容 -->
    </div>
    <div v-if="hasFooter" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  // 卡片body区域的内联样式
  bodyStyle: {
    type: Object,
    default: () => ({})
  },
  // 是否显示边框
  bordered: {
    type: Boolean,
    default: true
  },
  // 阴影效果: 'always', 'hover', 'never'
  shadow: {
    type: String,
    default: 'always', // 默认总显示阴影
    validator: (val) => ['always', 'hover', 'never'].includes(val)
  }
});

const slots = useSlots();

// 计算属性判断插槽是否存在，以便条件渲染
const hasHeader = computed(() => !!slots.header || !!props.title || !!slots.extra);
const hasExtra = computed(() => !!slots.extra);
const hasFooter = computed(() => !!slots.footer);

const cardClasses = computed(() => [
  'base-card',
  {
    'is-bordered': props.bordered,
    [`shadow--${props.shadow}`]: props.shadow !== 'never' // 添加 shadow 相关类
  }
]);

</script>

<style lang="scss" scoped>
.base-card {
  background-color: var(--fill-color-base, #fff); // 默认白色背景
  border-radius: var(--border-radius-base, 4px);
  // 边框由 is-bordered 类控制
  // border: var(--border-width-base) var(--border-style-base) var(--border-color-light); 
  transition: box-shadow var(--transition-duration-base) var(--transition-timing-function-base);

  &.is-bordered {
     border: var(--border-width-base) var(--border-style-base) var(--border-color-base);
  }

  &.shadow--always {
    box-shadow: var(--shadow-light); // 直接使用变量
  }

  &.shadow--hover {
    &:hover {
      box-shadow: var(--shadow-light); // hover时显示阴影
    }
  }
  // shadow--never 不需要额外样式，因为它默认无阴影且上面两种情况不匹配

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: var(--border-width-base) var(--border-style-base) var(--border-color-lighter);
    
    // 当 header 逻辑上为空时（没有 title prop，也没有 header 或 extra slot）
    // 这种检查最好在 JS 中完成然后通过 class 控制，但纯 CSS 较难
    // 因此在 JS 的 hasHeader 中已处理，确保无内容时不渲染整个 .card-header div
    // 如果 .card-header 被渲染了但内容为空 (例如只有空的slot)，则:empty 可以生效
    &:empty { // CSS :empty 选择器，如果元素内完全没有内容（包括空格和子元素）
      border-bottom: none;
      padding: 0; // 避免空 header 占据空间
    }

    .card-title {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-primary);
      color: var(--text-color-primary);
      margin: 0; 
    }

    .card-extra {
      font-size: var(--font-size-base);
      color: var(--text-color-secondary);
    }
  }

  .card-body {
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
    color: var(--text-color-regular);
  }

  .card-footer {
    padding: var(--spacing-sm) var(--spacing-md);
    border-top: var(--border-width-base) var(--border-style-base) var(--border-color-lighter);
    font-size: var(--font-size-small);
    color: var(--text-color-secondary);
    &:empty { // CSS :empty 选择器
      border-top: none;
      padding: 0; // 避免空 footer 占据空间
    }
  }
}
</style> 