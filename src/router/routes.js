
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/TodoPage.vue')
      },
      {
        path: '/settings',
        component: () => import('src/pages/SettingsPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
