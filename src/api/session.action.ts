import { throwError } from '@/utils/errors'
import { request } from '@/utils/request'

export async function postSession(
  address: string,
  chainId: string
): Promise<{ id: string } | null> {
  try {
    const response = await request.post('/sessions', {
      address,
      chainId,
    })
    if (!response.data) {
      return null
    }
    return response.data
  } catch (error) {
    throwError(error)
  }
}
