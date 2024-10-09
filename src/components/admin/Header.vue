<template>
  <header class="admin-header">
    <div class="admin-header__container">
      <div class="admin-header__logo">Admin</div>
      <div class="admin-header__tools">
        <Button type="button" label="User" @click="onTogglePopover" />
        <Popover ref="op" class="admin-popover">
          <Menu :model="menuPopover">
            <template #item="{ item }">
              <Button v-if="item.type === 'exit'" label="Exit" />
              <RouterLink :to="item.path" v-else>{{ item.name }}</RouterLink>
            </template>
          </Menu>
        </Popover>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuPopover = [
  {
    name: 'Profile',
    type: 'link',
    path: '#',
  },
  {
    name: 'Exit',
    type: 'exit',
  },
];

const op = ref();

const onTogglePopover = (event: Event) => {
  op.value.toggle(event);
};
</script>

<style lang="scss">
@use '@/assets/styles/mixins.scss';

.admin-header {
  @extend %admin-content;

  padding-block: 20px;
  border-bottom: 1px solid rgb(var(--app-color-grey));

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
