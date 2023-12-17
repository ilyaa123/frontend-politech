<script setup lang="ts">
import FavoritesListItem from 'components/favorites/FavoritesListItem.vue';

import { Channel } from 'src/types/channel';

interface Props {
  items: Channel[];
}

defineProps<Props>();
</script>
<template>
  <div class="text-left q-py-lg text-h5">Избранное</div>
  <div v-if="items.length > 0" class="q-pa-md row items-start q-gutter-md">
    <FavoritesListItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :programm-id="item.programm.id"
      :name="item.name"
      :image-url="item.icopath"
    />
  </div>
  <div v-else class="text-center q-py-lg text-h5">В избранном ничего нет</div>
</template>
