<script setup lang="ts">
import { Channel } from 'src/types/channel';
import { useRouter } from 'vue-router';
interface Props {
  channels: Channel[];
}

const router = useRouter();

defineProps<Props>();
</script>
<template>
  <div>
    <div class="text-h5">Каналы</div>
    <div class="row">
      <template v-for="channel in channels" :key="channel.id">
        <div class="col-3">
          <q-card
            flat
            class="my-card q-ma-sm cursor-pointer"
            @click="router.push(`/channel/${channel.id}`)"
          >
            <span>
              <q-img :src="channel.icopath" height="200px">
                <div class="text-subtitle2 absolute-bottom text-left">
                  <div class="text-h6">
                    {{ channel.name }}
                  </div>
                </div>
              </q-img>
            </span>
          </q-card>
        </div>
      </template>
    </div>
  </div>
</template>
