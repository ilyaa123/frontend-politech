<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
  id: number;
  name: string;
  imageUrl: string;
}

defineProps<Props>();

const router = useRouter();
</script>
<template>
  <div class="col-3">
    <q-card class="my-card" flat bordered>
      <q-img
        height="200px"
        class="col-5"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div
          class="text-subtitle2 absolute-top text-right"
          style="background-color: inherit"
        >
          <q-btn icon="mdi-close" round color="primary" />
        </div>
        <div
          class="absolute-bottom text-subtitle1 text-left cursor-pointer"
          @click="router.push(`/channel/${id}`)"
        >
          {{ name }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>
