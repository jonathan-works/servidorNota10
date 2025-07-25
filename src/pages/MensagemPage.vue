<template>
  <q-page class="q-gutter-y-sm full-height">
    <div class="q-pa-md">

      <q-card flat bordered class="q-pa-lg bg-white shadow-1">
        <div class="row items-center q-mb-md">
          <q-icon :name="ionMail" size="2rem" color="primary" class="q-mr-md" />
          <div>
            <div class="text-subtitle1 text-weight-bold">
              Atenção! Você está relacionado em um alerta da CGE
            </div>
            <div class="text-caption text-grey-7">25/07/2025</div>
          </div>
        </div>

        <q-separator />

        <div class="q-mt-md text-body2">
          Prezado(a),
          <br><br>
          Informamos que você foi relacionado em um alerta emitido pela Controladoria-Geral do Estado (CGE).
          Recomendamos que acesse o detalhamento para verificar as informações e tomar as providências cabíveis.
        </div>

        <div class="q-mt-lg">
          <q-btn
            class="full-width"
            label="Ver Detalhamento"
            color="primary"
            icon="open_in_new"
            :to="{ name: 'alerta-detalhado', params: { id: 'c4ca4238a0b923820dcc509a6f75849b' } }"
            unelevated
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ionMail } from '@quasar/extras/ionicons-v7';
</script>
