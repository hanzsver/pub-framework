<template>
  <div>
    <router-view />
    <ThemeToggle />
  </div>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  name: 'App',
  components: {
    ThemeToggle,
  },
};
</script>
