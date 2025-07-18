<template>
  <div class="q-px-md">
    <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          padding
          height="250px"
          class="text-white"
          >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="rounded-borders"/>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="rounded-borders"/>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="rounded-borders"/>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="rounded-borders"/>
          </q-carousel-slide>
      </q-carousel>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const slide = ref('style');
</script>