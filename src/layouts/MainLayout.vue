<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> LimeTV </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container style="max-width: 1256px; margin: 0 auto">
      <q-page class="q-py-lg">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
