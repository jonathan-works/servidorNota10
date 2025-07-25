<template>
  <div class="bg-secondary q-pa-md">
    <div>
        <h2 class="titulo-com-barra text-h6">Alertas da CGE</h2>
        <p class="text-caption">Veja os alertas relacionados a pessoas, e como não cair no alerta e continuar sendo um sevidor nota 10</p>
    </div>

    <div class="row">
        <div class="col">
            <div class="row q-col-gutter-md">
                <div class="col-6" v-for="(alerta, index) in alertas" :key="index">
                    <CategoriaBotao :alerta="alerta"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  ionCarSportSharp, ionAirplaneSharp, ionLayersSharp, ionWarningSharp, ionAlbumsSharp, ionAlarmSharp, ionWalk } from '@quasar/extras/ionicons-v7'
import CategoriaBotao from 'src/components/CategoriaBotao.vue';

import { AlertaIdEnum } from 'src/model/alertaId.enum';

const alertas = [
    {
        id: AlertaIdEnum.ABANDONO_DE_CARGO,
        nome: 'Abandono de Cargo',
        icon: ionWalk 
    },
    {
        id: AlertaIdEnum.ADICIONAL_NOTURNO,
        nome: 'Adicional noturno durante licenças',
        icon: ionAlarmSharp,
    },
    {
        id: AlertaIdEnum.CONSULMO_DE_COMBUSTIVEL,
        nome: 'Consulmo de combustível',
        icon: ionCarSportSharp,
    },
    {
        id: AlertaIdEnum.FERIAS_ACUMULADAS,
        nome: 'Férias acumuladas',
        icon: ionAirplaneSharp,
    },
    {
        id: AlertaIdEnum.INASSIDUIDADE_HABITUAL,
        nome: 'Inassiduidade Hbitual',
        icon: ionWarningSharp,
    },
    {
        id: AlertaIdEnum.LICENCA_MAIOR_24_MESES,
        nome: 'Licença maior que 24 meses',
        icon: ionLayersSharp,
    },
    {
        id: AlertaIdEnum.LICENCA_PREMIO_ACUMULADA,
        nome: 'Licença-prêmio acumulada',
        icon: ionAlbumsSharp,
    }
]
</script>