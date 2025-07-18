import { useGraphQL } from "src/composable/useGraphQL"
import { AlertasPublicados } from "src/model/AlertasPublicados.model"


export class AlertasPublicadosService {
  async alertasPublicadosUltimaDataReferencia(): Promise<AlertasPublicados[]> {
    const { execute, response, error } = useGraphQL<{ AlertasPublicadosUltimaDataReferencia: AlertasPublicados[] }>()

    const query = `
      query {
        AlertasPublicadosUltimaDataReferencia {
          tipo_alerta
          data_referencia
          data_execucao
          tipo_alerta_novo
        }
      }
    `

    await execute(query)

    if (error.value) {
      console.error('Erro ao buscar dados de AlertasPublicadosUltimaDataReferencia:', error.value)
      return []
    }

    return response.value?.AlertasPublicadosUltimaDataReferencia ?? []
  }
}
