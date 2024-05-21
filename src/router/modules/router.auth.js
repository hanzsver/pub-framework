import Auth from '@/layouts/Auth.vue';

// views for Auth layout
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

const authRoute = {
  path: '/auth',
  redirect: '/auth/login',
  component: Auth,
  children: [
    {
      path: 'login',
      component: Login,
    },
    {
      path: 'register',
      component: Register,
    },
  ],
};

export default authRoute;
