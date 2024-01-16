export type UIChain = {
  id: string
  network: string
  rest: string
  rpc: string
}

/* eslint-disable */
export function toUIChain(chain: any): UIChain {
  return {
    id: chain.id,
    network: chain.network,
    rest: chain.rest,
    rpc: chain.rpc,
  }
}
