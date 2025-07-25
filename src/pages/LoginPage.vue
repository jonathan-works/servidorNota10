<template>
  <q-page class="q-px-md q-py-lg  bg-grey-2">
    <div class="q-gutter-y-md">
        <q-card class="q-pa-lg shadow-2 full-width" style="max-width: 400px">
            <div class="q-py-md">
                <div class="text-h6 text-center q-mb-md">Acesso ao Sistema</div>
                <q-form @submit.prevent="onLogin" class="q-gutter-y-sm">
                    <q-input
                    v-model="matricula"
                    label="Matrícula do Servidor"
                    filled
                    dense
                    :rules="[val => !!val || 'Informe sua matrícula']"
                    />
                    <q-btn type="submit" label="Entrar" color="primary" class="full-width" />
                </q-form>
            </div>
        </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  ionPerson
} from '@quasar/extras/ionicons-v7'

const matricula = ref('');
const router = useRouter();

function onLogin() {
  if (matricula.value.trim()) {
    // // Exemplo de navegação para caixa postal com matrícula como parâmetro, se desejar
    // router.push({ name: 'caixa-postal', query: { matricula: matricula.value } });
  } else {
    
    // alert('Informe sua matrícula.');
  }
}
</script>