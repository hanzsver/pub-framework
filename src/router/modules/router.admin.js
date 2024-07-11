import Default from '@/layouts/Default.vue';

// views for Admin layout
import Dashboard from '@/views/admin/Dashboard.vue';
import Settings from '@/views/admin/Settings.vue';
import Tables from '@/views/admin/Tables.vue';
import ChatDashboard from '@/views/admin/ChatDashboard.vue';

const adminRoute = {
  path: '/admin',
  redirect: '/admin/dashboard',
  component: Default,
  children: [
    {
      path: '/admin/dashboard',
      component: Dashboard,
    },
    {
      path: '/admin/settings',
      component: Settings,
    },
    {
      path: '/admin/tables',
      component: Tables,
    },
    {
      path: '/admin/chat-dashboard',
      component: ChatDashboard,
    },
  ],
};

export default adminRoute;
