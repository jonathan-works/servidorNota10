<template>
  <div class="q-pa-md">
    <div>
        <h2 class="titulo-com-barra text-h6">Recomendados para você</h2>
        <p class="text-caption">O serviço que possui maior relavancia</p>
    </div>
    <q-card flat bordered>
        <q-card-section horizontal>
            <q-card-section class="q-py-none">
                <h3 class="text-h6">Verifique o seu nível de individamento</h3>
                <div class="flex no-wrap justify-between">
                    <div>
                        <p class="text-body2">Reveja o cálculo das duas dívidas e veja como regularizá-las conforme a lei</p>
                    </div>
                    <div class="flex items-center">
                        <q-icon color="primary" :name="ionArrowForwardCircle" size="2rem"/>
                    </div>
                </div>
            </q-card-section>
        </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { ionArrowForwardCircle } from '@quasar/extras/ionicons-v7';
</script>