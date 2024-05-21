import Default from '@/layouts/Default.vue';

// views for Admin layout
import Buttons from '@/views/example/Buttons.vue';

const exampleRoute = {
  path: '/example',
  redirect: '/example',
  component: Default,
  children: [
    {
      path: '/example/buttons',
      component: Buttons,
    },
  ],
};

export default exampleRoute;
