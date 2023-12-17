<script setup lang="ts">
import { Channel } from 'src/types/channel';
import { Programm } from 'src/types/programm';

import ChannelCards from 'components/channels/Search/SearchResult/ChannelCards.vue';

interface Props {
  channelItems: Channel[];
  programmsItems: Programm[];
}

const props = defineProps<Props>();
console.log('🚀 ~ file: index.vue:13 ~ props:', props.programmsItems);
</script>
<template>
  <div
    v-if="channelItems.length === 0 && programmsItems.length === 0"
    class="text-center q-py-lg text-h5"
  >
    Ничего не найдено
  </div>
  <div v-else>
    <div v-if="channelItems.length !== 0">
      <ChannelCards :channels="channelItems" />
    </div>
    <div v-if="programmsItems.length !== 0"></div>
  </div>
</template>
