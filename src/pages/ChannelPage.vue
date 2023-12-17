<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useChannelsStore } from 'stores/channel';

import ProgrammCard from 'components/programm/ProgrammCard/index.vue';

import { Channel } from 'src/types/channel';

const channelStore = useChannelsStore();

const route = useRoute();

const channel = ref<Channel | null>(null);

const routeId = computed(() => route.params.id as string);

channelStore.getChannelItem(Number(routeId.value)).then((res) => {
  channel.value = res;
});
</script>
<template>
  <ProgrammCard :channel="channel" />
</template>
