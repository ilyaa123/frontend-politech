<script setup lang="ts">
import ChannelListItem from 'components/channels/List/ChannelListItem.vue';

import { Channel } from 'src/types/channel';

interface Props {
  title: string;
  items: Channel[];
}

defineProps<Props>();
</script>
<template>
  <section>
    <div class="text-h5 q-pb-md">{{ title }}</div>
    <div>
      <div class="row">
        <div v-for="item in items" class="col-3" :key="item.id">
          <channel-list-item
            :id="item.id"
            :name="item.name"
            :url-image="item.icopath"
            :genres="item.programm.genres"
            :programm-name="item.programm.programm_name"
            :programm-id="item.programm.id"
            :programm-rating="item.programm.rating"
          />
        </div>
      </div>
    </div>
  </section>
</template>
