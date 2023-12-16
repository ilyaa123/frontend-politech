<script setup lang="ts">
import FavoritesListItem from 'components/favorites/FavoritesListItem.vue';

import { Channel } from 'src/types/channel';

interface Props {
  items: Channel[];
}

defineProps<Props>();
</script>
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <FavoritesListItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :description="item.name"
      :image-url="'https://cdn.quasar.dev/img/mountains.jpg'"
    />
  </div>
</template>
