<script setup lang="ts">
import { computed } from 'vue';

import ChannelList from 'components/channels/ChannelList.vue';
import ChannelFilter from 'components/channels/ChannelFilter.vue';

import { useChannelsStore } from 'stores/channel';

const channelStore = useChannelsStore();

const channels = computed(() => channelStore.channels);

const popularityChannels = computed(() => channelStore.popularityChannels);
</script>
<template>
  <div>
    <ChannelList title="Популярное" :items="popularityChannels" />
    <q-separator class="q-my-lg" />
    <ChannelFilter :genres="channelStore.genres" />
    <ChannelList title="" :items="channels" />
  </div>
</template>
