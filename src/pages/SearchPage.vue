<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { useRoute } from 'vue-router';

import SearchResult from 'components/channels/Search/SearchResult/index.vue';
import SearchLayout from 'components/channels/Search/SearchLayout.vue';
import ChannelFilter from 'components/channels/ChannelFilter.vue';

import { useChannelsStore } from 'stores/channel';

import { Channel } from 'src/types/channel';
import { Programm } from 'src/types/programm';

const route = useRoute();

const channelStore = useChannelsStore();

const search = route.params?.name;

const result = ref<Channel[]>([]),
  isLoading = ref(false);

const channelItems = ref<Channel[]>([]),
  programmsItems = ref<Programm[]>([]);

const selectedGenries = ref<number[]>([]);

const filteredChannelItems = computed(() => {
  if (selectedGenries.value.length !== 0) {
    return channelItems.value.filter((channel) =>
      selectedGenries.value.every((genry) =>
        channel.programm.genres.find((item) => item.id === genry)
      )
    );
  } else {
    return channelItems.value;
  }
});

const loadSearch = (searchValue?: string) => {
  result.value = [];
  isLoading.value = true;
  channelStore
    .search(searchValue)
    .then((res) => {
      channelItems.value = res.channels;
      programmsItems.value = res.programms;
    })
    .finally(() => {
      isLoading.value = false;
    });
};

loadSearch(search as string | undefined);

const fetchFilterChannels = (genries: number[]) => {
  selectedGenries.value = genries;
};

watch(
  () => route.params,
  () => {
    loadSearch(route.params?.name as string | undefined);
  }
);
</script>
<template>
  <SearchLayout>
    <template #header>
      <ChannelFilter
        :genres="channelStore.genres"
        :selected-genries="selectedGenries"
        @change-filter="fetchFilterChannels"
      />
    </template>
    <SearchResult
      :channel-items="filteredChannelItems"
      :programms-items="programmsItems"
    />
  </SearchLayout>
</template>
