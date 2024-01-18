export type UIChain = {
  id: string
  name: string
  network: string
  rest: string
  rpc: string
  denom: string
  minimalDenom: string
  decimals: number
  prefix: string
  gasFee: string
}

/* eslint-disable */
export function toUIChain(chain: any): UIChain {
  return {
    id: chain.id,
    name: chain.name,
    network: chain.network,
    rest: chain.rest,
    rpc: chain.rpc,
    denom: chain.denom,
    minimalDenom: chain.minimalDenom,
    decimals: chain.decimals,
    prefix: chain.prefix,
    gasFee: chain.gasFee,
  }
}
