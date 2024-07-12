<template>
  <img :src="imgSrc" class="cm-icon" :alt="props.alt" :style="`width: ${props.width}px; height: ${props.height}px`" />
</template>

<script setup>
import { computed } from 'vue';
import { useDark } from '@vueuse/core';

const props = defineProps({
  iconNm: {
    type: String,
    required: true,
  },
  iconNmDark: {
    type: String,
    required: false,
    default: '',
  },
  extension: {
    type: String,
    default: 'svg',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});

const isDark = useDark();

const imgSrc = computed(() => {
  if (isDark.value && props.iconNmDark !== '') {
    return `/src/assets/img/${props.iconNmDark}.${props.extension}`;
  } else {
    return `/src/assets/img/${props.iconNm}.${props.extension}`;
  }
});
</script>
