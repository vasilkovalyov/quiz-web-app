<template>
  <div class="admin-layout">
    <Navigation :items="navList" class-name="admin-navigation" />
    <AdminHeader />
    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { AppDashboardRoutes } from '@/shared/routes';

import AdminHeader from '@/components/admin/Header.vue';
import Navigation from '@/components/ui/Navigation.vue';

const navList = [
  {
    name: 'Dashboard',
    path: AppDashboardRoutes.base,
  },
  {
    name: 'Quizless',
    path: AppDashboardRoutes.quizless,
  },
  {
    name: 'Results',
    path: AppDashboardRoutes.results,
  },
];
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins.scss' as mixins;

.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  @extend %admin-content;
  padding: 20px;
}
</style>
