import { fetchChains } from '@/api/chain.actions'
import { useQuery } from '@tanstack/react-query'

export function useChains() {
  return useQuery({
    queryKey: ['chains'],
    queryFn: () => fetchChains(),
  })
}
