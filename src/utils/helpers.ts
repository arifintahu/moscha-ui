export const trimAddress = (
  address: string,
  start: number = 4,
  end: number = 5
): string => {
  const indexPrefix = address.indexOf('1')
  const first = address.slice(0, indexPrefix + start)
  const last = address.slice(address.length - end, address.length)
  return first + '...' + last
}
