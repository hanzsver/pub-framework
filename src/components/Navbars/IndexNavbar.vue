<template>
  <header class="header">
    <div class="header__inner">
      <div class="flex items-center">
        <div class="header__logo"></div>
        <router-link to="/">
          <a class="header__title" href="#pablo"> Pub Framework </a>
        </router-link>
      </div>
      <div class="header__menu">
        <index-dropdown />
      </div>
    </div>
  </header>
</template>

<script>
import IndexDropdown from '@/components/Dropdowns/IndexDropdown.vue';

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
