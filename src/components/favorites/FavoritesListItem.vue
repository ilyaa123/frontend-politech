<script setup lang="ts">
interface Props {
  name: string;
  description: string;
  imageUrl: string;
}

defineProps<Props>();
</script>
<template>
  <div class="col-12">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-card-section>
          <div class="text-h6">{{ name }}</div>
          <q-separator class="q-my-sm" />
          <div class="text-subtitle2">{{ description }}</div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
