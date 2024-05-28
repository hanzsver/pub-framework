<template>
  <div class="theme-toggle">
    <input type="checkbox" class="theme-toggle__input" id="change-theme" @click="toggleDark()" />
    <label for="change-theme" class="theme-toggle__label" :class="isDark ? 'dark' : 'light'">
      <!-- light ico -->
      <svg aria-hidden="true" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
        <g fill="var(--theme-toggle-light-ico-color)">
          <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path>
          <path
            d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
          ></path>
        </g>
      </svg>
      <!-- dark ico -->
      <svg aria-hidden="true" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
        <path
          d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
          fill="var(--theme-toggle-dark-ico-color)"
        ></path>
      </svg>
      <span class="theme-toggle__control" :class="{ moved: isDark }"></span>
    </label>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core';

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = () => {
  isDark.value = !isDark.value;
};
</script>

<style lang="scss" scoped>
.theme-toggle {
  // ======== 임시 스타일 ========
  position: absolute;
  top: 0;
  left: 60px;
  z-index: 9999;
  // ======== // 임시 스타일 ========
  &__input {
    opacity: 0;
    position: absolute;

    &:checked {
      & + label {
        .theme-toggle__control {
          // transform: translateX(24px);
        }
      }
    }
  }
  &__label {
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.light {
      background-color: var(--theme-toggle-light-bg-color);
    }
    &.dark {
      background-color: var(--theme-toggle-dark-bg-color);
    }
  }
  &__control {
    background-color: var(--theme-toggle-control-bg-color);
    width: 22px;
    height: 22px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    &.moved {
      transform: translateX(24px);
    }
  }
}
</style>
