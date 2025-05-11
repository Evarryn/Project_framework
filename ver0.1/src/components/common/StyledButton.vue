<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <slot v-else></slot> <!-- 按钮文本通过 slot 传入 -->
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // 按钮类型/变体 (primary, secondary, success, danger, warning, info, text)
  variant: {
    type: String,
    default: 'primary', // 默认为主要按钮
    validator: (value) => 
      ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'text'].includes(value)
  },
  // 尺寸 (small, medium, large)
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否朴素按钮 (背景透明，有边框)
  plain: {
    type: Boolean,
    default: false
  },
  // 是否圆形按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否加载中状态
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => [
  'styled-button',
  `styled-button--${props.variant}`,
  `styled-button--${props.size}`,
  { 
    'is-disabled': props.disabled || props.loading, // 加载中也视为禁用
    'is-plain': props.plain,
    'is-round': props.round,
    'is-loading': props.loading,
  }
]);

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};

</script>

<style lang="scss" scoped>
.styled-button {
  display: inline-flex; // 改为 inline-flex 以便更好地处理 loading spinner
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: var(--border-width-base) var(--border-style-base) transparent;
  padding: var(--spacing-xs) var(--spacing-md); // 默认内边距
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-primary);
  line-height: var(--line-height-base);
  border-radius: var(--border-radius-base);
  text-align: center;
  white-space: nowrap; // 防止文字换行
  vertical-align: middle;
  user-select: none; // 禁止文本选中
  transition: 
    background-color var(--transition-duration-fast) var(--transition-timing-function-base),
    border-color var(--transition-duration-fast) var(--transition-timing-function-base),
    color var(--transition-duration-fast) var(--transition-timing-function-base),
    opacity var(--transition-duration-fast) var(--transition-timing-function-base);
  
  // 按钮基础样式
  &:hover,
  &:focus {
    opacity: 0.85;
    outline: none; // 移除默认的 focus outline，可以自定义 focus 样式
  }

  &:active {
    opacity: 0.7;
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
    // 对于禁用状态，可以根据需要调整更细致的样式
    // 例如：取消 hover 和 active 效果
    &:hover, &:active {
      opacity: 0.6;
    }
  }

  &.is-round {
    border-radius: 20px; // 或者一个足够大的值使其两端变圆
    padding-left: var(--spacing-lg); // 圆形按钮可能需要更大的左右padding
    padding-right: var(--spacing-lg);
  }

  // 尺寸变体
  &--small {
    padding: var(--spacing-xxs) var(--spacing-sm);
    font-size: var(--font-size-small);
    &.is-round {
      padding-left: var(--spacing-md);
      padding-right: var(--spacing-md);
    }
  }
  &--large {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-medium);
    &.is-round {
      padding-left: var(--spacing-xl);
      padding-right: var(--spacing-xl);
    }
  }

  // 类型变体 (颜色)
  // Primary
  &--primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-color-anti);
    &.is-plain {
      background-color: transparent;
      border-color: var(--primary-color);
      color: var(--primary-color);
      &:hover, &:focus {
        background-color: var(--primary-color);
        color: var(--text-color-anti);
        opacity: 0.9;
      }
    }
  }

  // Secondary (通常为次要操作，或默认按钮)
  &--secondary {
    background-color: var(--fill-color-light); // 使用较浅的背景
    border-color: var(--border-color-base);
    color: var(--text-color-primary);
    &:hover, &:focus {
       background-color: var(--border-color-extra-light); // Element UI 类似效果
       border-color: var(--primary-color-light-1);
       color: var(--primary-color);
       opacity: 1;
    }
    &.is-plain {
      background-color: transparent;
      border-color: var(--border-color-base);
      color: var(--text-color-primary);
       &:hover, &:focus {
        border-color: var(--primary-color);
        color: var(--primary-color);
        opacity: 1;
      }
    }
  }

  // Success
  &--success {
    background-color: var(--success-color);
    border-color: var(--success-color);
    color: var(--text-color-anti);
    &.is-plain {
      background-color: transparent;
      border-color: var(--success-color);
      color: var(--success-color);
       &:hover, &:focus {
        background-color: var(--success-color);
        color: var(--text-color-anti);
        opacity: 0.9;
      }
    }
  }

  // Warning
  &--warning {
    background-color: var(--warning-color);
    border-color: var(--warning-color);
    color: var(--text-color-anti);
    &.is-plain {
      background-color: transparent;
      border-color: var(--warning-color);
      color: var(--warning-color);
      &:hover, &:focus {
        background-color: var(--warning-color);
        color: var(--text-color-anti);
        opacity: 0.9;
      }
    }
  }

  // Danger
  &--danger {
    background-color: var(--danger-color);
    border-color: var(--danger-color);
    color: var(--text-color-anti);
    &.is-plain {
      background-color: transparent;
      border-color: var(--danger-color);
      color: var(--danger-color);
      &:hover, &:focus {
        background-color: var(--danger-color);
        color: var(--text-color-anti);
        opacity: 0.9;
      }
    }
  }
  
  // Info
  &--info {
    background-color: var(--info-color);
    border-color: var(--info-color);
    color: var(--text-color-anti);
    &.is-plain {
      background-color: transparent;
      border-color: var(--info-color);
      color: var(--info-color);
      &:hover, &:focus {
        background-color: var(--info-color);
        color: var(--text-color-anti);
        opacity: 0.9;
      }
    }
  }

  // Text (文本按钮，无边框无背景)
  &--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--primary-color);
    padding-left: var(--spacing-xxs);
    padding-right: var(--spacing-xxs);
    &:hover, &:focus {
      color: var(--primary-color-light-1);
      background-color: var(--fill-color-lighter); // 轻微背景反馈
      opacity: 1;
    }
    &.is-disabled {
      background-color: transparent;
      color: var(--text-color-disabled);
      opacity: 0.5;
    }
  }

  // 加载中状态
  .loading-spinner {
    width: var(--font-size-base); // 与字体大小一致
    height: var(--font-size-base);
    border: 2px solid currentColor; // 使用当前文字颜色
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-right: var(--spacing-xs); // 如果按钮有文字，则与文字有间距
  }
  // 如果按钮只有加载图标，没有slot内容，则不需要margin-right
  &.is-loading > span:empty + slot:empty { // 选择只有spinner的情况
    .loading-spinner {
      margin-right: 0;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 