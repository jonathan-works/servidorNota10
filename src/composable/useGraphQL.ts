import { AxiosRequestConfig } from 'axios'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

interface GraphQLResponse<T> {
  data: T | null
  errors?: any
}

export function useGraphQL<T = any>() {
  const loading = ref(false)
  const error = ref<null | string>(null)
  const response = ref<T | null>(null)

  const execute = async (query: string, variables: Record<string, any> = {}, config?: AxiosRequestConfig) => {
    loading.value = true
    error.value = null

    try {
      const res = await api.post<GraphQLResponse<T>>(
        '',
        {
          query,
          variables
        },
        config
      )

      if (res.data.errors) {
        error.value = JSON.stringify(res.data.errors)
        response.value = null
      } else {
        response.value = res.data.data
      }
    } catch (err: any) {
      error.value = err.message || 'Erro ao executar requisição GraphQL.'
      response.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    response,
    execute
  }
}
