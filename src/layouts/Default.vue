<template>
  <div class="layout">
    <sidebar :class="{ 'is-open': isNavOpen }" />
    <admin-navbar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>
<script>
import AdminNavbar from '@/components/Navbars/AdminNavbar.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
export default {
  name: 'default-layout',
  components: {
    AdminNavbar,
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
  margin-left: 0;
  transition: margin 0.5s ease;
}
</style>
