<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      height="200px"
      class="carousel text-white"
      >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-img src="integridade.jpeg" class="rounded-borders"/>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-img src="integridade.jpg" class="rounded-borders"/>
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
<style lang="scss">
.carousel {
  .q-carousel__slide{
    padding-bottom: 40px !important;
  }
  .q-carousel__slide{
    padding-top: 40px;
    padding-bottom: 0;
  }
  .q-carousel__navigation-inner{
    margin-bottom: -5px !important;
    .q-icon{
      font-size: 1em;
    }
  }
  .q-carousel__slide{
    padding-top: 10px !important;
  }
}
</style>