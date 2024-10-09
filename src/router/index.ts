import { createRouter, createWebHistory } from 'vue-router';

import AdminLayout from '@/layouts/AdminLayout.vue';

import Home from '@/pages/public/Home.vue';

import { AppDashboardRoutes, AppPublicRoutes } from '@/shared/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppPublicRoutes.base,
      name: 'AdminLayout',
      component: Home,
    },
    {
      path: AppDashboardRoutes.base,
      name: 'AdminLayout',
      component: AdminLayout,
      children: [
        {
          path: AppDashboardRoutes.base,
          name: 'home',
          component: () => import('@/pages/admin/Dashboard.vue'),
        },
        {
          path: AppDashboardRoutes.quizless,
          name: 'quizless',
          component: () => import('@/pages/admin/Quizless.vue'),
        },
        {
          path: AppDashboardRoutes.results,
          name: 'results',
          component: () => import('@/pages/admin/Results.vue'),
        },
      ],
    },
  ],
});

export default router;
