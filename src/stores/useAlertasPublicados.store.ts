import { defineStore } from 'pinia'
import { AlertasPublicados } from 'src/model/AlertasPublicados.model'
import { AlertasPublicadosService } from 'src/service/alertasPublicados.service'
import { ref } from 'vue'

export const useAlertasPublicadosStore = defineStore('alertasPublicados', () => {
  const alertasPublicados = ref<AlertasPublicados[]>([])
  const carregando = ref(false)

  const service = new AlertasPublicadosService()

  async function carregarUltimaDataReferencia() {
    carregando.value = true
    try {
      alertasPublicados.value = await service.alertasPublicadosUltimaDataReferencia()
    } catch (e) {
      console.error('Erro ao carregar alertas:', e)
      alertasPublicados.value = []
    } finally {
      carregando.value = false
    }
  }

  return {
    alertasPublicados,
    carregando,
    carregarUltimaDataReferencia
  }
})
