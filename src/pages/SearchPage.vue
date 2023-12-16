<script setup lang="ts">
import { ref, watch } from 'vue';

import { useRoute } from 'vue-router';

import ChannelList from 'components/channels/ChannelList.vue';

import { useChannelsStore } from 'stores/channel';

import { Channel } from 'src/types/channel';

const route = useRoute();

const channelStore = useChannelsStore();

const search = route.params?.name;

const result = ref<Channel[]>([]),
  isLoading = ref(false);

const loadSearch = (searchValue?: string) => {
  result.value = [];
  isLoading.value = true;
  channelStore
    .searchChannels(searchValue)
    .then((res) => {
      result.value = res;
    })
    .finally(() => {
      isLoading.value = false;
    });
};

loadSearch(search as string | undefined);

watch(
  () => route.params,
  () => {
    console.log('test', route.params);
    loadSearch(route.params?.name as string | undefined);
  }
);
</script>
<template>
  <ChannelList title="Каналы" :items="result" />
</template>
