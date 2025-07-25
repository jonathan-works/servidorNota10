<template>
  <q-page class="q-gutter-y-sm full-height full-height">
    <div class="q-pa-md">
        <h2 class="titulo-com-barra text-h6">Caixa Postal</h2>
        <div class="full-height">
            <template v-if="hasMessages">
                <q-list bordered separator>
                    <q-item clickable v-ripple :to="{name: 'mensagem', params: {id: 'c4ca4238a0b923820dcc509a6f75849b'}}">
                        <div class="q-pr-sm flex items-center justify-center">
                            <q-icon v-if="true" :name="ionMail" size="2rem" color="primary"/>
                            <q-icon v-else :name="ionMailOpen" size="2rem" color="grey-8"/>
                        </div>
                        <q-item-section>
                            <q-item-label>Atenção! Você está relacionado em um alerta da CGE</q-item-label>
                            <q-item-label caption>25/07/2025</q-item-label>
                        </q-item-section>
                        <div class="q-pl-sm flex items-center justify-center">
                            <q-icon :name="ionChevronForward" size="2rem" class="text-grey-8"/>
                        </div>
                    </q-item>
                    <q-item clickable v-ripple :to="{name: 'mensagem', params: {id: 'c81e728d9d4c2f636f067f89cc14862c'}}">
                        <div class="q-pr-sm flex items-center justify-center">
                            <q-icon v-if="false" :name="ionMail" size="2rem" color="primary"/>
                            <q-icon v-else :name="ionMailOpen" size="2rem" color="grey-8"/>
                        </div>
                        <q-item-section>
                            <q-item-label>Atenção! Você está relacionado em um alerta da CGE</q-item-label>
                            <q-item-label caption>25/07/2025</q-item-label>
                        </q-item-section>
                        <div class="q-pl-sm flex items-center justify-center">
                            <q-icon :name="ionChevronForward" size="2rem" class="text-grey-8"/>
                        </div>
                    </q-item>   
                </q-list>
            </template>
            <template v-else>
                <div class="text-center q-pa-md fixed-center">
                    <q-icon :name="ionMail" size="2rem" class="text-grey-8"/>
                    <p class="text-caption">Sem notificações</p>
                </div>
            </template>
        </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { 
  ionMail,
  ionMailOpen,
  ionChevronForward
} from '@quasar/extras/ionicons-v7'

const hasMessages = ref(true);
</script>
