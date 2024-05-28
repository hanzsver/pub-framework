<template>
  <nav class="sidebar" :class="{ 'is-open': isNavOpen }">
    <!-- class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6" -->
    <div class="sidebar__header">
      <!-- Brand -->
      <router-link class="sidebar__title" to="/"> Pub Framework </router-link>
      <button class="sidebar__btn" @click="toggleSidebar">
        <i class="fas fa-bars"></i>
      </button>
      <!-- User -->
      <!-- <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <notification-dropdown />
      </li>
      <li class="inline-block relative">
        <user-dropdown />
      </li>
    </ul> -->
    </div>
    <!-- Collapse -->
    <div class="sidebar__menu" v-bind:class="collapseShow">
      <!-- Collapse header -->
      <div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <router-link
              class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              to="/"
            >
              Pub Framework
            </router-link>
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              v-on:click="toggleCollapseShow('hidden')"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Form -->
      <form class="mt-6 mb-4 md:hidden">
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>

      <SidebarCollapse header-title="Admin Layout Pages">
        <li>
          <router-link to="/admin/dashboard" v-slot="{ href, navigate }">
            <a :href="href" @click="navigate">
              <i class="fas fa-tv mr-2 text-sm"></i>
              Dashboard
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/settings" v-slot="{ href, navigate }">
            <a :href="href" @click="navigate">
              <i class="fas fa-tools mr-2 text-sm"></i>
              Settings
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/tables" v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate">
              <i class="fas fa-table mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
              Tables
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/chat-dashboard" v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate">
              <i class="fas fa-map-marked mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"></i>
              Chat Dashboard
            </a>
          </router-link>
        </li>
      </SidebarCollapse>

      <SidebarCollapse header-title="Auth Layout Pages">
        <li>
          <router-link to="/auth/login">
            <i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
            Login
          </router-link>
        </li>
        <li>
          <router-link to="/auth/register">
            <i class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>
            Register
          </router-link>
        </li>
      </SidebarCollapse>

      <SidebarCollapse header-title="No Layout Pages">
        <li>
          <router-link to="/landing">
            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
            Landing Page
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i>
            Profile Page
          </router-link>
        </li>
      </SidebarCollapse>

      <SidebarCollapse header-title="Documentation">
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus" target="_blank">
            <i class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
            Styles
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus" target="_blank">
            <i class="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
            CSS Components
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus" target="_blank">
            <i class="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
            Angular
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus" target="_blank">
            <i class="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
            Javascript
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus" target="_blank">
            <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
            NextJS
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus" target="_blank">
            <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
            React
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus" target="_blank">
            <i class="fas fa-link mr-2 text-blueGray-300 text-base"></i>
            Svelte
          </a>
        </li>
        <li>
          <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus" target="_blank">
            <i class="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
            VueJS
          </a>
        </li>
      </SidebarCollapse>

      <SidebarCollapse header-title="Components">
        <li>
          <router-link to="/example/buttons">
            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
            Buttons
          </router-link>
        </li>
      </SidebarCollapse>
    </div>
  </nav>
</template>

<script>
import NotificationDropdown from '@/components/Dropdowns/NotificationDropdown.vue';
import UserDropdown from '@/components/Dropdowns/UserDropdown.vue';
import SidebarCollapse from '@/components/Sidebar/SidebarCollapse.vue';

export default {
  components: {
    NotificationDropdown,
    UserDropdown,
    SidebarCollapse,
  },
  data() {
    return {
      collapseShow: 'hidden',
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
};
</script>
