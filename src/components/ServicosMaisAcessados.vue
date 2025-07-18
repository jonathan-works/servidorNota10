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
const servicos = [
    {}, {}, {}, {}, {}, {}, {},
]
</script>