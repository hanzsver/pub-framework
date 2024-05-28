<template>
  <main class="layout chat">
    <sidebar :class="{ 'is-open': isNavOpen }" />
    <div class="content">
      <router-view />
    </div>
    <button
      id="toggle"
      class="bg-white absolute top-0 z-50 border border-solid border-1 border-indigo-500 p-3"
      @click="toggleClass"
      style="left: 15px"
    >
      <i class="fas fa-bars"></i>
    </button>
  </main>
</template>
<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
export default {
  name: 'chat-layout',
  components: {
    Sidebar,
  },
  data() {
    return {
      isNavOpen: true,
    };
  },
  methods: {
    toggleClass() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  &.is-open {
    transform: translateX(0%);
    visibility: visible;

    & + .content {
      margin-left: 16rem;
    }
  }

  transform: translateX(-100%);
  transition: transform 0.5s ease, visibility 500ms;
  visibility: hidden;
}

.content {
  height: 100%;
  margin-left: 0;
  transition: margin 0.5s ease;
}
</style>
