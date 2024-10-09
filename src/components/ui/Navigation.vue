<template>
  <nav class="navigation" :class="className">
    <Menu :model="items">
      <template #item="{ item }">
        <RouterLink :key="item.name" :to="item.path">{{
          item.name
        }}</RouterLink>
      </template>
    </Menu>
  </nav>
</template>

<script lang="ts" setup>
interface NavigationLinkProps {
  name: string;
  path: string;
}

interface NavigationProps {
  items: NavigationLinkProps[];
  className?: string;
}

const props = withDefaults(defineProps<NavigationProps>(), {
  items: () => [],
});
</script>

<style lang="scss">
@use '@/assets/styles/mixins.scss' as mixins;

.navigation {
  display: flex;

  &.admin-navigation {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: var(--admin-navigation-width);
    width: 100%;

    .p-menu {
      border: 0;
      border-right: 1px solid rgb(var(--app-color-grey));

      &-list {
        padding: 0;
      }

      &-item {
        a {
          display: block;
          padding: 20px 20px;
          text-decoration: none;
          color: rgb(var(--app-color-dark));

          @include mixins.animate(color background-color);

          @include mixins.hover() {
            &:hover {
              color: rgb(var(--app-color-light));
              background-color: rgb(var(--app-color-dark));
            }
          }
        }
      }
    }
  }
}
</style>
