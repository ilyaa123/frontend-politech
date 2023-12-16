<script setup lang="ts">
import { computed } from 'vue';

import ChannelList from 'components/channels/ChannelList.vue';

import { useChannelsStore } from 'stores/channel';

const channelStore = useChannelsStore();

const popularityChannels = computed(() => channelStore.channels);
</script>
<template>
  <ChannelList title="Популярное" :items="popularityChannels" />
</template>
