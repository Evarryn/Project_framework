<template>
  <div :class="['base-input-wrapper', { 'is-disabled': disabled, 'has-prefix': !!slots.prefix, 'has-suffix': !!slots.suffix }]">
    <label v-if="label" :for="inputId" class="input-label">{{ label }}</label>
    <div class="input-container">
      <span v-if="slots.prefix" class="input-prefix">
        <slot name="prefix"></slot>
      </span>
      <input 
        :id="inputId"
        :type="type"
        :value="modelValue" 
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        class="base-input"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @keydown="onKeydown"
      />
      <span v-if="clearable && modelValue && !disabled && !readonly" class="input-clear" @click.stop="clearInput">
        <!-- 清除图标，可以用 SVG 或字体图标 -->
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm192-512a32 32 0 0 1 45.248 45.248L557.248 512l192 192a32 32 0 1 1-45.248 45.248L512 557.248l-192 192a32 32 0 1 1-45.248-45.248L466.752 512l-192-192a32 32 0 0 1 45.248-45.248L512 466.752l192-192z"></path>
        </svg>
      </span>
      <span v-if="slots.suffix" class="input-suffix">
        <slot name="suffix"></slot>
      </span>
      <span v-if="showWordLimit && maxlength" class="input-word-limit">
        {{ currentLength }}/{{ maxlength }}
      </span>
    </div>
    <div v-if="errorMessage || hint" class="input-meta">
      <span v-if="errorMessage" class="input-error-message">{{ errorMessage }}</span>
      <span v-else-if="hint" class="input-hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots, ref, watch } from 'vue';

const props = defineProps({
  modelValue: { // 用于 v-model
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text' // text, password, number, email, etc.
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: { // 是否可清除
    type: Boolean,
    default: false
  },
  maxlength: {
    type: [String, Number],
    default: null
  },
  minlength: {
    type: [String, Number],
    default: null
  },
  showWordLimit: { // 是否显示字数限制 (需配合 maxlength)
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  hint: { // 提示信息
    type: String,
    default: ''
  },
  errorMessage: { // 错误信息 (优先级高于 hint)
    type: String,
    default: ''
  },
  // 可以添加 size prop (small, medium, large) 来控制整体大小
});

const emit = defineEmits([
  'update:modelValue', 
  'input', 
  'focus', 
  'blur', 
  'change', 
  'clear', 
  'keydown'
]);

const slots = useSlots();
const inputId = computed(() => `base-input-${Math.random().toString(36).substring(2, 9)}`);
const currentLength = computed(() => String(props.modelValue).length);

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
  emit('input', event); 
};

const onFocus = (event) => {
  emit('focus', event);
};

const onBlur = (event) => {
  emit('blur', event);
};

const onChange = (event) => {
  emit('change', event);
};

const onKeydown = (event) => {
  emit('keydown', event);
};

const clearInput = () => {
  emit('update:modelValue', '');
  emit('clear');
  // 可以选择性地让输入框重新聚焦
  // const inputEl = document.getElementById(inputId.value);
  // if (inputEl) inputEl.focus();
};

</script>

<style lang="scss" scoped>
.base-input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%; // 默认宽度100%，可由父级控制
  font-family: var(--font-family-base);

  &.is-disabled {
    .input-label {
      color: var(--text-color-disabled);
    }
    .base-input {
      cursor: not-allowed;
      background-color: var(--fill-color-darker);
    }
  }
}

.input-label {
  display: inline-block;
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-base);
  color: var(--text-color-primary);
  line-height: var(--line-height-base);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.base-input {
  flex-grow: 1;
  width: 100%; // 确保 input 填满 flex item
  padding: var(--spacing-xs) var(--spacing-sm); 
  font-size: var(--font-size-base);
  color: var(--text-color-primary);
  background-color: var(--fill-color-base);
  border: var(--border-width-base) var(--border-style-base) var(--border-color-base);
  border-radius: var(--border-radius-base);
  transition: border-color var(--transition-duration-fast) var(--transition-timing-function-base), 
              box-shadow var(--transition-duration-fast) var(--transition-timing-function-base);
  line-height: var(--line-height-base);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-light-1, rgba(64, 158, 255, 0.2));
  }

  &::placeholder {
    color: var(--text-color-placeholder);
    opacity: 1; // Firefox
  }

  &:disabled,
  &[readonly] {
    background-color: var(--fill-color-light);
    color: var(--text-color-disabled);
    border-color: var(--border-color-lighter);
    // 对于 readonly，可能不希望改变光标样式
  }
  &:disabled {
     cursor: not-allowed;
  }
}

// 前后缀图标/文本区域
.input-prefix,
.input-suffix {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--spacing-xs);
  color: var(--text-color-secondary);
  // 如果需要，可以给前后缀设置背景和边框，使其看起来像 input 的一部分
  // background-color: var(--fill-color-light);
  // border: 1px solid var(--border-color-base);
  // border-radius: var(--border-radius-base);
}

// 调整带前后缀时的 input 样式
.has-prefix .base-input {
  padding-left: 0; // 内部 input 左侧 padding 由 prefix 容器提供
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.has-suffix .base-input {
  padding-right: 0; // 内部 input 右侧 padding 由 suffix 容器提供
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

// 前缀和后缀本身与input组合后的边框调整
.has-prefix .input-prefix {
  border-top-left-radius: var(--border-radius-base);
  border-bottom-left-radius: var(--border-radius-base);
  // 如果要让前缀看起来像输入框的一部分
  // border-right: none;
}
.has-suffix .input-suffix {
  border-top-right-radius: var(--border-radius-base);
  border-bottom-right-radius: var(--border-radius-base);
  // 如果要让后缀看起来像输入框的一部分
  // border-left: none;
}

.input-clear {
  position: absolute;
  right: var(--spacing-sm); // 定位到右侧
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--text-color-placeholder);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px; // 给图标一点点击区域

  &:hover {
    color: var(--text-color-secondary);
  }
  // 如果有 suffix slot，清除按钮需要调整位置
  .has-suffix & {
    right: calc(var(--spacing-sm) + 20px); // 假设 suffix slot 宽度约为 20px + padding
                                       // 这个定位比较粗略，精确控制需要JS计算或更复杂的CSS
  }
  // 如果有字数限制，也需要调整
  .input-container:has(.input-word-limit) & {
     right: calc(var(--spacing-sm) + 50px); // 假设字数限制区域宽度
  }
}

.input-word-limit {
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-size-extra-small);
  color: var(--text-color-secondary);
  user-select: none;
}

.input-meta {
  margin-top: var(--spacing-xs);
  min-height: calc(var(--font-size-small) * var(--line-height-base)); // 占据一行高度，防止抖动
  font-size: var(--font-size-small);
  line-height: var(--line-height-base);
}

.input-error-message {
  color: var(--danger-color);
}

.input-hint {
  color: var(--text-color-secondary);
}

</style> 