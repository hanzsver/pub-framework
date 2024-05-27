import { createWebHistory, createRouter } from 'vue-router';

// route
import adminRoute from '@/router/modules/router.admin';
import authRoute from '@/router/modules/router.auth';
import exampleRoute from '@/router/modules/router.example';

// views without layouts
import Landing from '@/views/Landing.vue';
import Profile from '@/views/Profile.vue';
import Index from '@/views/Index.vue';

// routes
const routes = [
  // 모듈 추가
  adminRoute,
  authRoute,
  exampleRoute,
  {
    path: '/landing',
    component: Landing,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/',
    component: Index,
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
