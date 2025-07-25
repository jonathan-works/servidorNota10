<template>
    <div class="q-gutter-md">
        <div class="titulo-com-barra text-h4 text-weight-bold">
            Abandono de Cargo
        </div>
        <div class="text-body1 text-grey-7">
            O Alerta de Abandono de Cargo foi criado pela CGE para alertar os gestores sobre quais servidores podem estar enquadrados nessa situação.
        </div>
    </div>

    <div class="row">
        <template v-if="caiuNoAlerta">
            <div class="col-12 col-md-3">
                <q-card class="bg-red-1 text-red-9" flat bordered>
                    <q-card-section class="row">
                        <div class="col-2 flex flex-center">
                            <q-icon name="warning" color="orange" size="md"/>
                        </div>
                        <div class="col-10">
                            <div class="text-h5 text-weight-bold">Atenção!</div>
                            <div class="text-subtitle2">Você está relacionado à lista do alerta</div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </template>
        <template v-else>
            <div class="col-12 col-md-3">
                <q-card class="bg-green-1 text-green-9" flat bordered>
                    <q-card-section class="text-center">
                    <div class="text-h5 text-weight-bold">Parabéns, está tudo certo!</div>
                    <div class="text-subtitle2">Você não está na lista do alerta</div>
                    </q-card-section>
                </q-card>
            </div>
        </template>
    </div>
    
    <q-table v-if="caiuNoAlerta"
        flat bordered
        title="Ocorrências de Abandono de Cargo"
        :rows="servidores"
        :columns="columns"
        row-key="id"
        :pagination="pagination"
        :loading="loading"
        binary-state-sort
        hide-bottom
    >
      <!-- <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template> -->
      
      <template v-slot:body-cell-acoes="props">
      <q-td :props="props">
          <q-btn
          size="sm"
          color="primary"
          round
          dense
          icon="visibility"
          @click="visualizarServidor(props.row)"
          >
          <q-tooltip>Visualizar detalhes</q-tooltip>
          </q-btn>
          <q-btn
          size="sm"
          color="orange"
          round
          dense
          icon="email"
          class="q-ml-sm"
          @click="contatarGestor(props.row)"
          >
          <q-tooltip>Contatar gestor</q-tooltip>
          </q-btn>
      </q-td>
      </template>
    </q-table>

    <q-card flat bordered v-if="caiuNoAlerta">
      <q-card-section>
        <div class="text-h6 q-mb-md">
          <q-icon name="help" color="primary" class="q-mr-sm" />
          Dúvidas Frequentes
        </div>
        
        <q-list>
          <q-expansion-item
            icon="contact_support"
            label="O que devo fazer?"
            header-class="text-primary"
          >
            <q-card>
              <q-card-section class="text-grey-8">
                Entrar em contato via e-mail com o chefe direto do setor.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            icon="schedule"
            label="Qual o prazo para regularização?"
            header-class="text-primary"
          >
            <q-card>
              <q-card-section class="text-grey-8">
                O servidor tem até 30 dias corridos para apresentar justificativa ou regularizar sua situação funcional após o primeiro alerta.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            icon="assignment"
            label="Quais documentos são necessários?"
            header-class="text-primary"
          >
            <q-card>
              <q-card-section class="text-grey-8">
                Dependendo da situação, podem ser necessários: atestados médicos, comprovantes de licença, documentação de afastamento legal, ou outros documentos que justifiquem a ausência.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            icon="gavel"
            label="Quais são as consequências do abandono de cargo?"
            header-class="text-primary"
          >
            <q-card>
              <q-card-section class="text-grey-8">
                O abandono de cargo pode resultar em demissão por justa causa, conforme previsto no Estatuto dos Servidores Públicos. É importante regularizar a situação o quanto antes.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            icon="info"
            label="Como funciona o sistema de alertas?"
            header-class="text-primary"
          >
            <q-card>
              <q-card-section class="text-grey-8">
                O sistema monitora automaticamente a frequência dos servidores e emite alertas quando detecta padrões que podem caracterizar abandono de cargo, baseado nos critérios estabelecidos pela CGE.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { exportFile } from 'quasar'

const loading = ref(false)

const pagination = ref({
  page: 1,
  rowsPerPage: 10
})

const columns = [
  {
    name: 'dt_inicio',
    required: true,
    label: 'Início',
    align: 'left',
    field: 'dt_inicio',
    sortable: true
  },
  {
    name: 'dt_fim',
    required: true,
    label: 'Fim',
    align: 'left',
    field: 'dt_fim',
    sortable: true
  }
]

const servidores = ref([
  {
    id: 1,
    dt_inicio: '2024/03/31',
    dt_fim: '2024/04/30',
  }
])

const caiuNoAlerta = ref(servidores.value.length > 0);


const visualizarServidor = (servidor) => {
  // Implementar navegação para detalhes do servidor
  console.log('Visualizar servidor:', servidor)
}

const contatarGestor = (servidor) => {
  // Implementar funcionalidade de contato com gestor
  console.log('Contatar gestor do servidor:', servidor)
}

onMounted(() => {
  
})

function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

function exportTable(){
  const content = [columns.map(col => wrapCsvValue(col.label))].concat(
    servidores.value.map(row => columns.map(col => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[ col.field === void 0 ? col.name : col.field ],
      col.format,
      row
    )).join(','))
  ).join('\r\n')

  const status = exportFile(
    'table-export.csv',
    content,
    'text/csv'
  )

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}
</script>