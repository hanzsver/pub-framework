import { createWebHistory, createRouter } from 'vue-router';
// modules
import ExampleModule from './modules/router.example';

// layouts
import Default from '~/layouts/Default.vue';
import NoSidebar from '~/layouts/NoSidebar.vue';
// pages
import Index from '~/pages/index.vue';

const routes = [
  // 모듈 추가
  ExampleModule,
  {
    path: '/',
    component: NoSidebar,
    children: [
      {
        path: '',
        component: Index,
      },
      {
        path: ':pathMatch(.*)*',
        redirect: '/',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
