<script setup lang="ts">
interface IProps {
  showAction?: boolean
  background?: string
  placeholder?: string
  shape?: string
  modelValue?: string | number
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'search', v?: string | number): void
  (e: 'cancel'): void
  (e: 'clear'): void
  (e: 'update:modelValue', v?: string | number): void
  (e: 'inputClick'): void
}
const emits = defineEmits<IEmits>()

const onKeypress = (e: KeyboardEvent) => {
  const ENTER_CODE = 13
  if (e.keyCode === ENTER_CODE) {
    e.preventDefault()
    emits('search', props.modelValue)
  }
}
const onClear = () => {
  emits('update:modelValue', '')
  emits('clear')
}
</script>

<template>
  <div class="ez-search" :class="{ 'ez-search--show-action': showAction }" :style="{ background }">
    <div class="ez-search__content" :class="shape ? `ez-search__content--${shape}` : ''">
      <div class="ez-cell ez-search__field">
        <div class="ez-field__left-icon">
          <VanIcon name="search" />
        </div>
        <div class="ez-cell__value">
          <div class="ez-field__body">
            <input
              type="search"
              class="ez-field__control"
              :value="modelValue"
              :placeholder="placeholder"
              @keypress="onKeypress"
              @click="emits('inputClick')"
              @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)"
            />
            <div v-if="$slots['right-icon']" class="ez-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <VanIcon v-else-if="modelValue" name="clear" class="ez-field__clear" @click="onClear" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="ez-search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --ez-search-padding: 10px var(--van-padding-sm);
  --ez-search-background-color: var(--van-background-color-light);
  --ez-search-content-background: var(--van-gray-1);
  --ez-search-left-icon-color: var(--van-gray-6);
  --ez-search-action-padding: 0 var(--van-padding-xs);
  --ez-search-action-text-color: var(--van-text-color);
  --ez-search-action-font-size: var(--van-font-size-md);
  --ez-search-input-height: 34px;
}

.ez-search {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: var(--ez-search-padding);
  background: var(--ez-search-background-color);

  &--show-action {
    padding-right: 0;
  }

  &__content {
    display: flex;
    flex: 1;
    padding-left: var(--van-padding-sm);
    background: var(--ez-search-content-background);
    border-radius: var(--van-border-radius-sm);
    &--round {
      border-radius: var(--van-radius-max);
    }
  }

  &__action {
    padding: var(--ez-search-action-padding);
    color: var(--ez-search-action-text-color);
    font-size: var(--ez-search-action-font-size);
    line-height: var(--ez-search-input-height);
    cursor: pointer;
    user-select: none;
  }

  &__field {
    flex: 1;
    padding: 5px var(--van-padding-xs) 5px 0;
    background-color: transparent;

    .ez-field__left-icon {
      color: var(--ez-search-left-icon-color);
      margin-right: var(--van-padding-base);
      .van-icon {
        font-size: var(--van-field-icon-size);
      }
    }
  }
}

.ez-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: var(--van-cell-text-color);
  font-size: var(--van-cell-font-size);
  line-height: var(--van-cell-line-height);
  &__value {
    flex: 1;
    color: var(--van-cell-text-color);
    vertical-align: middle;
    word-wrap: break-word;
  }
}

.ez-field {
  &__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--van-field-input-text-color);
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    resize: none;
    user-select: none;
    &::placeholder {
      color: var(--van-field-placeholder-text-color);
    }
  }
  &__body {
    display: flex;
    align-items: center;
  }
  &__right-icon {
    color: var(--van-field-right-icon-color);
    padding: 0 var(--van-padding-xs);
    line-height: inherit;
    flex-shrink: 0;
  }
  &__clear {
    color: var(--van-field-clear-icon-color);
    font-size: var(--van-field-clear-icon-size) !important;
    cursor: pointer;
  }
}
input {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}
</style>
