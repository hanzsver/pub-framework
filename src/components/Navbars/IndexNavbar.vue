<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            Pub Framework
          </a>
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
