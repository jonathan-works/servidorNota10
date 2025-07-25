<template>
  <div>
    <div class="q-px-md">
        <h2 class="titulo-com-barra text-h6">Serviços mais Acessados</h2>
        <p class="text-caption">Entenda todas as categorias</p>
    </div>
    <div class="flex no-wrap scroll hide-scrollbar q-px-md">
        <div class="flex no-wrap q-gutter-x-md">
            <ServicoBotao
                v-for="(servico, index) in servicos"
                :key="index"
                :servico="servico"
            />
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ServicoBotao from 'components/ServicoBotao.vue';
import { 
  ionCarSportSharp,
  ionAirplaneSharp,
  ionLayersSharp,
  ionWarningSharp,
  ionAlbumsSharp,
  ionAlarmSharp,
  ionDiamondSharp,
  ionBrowsers,
  ionSearch

} from '@quasar/extras/ionicons-v7'
import { route } from 'quasar/wrappers';
const servicos = [
    {
        nome: 'Integridade',
        icon: ionDiamondSharp,
        route: 'integridade'
    },
    {
        nome: 'Alerta da CGE',
        icon: ionWarningSharp,
        route: 'alertas'
    },
    {
        nome: 'Mira',
        icon: ionSearch,
        link: 'https://miracidadao.cge.mt.gov.br/'
    },
    {
        nome: 'CEIS',
        icon: ionBrowsers,
        link: 'https://ceis.cge.mt.gov.br/'
    },
]
</script>