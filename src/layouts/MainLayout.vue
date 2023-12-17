<script setup lang="ts">
import AppBar from 'components/layout/AppBar.vue';

import Modals from 'components/layout/Modals/index.vue';
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <app-bar />
    </q-header>
    <q-page-container style="max-width: 1256px; margin: 0 auto">
      <q-page class="q-py-lg">
        <router-view />
      </q-page>
    </q-page-container>
    <Modals />
  </q-layout>
</template>
