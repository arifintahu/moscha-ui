import { throwError } from '@/utils/errors'
import { request } from '@/utils/request'
import { UIChain, toUIChain } from './chain.utils'

export async function fetchChains(): Promise<UIChain[]> {
  try {
    const response = await request.get('/chains')
    if (!response.data.chains) {
      return []
    }
    return response.data.chains.map(toUIChain)
  } catch (error) {
    throwError(error)
  }
}
