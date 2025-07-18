<template>
  <div class="bg-secondary q-pa-md">
    <div>
        <h2 class="titulo-com-barra text-h6">Alertas da CGE</h2>
        <p class="text-caption">Veja os alertas relacionados a pessoas, e como não cair no alerta e continuar sendo um sevidor nota 10</p>
    </div>

    <div class="row">
        <div class="col">
            <div class="row q-col-gutter-md">
                <div class="col-6" v-for="(servico, index) in servicos" :key="index">
                    <CategoriaBotao :servico="servico" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CategoriaBotao from 'components/CategoriaBotao.vue';

import { 
  ionCarSportSharp,
  ionAirplaneSharp,
  ionLayersSharp,
  ionWarningSharp,
  ionAlbumsSharp,
  ionAlarmSharp

} from '@quasar/extras/ionicons-v7'

const servicos = [
    {
        nome: 'Consulmo de combustível',
        icon: ionCarSportSharp
    },
    {
        nome: 'Adicional noturno durante licenças',
        icon: ionAlarmSharp,
    },
    {
        nome: 'Férias acumuladas',
        icon: ionAirplaneSharp,
    },
    {
        nome: 'Inassiduidade Hbitual',
        icon: ionWarningSharp,
    },
    {
        nome: 'Licença maior que 24 meses',
        icon: ionAlbumsSharp,
    },
    {
        nome: 'Licença-prêmio acumulada',
        icon: ionLayersSharp,
    },
]
</script>