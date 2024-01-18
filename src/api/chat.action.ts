import { throwError } from '@/utils/errors'
import { request } from '@/utils/request'

export type Action = {
  name: string
  url: string
}

export type ActionItem = {
  field: string
  value: string
}

export type ChatResponse = {
  id: string
  message: string
  action: Action | null
  actionItems: ActionItem[]
}

export async function postChat(
  sessionId: string,
  message: string
): Promise<ChatResponse | null> {
  try {
    const response = await request.post(`/chats?sessionId=${sessionId}`, {
      message,
    })
    if (!response.data) {
      return null
    }
    return response.data
  } catch (error) {
    throwError(error)
  }
}
